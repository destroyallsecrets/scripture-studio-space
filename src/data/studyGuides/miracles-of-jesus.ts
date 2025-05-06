
import { FileText, BookOpen, Video } from 'lucide-react';
import { StudyGuide, MONTHS } from '../types/studyGuide';

const miraclesOfJesus: StudyGuide = {
  id: 4,
  title: "The Miracles of Jesus",
  description: "Examine the supernatural works of Jesus and what they reveal about His identity and mission.",
  preview: "Preview for Miracles of Jesus",
  month: MONTHS.APRIL_2025,
  mainScripture: {
    text: "Jesus went throughout Galilee, teaching in their synagogues, proclaiming the good news of the kingdom, and healing every disease and sickness among the people.",
    reference: "Matthew 4:23",
    translation: "NIV"
  },
  context: "The Gospels record approximately 37 specific miracles performed by Jesus, though John indicates there were many more. These miracles weren't random displays of power but served specific purposes in Jesus' ministry. They authenticated His message, demonstrated His authority over creation, illness, and spiritual forces, revealed His compassion, and provided glimpses of the coming kingdom where all things will be restored.",
  keyPoints: [
    "Jesus' miracles demonstrated His divine identity and authority",
    "Miracles served as signs pointing to spiritual realities",
    "Jesus often connected faith with healing and deliverance",
    "Miracles revealed Jesus' compassion for human suffering",
    "Jesus' resurrection is the ultimate miracle validating His claims"
  ],
  applicationPoints: [
    "Trust in Jesus' authority over every area of your life",
    "Approach Jesus with both faith and submission to His will",
    "Look for God's miraculous work in unexpected places",
    "Balance seeking miracles with seeking the Miracle-worker Himself",
    "Let Jesus' compassion shape your response to others' suffering"
  ],
  discussionQuestions: [
    "Why did Jesus sometimes tell people not to tell others about their healing?",
    "How do Jesus' nature miracles (calming storms, multiplying food) reveal His identity?",
    "What role should the expectation of miracles play in our faith today?",
    "How did Jesus' miracles fulfill Old Testament prophecies about the Messiah?",
    "What miracle of Jesus speaks most powerfully to you and why?"
  ],
  relatedScriptures: [
    {
      text: "Jesus did many other miraculous signs in the presence of his disciples, which are not recorded in this book. But these are written that you may believe that Jesus is the Messiah, the Son of God, and that by believing you may have life in his name.",
      reference: "John 20:30-31",
      translation: "NIV"
    },
    {
      text: "Then Jesus said to him, 'Get up! Pick up your mat and walk.' At once the man was cured; he picked up his mat and walked.",
      reference: "John 5:8-9",
      translation: "NIV"
    }
  ],
  resources: [
    {
      title: "Miracles of Jesus Map",
      description: "Interactive map showing locations of Jesus' miracles",
      icon: FileText,
      href: "#download/miracles-map",
      type: "download"
    },
    {
      title: "Healing Miracles Study",
      description: "In-depth look at Jesus' healing ministry",
      icon: BookOpen,
      href: "#download/healing-miracles",
      type: "download"
    },
    {
      title: "The Purpose of Miracles",
      description: "Video teaching on why Jesus performed miracles",
      icon: Video,
      href: "#resources/miracles-purpose-video",
      type: "link"
    }
  ]
};

export default miraclesOfJesus;
