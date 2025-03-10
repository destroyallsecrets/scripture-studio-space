
import React, { useRef } from 'react';
import SwipeableLessons from './SwipeableLessons';

const lessons = [
  {
    id: 1,
    title: "The Call of Abraham",
    description: "Explore how God called Abraham to leave his homeland and follow divine guidance into the unknown.",
    scripture: "Genesis 12:1-9",
    imageSrc: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    href: "#lesson/abraham"
  },
  {
    id: 2,
    title: "The Sermon on the Mount",
    description: "Discover the revolutionary teachings of Jesus that challenged conventional wisdom and redefined spirituality.",
    scripture: "Matthew 5-7",
    imageSrc: "https://images.unsplash.com/photo-1533000759938-aa0ba70beceb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    href: "#lesson/sermon"
  },
  {
    id: 3,
    title: "Paul's Letter to the Romans",
    description: "Understand the foundational doctrines of faith, grace, and salvation as explained by the apostle Paul.",
    scripture: "Romans 8:1-17",
    imageSrc: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    href: "#lesson/romans"
  },
  {
    id: 4,
    title: "The Wisdom of Proverbs",
    description: "Find practical guidance for daily living through the wisdom literature of the Old Testament.",
    scripture: "Proverbs 3:1-12",
    imageSrc: "https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    href: "#lesson/proverbs"
  }
];

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
          <a 
            href="#all-lessons" 
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
