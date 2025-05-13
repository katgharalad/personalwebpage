
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Twitter, Mail } from 'lucide-react';

const links = [
  {
    id: 1,
    title: "Portfolio",
    url: "#",
    icon: <ExternalLink size={18} className="mr-2" />
  },
  {
    id: 2,
    title: "GitHub",
    url: "#",
    icon: <Github size={18} className="mr-2" />
  },
  {
    id: 3,
    title: "Twitter",
    url: "#",
    icon: <Twitter size={18} className="mr-2" />
  },
  {
    id: 4,
    title: "Email",
    url: "mailto:example@example.com",
    icon: <Mail size={18} className="mr-2" />
  }
];

const LinksSection: React.FC = () => {
  return (
    <section id="links" className="min-h-screen w-full flex flex-col justify-center px-6 md:px-12 lg:px-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="glass-panel p-8 rounded-xl max-w-3xl"
      >
        <h2 className="text-xl md:text-2xl font-digital font-bold text-neon-blue mb-10">
          <span className="text-white/70">//</span> LINKS
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {links.map((link) => (
            <motion.a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: link.id * 0.1 }}
              className="glass-panel-light flex items-center justify-between p-4 rounded-lg hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="flex items-center">
                {link.icon}
                <span className="font-mono text-white/80 group-hover:text-white transition-colors">
                  {link.title}
                </span>
              </div>
              <ExternalLink size={16} className="text-white/40 group-hover:text-white transition-colors" />
            </motion.a>
          ))}
        </div>
        
        <div className="mt-12 pt-6 border-t border-white/10">
          <p className="text-sm font-mono text-white/50 text-center">
            © 2025 · Digital Interface · All rights reserved
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default LinksSection;
