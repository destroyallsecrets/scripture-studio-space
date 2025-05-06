
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-biblical-cream/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-biblical-navy mb-4">About Scripture Studio</h2>
          <div className="h-1 w-20 bg-biblical-gold mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="fade-in-element">
            <h3 className="text-xl md:text-2xl font-serif text-biblical-navy mb-4">Our Mission</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Scripture Studio was born from a desire to make deep biblical study accessible to everyone. 
              Our mission is to provide thoughtfully crafted Bible study resources that illuminate Scripture 
              and transform faith journeys, regardless of where you are in your spiritual walk.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We believe that engaging with Scripture should be both intellectually stimulating and spiritually 
              enriching. Through our carefully designed study guides, we aim to bridge the gap between scholarly 
              research and everyday application.
            </p>
          </div>

          <div className="fade-in-element">
            <h3 className="text-xl md:text-2xl font-serif text-biblical-navy mb-4">Our Approach</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Each of our Bible study guides follows a structured approach designed to facilitate deeper understanding:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 leading-relaxed">
              <li>Historical and literary context</li>
              <li>Verse-by-verse analysis</li>
              <li>Key theological themes</li>
              <li>Practical application points</li>
              <li>Thoughtful discussion questions</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              This multifaceted approach ensures that you not only understand what Scripture says, 
              but also grasp its significance and relevance for today.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-gray-100 fade-in-element">
            <h3 className="text-xl md:text-2xl font-serif text-biblical-navy mb-4 text-center">Our Values</h3>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="bg-biblical-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-biblical-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h4 className="font-serif text-lg text-biblical-navy mb-2">Accessibility</h4>
                <p className="text-gray-600">Making in-depth Bible study accessible to all, regardless of theological background</p>
              </div>
              
              <div className="text-center">
                <div className="bg-biblical-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-biblical-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-serif text-lg text-biblical-navy mb-2">Accuracy</h4>
                <p className="text-gray-600">Committed to faithful interpretation and scholarly integrity</p>
              </div>
              
              <div className="text-center">
                <div className="bg-biblical-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-biblical-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                  </svg>
                </div>
                <h4 className="font-serif text-lg text-biblical-navy mb-2">Application</h4>
                <p className="text-gray-600">Bridging ancient texts with contemporary life for meaningful impact</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Button variant="default" className="bg-biblical-blue hover:bg-biblical-blue/90">
            <Link to="/all-lessons" className="flex items-center gap-2">
              Browse All Lessons <ArrowRight size={16} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
