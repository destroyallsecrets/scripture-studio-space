
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LessonCard from '@/components/LessonCard';
import MonthlyFilter, { MonthData } from '@/components/MonthlyFilter';
import studyGuides from '@/data/studyGuides';

const AllLessonsPage = () => {
  // State for selected month filter
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);
  
  // Extract available months from study guides
  const availableMonths = useMemo(() => {
    const months = new Map<string, MonthData>();
    
    studyGuides.forEach(guide => {
      if (guide.month && !months.has(guide.month)) {
        const [monthName, year] = guide.month.split('-');
        months.set(guide.month, {
          id: guide.month,
          name: monthName.charAt(0).toUpperCase() + monthName.slice(1),
          year: parseInt(year)
        });
      }
    });
    
    // Convert to array and sort by year and month
    return Array.from(months.values())
      .sort((a, b) => {
        if (a.year !== b.year) return b.year - a.year;
        
        const monthOrder = {
          'jan': 0, 'feb': 1, 'mar': 2, 'apr': 3, 'may': 4, 'jun': 5,
          'jul': 6, 'aug': 7, 'sep': 8, 'oct': 9, 'nov': 10, 'dec': 11
        };
        
        const aMonth = a.name.toLowerCase().substring(0, 3);
        const bMonth = b.name.toLowerCase().substring(0, 3);
        
        return monthOrder[aMonth as keyof typeof monthOrder] - 
               monthOrder[bMonth as keyof typeof monthOrder];
      });
  }, []);
  
  // Filter lessons based on selected month
  const filteredLessons = useMemo(() => {
    // Map study guides to the format needed for LessonCard
    const lessons = studyGuides
      .filter(guide => !selectedMonth || guide.month === selectedMonth)
      .map(guide => ({
        id: guide.id,
        title: guide.title,
        description: guide.description,
        scripture: guide.mainScripture.reference,
        imageSrc: `https://images.unsplash.com/photo-${1500000000000 + guide.id * 75000}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`,
        href: `/study/${guide.id}`
      }));
      
    return lessons;
  }, [selectedMonth]);

  return (
    <div className="min-h-screen bg-dark-surface">
      <Header />
      <main className="max-w-7xl mx-auto py-16 px-4 sm:px-6">
        <div className="mb-8">
          <div className="flex justify-between items-center flex-wrap gap-4">
            <div>
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
            
            <Link 
              to="/memory-game" 
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-theme-gold text-dark-bg font-medium hover:bg-theme-gold/90 transition-colors"
            >
              Play Memory Game
            </Link>
          </div>
        </div>

        <MonthlyFilter 
          availableMonths={availableMonths}
          selectedMonth={selectedMonth}
          onSelectMonth={setSelectedMonth}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLessons.length > 0 ? (
            filteredLessons.map((lesson) => (
              <div key={lesson.id} className="animate-fade-in">
                <LessonCard {...lesson} />
              </div>
            ))
          ) : (
            <div className="col-span-full py-12 text-center">
              <p className="text-xl text-gray-400">No lessons found for the selected month.</p>
              <button 
                onClick={() => setSelectedMonth(null)} 
                className="mt-4 text-theme-gold hover:underline"
              >
                View all lessons
              </button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AllLessonsPage;
