
import React from 'react';
import { MessageSquare } from 'lucide-react';

interface StudyGuideDiscussionQuestionsProps {
  questions: string[];
}

const StudyGuideDiscussionQuestions: React.FC<StudyGuideDiscussionQuestionsProps> = ({ 
  questions 
}) => {
  return (
    <section className="mb-12">
      <h2 className="font-serif text-2xl text-biblical-gold mb-4">
        <span className="inline-flex items-center">
          <MessageSquare className="mr-2 h-5 w-5" />
          Discussion Questions
        </span>
      </h2>
      <div className="glass-card p-6">
        <ol className="space-y-6">
          {questions.map((question, index) => (
            <li key={index} className="pl-6 border-l-2 border-biblical-cream">
              <p className="text-lg font-medium text-biblical-parchment mb-2">Q{index + 1}: {question}</p>
              <div className="flex mt-3">
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default StudyGuideDiscussionQuestions;
