import React, { useEffect, lazy, Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/components/Header';
<<<<<<< HEAD
import Hero from '@/components/Hero';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/cardgrid';
import LessonsSection from '@/components/LessonsSection';
import ThemesSection from '@/components/ThemesSection';
import ResourcesSection from '@/components/ResourcesSection';
=======
>>>>>>> ec8201de74d0f9fb839850e2f5e6afcbe30ec9d0
import Footer from '@/components/Footer';

const Hero = lazy(() => import('@/components/Hero'));
const LessonsSection = lazy(() => import('@/components/LessonsSection'));
const ThemesSection = lazy(() => import('@/components/ThemesSection'));
const ResourcesSection = lazy(() => import('@/components/ResourcesSection'));

const Index = () => {
  const location = useLocation();

  // Handle smooth scrolling to hash links
  useEffect(() => {
    if (location.hash) {
      // Wait for the DOM to be fully loaded
      setTimeout(() => {
        const id = location.hash.substring(1);
        const element = document.getElementById(id);
        if (element) {
          const headerOffset = 80; // Account for fixed header
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      // Scroll to top when navigating to the home page without hash
      window.scrollTo(0, 0);
    }
  }, [location]);

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
<<<<<<< HEAD
      <Hero />
      <Card />
      <LessonsSection />
      <ThemesSection />
      <ResourcesSection />
=======
      <Suspense fallback={<div>Loading...</div>}>
        <Hero />
        <LessonsSection />
        <ThemesSection />
        <ResourcesSection />
      </Suspense>
>>>>>>> ec8201de74d0f9fb839850e2f5e6afcbe30ec9d0
      <Footer />
    </div>
  );
};

export default Index;
