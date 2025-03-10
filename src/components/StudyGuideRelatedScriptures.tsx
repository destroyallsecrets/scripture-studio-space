
import React from 'react';
import ScriptureCard from './ScriptureCard';

interface RelatedScripture {
  text: string;
  reference: string;
  translation?: string;
}

interface StudyGuideRelatedScripturesProps {
  scriptures: RelatedScripture[];
}

const StudyGuideRelatedScriptures: React.FC<StudyGuideRelatedScripturesProps> = ({ 
  scriptures 
}) => {
  return (
    <section className="mb-12">
      <h2 className="font-serif text-2xl text-biblical-navy mb-4">Related Scriptures</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {scriptures.map((scripture, index) => (
          <ScriptureCard 
            key={index}
            text={scripture.text}
            reference={scripture.reference}
            translation={scripture.translation || "NIV"}
          />
        ))}
      </div>
    </section>
  );
};

export default StudyGuideRelatedScriptures;
