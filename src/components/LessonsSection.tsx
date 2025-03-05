
import React, { useEffect, useRef } from 'react';
import LessonCard from './LessonCard';

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
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-element');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    const childElements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    childElements?.forEach(element => {
      observer.observe(element);
    });
    
    return () => {
      childElements?.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <section id="lessons" className="section-container" ref={sectionRef}>
      <h2 className="section-title animate-on-scroll">Bible Study Lessons</h2>
      <p className="section-subtitle animate-on-scroll">
        Expand your biblical knowledge with our carefully crafted studies designed 
        to deepen your understanding of scripture.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {lessons.map((lesson, index) => (
          <div key={lesson.id} className="animate-on-scroll" style={{ animationDelay: `${index * 150}ms` }}>
            <LessonCard {...lesson} />
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center animate-on-scroll">
        <a 
          href="#all-lessons" 
          className="inline-flex items-center justify-center px-8 py-3 rounded-lg border border-biblical-navy/20 text-biblical-navy font-medium hover:bg-biblical-cream/50 transition-colors"
        >
          Browse All Lessons
        </a>
      </div>
    </section>
  );
};

export default LessonsSection;
