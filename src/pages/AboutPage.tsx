
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-biblical-navy text-white py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium mb-6 animate-fade-in">About Scripture Studio</h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto animate-fade-in-right">
              Dedicated to illuminating God's Word through thoughtful study resources and guidance
            </p>
          </div>
        </section>
        
        {/* Mission & Vision */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="fade-in-element">
                <h2 className="text-3xl font-serif text-biblical-navy mb-6">Our Mission</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Scripture Studio exists to provide accessible, in-depth Bible study resources that illuminate 
                  Scripture and empower believers to engage more deeply with God's Word. We believe that thoughtful 
                  Bible study is transformative, and we're committed to creating resources that facilitate that transformation.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Our goal is to bridge the gap between academic biblical scholarship and practical personal study, 
                  making the riches of Scripture accessible to everyone—whether you're a seasoned theologian or 
                  taking your first steps in Bible study.
                </p>
              </div>
              <div className="relative h-80 rounded-lg overflow-hidden shadow-lg fade-in-element">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1606044466411-207a9a49711f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')"
                  }}
                ></div>
                <div className="absolute inset-0 bg-biblical-navy/30"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-2xl md:text-3xl font-serif font-medium">
                    Illuminating God's Word
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Team */}
        <section className="py-16 bg-biblical-cream/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-medium text-biblical-navy mb-4">Our Team</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Our diverse team brings together expertise in biblical studies, theology, education, and digital technology 
                to create resources that are both academically sound and practically useful.
              </p>
              <div className="h-1 w-20 bg-biblical-gold mx-auto mt-6"></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {/* Team Member 1 */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 fade-in-element">
                <div className="w-24 h-24 rounded-full bg-biblical-blue/20 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-biblical-blue text-3xl font-serif">DR</span>
                </div>
                <h3 className="text-xl font-serif text-biblical-navy text-center mb-2">Dr. Rebecca Thompson</h3>
                <p className="text-biblical-blue/80 text-center mb-4">Biblical Studies Director</p>
                <p className="text-gray-600 text-center">
                  With a Ph.D. in New Testament Studies, Rebecca brings scholarly insight to all our Bible study materials.
                </p>
              </div>
              
              {/* Team Member 2 */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 fade-in-element">
                <div className="w-24 h-24 rounded-full bg-biblical-blue/20 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-biblical-blue text-3xl font-serif">JM</span>
                </div>
                <h3 className="text-xl font-serif text-biblical-navy text-center mb-2">Pastor James Miller</h3>
                <p className="text-biblical-blue/80 text-center mb-4">Content Developer</p>
                <p className="text-gray-600 text-center">
                  With 15+ years of pastoral experience, James helps ensure our content is both theologically sound and practically relevant.
                </p>
              </div>
              
              {/* Team Member 3 */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 fade-in-element">
                <div className="w-24 h-24 rounded-full bg-biblical-blue/20 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-biblical-blue text-3xl font-serif">SL</span>
                </div>
                <h3 className="text-xl font-serif text-biblical-navy text-center mb-2">Sarah Lee</h3>
                <p className="text-biblical-blue/80 text-center mb-4">Educational Designer</p>
                <p className="text-gray-600 text-center">
                  Sarah's background in educational psychology helps us create study guides that facilitate deep learning and retention.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-medium text-biblical-navy mb-4">Testimonials</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Hear what others have to say about their experience with Scripture Studio resources
              </p>
              <div className="h-1 w-20 bg-biblical-gold mx-auto mt-6"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-biblical-navy/5 p-6 rounded-lg border border-gray-100 fade-in-element relative">
                <svg className="absolute top-4 left-4 text-biblical-gold/30 h-12 w-12" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <div className="mt-6 ml-6">
                  <p className="text-gray-700 italic mb-4">
                    "Scripture Studio's study on the Sermon on the Mount transformed our small group. 
                    The resources were deep yet accessible, and the discussion questions really got us thinking."
                  </p>
                  <p className="font-medium text-biblical-navy">Michael R.</p>
                  <p className="text-sm text-gray-600">Small Group Leader</p>
                </div>
              </div>
              
              <div className="bg-biblical-navy/5 p-6 rounded-lg border border-gray-100 fade-in-element relative">
                <svg className="absolute top-4 left-4 text-biblical-gold/30 h-12 w-12" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <div className="mt-6 ml-6">
                  <p className="text-gray-700 italic mb-4">
                    "As someone new to Bible study, I was worried materials would be over my head. 
                    Scripture Studio's approach has been perfect—challenging but approachable, with great context that helps me understand."
                  </p>
                  <p className="font-medium text-biblical-navy">Jennifer T.</p>
                  <p className="text-sm text-gray-600">New Bible Student</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Button variant="default" className="bg-biblical-blue hover:bg-biblical-blue/90">
                <Link to="/all-lessons" className="flex items-center gap-2">
                  Explore Our Lessons
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
