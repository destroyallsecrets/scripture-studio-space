
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Track scrolling to change header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 ease-in-out px-4 md:px-6",
        isScrolled 
          ? "py-3 bg-white/90 backdrop-blur-md shadow-sm" 
          : "py-5 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="text-biblical-navy font-serif text-xl md:text-2xl font-medium">
          Scripture Studio
        </a>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <a href="#home" className="nav-link">Home</a>
          <a href="#lessons" className="nav-link">Lessons</a>
          <a href="#themes" className="nav-link">Themes</a>
          <a href="#resources" className="nav-link">Resources</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
        
        {/* Mobile menu trigger */}
        <button 
          className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={cn(
          "md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-md transition-all duration-300 overflow-hidden",
          mobileMenuOpen ? "max-h-screen py-4" : "max-h-0"
        )}
      >
        <nav className="flex flex-col px-4 space-y-2">
          <a href="#home" className="nav-link py-3" onClick={() => setMobileMenuOpen(false)}>Home</a>
          <a href="#lessons" className="nav-link py-3" onClick={() => setMobileMenuOpen(false)}>Lessons</a>
          <a href="#themes" className="nav-link py-3" onClick={() => setMobileMenuOpen(false)}>Themes</a>
          <a href="#resources" className="nav-link py-3" onClick={() => setMobileMenuOpen(false)}>Resources</a>
          <a href="#contact" className="nav-link py-3" onClick={() => setMobileMenuOpen(false)}>Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
