
import React, { useState, useEffect } from 'react';
import { Shuffle, Book, CalendarDays } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import studyGuides from '@/data/studyGuides';
import ScriptureCard from './ScriptureCard';
import { Button } from './ui/button';

// Helper function to extract scriptures from study guides
const extractScriptures = () => {
  const allScriptures = studyGuides.flatMap(guide => {
    // Start with main scripture
    const scriptures = [{
      text: guide.mainScripture.text,
      reference: guide.mainScripture.reference,
      translation: guide.mainScripture.translation,
      lesson: guide.title
    }];
    
    // Add related scriptures
    if (guide.relatedScriptures) {
      guide.relatedScriptures.forEach(scripture => {
        scriptures.push({
          text: scripture.text,
          reference: scripture.reference,
          translation: scripture.translation || "KJV",
          lesson: guide.title
        });
      });
    }
    
    return scriptures;
  });
  
  return allScriptures;
};

interface MemoryCardProps {
  scripture: {
    text: string;
    reference: string;
    translation: string;
    lesson?: string;
  };
  isFlipped: boolean;
  isMatched: boolean;
  onClick: () => void;
}

const MemoryCard: React.FC<MemoryCardProps> = ({ scripture, isFlipped, isMatched, onClick }) => {
  return (
    <div
      className={`relative w-full aspect-[3/4] cursor-pointer transition-all duration-500 transform ${
        isFlipped ? 'rotate-y-180' : ''
      } ${isMatched ? 'opacity-70' : ''}`}
      onClick={onClick}
    >
      <div className={`absolute inset-0 backface-hidden ${
        isFlipped ? 'opacity-0' : 'opacity-100'
      } bg-biblical-blue/30 border border-biblical-gold/30 rounded-lg flex items-center justify-center`}>
        <Book className="text-biblical-gold/70" size={36} />
      </div>
      <div className={`absolute inset-0 backface-hidden rotate-y-180 ${
        isFlipped ? 'opacity-100' : 'opacity-0'
      } overflow-y-auto`}>
        <ScriptureCard
          text={scripture.text.length > 100 ? scripture.text.substring(0, 100) + "..." : scripture.text}
          reference={scripture.reference}
          translation={scripture.translation}
          lesson={scripture.lesson}
          className="h-full text-xs"
        />
      </div>
    </div>
  );
};

const MemoryGame: React.FC = () => {
  const [cards, setCards] = useState<Array<{
    id: number;
    scripture: ReturnType<typeof extractScriptures>[0];
    isFlipped: boolean;
    isMatched: boolean;
  }>>([]);
  const [flippedIndexes, setFlippedIndexes] = useState<number[]>([]);
  const [matches, setMatches] = useState(0);
  const [moves, setMoves] = useState(0);
  const [gameComplete, setGameComplete] = useState(false);

  // Initialize game with random scriptures
  const initializeGame = () => {
    const allScriptures = extractScriptures();
    // Pick 8 random scriptures
    const gameScriptures = [];
    const tempScriptures = [...allScriptures];
    
    for (let i = 0; i < 8 && tempScriptures.length > 0; i++) {
      const randomIndex = Math.floor(Math.random() * tempScriptures.length);
      gameScriptures.push(tempScriptures[randomIndex]);
      tempScriptures.splice(randomIndex, 1);
    }
    
    // Create pairs
    const cardPairs = gameScriptures.flatMap((scripture, index) => [
      {
        id: index * 2,
        scripture,
        isFlipped: false,
        isMatched: false,
        pairId: index
      },
      {
        id: index * 2 + 1,
        scripture,
        isFlipped: false,
        isMatched: false,
        pairId: index
      }
    ]);
    
    // Shuffle the cards
    const shuffledCards = [...cardPairs].sort(() => Math.random() - 0.5);
    
    // Set game state
    setCards(shuffledCards);
    setFlippedIndexes([]);
    setMatches(0);
    setMoves(0);
    setGameComplete(false);
  };

  useEffect(() => {
    initializeGame();
  }, []);

  useEffect(() => {
    // Check for matches when we have two flipped cards
    if (flippedIndexes.length === 2) {
      const firstIndex = flippedIndexes[0];
      const secondIndex = flippedIndexes[1];
      
      if (cards[firstIndex].scripture.reference === cards[secondIndex].scripture.reference) {
        // Match found
        setTimeout(() => {
          const updatedCards = [...cards];
          updatedCards[firstIndex].isMatched = true;
          updatedCards[secondIndex].isMatched = true;
          setCards(updatedCards);
          setMatches(matches + 1);
          setFlippedIndexes([]);
          
          toast({
            title: "Match found!",
            description: `${cards[firstIndex].scripture.reference}`,
          });
        }, 1000);
      } else {
        // No match
        setTimeout(() => {
          const updatedCards = [...cards];
          updatedCards[firstIndex].isFlipped = false;
          updatedCards[secondIndex].isFlipped = false;
          setCards(updatedCards);
          setFlippedIndexes([]);
        }, 1500);
      }
      
      setMoves(moves + 1);
    }
    
    // Check if game is complete (all cards matched)
    if (matches === cards.length / 2 && cards.length > 0) {
      setGameComplete(true);
      toast({
        title: "Congratulations!",
        description: `You completed the game in ${moves} moves!`,
      });
    }
  }, [flippedIndexes, cards, matches, moves]);

  const handleCardClick = (index: number) => {
    // Ignore if card is already flipped or matched, or if two cards are already flipped
    if (
      cards[index].isFlipped ||
      cards[index].isMatched ||
      flippedIndexes.length >= 2
    ) {
      return;
    }
    
    // Flip the card
    const updatedCards = [...cards];
    updatedCards[index].isFlipped = true;
    setCards(updatedCards);
    
    // Add to flipped indexes
    setFlippedIndexes([...flippedIndexes, index]);
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold text-theme-purple-light">Scripture Memory Game</h2>
          <p className="text-gray-300">Match pairs of scripture cards</p>
        </div>
        <div className="flex gap-4">
          <div className="text-center">
            <span className="block text-theme-gold text-lg">{moves}</span>
            <span className="text-sm text-gray-300">Moves</span>
          </div>
          <div className="text-center">
            <span className="block text-theme-gold text-lg">{matches}</span>
            <span className="text-sm text-gray-300">Matches</span>
          </div>
          <Button 
            onClick={initializeGame} 
            className="flex items-center gap-2 bg-theme-purple hover:bg-theme-purple-light"
          >
            <Shuffle size={16} />
            New Game
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
        {cards.map((card, index) => (
          <MemoryCard
            key={card.id}
            scripture={card.scripture}
            isFlipped={card.isFlipped}
            isMatched={card.isMatched}
            onClick={() => handleCardClick(index)}
          />
        ))}
      </div>
      
      {gameComplete && (
        <div className="mt-6 text-center">
          <p className="text-theme-gold text-xl mb-3">Game Complete!</p>
          <p className="text-gray-300 mb-4">You completed the game in {moves} moves!</p>
          <Button 
            onClick={initializeGame} 
            className="bg-theme-purple hover:bg-theme-purple-light"
          >
            Play Again
          </Button>
        </div>
      )}
    </div>
  );
};

export default MemoryGame;
