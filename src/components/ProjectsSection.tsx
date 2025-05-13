
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
    title: "Digital Interface",
    description: "A modern UI with glassy effects and futuristic design elements.",
    tags: ["UI/UX", "Frontend", "Animation"]
  },
  {
    id: 2,
    title: "Data Visualization",
    description: "Interactive charts and graphs with a sleek, minimalist aesthetic.",
    tags: ["Data", "Visualization", "Dashboard"]
  },
  {
    id: 3,
    title: "AI Assistant",
    description: "Intelligent virtual assistant with natural language processing.",
    tags: ["AI", "Machine Learning", "NLP"]
  }
];

const ProjectsSection: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <section id="projects" className="min-h-screen w-full flex flex-col justify-center px-6 md:px-12 lg:px-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="glass-panel p-8 rounded-xl max-w-4xl mx-auto"
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
        onClick={() => setIsExpanded(!isExpanded)} // Toggle on click for mobile
      >
        <h2 className="text-xl md:text-2xl font-digital font-bold text-neon-yellow mb-10 text-center">
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
                    <CarouselItem key={project.id} className="md:basis-2/3">
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: project.id * 0.1 }}
                        className="glass-panel-light p-6 rounded-lg h-full"
                      >
                        <h3 className="text-xl font-digital font-bold text-glow-static mb-2">{project.title}</h3>
                        <p className="text-base font-mono text-white/70 mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span key={tag} className="bg-white/5 px-3 py-1 rounded-full text-xs font-mono text-white/60">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex items-center justify-center mt-8 gap-4">
                  <CarouselPrevious className="relative static left-0 right-0 translate-y-0 bg-white/5 hover:bg-white/10 border-white/10" />
                  <CarouselNext className="relative static left-0 right-0 translate-y-0 bg-white/5 hover:bg-white/10 border-white/10" />
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
            className="text-center py-4"
          >
            <p className="text-white/50 font-mono text-sm">Hover or click to view projects</p>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
