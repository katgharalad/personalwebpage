import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Twitter, Mail, Instagram } from 'lucide-react';

const links = [
  {
    id: 1,
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/aarav-singh-7699251aa/",
    icon: <ExternalLink size={22} className="mr-3" />
  },
  {
    id: 2,
    title: "GitHub",
    url: "https://github.com/katgharalad",
    icon: <Github size={22} className="mr-3" />
  },
  {
    id: 3,
    title: "Instagram",
    url: "https://www.instagram.com/aar4vs/",
    icon: <Instagram size={22} className="mr-3" />
  },
  {
    id: 4,
    title: "Email",
    url: "mailto:aaravps@owu.edu",
    icon: <Mail size={22} className="mr-3" />
  }
];

const LinksSection: React.FC = () => {
  return (
    <section id="links" className="min-h-[70vh] w-full flex flex-col justify-center items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center p-8"
      >
        <h2 className="text-3xl md:text-4xl font-digital font-bold text-neon-blue mb-12">
          <span className="text-white/70">//</span> LINKS
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {links.map((link) => (
            <motion.a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: link.id * 0.1 }}
              className="flex items-center justify-center py-5 px-4 border-b border-white/10 hover:bg-white/5 transition-all duration-300 group"
            >
              <div className="flex items-center">
                {link.icon}
                <span className="font-mono text-lg md:text-xl font-medium text-white/90 group-hover:text-white transition-colors">
                  {link.title}
                </span>
              </div>
              <ExternalLink size={18} className="ml-3 text-white/50 group-hover:text-white transition-colors" />
            </motion.a>
          ))}
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-base md:text-lg font-mono text-white/70 text-center">
            © 2025 · Aarav Singh · All rights reserved
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default LinksSection;
