
import { BookMarked, FileQuestion, Presentation } from 'lucide-react';
import { StudyGuide, MONTHS } from '../types/studyGuide';

const parablesOfJesus: StudyGuide = {
  id: 2,
  title: "The Parables of Jesus",
  description: "Uncover the profound meanings behind Jesus' storytelling and how these ancient parables apply to modern life.",
  preview: "Preview for Parables of Jesus",
  month: MONTHS.FEBRUARY_2025,
  mainScripture: {
    text: "With many similar parables Jesus spoke the word to them, as much as they could understand. He did not say anything to them without using a parable. But when he was alone with his own disciples, he explained everything.",
    reference: "Mark 4:33-34",
    translation: "NIV"
  },
  context: "Parables were a primary teaching method of Jesus, comprising over one-third of His recorded teachings. These simple stories using everyday objects and situations conveyed profound spiritual truths. Jesus often used parables both to reveal truth to those with receptive hearts and to conceal it from those who were hostile to His message. The cultural context of first-century Palestine is essential for understanding these stories as Jesus' original audience would have.",
  keyPoints: [
    "Parables use everyday situations to illustrate spiritual truths",
    "Jesus' parables frequently focus on the kingdom of God",
    "Understanding parables requires spiritual receptivity",
    "Many parables contain surprising twists that challenge cultural assumptions",
    "Parables invite the hearer to make a response or decision"
  ],
  applicationPoints: [
    "Approach Scripture with a humble, receptive heart",
    "Identify which character in Jesus' parables you most resemble",
    "Consider how Jesus' parables challenge modern cultural values",
    "Apply the kingdom principles from parables to your daily decisions",
    "Share the insights from parables in contemporary, relatable ways"
  ],
  discussionQuestions: [
    "Why did Jesus choose to teach so frequently using parables?",
    "Which of Jesus' parables has had the most impact on your understanding of God?",
    "How do the parables of the hidden treasure and pearl help us understand the value of God's kingdom?",
    "What does the parable of the sower teach us about different responses to God's word?",
    "How might you create a modern parable to explain a biblical truth to someone today?"
  ],
  relatedScriptures: [
    {
      text: "The disciples came to him and asked, 'Why do you speak to the people in parables?' He replied, 'Because the knowledge of the secrets of the kingdom of heaven has been given to you, but not to them.'",
      reference: "Matthew 13:10-11",
      translation: "NIV"
    },
    {
      text: "This is why I speak to them in parables: 'Though seeing, they do not see; though hearing, they do not hear or understand.'",
      reference: "Matthew 13:13",
      translation: "NIV"
    }
  ],
  resources: [
    {
      title: "Parables Explained",
      description: "Cultural and historical background for Jesus' major parables",
      icon: BookMarked,
      href: "#download/parables-explained",
      type: "download"
    },
    {
      title: "Kingdom Parables Study",
      description: "Deep dive into parables about God's kingdom",
      icon: FileQuestion,
      href: "#download/kingdom-parables",
      type: "download"
    },
    {
      title: "Modern Parable Illustrations",
      description: "Contemporary retellings of Jesus' parables",
      icon: Presentation,
      href: "#resources/modern-parables",
      type: "link"
    }
  ]
};

export default parablesOfJesus;
