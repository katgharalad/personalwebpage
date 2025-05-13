import React from 'react';
import { motion } from 'framer-motion';

const IntroductionSection: React.FC = () => {
  return (
    <section 
      id="introduction" 
      className="min-h-screen w-full flex flex-col justify-center items-center"
      style={{ 
        height: '100vh', 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center p-8 transform -translate-y-8"
      >
        <h2 className="text-3xl md:text-4xl font-digital font-bold text-neon-pink mb-4">
          <span className="text-white/70">//</span> INTRODUCTION
        </h2>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-digital font-bold text-glow-static mt-6 mb-10">
          Aarav Singh
        </h1>
        
        <div className="space-y-6 max-w-2xl mx-auto">
          <p className="text-lg md:text-xl lg:text-2xl font-mono text-white/90 leading-relaxed">
          I'm Aarav — a data analytics student at Ohio Wesleyan University, passionate about building intelligent systems that bridge data, software, and real-world impact.

From designing a real-time fire dispatch AI and building LateGrub, a student-run food delivery app, to deploying predictive maintenance dashboards, my work blends ML, remote sensing, and interactive UIs to solve tough problems.

This site showcases the tools, models, and systems I’ve created — from carbon credit models to 911 call NLP engines — all backed by Python, TensorFlow, C++, and a design-first mindset.

Scroll to explore the portfolio.
          </p>
          
          
        </div>
      </motion.div>
    </section>
  );
};

export default IntroductionSection;
