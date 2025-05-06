
import React, { useRef, useEffect, useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import studyGuides from '@/data/studyGuides'; 

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const slideInterval = useRef<number | null>(null);

  // Throttle function to limit the number of times `handleScroll` is called
  const throttle = (callback: (...args: unknown[]) => void, delay: number) => {
    let timeoutId: number | null = null;

    return (...args: unknown[]) => {
      if (timeoutId === null) {
        timeoutId = window.setTimeout(() => {
          timeoutId = null;
          callback(...args);
        }, delay);
      }
    };
  };
  
  // Subtle parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollPosition = window.scrollY;
        heroRef.current.style.transform = `translateY(${scrollPosition * 0.25}px)`;
      }
    };

    const throttledHandleScroll = throttle(handleScroll, 16); // Throttle to 60fps
    window.addEventListener('scroll', throttledHandleScroll);
    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, []);

  // Automatic slideshow for verses
  useEffect(() => {
    // Start the automatic slideshow
    slideInterval.current = window.setInterval(() => {
      setCurrentSlide(prevSlide => (prevSlide + 1) % studyGuides.length);
    }, 10000); // Change verse every 10 seconds

    // Cleanup the interval on component unmount
    return () => {
      if (slideInterval.current !== null) {
        clearInterval(slideInterval.current);
      }
    };
  }, []);

  return (
    <section 
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20"
    >
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-biblical-navy to-white z-0" />
      
      {/* Overlay image with parallax effect */}
      <div 
        ref={heroRef}
        className="absolute inset-0 z-0 opacity-10 transition-transform duration-300 ease-out"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1504052434569-70ad5836ab65?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Tagline and heading */}
        <span className="inline-block animate-fade-in-left mb-3 reference-tag">
          Explore the Word
        </span>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium text-biblical-navy mb-6 animate-fade-in">
          Discover the Depth<br className="hidden sm:block" /> of Scripture
        </h1>
        
        {/* Call to Action */}
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-10 animate-fade-in-right">
          Expand your understanding through thoughtfully crafted Bible study lessons
          designed to illuminate the text and transform your faith journey.
        </p>

        {/* Verse Slideshow */}
        <div className="mt-24 mb-12">
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center h-24">
              {studyGuides.map((guide, index) => (
                <div 
                  key={guide.id} 
                  className={`text-lg text-biblical-navy mb-4 transition-opacity duration-1000 absolute ${
                    currentSlide === index ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <p className="font-serif">{guide.mainScripture.reference} - {guide.mainScripture.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in">
          <a 
            href="#lessons" 
            className="px-8 py-3 rounded-lg bg-biblical-blue text-white font-medium hover:bg-biblical-blue/90 transition-colors shadow-sm premium-hover"
          >
            Browse Lessons
          </a>
          <div className="flex space-x-3">
            <a 
              href="#about" 
              className="px-8 py-3 rounded-lg border border-biblical-navy/20 text-biblical-navy font-medium hover:bg-biblical-cream/50 transition-colors premium-hover"
            >
              Learn More
            </a>
            <Link 
              to="/about"
              className="px-8 py-3 rounded-lg border border-biblical-navy/20 bg-biblical-cream/20 text-biblical-navy font-medium hover:bg-biblical-cream/50 transition-colors premium-hover flex items-center"
            >
              Full About <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
