
import { FileText, BookOpen, Lightbulb } from 'lucide-react';
import { StudyGuide, MONTHS } from '../types/studyGuide';

const lordsPrayer: StudyGuide = {
  id: 3,
  title: "The Lord's Prayer",
  description: "Learn the pattern Jesus gave for prayer and how it can transform your communication with God.",
  preview: "Preview for The Lord's Prayer",
  month: MONTHS.MARCH_2025,
  mainScripture: {
    text: "This, then, is how you should pray: 'Our Father in heaven, hallowed be your name, your kingdom come, your will be done, on earth as it is in heaven. Give us today our daily bread. And forgive us our debts, as we also have forgiven our debtors. And lead us not into temptation, but deliver us from the evil one.'",
    reference: "Matthew 6:9-13",
    translation: "NIV"
  },
  context: "The Lord's Prayer appears in the middle of the Sermon on the Mount in Matthew's Gospel, where Jesus is teaching about true righteousness that pleases God rather than impressing others. Jesus provides this prayer as a model after criticizing the hypocritical, showy prayers of religious leaders and the meaningless repetition of the Gentiles. This prayer was revolutionary in addressing God intimately as Father while maintaining profound reverence.",
  keyPoints: [
    "Prayer begins with relationship - God as our Father",
    "God's name, kingdom, and will take priority over personal requests",
    "The prayer covers physical needs, forgiveness, and spiritual protection",
    "Jesus teaches a communal prayer with 'our' and 'us' rather than 'my' and 'me'",
    "The prayer balances God's transcendence ('in heaven') with His immanence (as 'Father')"
  ],
  applicationPoints: [
    "Use the Lord's Prayer as a daily framework for your own prayers",
    "Balance worship and petition in your prayer life",
    "Pray for God's kingdom to come in specific situations",
    "Practice forgiveness as a condition for seeking forgiveness",
    "Recognize your dependence on God for daily provision"
  ],
  discussionQuestions: [
    "How does addressing God as 'Father' change your approach to prayer?",
    "What does it mean to pray for God's kingdom to come and His will to be done in your specific context?",
    "How does the petition for 'daily bread' relate to Jesus' teaching about worry later in the sermon?",
    "Why is forgiveness such a central element of this prayer?",
    "How can the Lord's Prayer become meaningful rather than repetitive in your life?"
  ],
  relatedScriptures: [
    {
      text: "And when you pray, do not keep on babbling like pagans, for they think they will be heard because of their many words. Do not be like them, for your Father knows what you need before you ask him.",
      reference: "Matthew 6:7-8",
      translation: "NIV"
    },
    {
      text: "For if you forgive other people when they sin against you, your heavenly Father will also forgive you. But if you do not forgive others their sins, your Father will not forgive your sins.",
      reference: "Matthew 6:14-15",
      translation: "NIV"
    }
  ],
  resources: [
    {
      title: "Lord's Prayer Study Guide",
      description: "Verse-by-verse exploration of the prayer's meaning",
      icon: FileText,
      href: "#download/lords-prayer-guide",
      type: "download"
    },
    {
      title: "Prayer Journal Template",
      description: "Structured journal based on the Lord's Prayer pattern",
      icon: BookOpen,
      href: "#download/prayer-journal",
      type: "download"
    },
    {
      title: "Historical Context of Jewish Prayer",
      description: "Understanding how Jesus' prayer model was revolutionary",
      icon: Lightbulb,
      href: "#resources/jewish-prayer-context",
      type: "link"
    }
  ]
};

export default lordsPrayer;
