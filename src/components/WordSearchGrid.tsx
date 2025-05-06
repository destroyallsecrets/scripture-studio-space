
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

interface WordSearchGridProps {
  grid: string[][];
  selectedCells: number[];
  isCellSelected: (index: number) => boolean;
  isCellInFoundWord: (index: number) => boolean;
  toggleCellSelection: (index: number) => void;
  gridSize: number;
}

const WordSearchGrid: React.FC<WordSearchGridProps> = ({ 
  grid, 
  selectedCells, 
  isCellSelected, 
  isCellInFoundWord, 
  toggleCellSelection,
  gridSize
}) => {
  const isMobile = useIsMobile();
  
  return (
    <div 
      className={`grid gap-1 mx-auto max-w-md`}
      style={{ 
        gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))`,
      }}
    >
      {grid.flat().map((letter, index) => (
        <button
          key={index}
          className={`aspect-square flex items-center justify-center rounded font-bold text-lg
            ${isCellInFoundWord(index) 
              ? 'bg-theme-purple text-white' 
              : isCellSelected(index)
                ? 'bg-theme-gold text-dark-bg'
                : 'bg-biblical-blue/30 border border-biblical-gold/30 text-white'
            }
            ${isMobile ? 'text-sm' : 'text-lg'}
            transition-all duration-200 touch-manipulation
            ${selectedCells.indexOf(index) > -1 
              ? `z-10 scale-105`
              : ''}`
          }
          onClick={() => toggleCellSelection(index)}
        >
          {letter}
        </button>
      ))}
    </div>
  );
};

export default WordSearchGrid;
