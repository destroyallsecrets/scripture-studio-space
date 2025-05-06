
import { FileText, FileQuestion, Video } from 'lucide-react';
import { StudyGuide, MONTHS } from '../types/studyGuide';

const fruitOfTheSpirit: StudyGuide = {
  id: 9,
  title: "The Fruit of the Spirit",
  description: "Discover how the Holy Spirit produces Christlike character in believers and transforms relationships.",
  preview: "Preview for Fruit of the Spirit",
  month: MONTHS.SEPTEMBER_2025,
  mainScripture: {
    text: "But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness and self-control. Against such things there is no law.",
    reference: "Galatians 5:22-23",
    translation: "NIV"
  },
  context: "Paul's letter to the Galatians addresses a community struggling with legalism and license. Some were trying to earn God's favor through rule-keeping, while others were using their freedom as an excuse for self-indulgence. In this context, Paul presents the fruit of the Spirit as the natural outcome of living by the Spirit rather than by either legalistic rules or fleshly desires. This fruit represents the character of Christ being formed in believers through the Spirit's work.",
  keyPoints: [
    "Spiritual fruit is produced by the Spirit, not by human effort alone",
    "The nine qualities listed represent a unified fruit, not separate fruits",
    "Fruit develops gradually through a process of growth, not instantly",
    "The fruit of the Spirit contrasts with both legalism and license",
    "Christlike character is the evidence of genuine spiritual life"
  ],
  applicationPoints: [
    "Identify which aspects of the fruit are most needed in your relationships",
    "Cooperate with the Spirit's work by practicing spiritual disciplines",
    "Ask trusted friends which fruit qualities they see growing in you",
    "Look for ways the fruit of the Spirit can address specific challenges you face",
    "Celebrate growth in character as evidence of the Spirit's work"
  ],
  discussionQuestions: [
    "Why does Paul use the singular 'fruit' rather than 'fruits' of the Spirit?",
    "How does the fruit of the Spirit differ from character traits developed through willpower?",
    "Which aspect of the fruit do you find most challenging to develop, and why?",
    "How might your relationships change if you were more consistently characterized by this fruit?",
    "What practices help you stay 'in step with the Spirit' so fruit can grow?"
  ],
  relatedScriptures: [
    {
      text: "Since we live by the Spirit, let us keep in step with the Spirit.",
      reference: "Galatians 5:25",
      translation: "NIV"
    },
    {
      text: "The acts of the flesh are obvious: sexual immorality, impurity and debauchery; idolatry and witchcraft; hatred, discord, jealousy, fits of rage, selfish ambition, dissensions, factions and envy; drunkenness, orgies, and the like.",
      reference: "Galatians 5:19-21a",
      translation: "NIV"
    }
  ],
  resources: [
    {
      title: "Fruit of the Spirit Study",
      description: "Nine-week study exploring each aspect of the fruit",
      icon: FileText,
      href: "#download/fruit-study",
      type: "download"
    },
    {
      title: "Character Assessment Tool",
      description: "Self-evaluation guide for spiritual growth",
      icon: FileQuestion,
      href: "#download/character-assessment",
      type: "download"
    },
    {
      title: "Cultivating Spiritual Fruit",
      description: "Practical video series on developing each quality",
      icon: Video,
      href: "#resources/fruit-videos",
      type: "link"
    }
  ]
};

export default fruitOfTheSpirit;
