
import React from 'react';
import { Check } from 'lucide-react';
import { WordPosition } from '@/utils/wordSearchUtils';

interface WordListProps {
  words: WordPosition[];
}

const WordSearchWordList: React.FC<WordListProps> = ({ words }) => {
  return (
    <div className="mb-6 flex flex-wrap gap-2">
      {words.map((wordPos, index) => (
        <div 
          key={index}
          className={`px-2 py-1 rounded-full text-sm ${
            wordPos.found 
              ? 'bg-theme-purple/30 text-gray-400 line-through' 
              : 'bg-theme-purple/10 text-white'
          }`}
        >
          {wordPos.word}
          {wordPos.found && <Check size={14} className="ml-1 inline" />}
        </div>
      ))}
    </div>
  );
};

export default WordSearchWordList;
