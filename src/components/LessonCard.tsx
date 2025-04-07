
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface LessonCardProps {
  id: number;
  title: string;
  description: string;
  scripture: string;
  className?: string;
}

const LessonCard: React.FC<LessonCardProps> = ({
  id,
  title,
  description,
  scripture,
  className,
}) => {
  // Validate the id parameter
  const isValidId = Number.isInteger(id) && id > 0;

  return (
    <div 
      className={cn(
        "bg-dark-surface border border-dark-border rounded-xl overflow-hidden group transition-all duration-500",
        "hover:shadow-lg hover:-translate-y-2 hover:shadow-theme-purple/20",
        className
      )}
    >
      <div className="h-full flex flex-col justify-between">
        <div className="flex-1 p-8">
          <h3 className="font-serif text-xl font-medium text-white mb-2 group-hover:text-theme-purple-light transition-colors duration-300">{title}</h3>
          <p className="text-gray-300 mb-4 line-clamp-3">{description}</p>
          <p className="text-gray-400 mb-4 overflow-hidden">{scripture}</p>
        </div>
        {isValidId && (
          <Link 
            to={`/study/${id}`}
            className="inline-flex items-center text-theme-purple-light hover:text-theme-gold transition-colors font-medium group relative overflow-hidden px-8 py-4"
          >
            <span className="relative z-10">Study this lesson</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-theme-purple-light group-hover:w-full transition-all duration-500"></span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default LessonCard;
