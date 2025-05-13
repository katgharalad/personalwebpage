import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './AudioTranscripY.css'; // We'll create this file next

const AudioTranscripY: React.FC = () => {
  return (
    <div className="min-h-screen overflow-hidden relative">
      {/* Background image with overlay */}
      <div className="fixed inset-0 z-0">
        <img 
          src="/images/bg.png" 
          alt="Background" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="relative z-10 pt-8 pb-16">
        <nav className="flex items-center justify-between p-4 md:p-6">
          <Link 
            to="/" 
            className="text-lg md:text-xl font-digital text-neon-yellow hover:text-white transition-colors duration-300"
          >
            ← BACK TO HOME
          </Link>
        </nav>
        
        <main className="max-w-5xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-digital font-bold text-glow-static mb-4">
              AudioTranscripY + Address Validation Engine
            </h1>
            <h2 className="text-xl md:text-2xl font-mono text-white/80 mb-12">
              A real-time emergency dispatch assistant integrating live audio transcription, geospatial address validation, and machine learning interpretation.
            </h2>
            
            <section className="mb-14">
              <h3 className="text-2xl md:text-3xl font-digital font-bold text-neon-yellow mb-6">
                <span className="text-white/70">//</span> OVERVIEW
              </h3>
              <p className="text-lg md:text-xl font-mono text-white/90 mb-8 leading-relaxed">
                This project is a real-world emergency response system that transcribes emergency calls, validates addresses using GIS data, and classifies incident types using machine learning. Originally developed to assist dispatchers in Delaware County, Ohio, the tool automates and augments dispatcher workflows — turning raw audio into structured, actionable reports.
              </p>
            </section>
            
            <section className="mb-14">
              <h3 className="text-2xl md:text-3xl font-digital font-bold text-neon-yellow mb-6">
                <span className="text-white/70">//</span> CORE FEATURES
              </h3>
              
              <div className="mb-8">
                <h4 className="text-xl md:text-2xl font-digital text-glow-static mb-2">1. Audio Transcription Layer</h4>
                <ul className="text-lg font-mono text-white/90 list-disc pl-6 space-y-2">
                  <li>Captures and transcribes audio using OpenAI's Whisper</li>
                  <li>Supports real-time mic input, pre-recorded audio, and manual transcript simulation</li>
                  <li>Separates speaker turns to maintain clarity in multiparty calls</li>
                </ul>
              </div>
              
              <div className="mb-8">
                <h4 className="text-xl md:text-2xl font-digital text-glow-static mb-2">2. Address Validation Engine</h4>
                <ul className="text-lg font-mono text-white/90 list-disc pl-6 space-y-2">
                  <li>Validates spoken or partial addresses against a Delaware County GIS database</li>
                  <li>Assigns jurisdiction, ZIP codes, and landmark proximity</li>
                  <li>Returns confidence scores and flags low-confidence matches for manual review</li>
                </ul>
              </div>
              
              <div className="mb-8">
                <h4 className="text-xl md:text-2xl font-digital text-glow-static mb-2">3. ML Interpretation Layer</h4>
                <ul className="text-lg font-mono text-white/90 list-disc pl-6 space-y-2">
                  <li>Classifies incident types (structure fires, vehicle accidents, gas leaks, medical, etc.)</li>
                  <li>Extracts information about casualties (adults, children, pets, trapped individuals)</li>
                  <li>Prioritizes each incident on a 1.0–5.0 urgency scale</li>
                  <li>Outputs structured dispatch JSON for direct integration into emergency response software</li>
                </ul>
              </div>
            </section>
            
            <section className="mb-14">
              <h3 className="text-2xl md:text-3xl font-digital font-bold text-neon-yellow mb-6">
                <span className="text-white/70">//</span> SAMPLE OUTPUT
              </h3>
              <pre className="bg-black/30 p-6 rounded-md overflow-x-auto mb-8 font-mono text-white/90 border border-white/10">
{`{
  "transcript": "There's a fire at 123 Main Street with two people trapped!",
  "address": "123 Main Street",
  "zip_code": "43015",
  "jurisdiction": "City of Delaware",
  "incident_type": "structure_fire",
  "priority": 4.5,
  "needs_verification": false
}`}
              </pre>
            </section>
            
            <section className="mb-14">
              <h3 className="text-2xl md:text-3xl font-digital font-bold text-neon-yellow mb-6">
                <span className="text-white/70">//</span> ARCHITECTURE DIAGRAM
              </h3>
              <div className="flex flex-col items-center justify-center py-8">
                {/* Top row */}
                <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
                  <div className="architecture-node">
                    <span className="font-digital text-glow-static">AUDIO INPUT</span>
                  </div>
                  
                  <div className="architecture-arrow">
                    <span className="text-neon-yellow">➤</span>
                  </div>
                  
                  <div className="architecture-node">
                    <span className="font-digital text-glow-static">TRANSCRIPTION</span>
                    <span className="text-white/70 text-sm">(Whisper)</span>
                  </div>
                  
                  <div className="architecture-arrow">
                    <span className="text-neon-yellow">➤</span>
                  </div>
                  
                  <div className="architecture-node">
                    <span className="font-digital text-glow-static">ADDRESS VALIDATION</span>
                  </div>
                </div>
                
                {/* Vertical arrow */}
                <div className="h-8 flex items-center justify-center">
                  <div className="architecture-arrow rotate-90 transform -rotate-90">
                    <span className="text-neon-yellow">➤</span>
                  </div>
                </div>
                
                {/* Middle node */}
                <div className="mb-8">
                  <div className="architecture-node pulse-animation">
                    <span className="font-digital text-glow-static">ML INTERPRETATION</span>
                  </div>
                </div>
                
                {/* Second vertical arrow */}
                <div className="h-8 flex items-center justify-center">
                  <div className="architecture-arrow rotate-90 transform -rotate-90">
                    <span className="text-neon-yellow">➤</span>
                  </div>
                </div>
                
                {/* Bottom node */}
                <div>
                  <div className="architecture-node">
                    <span className="font-digital text-glow-static">STRUCTURED REPORT</span>
                  </div>
                </div>
              </div>
            </section>
            
            <section className="mb-14">
              <h3 className="text-2xl md:text-3xl font-digital font-bold text-neon-yellow mb-6">
                <span className="text-white/70">//</span> TECHNOLOGIES USED
              </h3>
              <ul className="text-lg font-mono text-white/90 list-disc pl-6 space-y-2">
                <li>Python 3.9+</li>
                <li>OpenAI Whisper for transcription</li>
                <li>Custom address validator with GIS datasets (CSV, shapefiles)</li>
                <li>Scikit-Learn for classification</li>
                <li>CLI-based orchestration and JSON reporting</li>
              </ul>
            </section>
            
            <section className="mb-14">
              <h3 className="text-2xl md:text-3xl font-digital font-bold text-neon-yellow mb-6">
                <span className="text-white/70">//</span> WHY IT MATTERS
              </h3>
              <p className="text-lg md:text-xl font-mono text-white/90 mb-8 leading-relaxed">
                This system demonstrates how AI and geospatial validation can work together to support real-world public safety workflows. From handling raw audio to generating actionable data, the project shows my ability to design, build, and integrate multi-layered systems with direct operational impact.
              </p>
            </section>
            
            <section>
              <h3 className="text-2xl md:text-3xl font-digital font-bold text-neon-yellow mb-6">
                <span className="text-white/70">//</span> LINKS
              </h3>
              <a 
                href="https://github.com/katgharalad/audiotrancriptionfire" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-lg md:text-xl font-digital text-neon-yellow hover:text-white transition-colors duration-300 underline"
              >
                GitHub Repository
              </a>
            </section>
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default AudioTranscripY; 