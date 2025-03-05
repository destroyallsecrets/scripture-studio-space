
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface LessonCardProps {
  id: number;
  title: string;
  description: string;
  scripture: string;
  imageSrc: string;
  href: string;
  className?: string;
}

const LessonCard: React.FC<LessonCardProps> = ({
  id,
  title,
  description,
  scripture,
  imageSrc,
  href,
  className,
}) => {
  return (
    <div 
      className={cn(
        "glass-card overflow-hidden group transition-all duration-500",
        "hover:shadow-lg hover:-translate-y-2 hover:shadow-biblical-blue/10",
        className
      )}
    >
      <div className="aspect-w-16 aspect-h-9 w-full relative overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title} 
          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
        <div className="absolute bottom-0 left-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <span className="reference-tag group-hover:shadow-md transition-all duration-300">
            {scripture}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="font-serif text-xl font-medium text-biblical-navy mb-2 group-hover:text-biblical-blue transition-colors duration-300">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        
        <Link 
          to={`/study/${id}`}
          className="inline-flex items-center text-biblical-blue hover:text-biblical-navy transition-colors font-medium group relative overflow-hidden"
        >
          <span className="relative z-10">Study this lesson</span>
          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-biblical-blue group-hover:w-full transition-all duration-500"></span>
        </Link>
      </div>
    </div>
  );
};

export default LessonCard;
