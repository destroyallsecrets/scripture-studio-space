
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Track scrolling to change header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when changing routes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isActiveLink = (path: string) => {
    if (path === '#home' && location.pathname === '/') return true;
    if (path.startsWith('#') && location.pathname === '/') return false;
    return location.pathname.includes(path.replace('#', ''));
  };

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 ease-in-out px-4 md:px-6",
        isScrolled 
          ? "py-3 bg-white/95 backdrop-blur-md shadow-sm" 
          : "py-5 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="text-biblical-navy font-serif text-xl md:text-2xl font-medium transition-colors hover:text-biblical-blue"
        >
          Scripture Studio
        </Link>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <Link 
            to="/" 
            className={cn(
              "nav-link relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-biblical-blue after:transition-all after:duration-300",
              isActiveLink('#home') && "after:w-full text-biblical-blue"
            )}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={cn(
              "nav-link relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-biblical-blue after:transition-all after:duration-300 hover:after:w-full",
              isActiveLink('/about') && "after:w-full text-biblical-blue"
            )}
          >
            About
          </Link>
          <Link 
            to="/#lessons" 
            className={cn(
              "nav-link relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-biblical-blue after:transition-all after:duration-300 hover:after:w-full",
              isActiveLink('#lessons') && "after:w-full text-biblical-blue"
            )}
          >
            Lessons
          </Link>
          <Link 
            to="/#themes" 
            className={cn(
              "nav-link relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-biblical-blue after:transition-all after:duration-300 hover:after:w-full",
              isActiveLink('#themes') && "after:w-full text-biblical-blue"
            )}
          >
            Themes
          </Link>
          <Link 
            to="/#resources" 
            className={cn(
              "nav-link relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-biblical-blue after:transition-all after:duration-300 hover:after:w-full",
              isActiveLink('#resources') && "after:w-full text-biblical-blue"
            )}
          >
            Resources
          </Link>
          <Link 
            to="/#contact" 
            className={cn(
              "nav-link relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-biblical-blue after:transition-all after:duration-300 hover:after:w-full",
              isActiveLink('#contact') && "after:w-full text-biblical-blue"
            )}
          >
            Contact
          </Link>
        </nav>
        
        {/* Mobile menu trigger */}
        <button 
          className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all"
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
          <Link 
            to="/" 
            className={cn(
              "nav-link py-3 transition-all",
              isActiveLink('#home') && "text-biblical-blue pl-2 border-l-4 border-biblical-blue"
            )}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={cn(
              "nav-link py-3 transition-all",
              isActiveLink('/about') && "text-biblical-blue pl-2 border-l-4 border-biblical-blue"
            )}
          >
            About
          </Link>
          <Link 
            to="/#lessons" 
            className={cn(
              "nav-link py-3 transition-all",
              isActiveLink('#lessons') && "text-biblical-blue pl-2 border-l-4 border-biblical-blue"
            )}
          >
            Lessons
          </Link>
          <Link 
            to="/#themes" 
            className={cn(
              "nav-link py-3 transition-all",
              isActiveLink('#themes') && "text-biblical-blue pl-2 border-l-4 border-biblical-blue"
            )}
          >
            Themes
          </Link>
          <Link 
            to="/#resources" 
            className={cn(
              "nav-link py-3 transition-all",
              isActiveLink('#resources') && "text-biblical-blue pl-2 border-l-4 border-biblical-blue"
            )}
          >
            Resources
          </Link>
          <Link 
            to="/#contact" 
            className={cn(
              "nav-link py-3 transition-all",
              isActiveLink('#contact') && "text-biblical-blue pl-2 border-l-4 border-biblical-blue"
            )}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
