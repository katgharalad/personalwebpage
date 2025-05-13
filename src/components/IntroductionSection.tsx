
import React from 'react';
import { motion } from 'framer-motion';

const IntroductionSection: React.FC = () => {
  return (
    <section id="introduction" className="min-h-screen w-full flex flex-col justify-center px-6 md:px-12 lg:px-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="glass-panel p-8 rounded-xl max-w-3xl"
      >
        <h2 className="text-xl md:text-2xl font-digital font-bold text-neon-pink mb-2">
          <span className="text-white/70">//</span> INTRODUCTION
        </h2>
        
        <h1 className="text-3xl md:text-5xl font-digital font-bold text-glow-static mt-6 mb-8">
          Digital Interface
        </h1>
        
        <p className="text-base md:text-lg font-mono text-white/80 leading-relaxed mb-6">
          Welcome to this futuristic digital interface with a glassy dark gradient 
          background and subtle glowing text. This design showcases a modern, 
          tech-inspired aesthetic perfect for portfolios, dashboards, or any 
          digital presentation.
        </p>
        
        <p className="text-base md:text-lg font-mono text-white/80 leading-relaxed">
          Navigate through the different sections to explore the full experience of
          this sleek, minimalist interface design.
        </p>
      </motion.div>
    </section>
  );
};

export default IntroductionSection;
