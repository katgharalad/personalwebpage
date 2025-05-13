
import React from 'react';
import { cn } from '@/lib/utils';

interface NavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, onNavigate }) => {
  const sections = ['Introduction', 'Projects', 'Links'];
  
  return (
    <nav className="fixed top-6 right-6 z-50">
      <div className="glass-panel-dark p-2 rounded-lg">
        <ul className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-4">
          {sections.map((section) => (
            <li key={section}>
              <button
                onClick={() => onNavigate(section.toLowerCase())}
                className={cn(
                  "px-4 py-2 rounded-md transition-all duration-300 text-sm font-mono",
                  activeSection === section.toLowerCase()
                    ? "text-glow-static bg-white/5"
                    : "text-white/70 hover:text-white hover:bg-white/5"
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
