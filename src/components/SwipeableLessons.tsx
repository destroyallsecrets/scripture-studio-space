
import React, { useState, useRef, useEffect } from 'react';
import { motion, PanInfo, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import LessonCard from './LessonCard';
import { useToast } from '@/components/ui/use-toast';

interface LessonData {
  id: number;
  title: string;
  description: string;
  scripture: string;
  imageSrc: string;
  href: string;
}

interface SwipeableLessonsProps {
  lessons: LessonData[];
}

const SwipeableLessons: React.FC<SwipeableLessonsProps> = ({ lessons }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const swipeContainerRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const paginate = (newDirection: number) => {
    // Calculate new index with wraparound
    const newIndex = (currentIndex + newDirection + lessons.length) % lessons.length;
    setDirection(newDirection);
    setCurrentIndex(newIndex);
    
    // Provide accessibility feedback
    toast({
      title: "Navigation",
      description: `Viewing lesson ${newIndex + 1} of ${lessons.length}: ${lessons[newIndex].title}`,
      duration: 2000,
    });
  };

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    // Determine swipe direction based on velocity
    const swipeThreshold = 50;
    const swipeDirection = info.offset.x < -swipeThreshold ? 1 : info.offset.x > swipeThreshold ? -1 : 0;
    
    if (swipeDirection !== 0) {
      paginate(swipeDirection);
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        paginate(-1);
      } else if (e.key === 'ArrowRight') {
        paginate(1);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  // Variants for the card animations
  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0
      };
    }
  };

  return (
    <div 
      className="relative w-full max-w-5xl mx-auto py-8 swipe-container"
      ref={swipeContainerRef}
      aria-live="polite"
      aria-atomic="true"
    >
      {/* Navigation buttons */}
      <button 
        onClick={() => paginate(-1)} 
        className="swipe-indicator swipe-left"
        aria-label="Previous lesson"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button 
        onClick={() => paginate(1)} 
        className="swipe-indicator swipe-right"
        aria-label="Next lesson"
      >
        <ChevronRight size={24} />
      </button>
      
      {/* Pagination indicator */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2 py-4 z-10">
        {lessons.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > currentIndex ? 1 : -1);
              setCurrentIndex(i);
            }}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i === currentIndex 
                ? 'bg-theme-purple scale-125' 
                : 'bg-dark-border hover:bg-theme-purple/50'
            }`}
            aria-label={`Go to lesson ${i + 1}`}
            aria-current={i === currentIndex ? 'true' : 'false'}
          />
        ))}
      </div>
      
      {/* Swipeable card area */}
      <div className="overflow-hidden w-full h-[500px] relative">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.8}
            onDragEnd={handleDragEnd}
            className="absolute w-full max-w-md mx-auto left-0 right-0"
            aria-hidden={false}
            aria-describedby={`lesson-${currentIndex}-desc`}
          >
            <div className="p-4">
              <LessonCard
                {...lessons[currentIndex]}
                className="mx-auto"
              />
              <div id={`lesson-${currentIndex}-desc`} className="sr-only">
                {lessons[currentIndex].title}: {lessons[currentIndex].description}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* Text instruction for users */}
      <p className="text-center text-muted-foreground mt-4">
        Swipe left or right to browse lessons or use arrow keys
      </p>
    </div>
  );
};

export default SwipeableLessons;
