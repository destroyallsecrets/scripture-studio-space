
import React from 'react';

interface StudyGuideKeyPointsProps {
  points: string[];
}

const StudyGuideKeyPoints: React.FC<StudyGuideKeyPointsProps> = ({ 
  points 
}) => {
  return (
    <section className="mb-12">
      <h2 className="font-serif text-2xl text-biblical-navy mb-4">Key Points</h2>
      <div className="glass-card p-6">
        <ul className="space-y-4">
          {points.map((point, index) => (
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
  );
};

export default StudyGuideKeyPoints;
