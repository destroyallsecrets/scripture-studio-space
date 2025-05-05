
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MemoryGame from '@/components/MemoryGame';

const MemoryGamePage = () => {
  return (
    <div className="min-h-screen bg-dark-surface">
      <Header />
      <main className="max-w-7xl mx-auto py-16 px-4 sm:px-6">
        <div className="mb-6">
          <Link 
            to="/" 
            className="inline-flex items-center text-theme-gold hover:text-theme-gold/80 transition-colors"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 mr-2" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" 
                clipRule="evenodd" 
              />
            </svg>
            Back to Home
          </Link>
        </div>

        <MemoryGame />
      </main>
      <Footer />
    </div>
  );
};

export default MemoryGamePage;
