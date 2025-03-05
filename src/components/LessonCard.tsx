
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LessonCardProps {
  title: string;
  description: string;
  scripture: string;
  imageSrc: string;
  href: string;
  className?: string;
}

const LessonCard: React.FC<LessonCardProps> = ({
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
        "glass-card overflow-hidden group transition-all duration-300",
        "hover:shadow-lg hover:-translate-y-1",
        className
      )}
    >
      <div className="aspect-w-16 aspect-h-9 w-full relative overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title} 
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70" />
        <div className="absolute bottom-0 left-0 p-4">
          <span className="reference-tag">{scripture}</span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="font-serif text-xl font-medium text-biblical-navy mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        
        <a 
          href={href} 
          className="inline-flex items-center text-biblical-blue hover:text-biblical-navy transition-colors font-medium"
        >
          Study this lesson
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
};

export default LessonCard;
