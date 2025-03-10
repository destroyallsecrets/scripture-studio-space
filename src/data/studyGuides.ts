
import { FileText, BookOpen, Video } from 'lucide-react';
import { StudyGuideData } from '@/components/StudyGuide';

// Study guide data - restructured based on the Standard Lesson Commentaries
const studyGuides: StudyGuideData[] = [
  // Winter 2025 - Unit 1: Faith in Jesus
  {
    id: 1,
    title: "Faith and Works",
    description: "Explore the relationship between faith and actions as described by James, emphasizing that true faith manifests itself in works.",
    mainScripture: {
      text: "What good is it, my brothers and sisters, if someone claims to have faith but has no deeds? Can such faith save them? Suppose a brother or a sister is without clothes and daily food. If one of you says to them, 'Go in peace; keep warm and well fed,' but does nothing about their physical needs, what good is it? In the same way, faith by itself, if it is not accompanied by action, is dead.",
      reference: "James 2:14-17",
      translation: "KJV"
    },
    context: "The Epistle of James was written to Jewish Christians scattered abroad, likely between 45-50 AD. During this period, the early church was facing persecution, and some believers were confusing intellectual assent to theological truths with genuine, transformative faith. James, likely the half-brother of Jesus and a leader in the Jerusalem church, wrote to correct this misunderstanding and emphasize that authentic faith inevitably produces good works.",
    keyPoints: [
      "Faith without accompanying works is dead and cannot save.",
      "True faith is demonstrated through actions that help others in need.",
      "Abraham and Rahab are presented as examples of faith demonstrated through works.",
      "Mere intellectual belief is not sufficient for salvation.",
      "The unity of faith and works shows a complete Christian life."
    ],
    applicationPoints: [
      "Examine your faith to ensure it produces tangible actions of love and service.",
      "Look for practical ways to demonstrate your faith through meeting others' needs.",
      "Guard against the danger of religious talk without corresponding religious walk.",
      "Balance theological knowledge with practical application in daily life.",
      "Recognize that works don't earn salvation but demonstrate its reality in your life."
    ],
    discussionQuestions: [
      "How can you distinguish between dead faith and living faith in your own life?",
      "In what specific ways has your faith prompted you to take action recently?",
      "How would you respond to someone who says they believe in Jesus but sees no need to change their behavior?",
      "What is the proper relationship between faith and works in the Christian life?",
      "How might the church better demonstrate the unity of faith and works in today's world?"
    ],
    relatedScriptures: [
      {
        text: "For it is by grace you have been saved, through faith—and this is not from yourselves, it is the gift of God—not by works, so that no one can boast.",
        reference: "Ephesians 2:8-9",
        translation: "KJV"
      },
      {
        text: "In the same way, let your light shine before others, that they may see your good deeds and glorify your Father in heaven.",
        reference: "Matthew 5:16",
        translation: "KJV"
      }
    ],
    resources: [
      {
        title: "Faith & Works Study Guide",
        description: "Comprehensive study notes on James 2 with historical context",
        icon: FileText,
        href: "#download/faith-works-guide",
        type: "download"
      },
      {
        title: "Living Faith Journal",
        description: "Printable journal for recording faith-action connections",
        icon: BookOpen,
        href: "#download/living-faith-journal",
        type: "download"
      },
      {
        title: "James Epistle Overview",
        description: "Video teaching on the key themes in the Book of James",
        icon: Video,
        href: "#resources/james-video",
        type: "link"
      }
    ]
  },
  // Winter 2025 - Unit 1: Faith in Jesus
  {
    id: 2,
    title: "Faith That Withstands Trial",
    description: "Learn how faith enables believers to endure testing and trials, developing perseverance and spiritual maturity.",
    mainScripture: {
      text: "Consider it pure joy, my brothers and sisters, whenever you face trials of many kinds, because you know that the testing of your faith produces perseverance. Let perseverance finish its work so that you may be mature and complete, not lacking anything.",
      reference: "James 1:2-4",
      translation: "KJV"
    },
    context: "Written by James, the leader of the Jerusalem church, this letter addresses Jewish Christians who were experiencing persecution and hardship around 45-50 AD. These early believers were scattered throughout the Roman Empire due to persecution and faced both spiritual and physical challenges. James provides practical wisdom on how to view trials from God's perspective and understand their refining purpose in the life of faith.",
    keyPoints: [
      "Trials should be faced with joy because they test and strengthen faith.",
      "Testing produces perseverance, which leads to spiritual maturity.",
      "Wisdom for enduring trials comes from God and should be requested in faith.",
      "External circumstances reveal what's truly in a person's heart.",
      "God uses trials to refine believers, not to tempt them to sin."
    ],
    applicationPoints: [
      "Reframe your perspective on difficulties as opportunities for spiritual growth.",
      "Pray specifically for wisdom when facing trials rather than just for their removal.",
      "Develop patience by understanding the refining process God is working through challenges.",
      "Identify specific character qualities God might be developing through your current struggles.",
      "Create spiritual disciplines that strengthen your ability to respond well to trials."
    ],
    discussionQuestions: [
      "What makes it difficult to consider trials 'pure joy,' and how can we develop this perspective?",
      "How have trials in your life produced spiritual growth that wouldn't have occurred otherwise?",
      "What's the difference between being tested by God and being tempted?",
      "How does James' teaching on trials differ from prosperity gospel messages?",
      "What spiritual disciplines help prepare believers to face trials with faith?"
    ],
    relatedScriptures: [
      {
        text: "In all this you greatly rejoice, though now for a little while you may have had to suffer grief in all kinds of trials. These have come so that the proven genuineness of your faith...may result in praise, glory and honor when Jesus Christ is revealed.",
        reference: "1 Peter 1:6-7",
        translation: "KJV"
      },
      {
        text: "Not only so, but we also glory in our sufferings, because we know that suffering produces perseverance; perseverance, character; and character, hope.",
        reference: "Romans 5:3-4",
        translation: "KJV"
      }
    ],
    resources: [
      {
        title: "Trials to Triumph Guide",
        description: "Study companion on facing trials with biblical perspective",
        icon: FileText,
        href: "#download/trials-guide",
        type: "download"
      },
      {
        title: "Perseverance Journal",
        description: "Guided reflection on personal trials and spiritual growth",
        icon: BookOpen,
        href: "#download/perseverance-journal",
        type: "download"
      },
      {
        title: "Joy in Trials Video Series",
        description: "Teaching on finding God's purpose in difficult seasons",
        icon: Video,
        href: "#resources/trials-joy-video",
        type: "link"
      }
    ]
  },
  // Winter 2025 - Unit 1: Faith in Jesus
  {
    id: 3,
    title: "Living Faith in Practice",
    description: "Discover how genuine faith transforms daily behavior, particularly in speech, treatment of others, and pursuit of wisdom.",
    mainScripture: {
      text: "Who is wise and understanding among you? Let them show it by their good life, by deeds done in the humility that comes from wisdom. But if you harbor bitter envy and selfish ambition in your hearts, do not boast about it or deny the truth. Such 'wisdom' does not come down from heaven but is earthly, unspiritual, demonic.",
      reference: "James 3:13-15",
      translation: "KJV"
    },
    context: "James addresses practical issues facing the early church around 45-50 AD when Christians were learning to live out their faith in hostile environments. In this section, he specifically tackles the problems of harsh speech, favoritism toward the wealthy, and worldly wisdom that had crept into the community of believers. His instruction emphasizes that genuine faith must affect everyday conduct in tangible ways.",
    keyPoints: [
      "True wisdom from God is demonstrated through good conduct and humility.",
      "Earthly wisdom leads to disorder, while heavenly wisdom produces peace.",
      "The tongue is powerful and must be controlled as evidence of spiritual maturity.",
      "Showing favoritism contradicts faith in Jesus Christ and violates the royal law of love.",
      "Genuine faith influences how we speak, treat others, and make decisions."
    ],
    applicationPoints: [
      "Develop practices of restraint in speech, especially when angry or frustrated.",
      "Evaluate your interactions with people of different social standings for signs of favoritism.",
      "Pursue wisdom characterized by mercy and good fruit rather than selfish ambition.",
      "Create specific goals for demonstrating the peaceable nature of true wisdom.",
      "Identify areas where your actions may contradict your profession of faith."
    ],
    discussionQuestions: [
      "How does the quality of your speech reflect the genuineness of your faith?",
      "In what subtle ways might believers show favoritism in the church today?",
      "What are the practical differences between earthly and heavenly wisdom?",
      "How can Christians cultivate the self-control needed to tame the tongue?",
      "What specific actions demonstrate that you are living by the wisdom from above?"
    ],
    relatedScriptures: [
      {
        text: "Those who consider themselves religious and yet do not keep a tight rein on their tongues deceive themselves, and their religion is worthless.",
        reference: "James 1:26",
        translation: "KJV"
      },
      {
        text: "But the wisdom that comes from heaven is first of all pure; then peace-loving, considerate, submissive, full of mercy and good fruit, impartial and sincere.",
        reference: "James 3:17",
        translation: "KJV"
      }
    ],
    resources: [
      {
        title: "Practical Faith Workbook",
        description: "Exercises for developing consistency between belief and behavior",
        icon: FileText,
        href: "#download/practical-faith-guide",
        type: "download"
      },
      {
        title: "Speech Transformation Journal",
        description: "30-day guide to developing godly communication patterns",
        icon: BookOpen,
        href: "#download/speech-journal",
        type: "download"
      },
      {
        title: "Wisdom from Above Series",
        description: "Video teaching comparing earthly and heavenly wisdom",
        icon: Video,
        href: "#resources/wisdom-video",
        type: "link"
      }
    ]
  },
  // Winter 2025 - Unit 2: Faith During Exile
  {
    id: 4,
    title: "Living as Exiles",
    description: "Explore how believers can maintain their faith identity while living in a culture that is often hostile to biblical values.",
    mainScripture: {
      text: "Dear friends, I urge you, as foreigners and exiles, to abstain from sinful desires, which wage war against your soul. Live such good lives among the pagans that, though they accuse you of doing wrong, they may see your good deeds and glorify God on the day he visits us.",
      reference: "1 Peter 2:11-12",
      translation: "KJV"
    },
    context: "Peter wrote this letter around 62-64 AD during Emperor Nero's reign, a time of increasing persecution against Christians. The recipients were believers scattered throughout Asia Minor (modern Turkey) who were experiencing social ostracism, legal discrimination, and physical threats because of their faith. As marginalized 'exiles' in the Roman Empire, these Christians needed guidance on how to maintain their distinct identity while still engaging constructively with the surrounding culture.",
    keyPoints: [
      "Christians are fundamentally 'exiles' whose true citizenship is in heaven.",
      "Believers must maintain a distinct identity while living honorably among unbelievers.",
      "Godly conduct can silence critics and potentially draw them to faith.",
      "Suffering for doing good is better than suffering for wrongdoing.",
      "Jesus provides the ultimate example of maintaining faithful witness amid suffering."
    ],
    applicationPoints: [
      "Identify specific ways your faith identity marks you as different from secular culture.",
      "Develop practices that help you resist conformity to worldly values and behaviors.",
      "Look for opportunities to demonstrate Christ-like character when facing opposition.",
      "Balance cultural engagement with spiritual distinctiveness in daily decisions.",
      "Prepare mentally and spiritually for potential rejection because of your faith."
    ],
    discussionQuestions: [
      "In what ways do you feel like an 'exile' in today's culture because of your faith?",
      "How can Christians maintain their distinct identity without isolating themselves from society?",
      "What specific good deeds might cause unbelievers to glorify God in today's context?",
      "How should believers respond when maligned or misrepresented for their faith?",
      "What aspects of following Christ most challenge your desire to fit in with mainstream culture?"
    ],
    relatedScriptures: [
      {
        text: "But you are a chosen people, a royal priesthood, a holy nation, God's special possession, that you may declare the praises of him who called you out of darkness into his wonderful light.",
        reference: "1 Peter 2:9",
        translation: "KJV"
      },
      {
        text: "For here we do not have an enduring city, but we are looking for the city that is to come.",
        reference: "Hebrews 13:14",
        translation: "KJV"
      }
    ],
    resources: [
      {
        title: "Christian Exile Guide",
        description: "Strategy for faithful living in a post-Christian culture",
        icon: FileText,
        href: "#download/exile-guide",
        type: "download"
      },
      {
        title: "Counter-Cultural Living",
        description: "Workbook for developing a biblical worldview",
        icon: BookOpen,
        href: "#download/counter-cultural-workbook",
        type: "download"
      },
      {
        title: "Faithful Witness Series",
        description: "Video teaching on maintaining Christian identity",
        icon: Video,
        href: "#resources/faithful-witness-videos",
        type: "link"
      }
    ]
  },
  // Spring 2025 - Unit 1: The Last Week of Jesus' Life
  {
    id: 5,
    title: "The Triumphal Entry",
    description: "Examine Jesus' strategic entry into Jerusalem that publicly declared His Messianic identity and initiated His final week.",
    mainScripture: {
      text: "As they approached Jerusalem and came to Bethphage on the Mount of Olives, Jesus sent two disciples, saying to them, 'Go to the village ahead of you, and at once you will find a donkey tied there, with her colt by her. Untie them and bring them to me.'",
      reference: "Matthew 21:1-2",
      translation: "KJV"
    },
    context: "This event occurs on what we now call Palm Sunday, the beginning of Jesus' final week before His crucifixion (around 30-33 AD). Jerusalem was crowded with pilgrims for Passover, and messianic expectations were high under Roman occupation. Jesus deliberately arranges His entry to fulfill Zechariah's prophecy about the Messiah coming on a donkey, making a public declaration of His identity while also presenting Himself as a humble king of peace rather than a military conqueror that many Jews expected.",
    keyPoints: [
      "Jesus orchestrated His entry to fulfill Zechariah's messianic prophecy.",
      "The crowds proclaimed Jesus as the 'Son of David,' recognizing His messianic claim.",
      "Riding a donkey symbolized peace, contrasting with expectations of a warrior messiah.",
      "The triumphal entry publicly forced the religious leaders to address Jesus' claims.",
      "Jesus' weeping over Jerusalem showed His genuine concern despite their coming rejection."
    ],
    applicationPoints: [
      "Examine whether your expectations of Jesus align with His actual identity and purposes.",
      "Consider how you might respond when God works in unexpected ways.",
      "Reflect on the dangers of superficial enthusiasm without deep commitment.",
      "Look for ways Jesus might be 'entering' areas of your life that need His lordship.",
      "Cultivate genuine worship that acknowledges Jesus as King in all circumstances."
    ],
    discussionQuestions: [
      "How do our expectations of Jesus sometimes differ from His true nature and mission?",
      "What might cause someone to praise Jesus one day and reject Him later?",
      "In what ways might you be like the crowd, embracing Jesus when it's popular but stepping back when it's difficult?",
      "How does Jesus' deliberate fulfillment of prophecy strengthen your faith?",
      "What areas of your life need to acknowledge Jesus as King more fully?"
    ],
    relatedScriptures: [
      {
        text: "Rejoice greatly, Daughter Zion! Shout, Daughter Jerusalem! See, your king comes to you, righteous and victorious, lowly and riding on a donkey, on a colt, the foal of a donkey.",
        reference: "Zechariah 9:9",
        translation: "KJV"
      },
      {
        text: "As he approached Jerusalem and saw the city, he wept over it and said, 'If you, even you, had only known on this day what would bring you peace—but now it is hidden from your eyes.'",
        reference: "Luke 19:41-42",
        translation: "KJV"
      }
    ],
    resources: [
      {
        title: "Holy Week Timeline",
        description: "Detailed chronology of Jesus' final week in Jerusalem",
        icon: FileText,
        href: "#download/holy-week-timeline",
        type: "download"
      },
      {
        title: "Passion Week Devotional",
        description: "Daily readings and reflections for Holy Week",
        icon: BookOpen,
        href: "#download/passion-week-devotional",
        type: "download"
      },
      {
        title: "Palm Sunday Significance",
        description: "Video explaining the prophetic and historical context",
        icon: Video,
        href: "#resources/palm-sunday-video",
        type: "link"
      }
    ]
  },
  // Spring 2025 - Unit 1: The Last Week of Jesus' Life
  {
    id: 6,
    title: "The Last Supper",
    description: "Understand the significance of Jesus' final meal with His disciples and the institution of the Lord's Supper as a lasting memorial.",
    mainScripture: {
      text: "And he took bread, gave thanks and broke it, and gave it to them, saying, 'This is my body given for you; do this in remembrance of me.' In the same way, after the supper he took the cup, saying, 'This cup is the new covenant in my blood, which is poured out for you.'",
      reference: "Luke 22:19-20",
      translation: "KJV"
    },
    context: "The Last Supper took place on the night before Jesus' crucifixion during the Jewish Passover celebration. This annual feast commemorated God's deliverance of Israel from slavery in Egypt. Jesus transformed this traditional meal into a new memorial of the greater deliverance He would accomplish through His death. The meal occurred in an upper room in Jerusalem amid rising tensions as religious leaders sought to arrest Jesus and Judas prepared to betray Him.",
    keyPoints: [
      "Jesus reinterpreted the Passover to point to Himself as the ultimate Passover Lamb.",
      "The broken bread symbolized His body given sacrificially for humanity.",
      "The cup represented the new covenant established through His blood.",
      "Jesus predicted both His betrayal and Peter's denial during this meal.",
      "The foot washing demonstrated servant leadership as the model for His followers."
    ],
    applicationPoints: [
      "Approach communion with deeper appreciation for its historical and theological significance.",
      "Cultivate genuine self-examination when participating in the Lord's Supper.",
      "Practice Jesus' model of servant leadership in your relationships and responsibilities.",
      "Meditate on how the new covenant in Christ's blood applies to your daily life.",
      "Consider areas where you might be resistant to Jesus' unexpected ways of working."
    ],
    discussionQuestions: [
      "How does understanding the Passover context deepen your appreciation of communion?",
      "In what ways might believers trivialize or misunderstand the significance of the Lord's Supper?",
      "How would you explain the concept of covenant and its importance to someone new to faith?",
      "What is the proper balance between remembering Christ's sacrifice and celebrating His victory?",
      "How can the practice of communion strengthen community within the church?"
    ],
    relatedScriptures: [
      {
        text: "For whenever you eat this bread and drink this cup, you proclaim the Lord's death until he comes.",
        reference: "1 Corinthians 11:26",
        translation: "KJV"
      },
      {
        text: "After taking the cup, he gave thanks and said, 'Take this and divide it among you. For I tell you I will not drink again from the fruit of the vine until the kingdom of God comes.'",
        reference: "Luke 22:17-18",
        translation: "KJV"
      }
    ],
    resources: [
      {
        title: "Communion Guide",
        description: "Historical and theological exploration of the Lord's Supper",
        icon: FileText,
        href: "#download/communion-guide",
        type: "download"
      },
      {
        title: "New Covenant Meditation",
        description: "Reflective journal on the meaning of Christ's blood",
        icon: BookOpen,
        href: "#download/covenant-meditation",
        type: "download"
      },
      {
        title: "Upper Room Experience",
        description: "Visual recreation of the Last Supper in historical context",
        icon: Video,
        href: "#resources/upper-room-video",
        type: "link"
      }
    ]
  },
  // Summer 2025 - Unit 1: The Early Church
  {
    id: 7,
    title: "The Birth of the Church",
    description: "Explore how the Holy Spirit empowered the first Christians at Pentecost, launching the church's mission to the world.",
    mainScripture: {
      text: "When the day of Pentecost came, they were all together in one place. Suddenly a sound like the blowing of a violent wind came from heaven and filled the whole house where they were sitting. They saw what seemed to be tongues of fire that separated and came to rest on each of them. All of them were filled with the Holy Spirit and began to speak in other tongues as the Spirit enabled them.",
      reference: "Acts 2:1-4",
      translation: "KJV"
    },
    context: "Pentecost occurred fifty days after Passover, around 30-33 AD in Jerusalem. The disciples had been waiting and praying as Jesus instructed them before His ascension. Jerusalem was filled with Jewish pilgrims from throughout the Roman Empire for this harvest festival. The dramatic coming of the Holy Spirit fulfilled Jesus' promise and Joel's prophecy, empowering the believers for mission and confirming the inauguration of the new covenant era. Peter's subsequent sermon resulted in about 3,000 people being baptized in a single day.",
    keyPoints: [
      "The Holy Spirit's coming fulfilled Jesus' promise and Old Testament prophecy.",
      "Speaking in foreign languages demonstrated the gospel's universal scope.",
      "Peter's sermon connected the events to Joel's prophecy and Jesus' resurrection.",
      "The early church displayed remarkable unity, generosity, and devotional life.",
      "Pentecost represents the empowerment of all believers for ministry, regardless of status."
    ],
    applicationPoints: [
      "Recognize your dependence on the Holy Spirit for effective witness and ministry.",
      "Cultivate the same devotion to prayer, teaching, fellowship, and breaking bread.",
      "Look for ways to demonstrate the countercultural community life of the early church.",
      "Embrace the Holy Spirit's work in empowering you to share the gospel boldly.",
      "Consider how diverse languages and cultures can unite under Christ's lordship."
    ],
    discussionQuestions: [
      "How does the account of Pentecost shape your understanding of the Holy Spirit's role?",
      "In what ways might the modern church recapture the vitality of the early church?",
      "How do you personally experience the empowering presence of the Holy Spirit?",
      "What barriers prevent Christians today from sharing their faith with the boldness of Peter?",
      "How can believers create authentic community that transcends social and economic divisions?"
    ],
    relatedScriptures: [
      {
        text: "They devoted themselves to the apostles' teaching and to fellowship, to the breaking of bread and to prayer. Everyone was filled with awe at the many wonders and signs performed by the apostles.",
        reference: "Acts 2:42-43",
        translation: "KJV"
      },
      {
        text: "But you will receive power when the Holy Spirit comes on you; and you will be my witnesses in Jerusalem, and in all Judea and Samaria, and to the ends of the earth.",
        reference: "Acts 1:8",
        translation: "KJV"
      }
    ],
    resources: [
      {
        title: "Pentecost Study Guide",
        description: "Comprehensive analysis of Acts 2 and its implications",
        icon: FileText,
        href: "#download/pentecost-guide",
        type: "download"
      },
      {
        title: "Holy Spirit Empowerment",
        description: "Prayer journal for seeking spiritual power for witness",
        icon: BookOpen,
        href: "#download/spirit-empowerment",
        type: "download"
      },
      {
        title: "Church Birth Documentary",
        description: "Historical recreation of Pentecost and early church life",
        icon: Video,
        href: "#resources/church-birth-video",
        type: "link"
      }
    ]
  },
  // Summer 2025 - Unit 2: People of the Church
  {
    id: 8,
    title: "Philip and the Ethiopian",
    description: "Learn how God directed Philip to explain Scripture to an Ethiopian official, resulting in the gospel spreading to Africa.",
    mainScripture: {
      text: "Then Philip began with that very passage of Scripture and told him the good news about Jesus. As they traveled along the road, they came to some water and the eunuch said, 'Look, here is water. What can stand in the way of my being baptized?'",
      reference: "Acts 8:35-36",
      translation: "KJV"
    },
    context: "This encounter took place around 34-35 AD during the early expansion of Christianity beyond Jerusalem. Philip, one of the seven deacons appointed in Acts 6, had been preaching in Samaria when directed by an angel to the desert road to Gaza. The Ethiopian official was a eunuch serving as treasurer to Candace, queen of Ethiopia (modern-day Sudan). He was a God-fearer who had journeyed to Jerusalem to worship and was reading Isaiah's prophecy about the suffering servant when Philip encountered him.",
    keyPoints: [
      "God specifically directed Philip to this influential foreigner on a desert road.",
      "The Ethiopian was reading Isaiah 53 but needed guidance to understand it.",
      "Philip connected the Old Testament prophecies to their fulfillment in Jesus.",
      "The Ethiopian's immediate baptism demonstrated his genuine conversion.",
      "This encounter shows God's intention for the gospel to reach all nations and cultures."
    ],
    applicationPoints: [
      "Remain sensitive to divine guidance for gospel opportunities in unexpected places.",
      "Prepare yourself to explain Scripture by studying it thoroughly.",
      "Be willing to cross cultural and social barriers to share the gospel message.",
      "Look for opportunities to use questions that open spiritual conversations.",
      "Trust that God is already at work in the lives of those He brings across your path."
    ],
    discussionQuestions: [
      "How does Philip's sensitivity to the Spirit's guidance challenge your own openness to divine direction?",
      "What obstacles might prevent you from sharing your faith with someone different from yourself?",
      "How can believers today effectively explain Scripture to those unfamiliar with the Bible?",
      "What role does Scripture reading play in preparing hearts for evangelistic encounters?",
      "In what ways might God be calling you to step beyond your comfort zone to share Christ?"
    ],
    relatedScriptures: [
      {
        text: "He was led like a sheep to the slaughter, and as a lamb before its shearer is silent, so he did not open his mouth. In his humiliation he was deprived of justice. Who can speak of his descendants? For his life was taken from the earth.",
        reference: "Acts 8:32-33 (quoting Isaiah 53:7-8)",
        translation: "KJV"
      },
      {
        text: "For there is no difference between Jew and Gentile—the same Lord is Lord of all and richly blesses all who call on him.",
        reference: "Romans 10:12",
        translation: "KJV"
      }
    ],
    resources: [
      {
        title: "Cross-Cultural Witness",
        description: "Guide to sharing faith across cultural boundaries",
        icon: FileText,
        href: "#download/cross-cultural-guide",
        type: "download"
      },
      {
        title: "Biblical Evangelism",
        description: "Methods for explaining Scripture to seekers",
        icon: BookOpen,
        href: "#download/biblical-evangelism",
        type: "download"
      },
      {
        title: "Early Church Missions",
        description: "Documentary on the spread of Christianity to Africa",
        icon: Video,
        href: "#resources/early-missions-video",
        type: "link"
      }
    ]
  }
];

export default studyGuides;
