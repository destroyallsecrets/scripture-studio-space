import { FileText, BookOpen, Video, BookMarked, FileQuestion, Presentation, Lightbulb, BookOpen as BookOpenIcon, FileText as FileTextIcon, Video as VideoIcon } from 'lucide-react';

export interface Scripture {
  text: string;
  reference: string;
  translation: string;
}

export interface Resource {
  title: string;
  description: string;
  icon: any;
  href: string;
  type: "download" | "link";
}

export interface StudyGuide {
  id: number;
  title: string;
  description: string;
  preview: string;
  month: string;
  mainScripture: Scripture;
  context: string;
  keyPoints: string[];
  applicationPoints: string[];
  discussionQuestions: string[];
  relatedScriptures: Scripture[];
  resources: Resource[];
}

export const MONTHS = {
  JANUARY_2025: "january-2025",
  FEBRUARY_2025: "february-2025",
  MARCH_2025: "march-2025",
  APRIL_2025: "april-2025",
  MAY_2025: "may-2025",
  JUNE_2025: "june-2025",
  JULY_2025: "july-2025",
  AUGUST_2025: "august-2025",
  SEPTEMBER_2025: "september-2025",
  OCTOBER_2025: "october-2025",
  NOVEMBER_2025: "november-2025",
  DECEMBER_2025: "december-2025",
};

