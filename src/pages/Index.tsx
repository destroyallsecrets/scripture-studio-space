
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import LessonsSection from '@/components/LessonsSection';
import ThemesSection from '@/components/ThemesSection';
import ResourcesSection from '@/components/ResourcesSection';
import Footer from '@/components/Footer';

const Index = () => {
  // Initialize animation observers for scroll effects
  useEffect(() => {
    const fadeElements = document.querySelectorAll('.fade-in-element');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    fadeElements.forEach(element => observer.observe(element));
    
    return () => {
      fadeElements.forEach(element => observer.unobserve(element));
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <LessonsSection />
      <ThemesSection />
      <ResourcesSection />
      <Footer />
    </div>
  );
};

export default Index;
