
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScriptureCard from './ScriptureCard';
import StudyGuideKeyPoints from './StudyGuideKeyPoints';
import StudyGuideApplicationPoints from './StudyGuideApplicationPoints';
import StudyGuideDiscussionQuestions from './StudyGuideDiscussionQuestions';
import StudyGuideRelatedScriptures from './StudyGuideRelatedScriptures';
import StudyGuideResourceCard from './StudyGuideResourceCard';
import { motion } from 'framer-motion';

export interface StudyGuideData {
  id: number;
  title: string;
  description: string;
  mainScripture: {
    text: string;
    reference: string;
    translation?: string;
  };
  context: string;
  keyPoints: string[];
  applicationPoints: string[];
  discussionQuestions: string[];
  relatedScriptures: Array<{
    text: string;
    reference: string;
    translation?: string;
  }>;
  resources: Array<{
    title: string;
    description: string;
    icon: React.ElementType;
    href: string;
    type: "download" | "link";
  }>;
}

interface StudyGuideProps {
  studyGuide: StudyGuideData;
  onSwipeBack?: () => void;
}

const StudyGuide: React.FC<StudyGuideProps> = ({ studyGuide, onSwipeBack }) => {
  return (
    <motion.div 
      className="max-w-4xl mx-auto"
      drag="x"
      dragConstraints={{ left: 0, right: 100 }}
      dragElastic={0.2}
      onDragEnd={(_, info) => {
        if (info.offset.x > 100 && onSwipeBack) {
          onSwipeBack();
        }
      }}
      drag-aria-describedby="swipe-instruction"
    >
      <div className="sr-only" id="swipe-instruction">Swipe right to go back to lessons</div>
      
      {/* Enhanced Back button */}
      <Link 
        to="/" 
        className="inline-flex items-center justify-center px-4 py-2 mb-8 text-biblical-blue bg-biblical-blue/10 hover:bg-biblical-blue/20 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-biblical-blue focus:ring-offset-2"
        aria-label="Return to lessons page"
      >
        <ArrowLeft className="mr-2 h-5 w-5" />
        <span>Back to Lessons</span>
      </Link>
      
      {/* Title */}
      <h1 className="font-serif text-4xl md:text-5xl text-biblical-creme mb-6">{studyGuide.title}</h1>
      <p className="text-xl text-biblical-gold mb-10">{studyGuide.description}</p>
      
      {/* Main Scripture */}
      <section className="mb-12">
        <h2 className="font-serif text-2xl text-biblical-gold mb-4">Primary Scripture</h2>
        <ScriptureCard 
          text={studyGuide.mainScripture.text}
          reference={studyGuide.mainScripture.reference}
          translation={studyGuide.mainScripture.translation || "NIV"}
          className="shadow-md"
        />
      </section>
      
      {/* Scriptural Context */}
      <section className="mb-12">
        <h2 className="font-serif text-2xl text-biblical-gold mb-4">Historical & Scriptural Context</h2>
        <div className="glass-card p-6">
          <p className="leading-relaxed">{studyGuide.context}</p>
        </div>
      </section>
      
      {/* Key Points */}
      <StudyGuideKeyPoints points={studyGuide.keyPoints} />
      
      {/* Application */}
      <StudyGuideApplicationPoints points={studyGuide.applicationPoints} />
      
      {/* Discussion Questions */}
      <StudyGuideDiscussionQuestions questions={studyGuide.discussionQuestions} />
      
      {/* Related Scriptures */}
      <StudyGuideRelatedScriptures scriptures={studyGuide.relatedScriptures} />
      
      {/* Study Resources */}
      <section className="mb-12">
        <h2 className="font-serif text-2xl text-biblical-creme mb-4">Study Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {studyGuide.resources.map((resource, index) => (
            <StudyGuideResourceCard key={index} {...resource} />
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default StudyGuide;