const studyGuides: StudyGuide[] = [
  {
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
  },
  {
    id: 2,
    title: "The Parables of Jesus",
    description: "Uncover the profound meanings behind Jesus' storytelling and how these ancient parables apply to modern life.",
    preview: "Preview for Parables of Jesus",
    month: MONTHS.FEBRUARY_2025,
    mainScripture: {
      text: "With many similar parables Jesus spoke the word to them, as much as they could understand. He did not say anything to them without using a parable. But when he was alone with his own disciples, he explained everything.",
      reference: "Mark 4:33-34",
      translation: "NIV"
    },
    context: "Parables were a primary teaching method of Jesus, comprising over one-third of His recorded teachings. These simple stories using everyday objects and situations conveyed profound spiritual truths. Jesus often used parables both to reveal truth to those with receptive hearts and to conceal it from those who were hostile to His message. The cultural context of first-century Palestine is essential for understanding these stories as Jesus' original audience would have.",
    keyPoints: [
      "Parables use everyday situations to illustrate spiritual truths",
      "Jesus' parables frequently focus on the kingdom of God",
      "Understanding parables requires spiritual receptivity",
      "Many parables contain surprising twists that challenge cultural assumptions",
      "Parables invite the hearer to make a response or decision"
    ],
    applicationPoints: [
      "Approach Scripture with a humble, receptive heart",
      "Identify which character in Jesus' parables you most resemble",
      "Consider how Jesus' parables challenge modern cultural values",
      "Apply the kingdom principles from parables to your daily decisions",
      "Share the insights from parables in contemporary, relatable ways"
    ],
    discussionQuestions: [
      "Why did Jesus choose to teach so frequently using parables?",
      "Which of Jesus' parables has had the most impact on your understanding of God?",
      "How do the parables of the hidden treasure and pearl help us understand the value of God's kingdom?",
      "What does the parable of the sower teach us about different responses to God's word?",
      "How might you create a modern parable to explain a biblical truth to someone today?"
    ],
    relatedScriptures: [
      {
        text: "The disciples came to him and asked, 'Why do you speak to the people in parables?' He replied, 'Because the knowledge of the secrets of the kingdom of heaven has been given to you, but not to them.'",
        reference: "Matthew 13:10-11",
        translation: "NIV"
      },
      {
        text: "This is why I speak to them in parables: 'Though seeing, they do not see; though hearing, they do not hear or understand.'",
        reference: "Matthew 13:13",
        translation: "NIV"
      }
    ],
    resources: [
      {
        title: "Parables Explained",
        description: "Cultural and historical background for Jesus' major parables",
        icon: BookMarked,
        href: "#download/parables-explained",
        type: "download"
      },
      {
        title: "Kingdom Parables Study",
        description: "Deep dive into parables about God's kingdom",
        icon: FileQuestion,
        href: "#download/kingdom-parables",
        type: "download"
      },
      {
        title: "Modern Parable Illustrations",
        description: "Contemporary retellings of Jesus' parables",
        icon: Presentation,
        href: "#resources/modern-parables",
        type: "link"
      }
    ]
  },
  {
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
  },
  {
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
        icon: BookOpenIcon,
        href: "#download/healing-miracles",
        type: "download"
      },
      {
        title: "The Purpose of Miracles",
        description: "Video teaching on why Jesus performed miracles",
        icon: VideoIcon,
        href: "#resources/miracles-purpose-video",
        type: "link"
      }
    ]
  },
  {
    id: 5,
    title: "The 'I Am' Statements",
    description: "Discover the profound self-revelations of Jesus and their significance for understanding His divine nature.",
    preview: "Preview for I Am Statements",
    month: MONTHS.MAY_2025,
    mainScripture: {
      text: "I am the way and the truth and the life. No one comes to the Father except through me.",
      reference: "John 14:6",
      translation: "NIV"
    },
    context: "Throughout John's Gospel, Jesus makes seven significant 'I am' (ego eimi) statements that reveal different aspects of His identity and mission. These declarations would have been particularly striking to Jewish listeners because 'I AM' was the name God revealed to Moses at the burning bush (Exodus 3:14). By using this phrase, Jesus was making veiled but unmistakable claims to deity, explaining why these statements often provoked strong reactions from His audience.",
    keyPoints: [
      "Jesus' 'I am' statements connect to His divine identity",
      "Each statement reveals a different aspect of Jesus' person and work",
      "The statements use everyday metaphors to explain spiritual realities",
      "These claims are exclusive, presenting Jesus as unique and necessary",
      "The 'I am' declarations invite personal response and relationship"
    ],
    applicationPoints: [
      "Reflect on how each 'I am' statement meets a specific need in your life",
      "Evaluate whether you're allowing Jesus to fulfill these roles in your life",
      "Share with others how Jesus has been your bread, light, shepherd, etc.",
      "Meditate on the exclusivity of Jesus' claims and their implications",
      "Use the 'I am' statements in prayer to worship Jesus for who He is"
    ],
    discussionQuestions: [
      "Which of Jesus' 'I am' statements speaks most powerfully to your current life situation?",
      "How does Jesus being 'the bread of life' relate to our spiritual hunger?",
      "What does it mean practically for Jesus to be 'the way, the truth, and the life'?",
      "How does the image of Jesus as 'the good shepherd' compare to other leadership models?",
      "Why do you think Jesus used these particular metaphors to describe Himself?"
    ],
    relatedScriptures: [
      {
        text: "I am the bread of life. Whoever comes to me will never go hungry, and whoever believes in me will never be thirsty.",
        reference: "John 6:35",
        translation: "NIV"
      },
      {
        text: "I am the light of the world. Whoever follows me will never walk in darkness, but will have the light of life.",
        reference: "John 8:12",
        translation: "NIV"
      }
    ],
    resources: [
      {
        title: "I Am Statements Study Guide",
        description: "Comprehensive exploration of all seven statements",
        icon: FileTextIcon,
        href: "#download/i-am-guide",
        type: "download"
      },
      {
        title: "Divine Identity",
        description: "Essay on the connection between 'I AM' in Exodus and John",
        icon: FileText,
        href: "#download/divine-identity",
        type: "download"
      },
      {
        title: "Visual Meditation Series",
        description: "Artistic representations of each 'I am' statement",
        icon: Video,
        href: "#resources/i-am-visuals",
        type: "link"
      }
    ]
  },
  {
    id: 6,
    title: "The Beatitudes",
    description: "Understand Jesus' radical vision of blessing and happiness that challenges worldly values and priorities.",
    preview: "Preview for The Beatitudes",
    month: MONTHS.JUNE_2025,
    mainScripture: {
      text: "Blessed are the poor in spirit, for theirs is the kingdom of heaven. Blessed are those who mourn, for they will be comforted.",
      reference: "Matthew 5:3-4",
      translation: "NIV"
    },
    context: "The Beatitudes open the Sermon on the Mount and establish the upside-down values of God's kingdom. In a world that valued power, wealth, and status, Jesus pronounced blessing on the humble, the grieving, the meek, and the persecuted. The Greek word 'makarios' (blessed) refers to a deep, abiding happiness that transcends circumstances. These statements would have shocked Jesus' original audience by redefining what it means to be truly blessed by God.",
    keyPoints: [
      "The Beatitudes describe character traits rather than temporary emotions",
      "Each beatitude includes both a present reality and a future promise",
      "Jesus redefines blessing in terms of spiritual rather than material prosperity",
      "The Beatitudes present a progressive spiritual journey of discipleship",
      "These blessings reveal the character that God values and rewards"
    ],
    applicationPoints: [
      "Evaluate your definition of 'blessing' against Jesus' teaching",
      "Identify which beatitude represents your greatest spiritual need",
      "Practice cultivating the character qualities Jesus calls 'blessed'",
      "Find hope in Jesus' promises to those experiencing hardship",
      "Look for ways the Beatitudes challenge cultural values you've absorbed"
    ],
    discussionQuestions: [
      "How do the Beatitudes contrast with our culture's definition of happiness?",
      "What does it mean to be 'poor in spirit,' and why is this the gateway to the kingdom?",
      "How can mourning be connected to blessing in the Christian life?",
      "Which Beatitude do you find most difficult to accept or understand?",
      "How might your life look different if you fully embraced the Beatitudes?"
    ],
    relatedScriptures: [
      {
        text: "Blessed are the meek, for they will inherit the earth. Blessed are those who hunger and thirst for righteousness, for they will be filled.",
        reference: "Matthew 5:5-6",
        translation: "NIV"
      },
      {
        text: "Blessed are the merciful, for they will be shown mercy. Blessed are the pure in heart, for they will see God.",
        reference: "Matthew 5:7-8",
        translation: "NIV"
      }
    ],
    resources: [
      {
        title: "Beatitudes Study Guide",
        description: "Verse-by-verse exploration with application questions",
        icon: FileText,
        href: "#download/beatitudes-guide",
        type: "download"
      },
      {
        title: "Kingdom Values Journal",
        description: "8-week reflection journal on the Beatitudes",
        icon: BookOpen,
        href: "#download/kingdom-journal",
        type: "download"
      },
      {
        title: "Countercultural Blessings",
        description: "Video teaching on the revolutionary nature of the Beatitudes",
        icon: Video,
        href: "#resources/countercultural-video",
        type: "link"
      }
    ]
  },
  {
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
  },
  {
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
  },
  {
    id: 9,
    title: "The Fruit of the Spirit",
    description: "Discover how the Holy Spirit produces Christlike character in believers and transforms relationships.",
    preview: "Preview for Fruit of the Spirit",
    month: MONTHS.SEPTEMBER_2025,
    mainScripture: {
      text: "But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness and self-control. Against such things there is no law.",
      reference: "Galatians 5:22-23",
      translation: "NIV"
    },
    context: "Paul's letter to the Galatians addresses a community struggling with legalism and license. Some were trying to earn God's favor through rule-keeping, while others were using their freedom as an excuse for self-indulgence. In this context, Paul presents the fruit of the Spirit as the natural outcome of living by the Spirit rather than by either legalistic rules or fleshly desires. This fruit represents the character of Christ being formed in believers through the Spirit's work.",
    keyPoints: [
      "Spiritual fruit is produced by the Spirit, not by human effort alone",
      "The nine qualities listed represent a unified fruit, not separate fruits",
      "Fruit develops gradually through a process of growth, not instantly",
      "The fruit of the Spirit contrasts with both legalism and license",
      "Christlike character is the evidence of genuine spiritual life"
    ],
    applicationPoints: [
      "Identify which aspects of the fruit are most needed in your relationships",
      "Cooperate with the Spirit's work by practicing spiritual disciplines",
      "Ask trusted friends which fruit qualities they see growing in you",
      "Look for ways the fruit of the Spirit can address specific challenges you face",
      "Celebrate growth in character as evidence of the Spirit's work"
    ],
    discussionQuestions: [
      "Why does Paul use the singular 'fruit' rather than 'fruits' of the Spirit?",
      "How does the fruit of the Spirit differ from character traits developed through willpower?",
      "Which aspect of the fruit do you find most challenging to develop, and why?",
      "How might your relationships change if you were more consistently characterized by this fruit?",
      "What practices help you stay 'in step with the Spirit' so fruit can grow?"
    ],
    relatedScriptures: [
      {
        text: "Since we live by the Spirit, let us keep in step with the Spirit.",
        reference: "Galatians 5:25",
        translation: "NIV"
      },
      {
        text: "The acts of the flesh are obvious: sexual immorality, impurity and debauchery; idolatry and witchcraft; hatred, discord, jealousy, fits of rage, selfish ambition, dissensions, factions and envy; drunkenness, orgies, and the like.",
        reference: "Galatians 5:19-21a",
        translation: "NIV"
      }
    ],
    resources: [
      {
        title: "Fruit of the Spirit Study",
        description: "Nine-week study exploring each aspect of the fruit",
        icon: FileText,
        href: "#download/fruit-study",
        type: "download"
      },
      {
        title: "Character Assessment Tool",
        description: "Self-evaluation guide for spiritual growth",
        icon: FileQuestion,
        href: "#download/character-assessment",
        type: "download"
      },
      {
        title: "Cultivating Spiritual Fruit",
        description: "Practical video series on developing each quality",
        icon: Video,
        href: "#resources/fruit-videos",
        type: "link"
      }
    ]
  },
  {
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
      "The meal proclaims the gospel message until Christ returns",
      "Proper participation requires self-examination and reverence"
    ],
    applicationPoints: [
      "Prepare your heart through confession before participating in communion",
      "Reflect on the personal significance of Christ's sacrifice for you",
      "Consider how communion unites you with believers across time and space",
      "Use communion as an opportunity to renew your commitment to Christ",
      "Practice reconciliation with others as part of your communion preparation"
    ],
    discussionQuestions: [
      "How does understanding the Passover context enrich your experience of communion?",
      "What does it mean to take communion in an 'unworthy manner,' and how can we avoid this?",
      "How does regular participation in the Lord's Supper strengthen our faith?",
      "What is the significance of communion being a communal rather than individual practice?",
      "How does the Lord's Supper connect us to both the past (Christ's death) and the future (His return)?"
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
        title: "Communion Study Guide",
        description: "Biblical teaching on the meaning and practice of communion",
        icon: FileText,
        href: "#download/communion-guide",
        type: "download"
      },
      {
        title: "Passover to Lord's Supper",
        description: "Historical connection between Passover and communion",
        icon: BookOpen,
        href: "#download/passover-communion",
        type: "download"
      },
      {
        title: "Communion Meditation Guide",
        description: "Reflections for meaningful participation",
        icon: Video,
        href: "#resources/communion-meditations",
        type: "link"
      }
    ]
  },
  {
    id: 11,
    title: "The Resurrection",
    description: "Explore the historical evidence, theological significance, and life-changing implications of Christ's resurrection.",
    preview: "Preview for The Resurrection",
    month: MONTHS.NOVEMBER_2025,
    mainScripture: {
      text: "For what I received I passed on to you as of first importance: that Christ died for our sins according to the Scriptures, that he was buried, that he was raised on the third day according to the Scriptures.",
      reference: "1 Corinthians 15:3-4",
      translation: "NIV"
    },
    context: "The resurrection of Jesus stands as the central claim of Christianity. Paul's comprehensive teaching in 1 Corinthians 15 addresses doubts that had arisen in the Corinthian church about the reality of resurrection. He presents the resurrection as both a historical event with multiple eyewitnesses and the foundation for Christian hope. Without the resurrection, Paul argues, Christian faith would be futile and focused only on this life. Instead, Christ's resurrection guarantees the future resurrection of believers and the ultimate defeat of death itself.",
    keyPoints: [
      "The resurrection is a historical event with multiple eyewitnesses",
      "Jesus' resurrection validates His identity and mission",
      "The risen Christ is the firstfruits of a coming resurrection harvest",
      "The resurrection transforms death from an enemy to a defeated foe",
      "Christian hope is grounded in bodily resurrection, not just spiritual survival"
    ],
    applicationPoints: [
      "Live with confidence that death is not the final word",
      "Find courage to face suffering in light of future resurrection",
      "Share the resurrection as the central evidence for Christian faith",
      "Allow resurrection power to transform your daily life",
      "Evaluate your priorities in light of resurrection hope"
    ],
    discussionQuestions: [
      "How would you respond to someone who claims the resurrection was just a myth?",
      "What does it mean that Jesus is the 'firstfruits' of those who have died?",
      "How does resurrection hope change our experience of grief?",
      "What does Paul mean when he says we are 'raised with Christ' in this life?",
      "How might your daily choices change if you lived more consciously in resurrection power?"
    ],
    relatedScriptures: [
      {
        text: "And if Christ has not been raised, our preaching is useless and so is your faith. More than that, we are then found to be false witnesses about God, for we have testified about God that he raised Christ from the dead.",
        reference: "1 Corinthians 15:14-15a",
        translation: "NIV"
      },
      {
        text: "But Christ has indeed been raised from the dead, the firstfruits of those who have fallen asleep. For since death came through a man, the resurrection of the dead comes also through a man.",
        reference: "1 Corinthians 15:20-21",
        translation: "NIV"
      }
    ],
    resources: [
      {
        title: "Resurrection Evidence",
        description: "Historical and biblical evidence for the resurrection",
        icon: FileText,
        href: "#download/resurrection-evidence",
        type: "download"
      },
      {
        title: "Living in Resurrection Power",
        description: "Practical guide to experiencing resurrection life now",
        icon: BookOpen,
        href: "#download/resurrection-power",
        type: "download"
      },
      {
        title: "Resurrection Hope",
        description: "Video series on the future resurrection of believers",
        icon: Video,
        href: "#resources/resurrection-hope-videos",
        type: "link"
      }
    ]
  },
  {
    id: 12,
    title: "The Last Supper",
    description: "Understand the significance of Jesus' final meal with His disciples and the institution of the Lord's Supper as a lasting memorial.",
    preview: "Preview for The Last Supper",
    month: MONTHS.APRIL_2025,
    mainScripture: {
      text: "While they were eating, Jesus took bread, and when he had given thanks, he broke it and gave it to his disciples, saying, 'Take and eat; this is my body.' Then he took a cup, and when he had given thanks, he gave it to them, saying, 'Drink from it, all of you. This is my blood of the covenant, which is poured out for many for the forgiveness of sins.'",
      reference: "Matthew 26:26-28",
      translation: "KJV"
    },
    context: "The Last Supper took place on the evening of Passover, just hours before Jesus would be arrested and crucified. Jesus gathered His twelve disciples for this final meal, knowing that His time had come. The Passover feast was an annual celebration commemorating Israel's deliverance from slavery in Egypt, but Jesus transformed this traditional meal into a new covenant ceremony that would symbolize His upcoming sacrifice.",
    keyPoints: [
      "Jesus transformed the traditional Passover meal into a new covenant ceremony.",
      "The bread represents Jesus' body, broken for us.",
      "The cup represents Jesus' blood, shed for the forgiveness of sins.",
      "Jesus instituted this meal as an ongoing memorial and proclamation of His death.",
      "The Last Supper reveals Jesus' awareness of His coming betrayal and death."
    ],
    applicationPoints: [
      "Practice regular communion as a way to remember Christ's sacrifice and proclaim His death.",
      "Approach communion with proper reverence, self-examination, and gratitude.",
      "Consider how Jesus' willingness to die for you should impact your daily life.",
      "Reflect on the significance of being included in the new covenant through Christ.",
      "Prepare your heart for communion by confessing sin and seeking reconciliation."
    ],
    discussionQuestions: [
      "What is the significance of Jesus choosing to transform the Passover meal?",
      "How does understanding the historical context enhance our appreciation of the Lord's Supper?",
      "What does it mean to 'proclaim the Lord's death until he comes' when we take communion?",
      "How should the Lord's Supper impact our relationships with fellow believers?",
      "What practices help you prepare your heart for meaningful participation in communion?"
    ],
    relatedScriptures: [
      {
        text: "For whenever you eat this bread and drink this cup, you proclaim the Lord's death until he comes. So then, whoever eats the bread or drinks the cup of the Lord in an unworthy manner will be guilty of sinning against the body and blood of the Lord.",
        reference: "1 Corinthians 11:26-27",
        translation: "KJV"
      },
      {
        text: "This is my blood of the covenant, which is poured out for many for the forgiveness of sins. I tell you, I will not drink from this fruit of the vine from now on until that day when I drink it new with you in my Father's kingdom.",
        reference: "Matthew 26:28-29",
        translation: "KJV"
      }
    ],
    resources: [
      {
        title: "Last Supper Study Guide",
        description: "In-depth analysis of the Last Supper in all four Gospels",
        icon: FileText,
        href: "#download/last-supper-guide",
        type: "download"
      },
      {
        title: "Communion Meditation Journal",
        description: "Guided reflections for meaningful communion experiences",
        icon: BookOpen,
        href: "#download/communion-journal",
        type: "download"
      },
      {
        title: "Passover to Communion",
        description: "Video teaching on the transformation of the Passover meal",
        icon: Video,
        href: "#resources/passover-communion-video",
        type: "link"
      }
    ]
  }
];

export default studyGuides;
