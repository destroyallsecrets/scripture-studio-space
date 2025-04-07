
import React from 'react';
import ScriptureCard from './ScriptureCard';
import { Check } from 'lucide-react';

const themes = [
  {
    title: "Faith",
    description: "Exploring the foundation of our relationship with God",
    scripture: "Grace and peace be multiplied unto you through the knowledge of God, and of Jesus our Lord.",
    reference: "2 Peter 1:2",
    points: [
      "The nature of biblical faith",
      "Faith versus sight",
      "Examples of faith in action"
    ]
  },
  {
    title: "Redemption",
    description: "Understanding God's plan to restore what was lost",
    scripture: "Whereby are given unto us exceeding great and precious promises: that by these ye might be partakers of the divine nature, having escaped the corruption that is in the world through lust.",
    reference: "2 Peter 1:4",
    points: [
      "The need for redemption",
      "Christ as the redeemer",
      "Living as the redeemed"
    ]
  },
  {
    title: "Wisdom",
    description: "Discerning God's way in a complex world",
    scripture: "But grow in grace, and in the knowledge of our Lord and Saviour Jesus Christ. To him be glory both now and for ever. Amen.",
    reference: "2 Peter 3:18",
    points: [
      "Godly versus worldly wisdom",
      "Wisdom in daily decisions",
      "Seeking wisdom through prayer"
    ]
  }
];

const ThemesSection = () => {
  return (
    <section id="themes" className="section-container bg-gray-900 text-white">
      <h2 className="section-title text-yellow-300">Key Biblical Themes</h2>
      <p className="section-subtitle text-gray-400">
        Discover the recurring themes that weave through scripture, revealing God's character and plan.
      </p>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
        {themes.map((theme, index) => (
          <div key={index} className="flex flex-col">
            <ScriptureCard 
              text={theme.scripture}
              reference={theme.reference}
              translation="KJV"
              className="mb-6 flex-grow"
            />
            
            <div className="bg-gray-800 rounded-lg p-6 shadow-sm">
              <h3 className="font-serif text-2xl text-yellow-300 mb-2">{theme.title}</h3>
              <p className="text-gray-400 mb-4">{theme.description}</p>
              
              <h4 className="font-medium text-yellow-300 mb-2">Explore in our lessons:</h4>
              <ul className="space-y-2">
                {theme.points.map((point, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check size={18} className="text-yellow-300 mt-0.5 mr-2 flex-shrink-0" />
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
