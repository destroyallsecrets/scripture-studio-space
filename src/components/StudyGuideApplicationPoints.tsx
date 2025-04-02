
import React from 'react';

interface StudyGuideApplicationPointsProps {
  points: string[];
}

const StudyGuideApplicationPoints: React.FC<StudyGuideApplicationPointsProps> = ({ 
  points 
}) => {
  return (
    <section className="mb-12">
      <h2 className="font-serif text-2xl text-biblical-gold">Application</h2>
      <div className="glass-card p-6">
        <ul className="space-y-4">
          {points.map((point, index) => (
            <li key={index} className="flex">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-biblical-parchment/20 text-biblical-gold flex items-center justify-center mr-3 mt-1">
                {index + 1}
              </span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default StudyGuideApplicationPoints;
