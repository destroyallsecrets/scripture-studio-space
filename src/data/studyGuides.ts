import { FileText, BookOpen, Video } from 'lucide-react';
import { StudyGuideData } from '@/components/StudyGuide';
import axios from 'axios';
import cheerio from 'cheerio';

// Function to fetch Bible data and generate lessons
async function fetchBibleDataAndGenerateLessons(): Promise<StudyGuideData[]> {
  // Fetch Bible data from BibleHub using a scraper
  const response = await axios.get('https://biblehub.com/kjv/genesis/1.htm');
  const $ = cheerio.load(response.data);

  const bibleData = [];
  $('#leftbox .chap').each((i, elem) => {
    const verse = $(elem).find('.verse').text().trim();
    const reference = $(elem).find('.reftext').text().trim();
    const [book, chapterVerse] = reference.split(' ');
    const [chapter, verseNumber] = chapterVerse.split(':');

    bibleData.push({
      id: i + 1,
      book,
      chapter: parseInt(chapter, 10),
      verse: parseInt(verseNumber, 10),
      text: verse
    });
  });

  // Generate lessons based on the context of the book, chapter, and verses
  const generatedLessons = bibleData.map((verse) => {
    return {
      id: verse.id,
      title: `Lesson on ${verse.book} ${verse.chapter}:${verse.verse}`,
      description: `Explore the context and meaning of ${verse.book} ${verse.chapter}:${verse.verse}.`,
      mainScripture: {
        text: verse.text,
        reference: `${verse.book} ${verse.chapter}:${verse.verse}`,
        translation: "KJV"
      },
      context: `Context of ${verse.book} ${verse.chapter}:${verse.verse}.`,
      keyPoints: [
        `Key point 1 for ${verse.book} ${verse.chapter}:${verse.verse}.`,
        `Key point 2 for ${verse.book} ${verse.chapter}:${verse.verse}.`
      ],
      applicationPoints: [
        `Application point 1 for ${verse.book} ${verse.chapter}:${verse.verse}.`,
        `Application point 2 for ${verse.book} ${verse.chapter}:${verse.verse}.`
      ],
      discussionQuestions: [
        `Discussion question 1 for ${verse.book} ${verse.chapter}:${verse.verse}.`,
        `Discussion question 2 for ${verse.book} ${verse.chapter}:${verse.verse}.`
      ],
      relatedScriptures: [
        {
          text: `Related scripture text for ${verse.book} ${verse.chapter}:${verse.verse}.`,
          reference: `Related scripture reference for ${verse.book} ${verse.chapter}:${verse.verse}.`,
          translation: "KJV"
        }
      ],
      resources: [
        {
          title: `Resource title for ${verse.book} ${verse.chapter}:${verse.verse}.`,
          description: `Resource description for ${verse.book} ${verse.chapter}:${verse.verse}.`,
          icon: FileText,
          href: `#download/resource-${verse.id}`,
          type: "download"
        }
      ]
    };
  });

  return generatedLessons;
}

// Study guide data - restructured based on the Standard Lesson Commentaries
let studyGuides: StudyGuideData[] = [];

(async () => {
  studyGuides = await fetchBibleDataAndGenerateLessons();
})();

export default studyGuides;
