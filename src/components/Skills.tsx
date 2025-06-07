
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      title: 'FRONTEND',
      icon: '🎨',
      skills: [
        { name: 'React', level: 95, color: 'from-blue-500 to-cyan-500' },
        { name: 'JavaScript', level: 90, color: 'from-yellow-500 to-orange-500' },
        { name: 'TypeScript', level: 85, color: 'from-blue-600 to-blue-800' },
        { name: 'HTML5/CSS3', level: 95, color: 'from-orange-500 to-red-500' },
        { name: 'Tailwind CSS', level: 90, color: 'from-teal-500 to-blue-500' },
        { name: 'Vite', level: 88, color: 'from-purple-500 to-pink-500' }
      ]
    },
    {
      title: 'BACKEND',
      icon: '⚙️',
      skills: [
        { name: 'Node.js', level: 25, color: 'from-green-500 to-green-700' },
        { name: 'Express.js', level: 20, color: 'from-gray-600 to-gray-800' },
        { name: 'MongoDB', level: 22, color: 'from-green-600 to-green-800' },
        { name: 'PostgreSQL', level: 18, color: 'from-blue-700 to-blue-900' },
        { name: 'Firebase', level: 28, color: 'from-yellow-600 to-orange-600' },
        { name: 'REST APIs', level: 30, color: 'from-indigo-500 to-purple-600' }
      ]
    },
    {
      title: 'OUTILS & WORKFLOW',
      icon: '🛠️',
      skills: [
        { name: 'Git/GitHub', level: 92, color: 'from-gray-700 to-black' },
        { name: 'VS Code', level: 95, color: 'from-blue-600 to-blue-800' },
        { name: 'Figma', level: 80, color: 'from-pink-500 to-red-500' },
        { name: 'Postman', level: 85, color: 'from-orange-500 to-red-600' },
        { name: 'Vercel/Netlify', level: 88, color: 'from-black to-gray-700' },
        { name: 'Docker', level: 75, color: 'from-blue-500 to-blue-700' }
      ]
    }
  ];

  const achievements = [
    {
      icon: '🏆',
      title: 'Expert Frontend',
      description: '95% de maîtrise React & moderne stack'
    },
    {
      icon: '⚡',
      title: 'Performance',
      description: 'Optimisation 90+ PageSpeed scores'
    },
    {
      icon: '🎯',
      title: 'Précision',
      description: '100% projets livrés dans les délais'
    },
    {
      icon: '🚀',
      title: 'Innovation',
      description: 'Technologies cutting-edge adoptées'
    }
  ];

  return (
    <section id="skills" className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-cyber-purple to-cyber-blue bg-clip-text text-transparent">
            COMPÉTENCES
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Une maîtrise technique pointue, constamment mise à jour pour créer 
            des solutions web de nouvelle génération
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-purple to-cyber-blue mx-auto"></div>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <Card 
              key={index}
              className="glass-morphism p-6 text-center hover:scale-105 transition-all duration-300 group cursor-pointer"
            >
              <div className="text-3xl mb-4 group-hover:animate-bounce">{achievement.icon}</div>
              <h4 className="text-lg font-bold text-cyber-purple mb-2 group-hover:neon-text transition-all duration-300">
                {achievement.title}
              </h4>
              <p className="text-sm text-muted-foreground">
                {achievement.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Skills Categories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={categoryIndex}
              className="glass-morphism p-6 hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-3">{category.icon}</span>
                <h3 className="text-xl font-bold text-cyber-purple neon-text">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="group"
                    onMouseEnter={() => setHoveredSkill(`${categoryIndex}-${skillIndex}`)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-sm text-cyber-blue font-bold">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out ${
                          hoveredSkill === `${categoryIndex}-${skillIndex}` ? 'animate-pulse-cyber' : ''
                        }`}
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${skillIndex * 0.1}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Technology Focus */}
        <div className="text-center">
          <Card className="glass-morphism p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-cyber-purple mb-6">
              🎯 STACK TECHNIQUE PRINCIPAL
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* Frontend Stack */}
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyber-purple to-cyber-blue rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-cyber">
                  <span className="text-2xl">⚛️</span>
                </div>
                <h4 className="font-bold text-cyber-purple mb-2">Frontend</h4>
                <p className="text-sm text-muted-foreground">
                  React • TypeScript • Tailwind CSS • Vite
                </p>
              </div>
              
              {/* Backend Stack */}
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyber-blue to-cyber-pink rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-cyber">
                  <span className="text-2xl">🔧</span>
                </div>
                <h4 className="font-bold text-cyber-blue mb-2">Backend (Base)</h4>
                <p className="text-sm text-muted-foreground">
                  Node.js • Express • MongoDB • Firebase
                </p>
              </div>
              
              {/* Deployment Stack */}
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyber-pink to-cyber-purple rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-cyber">
                  <span className="text-2xl">🚀</span>
                </div>
                <h4 className="font-bold text-cyber-pink mb-2">Déploiement</h4>
                <p className="text-sm text-muted-foreground">
                  Vercel • Netlify • GitHub Pages • Docker
                </p>
              </div>
            </div>
            
            {/* CTA */}
            <div className="mt-8 pt-6 border-t border-cyber-purple/20">
              <p className="text-muted-foreground mb-4">
                Prêt à voir ces compétences en action sur votre projet ?
              </p>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-cyber-purple to-cyber-blue text-black font-bold px-8 py-3 rounded-full hover:animate-pulse-cyber transition-all duration-300 transform hover:scale-105"
              >
                DISCUTONS DE VOTRE PROJET
              </button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
