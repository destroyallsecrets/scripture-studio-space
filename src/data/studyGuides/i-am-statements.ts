
import { FileText, Video } from 'lucide-react';
import { StudyGuide, MONTHS } from '../types/studyGuide';

const iAmStatements: StudyGuide = {
  id: 5,
  title: "The 'I Am' Statements",
  description: "Discover the profound self-revelations of Jesus and their significance for understanding His divine nature.",
  preview: "Preview for I Am Statements",
  month: MONTHS.MAY_2025,
  mainScripture: {
    text: "I am the way and the truth and the life. No one comes to the Father except through me.",
    reference: "John 14:6",
    translation: "NIV"
  },
  context: "Throughout John's Gospel, Jesus makes seven significant 'I am' (ego eimi) statements that reveal different aspects of His identity and mission. These declarations would have been particularly striking to Jewish listeners because 'I AM' was the name God revealed to Moses at the burning bush (Exodus 3:14). By using this phrase, Jesus was making veiled but unmistakable claims to deity, explaining why these statements often provoked strong reactions from His audience.",
  keyPoints: [
    "Jesus' 'I am' statements connect to His divine identity",
    "Each statement reveals a different aspect of Jesus' person and work",
    "The statements use everyday metaphors to explain spiritual realities",
    "These claims are exclusive, presenting Jesus as unique and necessary",
    "The 'I am' declarations invite personal response and relationship"
  ],
  applicationPoints: [
    "Reflect on how each 'I am' statement meets a specific need in your life",
    "Evaluate whether you're allowing Jesus to fulfill these roles in your life",
    "Share with others how Jesus has been your bread, light, shepherd, etc.",
    "Meditate on the exclusivity of Jesus' claims and their implications",
    "Use the 'I am' statements in prayer to worship Jesus for who He is"
  ],
  discussionQuestions: [
    "Which of Jesus' 'I am' statements speaks most powerfully to your current life situation?",
    "How does Jesus being 'the bread of life' relate to our spiritual hunger?",
    "What does it mean practically for Jesus to be 'the way, the truth, and the life'?",
    "How does the image of Jesus as 'the good shepherd' compare to other leadership models?",
    "Why do you think Jesus used these particular metaphors to describe Himself?"
  ],
  relatedScriptures: [
    {
      text: "I am the bread of life. Whoever comes to me will never go hungry, and whoever believes in me will never be thirsty.",
      reference: "John 6:35",
      translation: "NIV"
    },
    {
      text: "I am the light of the world. Whoever follows me will never walk in darkness, but will have the light of life.",
      reference: "John 8:12",
      translation: "NIV"
    }
  ],
  resources: [
    {
      title: "I Am Statements Study Guide",
      description: "Comprehensive exploration of all seven statements",
      icon: FileText,
      href: "#download/i-am-guide",
      type: "download"
    },
    {
      title: "Divine Identity",
      description: "Essay on the connection between 'I AM' in Exodus and John",
      icon: FileText,
      href: "#download/divine-identity",
      type: "download"
    },
    {
      title: "Visual Meditation Series",
      description: "Artistic representations of each 'I am' statement",
      icon: Video,
      href: "#resources/i-am-visuals",
      type: "link"
    }
  ]
};

export default iAmStatements;
