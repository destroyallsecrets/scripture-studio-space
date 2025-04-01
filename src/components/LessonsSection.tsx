import React, { useRef, useEffect, useState } from 'react';
import SwipeableLessons from './SwipeableLessons';

const LessonsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    fetch('/lessons.json') // Corrected path to lessons.json
      .then(response => response.json())
      .then(data => setLessons(data));
  }, []);

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
          <a 
            href="/all-lessons" 
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg border border-theme-gold text-theme-gold font-medium hover:bg-theme-gold/10 transition-colors"
          >
            Browse All Lessons
          </a>
        </div>
      </div>
    </section>
  );
};

export default LessonsSection;
