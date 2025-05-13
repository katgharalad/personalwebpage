import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious 
} from '@/components/ui/carousel';

const projects = [
  {
    id: 1,
    title: "LateGrub — Food Delivery App",
    description: "Designed and deployed a late-night food delivery platform with real-time tracking and live chat, reaching 20+ users in the first week.",
    tags: ["React", "Firebase", "Full-Stack"]
  },
  {
    id: 2,
    title: "OpEx: Fire Dispatch AI Engine",
    description: "Built a real-time fire dispatch engine using Whisper and NLP to transcribe 911 calls, classify incidents, and map hydrant-based routing.",
    tags: ["NLP", "GIS", "Machine Learning"]
  },
  {
    id: 3,
    title: "Machine Maintenance Predictor",
    description: "Developed a predictive maintenance model with 94.7% binary and 96.5% multiclass accuracy, deployed with Streamlit and Scikit-Learn.",
    tags: ["Streamlit", "Random Forest", "Predictive Modeling"]
  }
];

const ProjectsSection: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <section 
      id="projects" 
      className="min-h-[70vh] w-full flex flex-col justify-center items-center"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      onClick={() => setIsExpanded(true)} // Always expand on click for mobile
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center p-8"
      >
        <h2 className="text-3xl md:text-4xl font-digital font-bold text-neon-yellow mb-10">
          <span className="text-white/70">//</span> PROJECTS
        </h2>
        
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <Carousel className="w-full">
                <CarouselContent>
                  {projects.map((project) => (
                    <CarouselItem key={project.id} className="md:basis-3/4">
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: project.id * 0.1 }}
                        className="py-8 px-4 mb-6 border-b border-white/10 text-center"
                      >
                        <h3 className="text-2xl md:text-3xl font-digital font-bold text-glow-static mb-4">{project.title}</h3>
                        <p className="text-lg md:text-xl font-mono text-white/90 mb-6">{project.description}</p>
                        <div className="flex flex-wrap gap-3 justify-center">
                          {project.tags.map((tag) => (
                            <span key={tag} className="text-base md:text-lg font-mono text-white/70">
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex items-center justify-center mt-8 gap-6">
                  <CarouselPrevious className="relative static left-0 right-0 translate-y-0 bg-transparent hover:bg-white/10 border-white/10 h-12 w-12" />
                  <CarouselNext className="relative static left-0 right-0 translate-y-0 bg-transparent hover:bg-white/10 border-white/10 h-12 w-12" />
                </div>
              </Carousel>
            </motion.div>
          )}
        </AnimatePresence>
        
        {!isExpanded && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="py-8 cursor-pointer"
            onClick={() => setIsExpanded(true)}
          >
            {/* Empty space for clicking */}
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
