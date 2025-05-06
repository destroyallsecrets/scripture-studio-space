
import { FileText, BookOpen, Video } from 'lucide-react';
import { StudyGuide, MONTHS } from '../types/studyGuide';

const sermonOnTheMount: StudyGuide = {
  id: 1,
  title: "The Sermon on the Mount",
  description: "Explore Jesus' most famous sermon and its revolutionary teachings on kingdom living.",
  preview: "Preview for Sermon on the Mount",
  month: MONTHS.JANUARY_2025,
  mainScripture: {
    text: "Blessed are the poor in spirit, for theirs is the kingdom of heaven.",
    reference: "Matthew 5:3",
    translation: "NIV"
  },
  context: "The Sermon on the Mount, found in Matthew chapters 5-7, represents Jesus' most comprehensive teaching on discipleship and kingdom ethics. Delivered early in His ministry, this sermon outlines the values, attitudes, and practices that should characterize His followers. Jesus sat on a hillside overlooking the Sea of Galilee, with His disciples gathered closely around Him and crowds listening from a distance.",
  keyPoints: [
    "The Beatitudes describe the character of kingdom citizens",
    "Jesus came to fulfill the Law, not abolish it",
    "Kingdom righteousness exceeds external rule-following",
    "True piety is practiced for God's approval, not human recognition",
    "Wise disciples build their lives on obedience to Jesus' teachings"
  ],
  applicationPoints: [
    "Evaluate your motivations for religious practices",
    "Practice secret giving, praying, and fasting",
    "Replace worry with trust in God's provision",
    "Apply Jesus' teaching on forgiveness to your relationships",
    "Identify areas where cultural values conflict with kingdom values"
  ],
  discussionQuestions: [
    "Which beatitude challenges you the most and why?",
    "How does Jesus' teaching on anger, lust, and truthfulness address heart issues rather than just external behavior?",
    "What does it mean to 'seek first the kingdom of God' in practical terms?",
    "How can we love our enemies in today's polarized society?",
    "In what ways might you be building on sand rather than rock in your spiritual life?"
  ],
  relatedScriptures: [
    {
      text: "Do not think that I have come to abolish the Law or the Prophets; I have not come to abolish them but to fulfill them.",
      reference: "Matthew 5:17",
      translation: "NIV"
    },
    {
      text: "But seek first his kingdom and his righteousness, and all these things will be given to you as well.",
      reference: "Matthew 6:33",
      translation: "NIV"
    }
  ],
  resources: [
    {
      title: "Sermon on the Mount Study Guide",
      description: "Comprehensive guide with historical context and application questions",
      icon: FileText,
      href: "#download/sermon-mount-guide",
      type: "download"
    },
    {
      title: "Kingdom Ethics",
      description: "Video teaching on applying the Sermon on the Mount today",
      icon: Video,
      href: "#resources/kingdom-ethics-video",
      type: "link"
    },
    {
      title: "Beatitudes Journal",
      description: "8-week reflection journal on the Beatitudes",
      icon: BookOpen,
      href: "#download/beatitudes-journal",
      type: "download"
    }
  ]
};

export default sermonOnTheMount;
