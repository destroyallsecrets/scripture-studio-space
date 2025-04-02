
import React from 'react';
import { Download } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ResourceCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  href: string;
  type: "download" | "link";
}

const StudyGuideResourceCard: React.FC<ResourceCardProps> = ({ 
  title, 
  description, 
  icon: Icon, 
  href, 
  type 
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
        <h3 className="font-serif text-lg font-medium text-biblical-gold mb-1">{title}</h3>
        <p className="text-biblical-parchment text-sm mb-3">{description}</p>
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

export default StudyGuideResourceCard;
