
import React from 'react';
import { ArrowLeft, BookOpen, Download, FileText, MessageSquare, Video } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScriptureCard from './ScriptureCard';
import { cn } from '@/lib/utils';

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
}

const StudyGuide: React.FC<StudyGuideProps> = ({ studyGuide }) => {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Back button */}
      <Link to="/" className="inline-flex items-center text-biblical-blue hover:text-biblical-navy mb-8">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Lessons
      </Link>
      
      {/* Title */}
      <h1 className="font-serif text-4xl md:text-5xl text-biblical-navy mb-6">{studyGuide.title}</h1>
      <p className="text-xl text-gray-600 mb-10">{studyGuide.description}</p>
      
      {/* Main Scripture */}
      <section className="mb-12">
        <h2 className="font-serif text-2xl text-biblical-navy mb-4">Primary Scripture</h2>
        <ScriptureCard 
          text={studyGuide.mainScripture.text}
          reference={studyGuide.mainScripture.reference}
          translation={studyGuide.mainScripture.translation || "NIV"}
          className="shadow-md"
        />
      </section>
      
      {/* Scriptural Context */}
      <section className="mb-12">
        <h2 className="font-serif text-2xl text-biblical-navy mb-4">Historical & Scriptural Context</h2>
        <div className="glass-card p-6">
          <p className="leading-relaxed">{studyGuide.context}</p>
        </div>
      </section>
      
      {/* Key Points */}
      <section className="mb-12">
        <h2 className="font-serif text-2xl text-biblical-navy mb-4">Key Points</h2>
        <div className="glass-card p-6">
          <ul className="space-y-4">
            {studyGuide.keyPoints.map((point, index) => (
              <li key={index} className="flex">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-biblical-gold/20 text-biblical-navy flex items-center justify-center mr-3 mt-1">
                  {index + 1}
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      
      {/* Application */}
      <section className="mb-12">
        <h2 className="font-serif text-2xl text-biblical-navy mb-4">Application</h2>
        <div className="glass-card p-6">
          <ul className="space-y-4">
            {studyGuide.applicationPoints.map((point, index) => (
              <li key={index} className="flex">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-biblical-blue/20 text-biblical-navy flex items-center justify-center mr-3 mt-1">
                  {index + 1}
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      
      {/* Discussion Questions */}
      <section className="mb-12">
        <h2 className="font-serif text-2xl text-biblical-navy mb-4">
          <span className="inline-flex items-center">
            <MessageSquare className="mr-2 h-5 w-5" />
            Discussion Questions
          </span>
        </h2>
        <div className="glass-card p-6">
          <ol className="space-y-6">
            {studyGuide.discussionQuestions.map((question, index) => (
              <li key={index} className="pl-6 border-l-2 border-biblical-cream">
                <p className="text-lg font-medium text-biblical-navy mb-2">Q{index + 1}: {question}</p>
                <div className="flex mt-3">
                  <textarea 
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-biblical-cream focus:border-biblical-cream" 
                    rows={2}
                    placeholder="Write your thoughts here..."
                  />
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
      
      {/* Related Scriptures */}
      <section className="mb-12">
        <h2 className="font-serif text-2xl text-biblical-navy mb-4">Related Scriptures</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {studyGuide.relatedScriptures.map((scripture, index) => (
            <ScriptureCard 
              key={index}
              text={scripture.text}
              reference={scripture.reference}
              translation={scripture.translation || "NIV"}
            />
          ))}
        </div>
      </section>
      
      {/* Study Resources */}
      <section className="mb-12">
        <h2 className="font-serif text-2xl text-biblical-navy mb-4">Study Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {studyGuide.resources.map((resource, index) => (
            <ResourceCard key={index} {...resource} />
          ))}
        </div>
      </section>
    </div>
  );
};

const ResourceCard = ({ 
  title, 
  description, 
  icon: Icon, 
  href, 
  type 
}: {
  title: string;
  description: string;
  icon: React.ElementType;
  href: string;
  type: "download" | "link";
}) => {
  return (
    <a 
      href={href} 
      className={cn(
        "glass-card p-6 flex items-start gap-4 transition-all duration-300",
        "hover:-translate-y-1 hover:shadow-md"
      )}
    >
      <div className="bg-biblical-blue/10 text-biblical-blue p-3 rounded-full">
        <Icon size={24} />
      </div>
      <div className="flex-grow">
        <h3 className="font-serif text-lg font-medium text-biblical-navy mb-1">{title}</h3>
        <p className="text-gray-600 text-sm mb-3">{description}</p>
        <span className="inline-flex items-center text-sm font-medium text-biblical-blue">
          {type === "download" ? (
            <>
              <Download size={14} className="mr-1" />
              Download Resource
            </>
          ) : (
            <>Access Resource</>
          )}
        </span>
      </div>
    </a>
  );
};

export default StudyGuide;
