
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrolled / maxScroll) * 100;
      setScrollProgress(progress);

      // Update active section based on scroll position
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Scroll Progress Indicator */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-cyber-purple to-cyber-blue z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />
      
      {/* Navigation */}
      <nav className="fixed top-2 sm:top-6 left-1/2 transform -translate-x-1/2 z-40 glass-morphism rounded-full px-3 sm:px-6 py-2 sm:py-3 max-w-[95vw] overflow-x-auto">
        <div className="flex items-center space-x-2 sm:space-x-6 whitespace-nowrap">
          <button
            onClick={() => scrollToSection('home')}
            className={`text-xs sm:text-sm font-medium transition-all duration-300 px-2 py-1 rounded ${
              activeSection === 'home' 
                ? 'text-cyber-purple neon-text bg-cyber-purple/10' 
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            ACCUEIL
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className={`text-xs sm:text-sm font-medium transition-all duration-300 px-2 py-1 rounded ${
              activeSection === 'about' 
                ? 'text-cyber-purple neon-text bg-cyber-purple/10' 
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            À PROPOS
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className={`text-xs sm:text-sm font-medium transition-all duration-300 px-2 py-1 rounded ${
              activeSection === 'projects' 
                ? 'text-cyber-purple neon-text bg-cyber-purple/10' 
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            PROJETS
          </button>
          <button
            onClick={() => scrollToSection('skills')}
            className={`text-xs sm:text-sm font-medium transition-all duration-300 px-2 py-1 rounded ${
              activeSection === 'skills' 
                ? 'text-cyber-purple neon-text bg-cyber-purple/10' 
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            COMP.
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className={`text-xs sm:text-sm font-medium transition-all duration-300 px-2 py-1 rounded ${
              activeSection === 'contact' 
                ? 'text-cyber-purple neon-text bg-cyber-purple/10' 
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            CONTACT
          </button>
          <Button
            onClick={() => scrollToSection('dashboard')}
            className="bg-gradient-to-r from-cyber-purple to-cyber-blue text-black font-bold px-2 sm:px-4 py-1 sm:py-2 rounded-full hover:animate-pulse-cyber transition-all duration-300 text-xs sm:text-sm"
          >
            ADMIN
          </Button>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
