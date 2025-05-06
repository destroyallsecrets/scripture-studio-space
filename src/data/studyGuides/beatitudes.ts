
import { FileText, BookOpen, Video } from 'lucide-react';
import { StudyGuide, MONTHS } from '../types/studyGuide';

const beatitudes: StudyGuide = {
  id: 6,
  title: "The Beatitudes",
  description: "Understand Jesus' radical vision of blessing and happiness that challenges worldly values and priorities.",
  preview: "Preview for The Beatitudes",
  month: MONTHS.JUNE_2025,
  mainScripture: {
    text: "Blessed are the poor in spirit, for theirs is the kingdom of heaven. Blessed are those who mourn, for they will be comforted.",
    reference: "Matthew 5:3-4",
    translation: "NIV"
  },
  context: "The Beatitudes open the Sermon on the Mount and establish the upside-down values of God's kingdom. In a world that valued power, wealth, and status, Jesus pronounced blessing on the humble, the grieving, the meek, and the persecuted. The Greek word 'makarios' (blessed) refers to a deep, abiding happiness that transcends circumstances. These statements would have shocked Jesus' original audience by redefining what it means to be truly blessed by God.",
  keyPoints: [
    "The Beatitudes describe character traits rather than temporary emotions",
    "Each beatitude includes both a present reality and a future promise",
    "Jesus redefines blessing in terms of spiritual rather than material prosperity",
    "The Beatitudes present a progressive spiritual journey of discipleship",
    "These blessings reveal the character that God values and rewards"
  ],
  applicationPoints: [
    "Evaluate your definition of 'blessing' against Jesus' teaching",
    "Identify which beatitude represents your greatest spiritual need",
    "Practice cultivating the character qualities Jesus calls 'blessed'",
    "Find hope in Jesus' promises to those experiencing hardship",
    "Look for ways the Beatitudes challenge cultural values you've absorbed"
  ],
  discussionQuestions: [
    "How do the Beatitudes contrast with our culture's definition of happiness?",
    "What does it mean to be 'poor in spirit,' and why is this the gateway to the kingdom?",
    "How can mourning be connected to blessing in the Christian life?",
    "Which Beatitude do you find most difficult to accept or understand?",
    "How might your life look different if you fully embraced the Beatitudes?"
  ],
  relatedScriptures: [
    {
      text: "Blessed are the meek, for they will inherit the earth. Blessed are those who hunger and thirst for righteousness, for they will be filled.",
      reference: "Matthew 5:5-6",
      translation: "NIV"
    },
    {
      text: "Blessed are the merciful, for they will be shown mercy. Blessed are the pure in heart, for they will see God.",
      reference: "Matthew 5:7-8",
      translation: "NIV"
    }
  ],
  resources: [
    {
      title: "Beatitudes Study Guide",
      description: "Verse-by-verse exploration with application questions",
      icon: FileText,
      href: "#download/beatitudes-guide",
      type: "download"
    },
    {
      title: "Kingdom Values Journal",
      description: "8-week reflection journal on the Beatitudes",
      icon: BookOpen,
      href: "#download/kingdom-journal",
      type: "download"
    },
    {
      title: "Countercultural Blessings",
      description: "Video teaching on the revolutionary nature of the Beatitudes",
      icon: Video,
      href: "#resources/countercultural-video",
      type: "link"
    }
  ]
};

export default beatitudes;
