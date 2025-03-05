
import React from 'react';
import ScriptureCard from './ScriptureCard';
import { Check } from 'lucide-react';

const themes = [
  {
    title: "Faith",
    description: "Exploring the foundation of our relationship with God",
    scripture: "Now faith is confidence in what we hope for and assurance about what we do not see.",
    reference: "Hebrews 11:1",
    points: [
      "The nature of biblical faith",
      "Faith versus sight",
      "Examples of faith in action"
    ]
  },
  {
    title: "Redemption",
    description: "Understanding God's plan to restore what was lost",
    scripture: "In him we have redemption through his blood, the forgiveness of sins, in accordance with the riches of God's grace.",
    reference: "Ephesians 1:7",
    points: [
      "The need for redemption",
      "Christ as the redeemer",
      "Living as the redeemed"
    ]
  },
  {
    title: "Wisdom",
    description: "Discerning God's way in a complex world",
    scripture: "The fear of the Lord is the beginning of wisdom, and knowledge of the Holy One is understanding.",
    reference: "Proverbs 9:10",
    points: [
      "Godly versus worldly wisdom",
      "Wisdom in daily decisions",
      "Seeking wisdom through prayer"
    ]
  }
];

const ThemesSection = () => {
  return (
    <section id="themes" className="section-container bg-biblical-cream/50">
      <h2 className="section-title">Key Biblical Themes</h2>
      <p className="section-subtitle">
        Discover the recurring themes that weave through scripture, revealing God's character and plan.
      </p>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
        {themes.map((theme, index) => (
          <div key={index} className="flex flex-col">
            <ScriptureCard 
              text={theme.scripture}
              reference={theme.reference}
              className="mb-6 flex-grow"
            />
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-serif text-2xl text-biblical-navy mb-2">{theme.title}</h3>
              <p className="text-gray-600 mb-4">{theme.description}</p>
              
              <h4 className="font-medium text-biblical-navy mb-2">Explore in our lessons:</h4>
              <ul className="space-y-2">
                {theme.points.map((point, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check size={18} className="text-biblical-gold mt-0.5 mr-2 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ThemesSection;
