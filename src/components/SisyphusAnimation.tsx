
import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

const SisyphusAnimation: React.FC = () => {
  const controls = useAnimation();
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | 'static'>('static');
  const lastScrollY = useRef(0);
  const animationRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY.current) {
        setScrollDirection('down');
      } else if (currentScrollY < lastScrollY.current) {
        setScrollDirection('up');
      }
      
      lastScrollY.current = currentScrollY;
      
      // Clear any existing timeout
      if (animationRef.current) {
        clearTimeout(animationRef.current);
      }
      
      // Set to static after a short delay
      animationRef.current = setTimeout(() => {
        setScrollDirection('static');
      }, 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationRef.current) {
        clearTimeout(animationRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (scrollDirection === 'up') {
      controls.start({
        x: [0, -5],
        y: [0, -10],
        transition: { duration: 0.5, ease: "easeOut" }
      });
    } else if (scrollDirection === 'down') {
      controls.start({
        x: [0, 10],
        y: [0, 15],
        transition: { duration: 0.5, ease: "easeIn" }
      });
    } else {
      controls.start({
        x: 0,
        y: 0,
        transition: { duration: 0.3 }
      });
    }
  }, [scrollDirection, controls]);

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden opacity-20">
      <div className="absolute bottom-0 left-0 right-0 h-[30vh] bg-gradient-to-t from-black/50 to-transparent" />
      <svg 
        width="100%" 
        height="100%" 
        viewBox="0 0 1000 1000" 
        preserveAspectRatio="xMidYMax slice"
        className="absolute bottom-0 left-0"
      >
        {/* Mountain silhouettes */}
        <path 
          d="M0,1000 L1000,1000 L1000,600 Q850,450 700,550 Q600,650 500,500 Q400,400 300,500 Q200,600 100,500 L0,600 Z" 
          fill="rgba(30, 30, 40, 0.5)" 
        />
        <path 
          d="M0,1000 L1000,1000 L1000,700 Q900,600 800,650 Q700,700 600,600 Q500,500 400,600 Q300,700 200,600 L0,700 Z" 
          fill="rgba(20, 20, 30, 0.7)" 
        />
        
        {/* Ground */}
        <path 
          d="M0,1000 L1000,1000 L1000,800 Q900,780 800,790 Q700,800 600,795 Q500,790 400,800 Q300,810 200,800 L0,810 Z" 
          fill="rgba(15, 15, 20, 0.9)" 
        />
        
        {/* Path on the mountain */}
        <path 
          d="M200,800 Q300,750 400,730 Q500,700 600,650 Q700,600 800,700" 
          stroke="rgba(40, 40, 50, 0.8)" 
          strokeWidth="10" 
          fill="none" 
        />

        {/* Sisyphus figure (simplified) */}
        <motion.g animate={controls}>
          <circle 
            cx="450" 
            cy="715" 
            r="25" 
            fill="rgba(60, 60, 70, 0.9)" 
          />
          
          {/* Boulder */}
          <circle 
            cx="500" 
            cy="700" 
            r="40" 
            fill="rgba(80, 80, 90, 0.9)" 
          />
          
          {/* Simplified figure body */}
          <line 
            x1="450" 
            y1="715" 
            x2="480" 
            y2="680" 
            stroke="rgba(60, 60, 70, 0.9)" 
            strokeWidth="8" 
            strokeLinecap="round" 
          />
          {/* Arms pushing the boulder */}
          <line 
            x1="480" 
            y1="680" 
            x2="500" 
            y2="670" 
            stroke="rgba(60, 60, 70, 0.9)" 
            strokeWidth="5" 
            strokeLinecap="round" 
          />
          <line 
            x1="480" 
            y1="680" 
            x2="510" 
            y2="690" 
            stroke="rgba(60, 60, 70, 0.9)" 
            strokeWidth="5" 
            strokeLinecap="round" 
          />
          {/* Legs */}
          <line 
            x1="450" 
            y1="715" 
            x2="440" 
            y2="750" 
            stroke="rgba(60, 60, 70, 0.9)" 
            strokeWidth="6" 
            strokeLinecap="round" 
          />
          <line 
            x1="450" 
            y1="715" 
            x2="465" 
            y2="750" 
            stroke="rgba(60, 60, 70, 0.9)" 
            strokeWidth="6" 
            strokeLinecap="round" 
          />
        </motion.g>
      </svg>
    </div>
  );
};

export default SisyphusAnimation;
