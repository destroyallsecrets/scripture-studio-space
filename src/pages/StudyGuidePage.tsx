
import React from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import StudyGuide from '@/components/StudyGuide';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useToast } from '@/components/ui/use-toast';
import studyGuides from '@/data/studyGuides';

const StudyGuidePage: React.FC = () => {
  const { id } = useParams<{id: string}>();
  const studyId = parseInt(id || "0", 10);
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Find the study guide with the matching ID
  const studyGuide = studyGuides.find(guide => guide.id === studyId);
  
  // If no matching study guide is found, redirect to home
  if (!studyGuide) {
    return <Navigate to="/" replace />;
  }

  // Handle swipe back gesture
  const handleSwipeBack = () => {
    toast({
      title: "Navigation",
      description: "Returning to lessons page",
    });
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-12 px-4 sm:px-6 bg-biblical-cream/10">
        <StudyGuide studyGuide={studyGuide} onSwipeBack={handleSwipeBack} />
      </main>
      <Footer />
    </div>
  );
};

export default StudyGuidePage;
