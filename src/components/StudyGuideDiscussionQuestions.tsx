
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
      <h2 className="font-serif text-2xl text-biblical-navy mb-4">
        <span className="inline-flex items-center">
          <MessageSquare className="mr-2 h-5 w-5" />
          Discussion Questions
        </span>
      </h2>
      <div className="glass-card p-6">
        <ol className="space-y-6">
          {questions.map((question, index) => (
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
  );
};

export default StudyGuideDiscussionQuestions;
