
import React from 'react';
import { Clock } from 'lucide-react';

interface WordSearchTimerProps {
  seconds: number;
  formatTime: (seconds: number) => string;
}

const WordSearchTimer: React.FC<WordSearchTimerProps> = ({ seconds, formatTime }) => {
  return (
    <div className="text-center">
      <span className="block text-theme-gold text-lg">{formatTime(seconds)}</span>
      <span className="text-sm text-gray-300">Time</span>
    </div>
  );
};

export default WordSearchTimer;
