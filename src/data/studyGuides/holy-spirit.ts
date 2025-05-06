
import { FileText, FileQuestion, Video } from 'lucide-react';
import { StudyGuide, MONTHS } from '../types/studyGuide';

const holySpirit: StudyGuide = {
  id: 7,
  title: "The Holy Spirit",
  description: "Explore the person and work of the Holy Spirit and His essential role in the Christian life.",
  preview: "Preview for The Holy Spirit",
  month: MONTHS.JULY_2025,
  mainScripture: {
    text: "But the Advocate, the Holy Spirit, whom the Father will send in my name, will teach you all things and will remind you of everything I have said to you.",
    reference: "John 14:26",
    translation: "NIV"
  },
  context: "Jesus' teaching about the Holy Spirit in John 14-16 came during His final discourse to the disciples before His crucifixion. He was preparing them for His physical absence by promising the coming of the Spirit as 'another Advocate' (parakletos) who would continue His work in and through them. This teaching expanded on Old Testament promises about the Spirit's role in the new covenant and set the stage for the dramatic outpouring at Pentecost that would empower the early church.",
  keyPoints: [
    "The Holy Spirit is a divine person, not an impersonal force",
    "Jesus promised the Spirit as the believers' permanent helper and advocate",
    "The Spirit convicts the world, guides believers into truth, and glorifies Christ",
    "The fruit of the Spirit develops Christlike character in believers",
    "The Spirit empowers Christians for effective witness and ministry"
  ],
  applicationPoints: [
    "Cultivate awareness of the Spirit's presence in your daily life",
    "Seek the Spirit's guidance through prayer and Scripture",
    "Identify and develop your spiritual gifts for serving others",
    "Cooperate with the Spirit's work in developing spiritual fruit",
    "Depend on the Spirit's power rather than your own abilities"
  ],
  discussionQuestions: [
    "How would you explain the personhood of the Holy Spirit to someone who views Him as just a force?",
    "What does it mean to be 'filled with the Spirit,' and how is this experienced?",
    "How do you discern the Spirit's guidance in decision-making?",
    "What is the relationship between the Spirit's work and our effort in spiritual growth?",
    "How have you experienced the Holy Spirit as 'Advocate' or 'Comforter' in your life?"
  ],
  relatedScriptures: [
    {
      text: "And I will ask the Father, and he will give you another advocate to help you and be with you forever— the Spirit of truth.",
      reference: "John 14:16-17a",
      translation: "NIV"
    },
    {
      text: "But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness and self-control.",
      reference: "Galatians 5:22-23a",
      translation: "NIV"
    }
  ],
  resources: [
    {
      title: "Holy Spirit Study Guide",
      description: "Comprehensive biblical teaching on the Spirit's work",
      icon: FileText,
      href: "#download/spirit-guide",
      type: "download"
    },
    {
      title: "Spiritual Gifts Assessment",
      description: "Tool for identifying and developing your spiritual gifts",
      icon: FileQuestion,
      href: "#download/gifts-assessment",
      type: "download"
    },
    {
      title: "Walking in the Spirit",
      description: "Audio teaching series on life in the Spirit",
      icon: Video,
      href: "#resources/spirit-walking-audio",
      type: "link"
    }
  ]
};

export default holySpirit;
