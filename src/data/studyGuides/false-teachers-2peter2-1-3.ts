
import { Book, Bookmark, Video, FileText } from "lucide-react";
import { StudyGuide, MONTHS } from "../types/studyGuide";

const falseTeachers2Peter2: StudyGuide = {
  id: 11,
  title: "False Teachers (2 Peter 2:1-3)",
  description: "A study on recognizing false teachers and their destructive heresies",
  preview: "Learn to identify false teachings that secretly introduce destructive heresies.",
  month: MONTHS.MAY_2025,
  mainScripture: {
    text: "But there were also false prophets among the people, just as there will be false teachers among you. They will secretly introduce destructive heresies, even denying the sovereign Lord who bought them—bringing swift destruction on themselves. Many will follow their depraved conduct and will bring the way of truth into disrepute. In their greed these teachers will exploit you with fabricated stories. Their condemnation has long been hanging over them, and their destruction has not been sleeping.",
    reference: "2 Peter 2:1-3",
    translation: "NIV"
  },
  context: "In the second chapter of 2 Peter, the apostle warns believers about false teachers who would infiltrate the church. Peter's warning continues themes from his first letter while preparing readers for the dangerous influence of those who would distort the gospel message. This passage specifically addresses the reality, methods, and consequences of false teachers—a concern that remains relevant for believers today.",
  keyPoints: [
    "False teachers will infiltrate the church just as false prophets appeared among God's people in the Old Testament",
    "These teachers secretly introduce destructive heresies that contradict essential Christian doctrines",
    "Some false teachers even deny Christ ("the sovereign Lord who bought them")",
    "Their false teachings lead to their own destruction and harm many followers",
    "Depraved conduct characterizes false teachers, bringing Christianity into disrepute",
    "Greed often motivates false teachers who exploit believers with fabricated stories",
    "Though they may appear successful for a time, their judgment is certain"
  ],
  applicationPoints: [
    "Test all teaching against Scripture rather than accepting claims based on charisma or popularity",
    "Be especially wary of teachings that minimize Christ's lordship or contradict core doctrines",
    "Notice when teachers demonstrate greed or immoral conduct as warning signs",
    "Protect fellow believers by graciously exposing false teachings when identified",
    "Strengthen your biblical knowledge so you can discern truth from error",
    "Remember that popularity or large followings don't validate teaching",
    "Pray for discernment in a time when false teaching is widespread"
  ],
  discussionQuestions: [
    "What are some ways to recognize false teaching in today's context?",
    "Why might believers be vulnerable to false teachers?",
    "How can greed manifest in religious contexts?",
    "What are some examples of "destructive heresies" that Peter might be referring to?",
    "How should churches respond when false teaching is discovered?",
    "In what ways have you seen "the way of truth brought into disrepute" by poor representatives of Christianity?",
    "How can we maintain discernment without becoming overly critical or judgmental?"
  ],
  relatedScriptures: [
    {
      text: "Dear friends, do not believe every spirit, but test the spirits to see whether they are from God, because many false prophets have gone out into the world.",
      reference: "1 John 4:1",
      translation: "NIV"
    },
    {
      text: "Watch out for false prophets. They come to you in sheep's clothing, but inwardly they are ferocious wolves. By their fruit you will recognize them.",
      reference: "Matthew 7:15-16",
      translation: "NIV"
    },
    {
      text: "For the time will come when people will not put up with sound doctrine. Instead, to suit their own desires, they will gather around them a great number of teachers to say what their itching ears want to hear.",
      reference: "2 Timothy 4:3",
      translation: "NIV"
    }
  ],
  resources: [
    {
      title: "Study Guide PDF",
      description: "Printable study guide with notes and reflection questions",
      icon: FileText,
      href: "/resources/false-teachers-2peter2.pdf",
      type: "download"
    },
    {
      title: "Bible Commentary",
      description: "In-depth commentary on 2 Peter 2",
      icon: Book,
      href: "https://www.biblestudytools.com/commentaries/gills-exposition-of-the-bible/2-peter-2/",
      type: "link"
    },
    {
      title: "Sermon Series",
      description: "Audio teachings on discerning false doctrine",
      icon: Video,
      href: "https://www.thegospelcoalition.org/topics/false-teaching/",
      type: "link"
    },
    {
      title: "Scripture Memory Cards",
      description: "Cards to help memorize key verses about discernment",
      icon: Bookmark,
      href: "/resources/discernment-memory-cards.pdf",
      type: "download"
    }
  ]
};

export default falseTeachers2Peter2;
