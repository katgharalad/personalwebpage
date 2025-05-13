import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './AudioTranscripY.css'; // Reusing the same CSS for styling

const MaintenancePredictor: React.FC = () => {
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
              Machine Maintenance Predictor
            </h1>
            <h2 className="text-xl md:text-2xl font-mono text-white/80 mb-12">
              Predict industrial equipment failures with high accuracy using a trained Random Forest model.
            </h2>
            
            <section className="mb-14">
              <h3 className="text-2xl md:text-3xl font-digital font-bold text-neon-yellow mb-6">
                <span className="text-white/70">//</span> OVERVIEW
              </h3>
              <p className="text-lg md:text-xl font-mono text-white/90 mb-4 leading-relaxed">
                This project is a predictive maintenance system designed to forecast industrial machine failures using real telemetry data. Built with Python and Streamlit, it provides both binary and multiclass classification to help engineers proactively respond to operational risks.
              </p>
              <p className="text-lg md:text-xl font-mono text-white/90 mb-8 leading-relaxed">
                The tool is based on a real-world dataset with 10 features such as temperature, speed, torque, and tool wear. The backend model is trained to recognize failure patterns across six unique failure types.
              </p>
            </section>
            
            <section className="mb-14">
              <h3 className="text-2xl md:text-3xl font-digital font-bold text-neon-yellow mb-6">
                <span className="text-white/70">//</span> MODEL PERFORMANCE
              </h3>
              
              <div className="mb-10">
                <h4 className="text-xl md:text-2xl font-digital text-glow-static mb-4">Binary Classification (Failure vs. No Failure):</h4>
                <div className="flex flex-wrap justify-center gap-6 text-center mb-2">
                  <div className="py-3 px-6">
                    <p className="text-white/70 text-sm mb-1 font-mono">Accuracy</p>
                    <p className="text-2xl font-digital text-glow-static">98.14%</p>
                  </div>
                  <div className="py-3 px-6">
                    <p className="text-white/70 text-sm mb-1 font-mono">F1 Score</p>
                    <p className="text-2xl font-digital text-glow-static">0.9815</p>
                  </div>
                  <div className="py-3 px-6">
                    <p className="text-white/70 text-sm mb-1 font-mono">Precision</p>
                    <p className="text-2xl font-digital text-glow-static">0.9721</p>
                  </div>
                  <div className="py-3 px-6">
                    <p className="text-white/70 text-sm mb-1 font-mono">Recall</p>
                    <p className="text-2xl font-digital text-glow-static">0.9912</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-xl md:text-2xl font-digital text-glow-static mb-4">Multiclass Classification (Failure Type):</h4>
                <div className="text-center mb-6">
                  <p className="text-white/70 text-sm mb-1 font-mono">Accuracy</p>
                  <p className="text-2xl font-digital text-glow-static">99.40%</p>
                </div>
                <p className="text-lg font-mono text-white/90 mb-2">Categories predicted:</p>
                <div className="flex flex-wrap justify-center gap-3 mb-4">
                  <span className="text-base md:text-lg font-mono text-white/70 bg-white/5 px-3 py-1 rounded-full">Heat Dissipation Failure</span>
                  <span className="text-base md:text-lg font-mono text-white/70 bg-white/5 px-3 py-1 rounded-full">Tool Wear Failure</span>
                  <span className="text-base md:text-lg font-mono text-white/70 bg-white/5 px-3 py-1 rounded-full">Power Failure</span>
                  <span className="text-base md:text-lg font-mono text-white/70 bg-white/5 px-3 py-1 rounded-full">Random Failures</span>
                  <span className="text-base md:text-lg font-mono text-white/70 bg-white/5 px-3 py-1 rounded-full">Overstrain Failure</span>
                  <span className="text-base md:text-lg font-mono text-white/70 bg-white/5 px-3 py-1 rounded-full">No Failure</span>
                </div>
              </div>
            </section>
            
            <section className="mb-14">
              <h3 className="text-2xl md:text-3xl font-digital font-bold text-neon-yellow mb-6">
                <span className="text-white/70">//</span> APP FEATURES
              </h3>
              <ul className="text-lg font-mono text-white/90 list-disc pl-6 space-y-2 mb-8">
                <li>Built with Streamlit for real-time interaction</li>
                <li>Accepts user input for machine telemetry (e.g. temperature, torque)</li>
                <li>Returns the predicted failure type and its probability</li>
                <li>Visualizes class probabilities with a clean bar chart</li>
                <li>Shows model performance stats dynamically</li>
              </ul>
            </section>
            
            <section className="mb-14">
              <h3 className="text-2xl md:text-3xl font-digital font-bold text-neon-yellow mb-6">
                <span className="text-white/70">//</span> LIVE MODEL OUTPUT
              </h3>
              <div className="flex justify-center">
                <pre className="bg-black/30 p-6 rounded-md overflow-x-auto mb-8 font-mono text-white/90 border border-white/10 max-w-2xl w-full">
{`Predicted Failure: Power Failure
Confidence: 98.64%

Multiclass Probabilities:
- Power Failure: 0.9864
- Overstrain Failure: 0.0021
- Tool Wear Failure: 0.0032
- Random Failures: 0.0020`}
                </pre>
              </div>
            </section>
            
            <section className="mb-14">
              <h3 className="text-2xl md:text-3xl font-digital font-bold text-neon-yellow mb-6">
                <span className="text-white/70">//</span> TECHNOLOGIES USED
              </h3>
              <ul className="text-lg font-mono text-white/90 list-disc pl-6 space-y-2">
                <li>Python 3.10</li>
                <li>Scikit-Learn (Random Forest Classifier)</li>
                <li>Streamlit (for app deployment)</li>
                <li>SMOTE (for class imbalance)</li>
                <li>Matplotlib (for visualizations)</li>
              </ul>
            </section>
            
            <section>
              <h3 className="text-2xl md:text-3xl font-digital font-bold text-neon-yellow mb-6">
                <span className="text-white/70">//</span> LINKS
              </h3>
              <div className="flex justify-center">
                <a 
                  href="https://github.com/katgharalad/predictionmodel99" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-lg md:text-xl font-digital text-neon-yellow hover:text-white transition-colors duration-300 underline"
                >
                  GitHub Repository
                </a>
              </div>
            </section>
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default MaintenancePredictor; 