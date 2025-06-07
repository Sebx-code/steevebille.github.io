
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const text = 'SebxCode';

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 200);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-24">
      {/* Main Content */}
      <div className="text-center z-10 max-w-4xl mx-auto px-4">
        {/* Main Title */}
        <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-cyber-purple via-cyber-blue to-cyber-pink bg-clip-text text-transparent animate-pulse-cyber">
          STEEVE BILLE
        </h1>
        
        {/* Animated Subtitle */}
        <div className="mb-8">
          <span className="text-2xl md:text-3xl font-bold text-muted-foreground">
            Développeur Web Full Stack • 
          </span>
          <span className="text-2xl md:text-3xl font-bold text-cyber-purple neon-text ml-2">
            {displayText}
            <span className="animate-ping">|</span>
          </span>
        </div>
        
        {/* Description */}
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Transformez vos idées en expériences web extraordinaires. 
          <span className="text-cyber-blue font-semibold"> +10 projets livrés</span> avec 
          <span className="text-cyber-purple font-semibold"> 2 ans d'expertise</span> depuis Yaoundé, Cameroun.
        </p>
        
        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mb-12 max-w-md mx-auto">
          <div className="glass-morphism rounded-lg p-4 hover:scale-105 transition-transform duration-300">
            <div className="text-2xl font-bold text-cyber-purple neon-text">10+</div>
            <div className="text-sm text-muted-foreground">Projets</div>
          </div>
          <div className="glass-morphism rounded-lg p-4 hover:scale-105 transition-transform duration-300">
            <div className="text-2xl font-bold text-cyber-blue neon-text">2</div>
            <div className="text-sm text-muted-foreground">Années</div>
          </div>
          <div className="glass-morphism rounded-lg p-4 hover:scale-105 transition-transform duration-300">
            <div className="text-2xl font-bold text-cyber-pink neon-text">100%</div>
            <div className="text-sm text-muted-foreground">Passion</div>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={scrollToProjects}
            className="bg-gradient-to-r from-cyber-purple to-cyber-blue text-black font-bold px-8 py-3 rounded-full hover:animate-pulse-cyber transition-all duration-300 transform hover:scale-105"
          >
            DÉCOUVRIR MES PROJETS
          </Button>
          <Button 
            variant="outline"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-cyber-purple text-cyber-purple hover:bg-cyber-purple hover:text-black font-bold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            ME CONTACTER
          </Button>
        </div>
        
        {/* Social Proof */}
        <div className="mt-12 p-4 glass-morphism rounded-lg inline-block">
          <p className="text-sm text-muted-foreground">
            ⭐ "Code de qualité exceptionnelle" • "Livraison dans les délais" • "Communication parfaite"
          </p>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyber-purple rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyber-purple rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
