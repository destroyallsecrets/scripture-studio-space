import React from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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
        "bg-dark-surface border border-dark-border rounded-xl overflow-hidden group transition-all duration-500",
        "hover:shadow-lg hover:-translate-y-2 hover:shadow-theme-purple/20",
        className
      )}
    >
      <div className="aspect-w-16 aspect-h-9 w-full relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/90 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500" />
        <div className="absolute bottom-0 left-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <span className="reference-tag group-hover:shadow-md transition-all duration-300">
            {scripture}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="font-serif text-xl font-medium text-white mb-2 group-hover:text-theme-purple-light transition-colors duration-300">{title}</h3>
        <p className="text-gray-300 mb-4 line-clamp-2">{description}</p>
        
        <Link 
          to={href}
          className="inline-flex items-center text-theme-purple-light hover:text-theme-gold transition-colors font-medium group relative overflow-hidden"
          aria-label={`Study lesson: ${title}`}
        >
          <span className="relative z-10">Study this lesson</span>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-theme-purple-light group-hover:w-full transition-all duration-500"></span>
        </Link>
      </div>
    </div>
  );
};

LessonCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  scripture: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
};

LessonCard.defaultProps = {
  className: '',
};

export default LessonCard;
