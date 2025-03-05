
import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ScriptureCardProps {
  text: string;
  reference: string;
  translation?: string;
  className?: string;
}

const ScriptureCard: React.FC<ScriptureCardProps> = ({ 
  text, 
  reference, 
  translation = "NIV",
  className 
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(`${text} (${reference}, ${translation})`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={cn(
      "glass-card p-6 md:p-8 relative overflow-hidden transition-all duration-300",
      "hover:shadow-md group",
      className
    )}>
      <div className="absolute top-0 left-0 w-1 h-full bg-biblical-gold" />
      <blockquote className="scripture-text mb-4 leading-relaxed">
        "{text}"
      </blockquote>
      <div className="flex items-center justify-between">
        <div>
          <p className="font-serif text-biblical-navy font-medium">{reference}</p>
          <p className="text-sm text-gray-500">{translation}</p>
        </div>
        <button 
          onClick={handleCopy}
          className="text-gray-400 hover:text-biblical-blue transition-colors p-2 rounded-full hover:bg-gray-100"
          aria-label={copied ? "Copied" : "Copy scripture"}
        >
          {copied ? <Check size={18} /> : <Copy size={18} />}
        </button>
      </div>
      
      {/* Decorative quotation mark */}
      <div className="absolute -bottom-6 -right-6 text-9xl font-serif text-biblical-gold/10 pointer-events-none">
        "
      </div>
    </div>
  );
};

export default ScriptureCard;
