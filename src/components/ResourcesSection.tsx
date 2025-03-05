
import React from 'react';
import { Download, FileText, BookOpen, Video } from 'lucide-react';
import { cn } from '@/lib/utils';

const resources = [
  {
    title: "Study Guide PDF",
    description: "Comprehensive study companion with notes and reflection questions",
    icon: FileText,
    href: "#download/study-guide",
    type: "download"
  },
  {
    title: "Scripture Journal",
    description: "Printable journal pages for recording insights and prayers",
    icon: BookOpen,
    href: "#download/journal",
    type: "download"
  },
  {
    title: "Teaching Videos",
    description: "Watch supplementary teaching videos exploring lesson themes",
    icon: Video,
    href: "#resources/videos",
    type: "link"
  },
  {
    title: "Discussion Questions",
    description: "Group study questions to facilitate meaningful conversations",
    icon: FileText,
    href: "#download/questions",
    type: "download"
  }
];

const ResourceCard = ({ 
  title, 
  description, 
  icon: Icon, 
  href, 
  type 
}: {
  title: string;
  description: string;
  icon: React.ElementType;
  href: string;
  type: "download" | "link";
}) => {
  return (
    <a 
      href={href} 
      className={cn(
        "glass-card p-6 flex items-start gap-4 transition-all duration-300",
        "hover:-translate-y-1 hover:shadow-md"
      )}
    >
      <div className="bg-biblical-blue/10 text-biblical-blue p-3 rounded-full">
        <Icon size={24} />
      </div>
      <div className="flex-grow">
        <h3 className="font-serif text-lg font-medium text-biblical-navy mb-1">{title}</h3>
        <p className="text-gray-600 text-sm mb-3">{description}</p>
        <span className="inline-flex items-center text-sm font-medium text-biblical-blue">
          {type === "download" ? (
            <>
              <Download size={14} className="mr-1" />
              Download Resource
            </>
          ) : (
            <>Access Resource</>
          )}
        </span>
      </div>
    </a>
  );
};

const ResourcesSection = () => {
  return (
    <section id="resources" className="section-container">
      <h2 className="section-title">Study Resources</h2>
      <p className="section-subtitle">
        Access supplementary materials to enhance your Bible study experience.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {resources.map((resource, index) => (
          <ResourceCard key={index} {...resource} />
        ))}
      </div>
      
      <div className="mt-16 p-8 bg-biblical-navy/5 rounded-xl">
        <h3 className="font-serif text-2xl text-biblical-navy mb-4 text-center">External References</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <a 
            href="https://www.biblehub.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
          >
            <h4 className="font-serif text-xl mb-2">BibleHub</h4>
            <p className="text-gray-600 mb-3">Access commentaries, concordances, and multiple translations</p>
            <span className="text-biblical-blue font-medium">Visit BibleHub →</span>
          </a>
          
          <a 
            href="https://www.openbible.info" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
          >
            <h4 className="font-serif text-xl mb-2">OpenBible</h4>
            <p className="text-gray-600 mb-3">Discover topical verse collections and study tools</p>
            <span className="text-biblical-blue font-medium">Visit OpenBible →</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
