
import { FileText, BookOpen, Video } from 'lucide-react';
import { StudyGuide, MONTHS } from '../types/studyGuide';

const lordsSupper: StudyGuide = {
  id: 10,
  title: "The Lord's Supper",
  description: "Understand the significance of communion as a memorial of Christ's sacrifice and a celebration of the new covenant.",
  preview: "Preview for The Lord's Supper",
  month: MONTHS.OCTOBER_2025,
  mainScripture: {
    text: "For whenever you eat this bread and drink this cup, you proclaim the Lord's death until he comes.",
    reference: "1 Corinthians 11:26",
    translation: "NIV"
  },
  context: "The Lord's Supper (also called communion or the Eucharist) was instituted by Jesus during His final Passover meal with His disciples, just before His crucifixion. Paul's instructions in 1 Corinthians address abuses that had developed in the Corinthian church's practice of this sacred meal. The Jewish Passover context is essential for understanding the significance of the elements and how Jesus transformed this ancient celebration into a new covenant memorial that would unite His followers across time and cultures.",
  keyPoints: [
    "The Lord's Supper commemorates Christ's sacrificial death",
    "The bread and cup represent Jesus' body and blood given for us",
    "Communion is both a solemn remembrance and a joyful celebration",
    "The meal anticipates the future marriage supper of the Lamb",
    "Proper participation requires self-examination and discernment"
  ],
  applicationPoints: [
    "Prepare your heart before participating in communion",
    "Remember Christ's sacrifice with sincere gratitude",
    "Consider how communion unites believers across time and culture",
    "Examine your relationships with other believers before partaking",
    "Look forward to the complete fulfillment of communion's meaning in heaven"
  ],
  discussionQuestions: [
    "How does your church practice communion, and what is the significance of these traditions?",
    "What does it mean to eat and drink 'in an unworthy manner' (1 Cor 11:27)?",
    "How can we keep communion from becoming routine or meaningless?",
    "What connection do you see between the Passover and the Lord's Supper?",
    "How does communion strengthen your faith and connection to other believers?"
  ],
  relatedScriptures: [
    {
      text: "While they were eating, Jesus took bread, and when he had given thanks, he broke it and gave it to his disciples, saying, 'Take and eat; this is my body.' Then he took a cup, and when he had given thanks, he gave it to them, saying, 'Drink from it, all of you. This is my blood of the covenant, which is poured out for many for the forgiveness of sins.'",
      reference: "Matthew 26:26-28",
      translation: "NIV"
    },
    {
      text: "So then, whoever eats the bread or drinks the cup of the Lord in an unworthy manner will be guilty of sinning against the body and blood of the Lord. Everyone ought to examine themselves before they eat of the bread and drink from the cup.",
      reference: "1 Corinthians 11:27-28",
      translation: "NIV"
    }
  ],
  resources: [
    {
      title: "Communion Guide",
      description: "Biblical teaching on the meaning and practice of communion",
      icon: FileText,
      href: "#download/communion-guide",
      type: "download"
    },
    {
      title: "From Passover to Lord's Supper",
      description: "Historical context of the Last Supper",
      icon: BookOpen,
      href: "#download/passover-lords-supper",
      type: "download"
    },
    {
      title: "Communion Meditations",
      description: "Video devotionals for personal or group communion",
      icon: Video,
      href: "#resources/communion-meditations",
      type: "link"
    }
  ]
};

export default lordsSupper;
