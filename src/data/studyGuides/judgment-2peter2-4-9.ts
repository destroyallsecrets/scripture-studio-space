
import { Book, Bookmark, Video, FileText } from "lucide-react";
import { StudyGuide, MONTHS } from "../types/studyGuide";

const judgment2Peter2: StudyGuide = {
  id: 12,
  title: "Divine Judgment (2 Peter 2:4-9)",
  description: "Examining God's historical judgments and the assurance of future justice",
  preview: "Study how God's past judgments assure us of His future justice against evil.",
  month: MONTHS.MAY_2025,
  mainScripture: {
    text: "For if God did not spare angels when they sinned, but sent them to hell, putting them in chains of darkness to be held for judgment; if he did not spare the ancient world when he brought the flood on its ungodly people, but protected Noah, a preacher of righteousness, and seven others; if he condemned the cities of Sodom and Gomorrah by burning them to ashes, and made them an example of what is going to happen to the ungodly; and if he rescued Lot, a righteous man, who was distressed by the depraved conduct of the lawless (for that righteous man, living among them day after day, was tormented in his righteous soul by the lawless deeds he saw and heard)— if this is so, then the Lord knows how to rescue the godly from trials and to hold the unrighteous for punishment on the day of judgment.",
    reference: "2 Peter 2:4-9",
    translation: "NIV"
  },
  context: "Peter continues his warning about false teachers by providing three historical examples of God's judgment: fallen angels, the flood in Noah's time, and the destruction of Sodom and Gomorrah. These examples reassure believers that God will certainly judge the false teachers while protecting the righteous. Peter uses a rhetorical structure (if...if...if...then) to build his case that divine judgment is certain for evildoers while deliverance awaits the godly.",
  keyPoints: [
    "God did not spare even angels when they sinned, but confined them to await judgment",
    "God judged the ancient world with a flood but preserved Noah and his family",
    "God destroyed Sodom and Gomorrah as an example of judgment against the ungodly",
    "Lot was rescued because he was righteous, though tormented by the evil around him",
    "These historical examples prove God knows how to rescue the godly from trials",
    "The wicked will be held for punishment on the day of judgment",
    "God's judgment is certain, though it may not be immediate"
  ],
  applicationPoints: [
    "Take comfort that God sees the wickedness and injustice in the world and will bring judgment",
    "Remember that God's timing is not our timing—judgment may seem delayed but is certain",
    "Be encouraged that God knows how to rescue the righteous from trials",
    "Like Lot, recognize the appropriate response to wickedness is distress, not acceptance",
    "Consider how the examples of past judgment serve as warnings for today",
    "Remain faithful even when surrounded by ungodliness, as Noah and Lot did",
    "Share the message of righteousness with others, as Noah did as a 'preacher of righteousness'"
  ],
  discussionQuestions: [
    "How does knowing about God's past judgments affect your view of present injustice?",
    "What similarities do you see between our culture and the times of Noah or Lot?",
    "In what ways might believers today be 'tormented in their righteous souls' like Lot?",
    "How can we maintain hope while waiting for God's ultimate judgment?",
    "What does it mean that God knows how to 'rescue the godly from trials'?",
    "How should we respond to those who mock the idea of divine judgment?",
    "What is the appropriate balance between emphasizing God's love and God's judgment?"
  ],
  relatedScriptures: [
    {
      text: "The Lord is not slow in keeping his promise, as some understand slowness. Instead he is patient with you, not wanting anyone to perish, but everyone to come to repentance.",
      reference: "2 Peter 3:9",
      translation: "NIV"
    },
    {
      text: "By the same word the present heavens and earth are reserved for fire, being kept for the day of judgment and destruction of the ungodly.",
      reference: "2 Peter 3:7",
      translation: "NIV"
    },
    {
      text: "It was the same in the days of Lot. People were eating and drinking, buying and selling, planting and building. But the day Lot left Sodom, fire and sulfur rained down from heaven and destroyed them all.",
      reference: "Luke 17:28-29",
      translation: "NIV"
    }
  ],
  resources: [
    {
      title: "Study Guide PDF",
      description: "Printable study guide on divine judgment",
      icon: FileText,
      href: "/resources/divine-judgment-2peter2.pdf",
      type: "download"
    },
    {
      title: "Biblical History Timeline",
      description: "Interactive timeline showing God's judgments throughout Scripture",
      icon: Book,
      href: "https://www.blueletterbible.org/study/parallel/timeline/index.cfm",
      type: "link"
    },
    {
      title: "Video Series",
      description: "Theological exploration of divine justice",
      icon: Video,
      href: "https://bibleproject.com/explore/justice/",
      type: "link"
    },
    {
      title: "Discussion Guide",
      description: "Group discussion questions on God's judgment and mercy",
      icon: Bookmark,
      href: "/resources/judgment-mercy-discussion.pdf",
      type: "download"
    }
  ]
};

export default judgment2Peter2;
