
import React from 'react';
import { Card } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      icon: '🎯',
      title: 'PRÉCISION',
      description: 'Chaque ligne de code est pensée pour la performance et la maintenabilité'
    },
    {
      icon: '⚡',
      title: 'RAPIDITÉ',
      description: 'Développement agile avec livraison respectant les délais'
    },
    {
      icon: '🚀',
      title: 'INNOVATION',
      description: 'Utilisation des dernières technologies pour des solutions modernes'
    },
    {
      icon: '🛡️',
      title: 'FIABILITÉ',
      description: 'Code robuste, testé et documentation complète'
    }
  ];

  return (
    <section id="about" className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-cyber-purple to-cyber-blue bg-clip-text text-transparent">
            À PROPOS
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-purple to-cyber-blue mx-auto"></div>
        </div>
        
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-cyber-purple neon-text">
              Développeur Web Frontend Passionné
            </h3>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Basé à <span className="text-cyber-blue font-semibold">Yaoundé, Cameroun</span>, 
              je transforme les idées en applications web performantes depuis 
              <span className="text-cyber-purple font-semibold"> 2 ans</span>.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Mon approche combine <span className="text-cyber-blue">expertise technique</span> et 
              <span className="text-cyber-purple"> vision créative</span> pour livrer des solutions 
              qui dépassent les attentes. Chaque projet est une opportunité de repousser les limites 
              du possible.
            </p>
            
            <div className="p-6 glass-morphism rounded-lg">
              <h4 className="text-xl font-bold text-cyber-purple mb-4">Mission</h4>
              <p className="text-muted-foreground">
                Créer des expériences web qui captivent, convertissent et 
                marquent durablement l'esprit des utilisateurs.
              </p>
            </div>
          </div>
          
          {/* Image/Visual Element */}
          <div className="relative">
            <div className="glass-morphism rounded-lg p-8 text-center">
              <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-r from-cyber-purple to-cyber-blue rounded-full flex items-center justify-center animate-pulse-cyber">
                <span className="text-4xl font-black text-black">SB</span>
              </div>
              <h4 className="text-xl font-bold text-cyber-purple mb-2">Steeve Bille</h4>
              <p className="text-muted-foreground mb-4">Développeur Web Frontend</p>
              <div className="text-sm text-muted-foreground">
                📍 Yaoundé, Cameroun<br />
                💼 2+ années d'expérience<br />
                🚀 +10 projets réalisés
              </div>
            </div>
          </div>
        </div>
        
        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card 
              key={index}
              className="glass-morphism p-6 text-center hover:scale-105 transition-all duration-300 group cursor-pointer"
            >
              <div className="text-3xl mb-4 group-hover:animate-bounce">{value.icon}</div>
              <h4 className="text-lg font-bold text-cyber-purple mb-3 group-hover:neon-text transition-all duration-300">
                {value.title}
              </h4>
              <p className="text-sm text-muted-foreground">
                {value.description}
              </p>
            </Card>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="glass-morphism rounded-lg p-8 inline-block">
            <h4 className="text-2xl font-bold text-cyber-purple mb-4">
              Prêt à concrétiser votre vision ?
            </h4>
            <p className="text-muted-foreground mb-6">
              Transformons ensemble votre idée en succès numérique
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-cyber-purple to-cyber-blue text-black font-bold px-8 py-3 rounded-full hover:animate-pulse-cyber transition-all duration-300 transform hover:scale-105"
            >
              COMMENCER UN PROJET
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
