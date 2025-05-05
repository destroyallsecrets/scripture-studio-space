import { FileText, BookOpen, Video } from 'lucide-react';
import { StudyGuideData } from '@/components/StudyGuide';

// Study guide data has been restructured to align with the Standard Lesson Commentaries format.
// This restructuring ensures that each study guide includes key elements such as context, key points, application points, discussion questions, related scriptures, and resources.

// Month assignments for lessons
const MONTHS = {
  FEBRUARY_2025: "feb-2025",
  MARCH_2025: "mar-2025",
  APRIL_2025: "apr-2025",
  MAY_2025: "may-2025",
};

const studyGuides: (StudyGuideData & { month: string })[] = [
  // Lesson 1: The Call to Spiritual Growth - Feb 2025
  {
    id: 1,
    title: "The Call to Spiritual Growth",
    description: "Explore Peter's exhortation to grow in faith, virtue, knowledge, self-control, perseverance, godliness, brotherly kindness, and love.",
    preview: "Preview for The Call to Spiritual Growth",
    month: MONTHS.FEBRUARY_2025,
    mainScripture: {
      text: "For this very reason, make every effort to add to your faith goodness; and to goodness, knowledge; and to knowledge, self-control; and to self-control, perseverance; and to perseverance, godliness; and to godliness, mutual affection; and to mutual affection, love.",
      reference: "2 Peter 1:5-7",
      translation: "KJV"
    },
    context: "Peter writes to encourage believers to grow in their faith and to remind them of the qualities that should be evident in their lives. This letter was written around 64-68 AD, likely from Rome, during a time of increasing persecution.",
    keyPoints: [
      "Spiritual growth is a process that requires effort and intentionality.",
      "Faith is the foundation upon which other virtues are built.",
      "Each virtue builds upon the previous one, leading to a mature Christian character.",
      "Spiritual growth results in a productive and effective Christian life.",
      "Neglecting spiritual growth can lead to spiritual blindness and forgetfulness."
    ],
    applicationPoints: [
      "Identify areas in your life where you need to grow spiritually.",
      "Set specific goals for developing the virtues listed by Peter.",
      "Seek accountability and support from fellow believers in your spiritual growth.",
      "Reflect on how your spiritual growth impacts your witness to others.",
      "Commit to a lifelong journey of growing in Christlikeness."
    ],
    discussionQuestions: [
      "What steps can you take to ensure you are growing spiritually?",
      "How do the virtues listed by Peter build upon one another?",
      "What are the dangers of neglecting spiritual growth?",
      "How can you encourage others in their spiritual growth?",
      "What role does the Holy Spirit play in your spiritual growth?"
    ],
    relatedScriptures: [
      {
        text: "But grow in the grace and knowledge of our Lord and Savior Jesus Christ. To him be glory both now and forever! Amen.",
        reference: "2 Peter 3:18",
        translation: "KJV"
      },
      {
        text: "Therefore, my dear friends, as you have always obeyed—not only in my presence, but now much more in my absence—continue to work out your salvation with fear and trembling, for it is God who works in you to will and to act in order to fulfill his good purpose.",
        reference: "Philippians 2:12-13",
        translation: "KJV"
      }
    ],
    resources: [
      {
        title: "Spiritual Growth Guide",
        description: "Comprehensive study notes on 2 Peter 1 with practical applications",
        icon: FileText,
        href: "#download/spiritual-growth-guide",
        type: "download"
      },
      {
        title: "Virtue Development Journal",
        description: "Printable journal for tracking spiritual growth",
        icon: BookOpen,
        href: "#download/virtue-development-journal",
        type: "download"
      },
      {
        title: "2 Peter Overview",
        description: "Video teaching on the key themes in the Book of 2 Peter",
        icon: Video,
        href: "#resources/2-peter-video",
        type: "link"
      }
    ]
  },
  // Lesson 2: The Certainty of Christ's Return - Feb 2025
  {
    id: 2,
    title: "The Certainty of Christ's Return",
    description: "Learn about Peter's assurance of Christ's return and the implications for believers.",
    preview: "Preview for The Certainty of Christ's Return",
    month: MONTHS.FEBRUARY_2025,
    mainScripture: {
      text: "But do not forget this one thing, dear friends: With the Lord a day is like a thousand years, and a thousand years are like a day. The Lord is not slow in keeping his promise, as some understand slowness. Instead he is patient with you, not wanting anyone to perish, but everyone to come to repentance.",
      reference: "2 Peter 3:8-9",
      translation: "KJV"
    },
    context: "Peter addresses the doubts and scoffing of those who question the promise of Christ's return. He emphasizes God's patience and the certainty of His promises. This letter was written to encourage believers to remain steadfast in their faith.",
    keyPoints: [
      "God's perspective on time is different from ours.",
      "God's delay in fulfilling His promises is due to His patience and desire for repentance.",
      "The certainty of Christ's return should motivate believers to live holy and godly lives.",
      "The day of the Lord will come unexpectedly, like a thief in the night.",
      "Believers should be diligent in their faith, looking forward to the new heavens and new earth."
    ],
    applicationPoints: [
      "Reflect on how the certainty of Christ's return impacts your daily life.",
      "Live with a sense of urgency and purpose, knowing that Christ could return at any time.",
      "Share the message of repentance and salvation with others.",
      "Cultivate a lifestyle of holiness and godliness in anticipation of Christ's return.",
      "Encourage fellow believers to remain steadfast in their faith."
    ],
    discussionQuestions: [
      "How does God's perspective on time differ from ours?",
      "What are the implications of God's patience for believers and non-believers?",
      "How should the certainty of Christ's return influence our daily lives?",
      "What does it mean to live a holy and godly life in anticipation of Christ's return?",
      "How can we encourage others to remain steadfast in their faith?"
    ],
    relatedScriptures: [
      {
        text: "So you also must be ready, because the Son of Man will come at an hour when you do not expect him.",
        reference: "Matthew 24:44",
        translation: "KJV"
      },
      {
        text: "For the grace of God has appeared that offers salvation to all people. It teaches us to say 'No' to ungodliness and worldly passions, and to live self-controlled, upright and godly lives in this present age, while we wait for the blessed hope—the appearing of the glory of our great God and Savior, Jesus Christ.",
        reference: "Titus 2:11-13",
        translation: "KJV"
      }
    ],
    resources: [
      {
        title: "Christ's Return Study Guide",
        description: "In-depth study notes on 2 Peter 3 with theological insights",
        icon: FileText,
        href: "#download/christs-return-guide",
        type: "download"
      },
      {
        title: "Living in Expectation Journal",
        description: "Printable journal for reflecting on the return of Christ",
        icon: BookOpen,
        href: "#download/expectation-journal",
        type: "download"
      },
      {
        title: "End Times Overview",
        description: "Video teaching on the key themes of eschatology in the New Testament",
        icon: Video,
        href: "#resources/end-times-video",
        type: "link"
      }
    ]
  },
  // Lesson 3: Warning Against False Teachers - Feb 2025
  {
    id: 3,
    title: "Warning Against False Teachers",
    description: "Discover Peter's warnings about false teachers and their destructive heresies.",
    preview: "Preview for Warning Against False Teachers",
    month: MONTHS.FEBRUARY_2025,
    mainScripture: {
      text: "But there were also false prophets among the people, just as there will be false teachers among you. They will secretly introduce destructive heresies, even denying the sovereign Lord who bought them—bringing swift destruction on themselves.",
      reference: "2 Peter 2:1",
      translation: "KJV"
    },
    context: "Peter warns believers about the presence of false teachers who will introduce destructive heresies. He emphasizes the importance of being vigilant and discerning in order to protect the faith. This letter was written to help believers recognize and resist false teachings.",
    keyPoints: [
      "False teachers will arise within the church, introducing destructive heresies.",
      "These false teachers will deny the sovereign Lord and lead others astray.",
      "God's judgment is certain for false teachers and those who follow them.",
      "Believers must be vigilant and discerning to protect the purity of the faith.",
      "The truth of God's Word is the ultimate standard for evaluating teachings."
    ],
    applicationPoints: [
      "Be vigilant and discerning in evaluating teachings and doctrines.",
      "Study God's Word diligently to recognize and resist false teachings.",
      "Hold fast to the truth of the gospel and reject any teachings that contradict it.",
      "Encourage others to be discerning and to stand firm in the faith.",
      "Pray for wisdom and discernment to recognize and resist false teachings."
    ],
    discussionQuestions: [
      "What are some characteristics of false teachers according to Peter?",
      "How can believers recognize and resist false teachings?",
      "What is the importance of being vigilant and discerning in evaluating teachings?",
      "How can we encourage others to stand firm in the faith and reject false teachings?",
      "What role does the truth of God's Word play in protecting against false teachings?"
    ],
    relatedScriptures: [
      {
        text: "Dear friends, do not believe every spirit, but test the spirits to see whether they are from God, because many false prophets have gone out into the world.",
        reference: "1 John 4:1",
        translation: "KJV"
      },
      {
        text: "For the time will come when people will not put up with sound doctrine. Instead, to suit their own desires, they will gather around them a great number of teachers to say what their itching ears want to hear.",
        reference: "2 Timothy 4:3",
        translation: "KJV"
      }
    ],
    resources: [
      {
        title: "False Teachers Study Guide",
        description: "Comprehensive study notes on 2 Peter 2 with practical applications",
        icon: FileText,
        href: "#download/false-teachers-guide",
        type: "download"
      },
      {
        title: "Discernment Journal",
        description: "Printable journal for developing discernment in evaluating teachings",
        icon: BookOpen,
        href: "#download/discernment-journal",
        type: "download"
      },
      {
        title: "False Teachings Overview",
        description: "Video teaching on the key themes of false teachings in the New Testament",
        icon: Video,
        href: "#resources/false-teachings-video",
        type: "link"
      }
    ]
  },
  // Lesson 4: The Day of the Lord - Feb 2025
  {
    id: 4,
    title: "The Day of the Lord",
    description: "Explore Peter's teaching on the Day of the Lord and its implications for believers.",
    preview: "Preview for The Day of the Lord",
    month: MONTHS.FEBRUARY_2025,
    mainScripture: {
      text: "But the day of the Lord will come like a thief. The heavens will disappear with a roar; the elements will be destroyed by fire, and the earth and everything done in it will be laid bare.",
      reference: "2 Peter 3:10",
      translation: "KJV"
    },
    context: "Peter emphasizes the certainty and suddenness of the Day of the Lord, urging believers to live holy and godly lives in anticipation of this event. This letter was written to encourage believers to remain steadfast in their faith and to live in light of Christ's return.",
    keyPoints: [
      "The Day of the Lord will come unexpectedly, like a thief in the night.",
      "The heavens and earth will be destroyed by fire, revealing everything done in them.",
      "Believers should live holy and godly lives in anticipation of the Day of the Lord.",
      "The promise of new heavens and a new earth should motivate believers to live righteously.",
      "God's patience in delaying the Day of the Lord is an opportunity for repentance."
    ],
    applicationPoints: [
      "Live with a sense of urgency and purpose, knowing that the Day of the Lord is coming.",
      "Reflect on how the certainty of the Day of the Lord impacts your daily life.",
      "Pursue holiness and godliness in anticipation of Christ's return.",
      "Share the message of repentance and salvation with others.",
      "Encourage fellow believers to remain steadfast in their faith."
    ],
    discussionQuestions: [
      "What are the implications of the Day of the Lord for believers and non-believers?",
      "How should the certainty of the Day of the Lord influence our daily lives?",
      "What does it mean to live a holy and godly life in anticipation of the Day of the Lord?",
      "How can we encourage others to remain steadfast in their faith?",
      "What role does God's patience play in delaying the Day of the Lord?"
    ],
    relatedScriptures: [
      {
        text: "But in keeping with his promise we are looking forward to a new heaven and a new earth, where righteousness dwells.",
        reference: "2 Peter 3:13",
        translation: "KJV"
      },
      {
        text: "The Lord is not slow in keeping his promise, as some understand slowness. Instead he is patient with you, not wanting anyone to perish, but everyone to come to repentance.",
        reference: "2 Peter 3:9",
        translation: "KJV"
      }
    ],
    resources: [
      {
        title: "Day of the Lord Study Guide",
        description: "In-depth study notes on 2 Peter 3 with theological insights",
        icon: FileText,
        href: "#download/day-of-the-lord-guide",
        type: "download"
      },
      {
        title: "Living in Light of Eternity Journal",
        description: "Printable journal for reflecting on the Day of the Lord",
        icon: BookOpen,
        href: "#download/eternity-journal",
        type: "download"
      },
      {
        title: "Eschatology Overview",
        description: "Video teaching on the key themes of eschatology in the New Testament",
        icon: Video,
        href: "#resources/eschatology-video",
        type: "link"
      }
    ]
  },
  // Lesson 5: Faith and Works - March 2025
  {
    id: 5,
    title: "Faith and Works",
    description: "Explore the relationship between faith and actions as described by James, emphasizing that true faith manifests itself in works.",
    preview: "Preview for Faith and Works",
    month: MONTHS.MARCH_2025,
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
  // Lesson 6: Faith That Withstands Trial - March 2025
  {
    id: 6,
    title: "Faith That Withstands Trial",
    description: "Learn how faith enables believers to endure testing and trials, developing perseverance and spiritual maturity.",
    preview: "Preview for Faith That Withstands Trial",
    month: MONTHS.MARCH_2025,
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
  // Lesson 7: Living Faith in Practice - March 2025
  {
    id: 7,
    title: "Living Faith in Practice",
    description: "Discover how genuine faith transforms daily behavior, particularly in speech, treatment of others, and pursuit of wisdom.",
    preview: "Preview for Living Faith in Practice",
    month: MONTHS.MARCH_2025,
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
  // Lesson 8: Living as Exiles - March 2025
  {
    id: 8,
    title: "Living as Exiles",
    description: "Explore how believers can maintain their faith identity while living in a culture that is often hostile to biblical values.",
    preview: "Preview for Living as Exiles",
    month: MONTHS.MARCH_2025,
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
  // Lesson 9: The Triumphal Entry - April 2025
  {
    id: 9,
    title: "The Triumphal Entry",
    description: "Examine Jesus' strategic entry into Jerusalem that publicly declared His Messianic identity and initiated His final week.",
    preview: "Preview for The Triumphal Entry",
    month: MONTHS.APRIL_2025,
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
  // Lesson 10: The Last Supper - April 2025
  {
    id: 10,
    title: "The Last Supper",
    description: "Understand the significance of Jesus' final meal with His disciples and the institution of the Lord's Supper as a lasting memorial.",
    preview: "Preview for The Last Supper",
