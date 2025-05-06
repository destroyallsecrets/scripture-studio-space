
import studyGuides from '@/data/studyGuides';

// Types for our word search game
export interface WordPosition {
  word: string;
  positions: number[];
  found: boolean;
  direction: 'horizontal' | 'vertical' | 'diagonal' | 'reverse-horizontal' | 'reverse-vertical' | 'reverse-diagonal';
}

// Helper function to extract words from study guides
export const extractBibleTerms = () => {
  const words = new Set<string>();
  
  studyGuides.forEach(guide => {
    // Add title words
    guide.title.split(' ').forEach(word => {
      if (word.length >= 4) {
        words.add(word.toUpperCase());
      }
    });
    
    // Use keyPoints instead of keyThemes
    if (guide.keyPoints) {
      guide.keyPoints.forEach(point => {
        // Extract individual words from each key point
        point.split(' ').forEach(word => {
          if (word.length >= 4 && word.length <= 10) {
            words.add(word.toUpperCase());
          }
        });
      });
    }
  });
  
  return Array.from(words).slice(0, 10); // Limit to 10 words
};
