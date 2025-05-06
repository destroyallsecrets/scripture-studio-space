
import { FileText, BookOpen, Video } from 'lucide-react';
import { StudyGuide, MONTHS } from '../types/studyGuide';

const armorOfGod: StudyGuide = {
  id: 8,
  title: "The Armor of God",
  description: "Learn how to stand firm against spiritual opposition using the divine protection described by Paul.",
  preview: "Preview for The Armor of God",
  month: MONTHS.AUGUST_2025,
  mainScripture: {
    text: "Put on the full armor of God, so that you can take your stand against the devil's schemes.",
    reference: "Ephesians 6:11",
    translation: "NIV"
  },
  context: "Paul wrote Ephesians while imprisoned in Rome, likely chained to a Roman soldier whose armor inspired this powerful metaphor. The passage comes at the conclusion of the letter, after Paul has explained believers' position in Christ and their calling to unity and holiness. The armor imagery builds on Old Testament descriptions of God's own armor (Isaiah 59:17) and addresses the reality of spiritual warfare that Christians face as they seek to live out their faith in a hostile world.",
  keyPoints: [
    "Spiritual warfare is real but Christians are equipped for victory",
    "Each piece of armor corresponds to a spiritual truth or practice",
    "The armor is God's own provision, not human effort",
    "Standing firm is the primary goal, not aggressive attack",
    "Prayer is essential to effective spiritual warfare"
  ],
  applicationPoints: [
    "Develop daily habits that help you 'put on' each piece of armor",
    "Identify areas where you're most vulnerable to spiritual attack",
    "Memorize Scripture as your 'sword' against temptation and lies",
    "Practice standing on God's truth when emotions or circumstances fluctuate",
    "Incorporate the armor imagery into your prayer life"
  ],
  discussionQuestions: [
    "Which piece of armor do you most need to strengthen in your life right now?",
    "How does the belt of truth protect us from the enemy's deception?",
    "What does it mean practically to take up the shield of faith?",
    "How does righteousness (the breastplate) protect our hearts?",
    "What specific 'schemes of the devil' do you face in your current season of life?"
  ],
  relatedScriptures: [
    {
      text: "For our struggle is not against flesh and blood, but against the rulers, against the authorities, against the powers of this dark world and against the spiritual forces of evil in the heavenly realms.",
      reference: "Ephesians 6:12",
      translation: "NIV"
    },
    {
      text: "Stand firm then, with the belt of truth buckled around your waist, with the breastplate of righteousness in place, and with your feet fitted with the readiness that comes from the gospel of peace.",
      reference: "Ephesians 6:14-15",
      translation: "NIV"
    }
  ],
  resources: [
    {
      title: "Armor of God Study Guide",
      description: "Detailed exploration of each armor piece with application",
      icon: FileText,
      href: "#download/armor-guide",
      type: "download"
    },
    {
      title: "Spiritual Warfare Prayer Guide",
      description: "Scripture-based prayers for spiritual protection",
      icon: BookOpen,
      href: "#download/warfare-prayers",
      type: "download"
    },
    {
      title: "Roman Armor Historical Context",
      description: "Video explaining the historical armor Paul referenced",
      icon: Video,
      href: "#resources/roman-armor-video",
      type: "link"
    }
  ]
};

export default armorOfGod;
