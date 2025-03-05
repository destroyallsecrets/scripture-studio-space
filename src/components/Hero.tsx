
import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  // Subtle parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollPosition = window.scrollY;
        heroRef.current.style.transform = `translateY(${scrollPosition * 0.15}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-biblical-cream to-white z-0" />
      
      {/* Overlay image with parallax effect */}
      <div 
        ref={heroRef}
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1504052434569-70ad5836ab65?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <span className="inline-block animate-fade-in-left mb-3 reference-tag">
          Explore the Word
        </span>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium text-biblical-navy mb-6 animate-fade-in">
          Discover the Depth<br className="hidden sm:block" /> of Scripture
        </h1>
        
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-10 animate-fade-in-right">
          Deepen your understanding through thoughtfully crafted Bible study lessons
          designed to illuminate the text and transform your faith journey.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in">
          <a 
            href="#lessons" 
            className="px-8 py-3 rounded-lg bg-biblical-blue text-white font-medium hover:bg-biblical-blue/90 transition-colors shadow-sm premium-hover"
          >
            Browse Lessons
          </a>
          <a 
            href="#about" 
            className="px-8 py-3 rounded-lg border border-biblical-navy/20 text-biblical-navy font-medium hover:bg-biblical-cream/50 transition-colors premium-hover"
          >
            Learn More
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <a href="#lessons" aria-label="Scroll down">
          <ChevronDown className="text-biblical-navy/60 h-8 w-8" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
