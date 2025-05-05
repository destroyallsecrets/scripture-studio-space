
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LessonCard from '@/components/LessonCard';
import studyGuides from '@/data/studyGuides';

const AllLessonsPage = () => {
  // Map study guides to the format needed for LessonCard
  const lessons = studyGuides.map(guide => ({
    id: guide.id,
    title: guide.title,
    description: guide.description,
    scripture: guide.mainScripture.reference,
    imageSrc: `https://images.unsplash.com/photo-${1500000000000 + guide.id * 75000}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`,
    href: `/study/${guide.id}`
  }));

  return (
    <div className="min-h-screen bg-dark-surface">
      <Header />
      <main className="max-w-7xl mx-auto py-16 px-4 sm:px-6">
        <div className="mb-12">
          <Link 
            to="/#lessons" 
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
          
          <h1 className="text-3xl md:text-4xl font-bold mt-6 text-theme-purple-light">
            All Bible Study Lessons
          </h1>
          <p className="mt-4 text-gray-300 max-w-3xl">
            Browse our complete collection of Bible study lessons. Each lesson provides in-depth 
            exploration of scripture with practical applications for your spiritual growth.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {lessons.map((lesson) => (
            <div key={lesson.id} className="animate-fade-in">
              <LessonCard {...lesson} />
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AllLessonsPage;
