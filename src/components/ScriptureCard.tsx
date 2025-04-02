import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ScriptureCardProps {
  text: string;
  reference: string;
  translation: string;
  lesson: string; // Add lesson prop
}

const ScriptureCard: React.FC<ScriptureCardProps> = ({ text, reference, translation, lesson }) => {
  return (
    <div>
      <p>{text}</p>
      <p>{reference}</p>
      <p>{translation}</p>
      <p>{lesson}</p> {/* Display lesson */}
    </div>
  );
};

export default ScriptureCard;
import LessonCard from './LessonCard';

const ParentComponent: React.FC = () => {
  const scriptureText = "Grace and peace be multiplied unto you through the knowledge of God, and of Jesus our Lord.";
  const scriptureReference = "2 Peter 1:2";
  const scriptureTranslation = "KJV";
  const lessonInfo = "This scripture emphasizes the importance of growing in the knowledge of God and Jesus Christ.";

  return (
    <div>
      <ScriptureCard 
        text={scriptureText} 
        reference={scriptureReference} 
        translation={scriptureTranslation} 
        lesson={lessonInfo} 
      />
      <LessonCard 
        text={scriptureText} 
        reference={scriptureReference} 
        translation={scriptureTranslation} 
        lesson={lessonInfo} 
      />
    </div>
  );
};

