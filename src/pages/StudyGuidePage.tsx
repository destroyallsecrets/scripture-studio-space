
import React from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import StudyGuide, { StudyGuideData } from '@/components/StudyGuide';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BookOpen, FileText, Video } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

// Example study guide data - in a real app, this would be fetched from an API
const studyGuides: StudyGuideData[] = [
  {
    id: 1,
    title: "The Call of Abraham",
    description: "Explore how God called Abraham to leave his homeland and follow divine guidance into the unknown.",
    mainScripture: {
      text: "The Lord had said to Abram, \"Go from your country, your people and your father's household to the land I will show you. I will make you into a great nation, and I will bless you; I will make your name great, and you will be a blessing.\"",
      reference: "Genesis 12:1-2",
      translation: "NIV"
    },
    context: "Abraham's story takes place in the ancient Near East, around 2000-1800 BCE. Born as Abram in Ur of the Chaldeans (modern-day Iraq), he was called by God to leave his homeland and journey to Canaan. This period was characterized by polytheistic cultures, and Abraham's call to monotheism and faith in one God marked a pivotal turning point in religious history. God's covenant with Abraham established the foundation for the nation of Israel and set in motion God's redemptive plan that would ultimately lead to the Messiah.",
    keyPoints: [
      "God initiates relationship with humanity through calling specific individuals.",
      "Abraham's faith was demonstrated through obedience to God's call.",
      "God's promises to Abraham included land, descendants, and blessing to all nations.",
      "The covenant with Abraham was unconditional, based on God's faithfulness rather than Abraham's perfection.",
      "Abraham's journey illustrates the life of faith as a pilgrimage."
    ],
    applicationPoints: [
      "Like Abraham, we are called to step out in faith even when the destination isn't fully clear.",
      "God's calling often requires leaving comfort zones and familiar surroundings.",
      "Our obedience affects not only our lives but potentially generations to come.",
      "Faith grows through testing and trials along the journey.",
      "God's promises are trustworthy, even when fulfillment takes longer than expected."
    ],
    discussionQuestions: [
      "In what ways has God called you to step out in faith in your own life?",
      "What 'comfortable places' might God be asking you to leave behind?",
      "How does Abraham's willingness to follow God's call challenge your own obedience?",
      "What promises of God are you currently waiting to see fulfilled?",
      "How might God be using your life as a blessing to others around you?"
    ],
    relatedScriptures: [
      {
        text: "By faith Abraham, when called to go to a place he would later receive as his inheritance, obeyed and went, even though he did not know where he was going.",
        reference: "Hebrews 11:8",
        translation: "NIV"
      },
      {
        text: "I will bless those who bless you, and whoever curses you I will curse; and all peoples on earth will be blessed through you.",
        reference: "Genesis 12:3",
        translation: "NIV"
      }
    ],
    resources: [
      {
        title: "Abraham Study Guide",
        description: "Comprehensive study companion with notes and reflection questions",
        icon: FileText,
        href: "#download/abraham-guide",
        type: "download"
      },
      {
        title: "Covenant Promises Journal",
        description: "Printable journal pages for recording insights and prayers",
        icon: BookOpen,
        href: "#download/abraham-journal",
        type: "download"
      },
      {
        title: "Abraham's Journey Video",
        description: "Watch supplementary teaching videos exploring Abraham's faith",
        icon: Video,
        href: "#resources/abraham-video",
        type: "link"
      }
    ]
  },
  {
    id: 2,
    title: "The Sermon on the Mount",
    description: "Discover the revolutionary teachings of Jesus that challenged conventional wisdom and redefined spirituality.",
    mainScripture: {
      text: "Blessed are the poor in spirit, for theirs is the kingdom of heaven. Blessed are those who mourn, for they will be comforted. Blessed are the meek, for they will inherit the earth.",
      reference: "Matthew 5:3-5",
      translation: "NIV"
    },
    context: "The Sermon on the Mount is Jesus' most famous discourse, delivered early in His ministry in Galilee around 30 CE. Set against the backdrop of Roman occupation and religious legalism, Jesus presented a radical reinterpretation of the Law that emphasized heart transformation over external compliance. Speaking to a Jewish audience familiar with the Torah and prophetic traditions, Jesus established the ethical and spiritual foundations of His kingdom, contrasting the values of God's kingdom with both secular Roman culture and distorted religious practices of the day.",
    keyPoints: [
      "The Beatitudes present a spiritual profile of kingdom citizens that inverts worldly values.",
      "Jesus came not to abolish the Law but to fulfill it, revealing its deeper spiritual intent.",
      "True righteousness exceeds external compliance and addresses heart attitudes.",
      "Kingdom living involves radical teachings on forgiveness, love for enemies, and non-retaliation.",
      "Jesus challenges anxiety by emphasizing trust in God's provision and seeking His kingdom first."
    ],
    applicationPoints: [
      "Cultivate poverty of spirit by acknowledging complete dependence on God.",
      "Practice righteousness motivated by devotion to God rather than recognition from others.",
      "Examine areas where anger, lust, unforgiveness or pride need to be addressed at the heart level.",
      "Replace worry with prayer and trust in God's provision for daily needs.",
      "Build your life on Jesus' teachings as a foundation that withstands life's storms."
    ],
    discussionQuestions: [
      "Which of the Beatitudes challenges you most, and why?",
      "How do Jesus' teachings on anger, lust, and retaliation reveal the condition of your heart?",
      "In what ways might you be practicing spiritual disciplines for the approval of others?",
      "What worries or anxieties do you need to surrender to God's care?",
      "How does Jesus' teaching on loving enemies challenge your relationships with difficult people?"
    ],
    relatedScriptures: [
      {
        text: "But seek first his kingdom and his righteousness, and all these things will be given to you as well.",
        reference: "Matthew 6:33",
        translation: "NIV"
      },
      {
        text: "Everyone who hears these words of mine and puts them into practice is like a wise man who built his house on the rock.",
        reference: "Matthew 7:24",
        translation: "NIV"
      }
    ],
    resources: [
      {
        title: "Sermon on the Mount Study Guide",
        description: "In-depth exploration of the Beatitudes and Jesus' ethical teachings",
        icon: FileText,
        href: "#download/sermon-guide",
        type: "download"
      },
      {
        title: "Kingdom Values Workbook",
        description: "Practical applications of Jesus' teachings for daily living",
        icon: BookOpen,
        href: "#download/kingdom-workbook",
        type: "download"
      },
      {
        title: "Beatitudes Video Series",
        description: "Video teaching on each of the Beatitudes and their significance",
        icon: Video,
        href: "#resources/beatitudes-videos",
        type: "link"
      }
    ]
  },
  {
    id: 3,
    title: "Paul's Letter to the Romans",
    description: "Understand the foundational doctrines of faith, grace, and salvation as explained by the apostle Paul.",
    mainScripture: {
      text: "Therefore, there is now no condemnation for those who are in Christ Jesus, because through Christ Jesus the law of the Spirit who gives life has set you free from the law of sin and death.",
      reference: "Romans 8:1-2",
      translation: "NIV"
    },
    context: "Paul wrote his letter to the Romans around 57 CE while in Corinth, addressing a church he had not yet visited. The Roman church consisted of both Jewish and Gentile Christians experiencing tensions over Jewish customs. Roman society was dominated by emperor worship, philosophical pluralism, and moral decay. Paul's letter systematically presents the gospel, addressing universal human sinfulness, justification by faith, sanctification, and God's sovereignty in salvation. This theological masterpiece has shaped Christian doctrine for centuries and was instrumental in major renewal movements including the Protestant Reformation.",
    keyPoints: [
      "All humans, both Jews and Gentiles, are sinful and in need of salvation.",
      "Justification comes through faith in Christ's atoning sacrifice, not by works of the law.",
      "The gospel delivers believers from slavery to sin into new life in the Spirit.",
      "Christians experience freedom from condemnation and adoption as God's children.",
      "God works sovereignly in history to accomplish redemption for both Jews and Gentiles."
    ],
    applicationPoints: [
      "Acknowledge your complete inability to earn salvation through moral effort.",
      "Rest in the assurance that justification is a complete work based on Christ's righteousness.",
      "Identify areas where you are still trying to live by legalistic rules rather than Spirit-led freedom.",
      "View suffering as an opportunity for spiritual formation and increased hope.",
      "Examine your attitudes toward other believers who may differ in their convictions about secondary issues."
    ],
    discussionQuestions: [
      "How has Paul's explanation of universal sinfulness shaped your view of yourself and others?",
      "What does it mean for you personally to be justified by faith apart from works?",
      "In what areas do you struggle with feelings of condemnation despite God's assurance?",
      "How does the Holy Spirit help you in times of weakness and uncertainty?",
      "How has an understanding of God's sovereignty changed your perspective on difficult circumstances?"
    ],
    relatedScriptures: [
      {
        text: "For I am not ashamed of the gospel, because it is the power of God that brings salvation to everyone who believes: first to the Jew, then to the Gentile.",
        reference: "Romans 1:16",
        translation: "NIV"
      },
      {
        text: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose.",
        reference: "Romans 8:28",
        translation: "NIV"
      }
    ],
    resources: [
      {
        title: "Romans Study Commentary",
        description: "Verse-by-verse exploration of Paul's theological masterpiece",
        icon: FileText,
        href: "#download/romans-commentary",
        type: "download"
      },
      {
        title: "Justified by Faith Reflections",
        description: "Personal reflection journal on the doctrine of justification",
        icon: BookOpen,
        href: "#download/justification-journal",
        type: "download"
      },
      {
        title: "Life in the Spirit Series",
        description: "Video teachings on Romans 8 and the Spirit-filled life",
        icon: Video,
        href: "#resources/spirit-life-videos",
        type: "link"
      }
    ]
  },
  {
    id: 4,
    title: "The Wisdom of Proverbs",
    description: "Find practical guidance for daily living through the wisdom literature of the Old Testament.",
    mainScripture: {
      text: "Trust in the LORD with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.",
      reference: "Proverbs 3:5-6",
      translation: "NIV"
    },
    context: "The book of Proverbs was compiled primarily during Israel's monarchy (10th-6th centuries BCE), with King Solomon credited as the principal author. This wisdom literature emerged in a cultural context where practical wisdom for successful living was highly valued throughout the ancient Near East. Unlike law or prophetic books, Proverbs presents observations about life and creation that reveal divine order and design. These wisdom teachings were intended for young people learning to navigate life's choices and represent the accumulated wisdom of generations passed down in concise, memorable sayings.",
    keyPoints: [
      "The fear of the Lord is the foundation of true wisdom and knowledge.",
      "Wisdom literature addresses practical aspects of daily living rather than ceremonial religious practices.",
      "Proverbs contrasts the path of wisdom with the path of folly and their respective outcomes.",
      "Wisdom includes skillful living in areas including speech, relationships, work, and finances.",
      "Character formation and integrity are emphasized over mere intelligence or cunning."
    ],
    applicationPoints: [
      "Cultivate reverence for God as the starting point for gaining wisdom.",
      "Seek counsel from godly advisors when making important decisions.",
      "Practice self-control in speech, avoiding hasty words and destructive patterns.",
      "Develop diligence in work while maintaining appropriate priorities and balance.",
      "Manage finances according to biblical principles of generosity, saving, and avoiding debt."
    ],
    discussionQuestions: [
      "What does it mean practically to 'trust in the LORD with all your heart'?",
      "In what areas do you tend to rely more on your own understanding than God's wisdom?",
      "How have you seen the principle of 'you reap what you sow' play out in your life?",
      "Which proverbs about speech challenge you most in your communication habits?",
      "How might applying biblical wisdom change your approach to work and relationships?"
    ],
    relatedScriptures: [
      {
        text: "The fear of the LORD is the beginning of wisdom, and knowledge of the Holy One is understanding.",
        reference: "Proverbs 9:10",
        translation: "NIV"
      },
      {
        text: "Above all else, guard your heart, for everything you do flows from it.",
        reference: "Proverbs 4:23",
        translation: "NIV"
      }
    ],
    resources: [
      {
        title: "Proverbs Topical Guide",
        description: "Organized collection of proverbs by theme and life application",
        icon: FileText,
        href: "#download/proverbs-topical",
        type: "download"
      },
      {
        title: "Wisdom Journal",
        description: "Guided journal for applying proverbial wisdom to daily decisions",
        icon: BookOpen,
        href: "#download/wisdom-journal",
        type: "download"
      },
      {
        title: "Biblical Financial Wisdom",
        description: "Video teaching on applying Proverbs to modern financial challenges",
        icon: Video,
        href: "#resources/financial-wisdom",
        type: "link"
      }
    ]
  }
];

const StudyGuidePage: React.FC = () => {
  const { id } = useParams<{id: string}>();
  const studyId = parseInt(id || "0", 10);
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Find the study guide with the matching ID
  const studyGuide = studyGuides.find(guide => guide.id === studyId);
  
  // If no matching study guide is found, redirect to home
  if (!studyGuide) {
    return <Navigate to="/" replace />;
  }

  // Handle swipe back gesture
  const handleSwipeBack = () => {
    toast({
      title: "Navigation",
      description: "Returning to lessons page",
    });
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-12 px-4 sm:px-6 bg-biblical-cream/10">
        <StudyGuide studyGuide={studyGuide} onSwipeBack={handleSwipeBack} />
      </main>
      <Footer />
    </div>
  );
};

export default StudyGuidePage;
