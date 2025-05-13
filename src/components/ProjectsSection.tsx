
import React from 'react';
import { motion } from 'framer-motion';

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
  return (
    <section id="projects" className="min-h-screen w-full flex flex-col justify-center px-6 md:px-12 lg:px-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="glass-panel p-8 rounded-xl max-w-4xl"
      >
        <h2 className="text-xl md:text-2xl font-digital font-bold text-glow mb-10">
          <span className="text-white/70">//</span> PROJECTS
        </h2>
        
        <div className="space-y-8">
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: project.id * 0.2 }}
              className="glass-panel-light p-6 rounded-lg hover:bg-white/10 transition-all duration-300"
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
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
