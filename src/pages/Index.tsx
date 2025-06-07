
import React from 'react';
import ParticleBackground from '@/components/ParticleBackground';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Dashboard from '@/components/Dashboard';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      {/* Background Elements */}
      <ParticleBackground />
      
      {/* Main Content */}
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Dashboard />
      </div>
      
      {/* Footer */}
      <footer className="bg-black/50 backdrop-blur-lg border-t border-cyber-purple/20 py-8 mt-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold bg-gradient-to-r from-cyber-purple to-cyber-blue bg-clip-text text-transparent">
                SebxCode
              </h3>
              <p className="text-muted-foreground text-sm">
                Développeur Web Full Stack • Yaoundé, Cameroun
              </p>
            </div>
            
            <div className="flex items-center space-x-6">
              <a 
                href="mailto:steevebille1@gmail.com"
                className="text-cyber-blue hover:neon-text transition-all duration-300"
              >
                📧 Email
              </a>
              <a 
                href="tel:+237656642801"
                className="text-cyber-purple hover:neon-text transition-all duration-300"
              >
                📱 Téléphone
              </a>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-cyber-purple/20">
            <p className="text-muted-foreground text-sm">
              © 2024 Steeve Bille (SebxCode). Tous droits réservés. 
              <span className="text-cyber-purple"> Fait avec passion à Yaoundé</span> 🇨🇲
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
