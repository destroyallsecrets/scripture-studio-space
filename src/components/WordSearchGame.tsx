import React, { useState, useEffect, useCallback } from 'react';
import { RefreshCw } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { Button } from './ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { extractBibleTerms, WordPosition } from '@/utils/wordSearchUtils';
import WordSearchWordList from './WordSearchWordList';
import WordSearchGrid from './WordSearchGrid';
import WordSearchTimer from './WordSearchTimer';
import WordSearchCompletionMessage from './WordSearchCompletionMessage';

const WordSearchGame: React.FC = () => {
  const isMobile = useIsMobile();
  const gridSize = isMobile ? 8 : 10;
  const [grid, setGrid] = useState<string[][]>([]);
  const [words, setWords] = useState<WordPosition[]>([]);
  const [selectedCells, setSelectedCells] = useState<number[]>([]);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameComplete, setGameComplete] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [timerActive, setTimerActive] = useState(false);
  
  // Timer logic
  useEffect(() => {
    let interval: number | null = null;
    
    if (timerActive) {
      interval = window.setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (interval) {
      clearInterval(interval);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timerActive]);
  
  // Format time as mm:ss
  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };
  
  // Initialize game
  const initializeGame = useCallback(() => {
    setSelectedCells([]);
    setGameComplete(false);
    setSeconds(0);
    
    // Get biblical terms to use in the word search
    const bibleTerms = extractBibleTerms();
    
    // Initialize empty grid
    const newGrid: string[][] = [];
    for (let i = 0; i < gridSize; i++) {
      newGrid.push(Array(gridSize).fill(''));
    }
    
    // Place words in grid
    const wordPositions: WordPosition[] = [];
    const directions: Array<'horizontal' | 'vertical' | 'diagonal' | 'reverse-horizontal' | 'reverse-vertical' | 'reverse-diagonal'> = 
      ['horizontal', 'vertical', 'diagonal', 'reverse-horizontal', 'reverse-vertical', 'reverse-diagonal'];
    
    bibleTerms.forEach(word => {
      if (word.length <= gridSize) {
        let placed = false;
        let attempts = 0;
        
        while (!placed && attempts < 50) {
          attempts++;
          
          // Choose random direction
          const direction = directions[Math.floor(Math.random() * directions.length)];
          
          // Choose random starting position
          const row = Math.floor(Math.random() * gridSize);
          const col = Math.floor(Math.random() * gridSize);
          
          // Check if word fits in chosen direction
          let fits = true;
          const positions: number[] = [];
          
          for (let i = 0; i < word.length; i++) {
            let r = row;
            let c = col;
            
            if (direction.includes('horizontal')) c += direction.includes('reverse') ? -i : i;
            if (direction.includes('vertical')) r += direction.includes('reverse') ? -i : i;
            if (direction.includes('diagonal')) {
              r += direction.includes('reverse') ? -i : i;
              c += direction.includes('reverse') ? -i : i;
            }
            
            if (r < 0 || r >= gridSize || c < 0 || c >= gridSize) {
              fits = false;
              break;
            }
            
            const cellIndex = r * gridSize + c;
            
            // Check if cell is already used by another word
            if (newGrid[r][c] !== '' && newGrid[r][c] !== word[i]) {
              fits = false;
              break;
            }
            
            positions.push(cellIndex);
          }
          
          if (fits) {
            // Place word in grid
            for (let i = 0; i < word.length; i++) {
              let r = row;
              let c = col;
              
              if (direction.includes('horizontal')) c += direction.includes('reverse') ? -i : i;
              if (direction.includes('vertical')) r += direction.includes('reverse') ? -i : i;
              if (direction.includes('diagonal')) {
                r += direction.includes('reverse') ? -i : i;
                c += direction.includes('reverse') ? -i : i;
              }
              
              newGrid[r][c] = word[i];
            }
            
            wordPositions.push({
              word,
              positions,
              found: false,
              direction
            });
            
            placed = true;
          }
        }
      }
    });
    
    // Fill remaining cells with random letters
    for (let r = 0; r < gridSize; r++) {
      for (let c = 0; c < gridSize; c++) {
        if (newGrid[r][c] === '') {
          const randomChar = String.fromCharCode(65 + Math.floor(Math.random() * 26)); // A-Z
          newGrid[r][c] = randomChar;
        }
      }
    }
    
    setGrid(newGrid);
    setWords(wordPositions);
    setGameStarted(true);
    setTimerActive(true);
  }, [gridSize]);
  
  // Check if selected cells form a word
  useEffect(() => {
    if (selectedCells.length < 3) return;
    
    const checkForWord = () => {
      for (let i = 0; i < words.length; i++) {
        const wordPos = words[i];
        
        // Skip already found words
        if (wordPos.found) continue;
        
        // Check if selected cells match word positions
        if (
          (selectedCells.length === wordPos.positions.length && 
           selectedCells.every(pos => wordPos.positions.includes(pos))) ||
          (selectedCells.length === wordPos.positions.length && 
           [...selectedCells].reverse().every((pos, idx) => wordPos.positions[idx] === pos))
        ) {
          // Word found!
          const updatedWords = [...words];
          updatedWords[i].found = true;
          setWords(updatedWords);
          setSelectedCells([]);
          
          toast({
            title: "Word Found!",
            description: wordPos.word,
          });
          
          // Check if game is complete
          if (updatedWords.every(w => w.found)) {
            setGameComplete(true);
            setTimerActive(false);
            toast({
              title: "Congratulations!",
              description: `You completed the word search in ${formatTime(seconds)}!`,
            });
          }
          
          return;
        }
      }
    };
    
    checkForWord();
  }, [selectedCells, words, seconds]);
  
  // Start game automatically when component mounts
  useEffect(() => {
    initializeGame();
  }, [initializeGame]);
  
  // Handle cell click/tap
  const toggleCellSelection = (index: number) => {
    if (!gameStarted || gameComplete) return;
    
    if (selectedCells.includes(index)) {
      // If this is the last selected cell, remove it
      if (selectedCells[selectedCells.length - 1] === index) {
        setSelectedCells(selectedCells.slice(0, -1));
      } 
      // Otherwise, unselect all cells from this one forward
      else {
        const position = selectedCells.indexOf(index);
        if (position !== -1) {
          setSelectedCells(selectedCells.slice(0, position + 1));
        }
      }
    } else {
      // Check if the new cell is adjacent to the last selected cell
      if (selectedCells.length === 0) {
        setSelectedCells([index]);
      } else {
        const lastIndex = selectedCells[selectedCells.length - 1];
        const lastRow = Math.floor(lastIndex / gridSize);
        const lastCol = lastIndex % gridSize;
        const newRow = Math.floor(index / gridSize);
        const newCol = index % gridSize;
        
        // Check if adjacent (including diagonal)
        const rowDiff = Math.abs(newRow - lastRow);
        const colDiff = Math.abs(newCol - lastCol);
        
        if ((rowDiff <= 1 && colDiff <= 1) || 
            (selectedCells.length > 1 && 
             // Check if new selection continues the same direction
             ((newRow - lastRow === lastRow - Math.floor(selectedCells[selectedCells.length - 2] / gridSize)) && 
              (newCol - lastCol === lastCol - (selectedCells[selectedCells.length - 2] % gridSize))))) {
          setSelectedCells([...selectedCells, index]);
        }
      }
    }
  };
  
  // Check if a cell is in the selected path
  const isCellSelected = (index: number) => {
    return selectedCells.includes(index);
  };
  
  // Check if a cell is part of a found word
  const isCellInFoundWord = (index: number) => {
    return words.some(word => word.found && word.positions.includes(index));
  };
  
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold text-theme-purple-light">Scripture Word Search</h2>
          <p className="text-gray-300">Find biblical terms in the grid</p>
        </div>
        <div className="flex gap-4">
          <WordSearchTimer seconds={seconds} formatTime={formatTime} />
          <div className="text-center">
            <span className="block text-theme-gold text-lg">
              {words.filter(w => w.found).length}/{words.length}
            </span>
            <span className="text-sm text-gray-300">Found</span>
          </div>
          <Button 
            onClick={initializeGame} 
            className="flex items-center gap-2 bg-theme-purple hover:bg-theme-purple-light"
          >
            <RefreshCw size={16} />
            New Game
          </Button>
        </div>
      </div>
      
      {/* Words to find */}
      WordSearchWordList words={words} />
      
      {/* Word Search Grid */}
      <WordSearchGrid 
        grid={grid}
        selectedCells={selectedCells}
        isCellSelected={isCellSelected}
        isCellInFoundWord={isCellInFoundWord}
        toggleCellSelection={toggleCellSelection}
        gridSize={gridSize}
      />
      
      <WordSearchCompletionMessage 
        gameComplete={gameComplete}
        formatTime={formatTime}
        seconds={seconds}
        initializeGame={initializeGame}
      />
    </div>
  );
};

export default WordSearchGame;