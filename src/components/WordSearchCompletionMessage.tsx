
import React from 'react';
import { Button } from './ui/button';

interface WordSearchCompletionMessageProps {
  gameComplete: boolean;
  formatTime: (seconds: number) => string;
  seconds: number;
  initializeGame: () => void;
}

const WordSearchCompletionMessage: React.FC<WordSearchCompletionMessageProps> = ({
  gameComplete,
  formatTime,
  seconds,
  initializeGame
}) => {
  if (!gameComplete) return null;
  
  return (
    <div className="mt-6 text-center">
      <p className="text-theme-gold text-xl mb-3">Word Search Complete!</p>
      <p className="text-gray-300 mb-4">You completed the game in {formatTime(seconds)}!</p>
      <Button 
        onClick={initializeGame} 
        className="bg-theme-purple hover:bg-theme-purple-light"
      >
        Play Again
      </Button>
    </div>
  );
};

export default WordSearchCompletionMessage;
