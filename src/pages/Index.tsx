
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
    <div className="bg-gradient-dark min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(60,60,80,0.3),transparent_70%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(20,20,40,0.4),transparent_70%)] pointer-events-none"></div>
      
      <Navigation activeSection={activeSection} onNavigate={handleNavigate} />
      
      <main className="relative z-10">
        <IntroductionSection />
        <ProjectsSection />
        <LinksSection />
      </main>
    </div>
  );
};

export default Index;
