
import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ScriptureCardProps {
  text: string;
  reference: string;
  translation?: string;
  lesson?: string; // Make lesson optional
  className?: string; // Add className prop
}

const ScriptureCard: React.FC<ScriptureCardProps> = ({ 
  text, 
  reference, 
  translation = "NIV", 
  lesson,
  className 
}) => {
  const [copied, setCopied] = useState(false);
  
  const handleCopy = () => {
    navigator.clipboard.writeText(`${text} - ${reference} (${translation})`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  return (
    <div className={cn(
      "glass-card p-6 shadow-sm relative overflow-hidden", 
      "border border-biblical-blue/10 rounded-lg",
      className
    )}>
      <div className="mb-4 relative">
        <p className="text-lg leading-relaxed text-biblical-parchment mb-4">{text}</p>
        <div className="flex justify-between items-center">
          <div>
            <p className="font-serif text-biblical-gold font-medium">{reference}</p>
            <p className="text-sm text-biblical-parchment/70">{translation}</p>
          </div>
          <button 
            onClick={handleCopy}
            aria-label="Copy scripture to clipboard"
            className="text-biblical-blue/70 hover:text-biblical-gold p-2 rounded-full transition-colors"
          >
            {copied ? <Check size={18} /> : <Copy size={18} />}
          </button>
        </div>
      </div>
      {lesson && (
        <div className="pt-4 border-t border-biblical-blue/10">
          <p className="text-sm text-biblical-parchment/90">{lesson}</p>
        </div>
      )}
    </div>
  );
};

export default ScriptureCard;
