import React from 'react';
import { cn } from '@/lib/utils';

interface NavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, onNavigate }) => {
  const sections = ['Introduction', 'Projects', 'Links'];
  
  return (
    <nav className="fixed top-8 right-8 z-50">
      <div className="p-3">
        <ul className="flex flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-5">
          {sections.map((section) => (
            <li key={section}>
              <button
                onClick={() => onNavigate(section.toLowerCase())}
                className={cn(
                  "px-5 py-3 rounded-md transition-all duration-300 text-base md:text-lg font-mono",
                  activeSection === section.toLowerCase()
                    ? "text-glow-static bg-black/20"
                    : "text-white/80 hover:text-white hover:bg-black/20"
                )}
              >
                {section}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
