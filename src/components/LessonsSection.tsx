
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import SwipeableLessons from './SwipeableLessons';
import studyGuides from '@/data/studyGuides';

// Map study guides to the format expected by SwipeableLessons
const lessons = studyGuides.map(guide => ({
  id: guide.id,
  title: guide.title,
  description: guide.description,
  scripture: guide.mainScripture.reference,
  imageSrc: `https://images.unsplash.com/photo-${1500000000000 + guide.id * 75000}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`,
  href: `/study/${guide.id}`
}));

const LessonsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section id="lessons" className="relative py-20 px-4 bg-dark-surface" ref={sectionRef}>
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg to-transparent opacity-40"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="section-title text-theme-purple-light animate-fade-in">Bible Study Lessons</h2>
        <p className="section-subtitle text-gray-300 animate-fade-in">
          Expand your biblical knowledge with our carefully crafted studies designed 
          to deepen your understanding of scripture.
        </p>
        
        <SwipeableLessons lessons={lessons} />
        
        <div className="mt-12 text-center animate-fade-in">
          <Link 
            to="/all-lessons" 
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg border border-theme-gold text-theme-gold font-medium hover:bg-theme-gold/10 transition-colors"
          >
            Browse All Lessons
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LessonsSection;
