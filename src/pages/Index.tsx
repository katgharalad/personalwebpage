import React, { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import IntroductionSection from '@/components/IntroductionSection';
import ProjectsSection from '@/components/ProjectsSection';
import LinksSection from '@/components/LinksSection';

const Index: React.FC = () => {
  const [activeSection, setActiveSection] = useState('introduction');

  const handleNavigate = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      const sections = ['introduction', 'projects', 'links'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          const height = window.innerHeight;
          
          if (top <= height / 2 && bottom >= height / 2) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen overflow-hidden relative">
      {/* Background image with overlay */}
      <div className="fixed inset-0 z-0">
        <img 
          src="/images/bg.png" 
          alt="Background" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50"></div> {/* Lighter overlay to ensure text visibility */}
      </div>
      
      <Navigation activeSection={activeSection} onNavigate={handleNavigate} />
      
      <main className="relative z-10 snap-y snap-mandatory">
        <div className="snap-center">
          <IntroductionSection />
        </div>
        <div className="snap-center">
          <ProjectsSection />
        </div>
        <div className="snap-center">
          <LinksSection />
        </div>
      </main>
    </div>
  );
};

export default Index;
