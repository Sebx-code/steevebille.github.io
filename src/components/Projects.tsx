import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Luxury',
      category: 'e-commerce',
      image: '/api/placeholder/400/300',
      description: 'Plateforme e-commerce haut de gamme avec paiement sécurisé',
      tech: ['React', 'Node.js', 'Stripe'],
      status: 'Livré',
      client: 'Boutique Premium'
    },
    {
      id: 2,
      title: 'Dashboard Analytics',
      category: 'dashboard',
      image: '/api/placeholder/400/300',
      description: 'Interface d\'analyse de données en temps réel',
      tech: ['React', 'D3.js', 'Firebase'],
      status: 'Livré',
      client: 'StartUp Tech'
    },
    {
      id: 3,
      title: 'Portfolio Créatif',
      category: 'portfolio',
      image: '/api/placeholder/400/300',
      description: 'Portfolio interactif pour artiste digital',
      tech: ['Vue.js', 'Three.js', 'GSAP'],
      status: 'Livré',
      client: 'Artiste Digital'
    },
    {
      id: 4,
      title: 'App Mobile Banking',
      category: 'mobile',
      image: '/api/placeholder/400/300',
      description: 'Application de banque mobile sécurisée',
      tech: ['React Native', 'Firebase', 'Blockchain'],
      status: 'En cours',
      client: 'FinTech'
    },
    {
      id: 5,
      title: 'Site Vitrine Restaurant',
      category: 'vitrine',
      image: '/api/placeholder/400/300',
      description: 'Site vitrine avec système de réservation',
      tech: ['HTML5', 'CSS3', 'JavaScript'],
      status: 'Livré',
      client: 'Restaurant Gourmet'
    },
    {
      id: 6,
      title: 'Plateforme E-Learning',
      category: 'education',
      image: '/api/placeholder/400/300',
      description: 'Plateforme d\'apprentissage en ligne interactive',
      tech: ['React', 'GraphQL', 'PostgreSQL'],
      status: 'Livré',
      client: 'Institut Formation'
    }
  ];

  const categories = [
    { id: 'all', label: 'TOUS' },
    { id: 'e-commerce', label: 'E-COMMERCE' },
    { id: 'dashboard', label: 'DASHBOARD' },
    { id: 'portfolio', label: 'PORTFOLIO' },
    { id: 'vitrine', label: 'VITRINE' },
    { id: 'education', label: 'ÉDUCATION' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-cyber-purple to-cyber-blue bg-clip-text text-transparent">
            PROJETS
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Une sélection de mes réalisations les plus marquantes, 
            témoignant de mon expertise et de ma créativité
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-purple to-cyber-blue mx-auto mb-12"></div>
          
          {/* Social Proof - Responsive */}
          <div className="glass-morphism rounded-lg p-4 sm:p-6 inline-block mb-12 w-full max-w-2xl">
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-cyber-purple">10+</div>
                <div className="text-muted-foreground text-xs sm:text-sm">Projets Livrés</div>
              </div>
              <div className="hidden sm:block w-px h-8 bg-cyber-purple"></div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-cyber-blue">100%</div>
                <div className="text-muted-foreground text-xs sm:text-sm">Satisfaction Client</div>
              </div>
              <div className="hidden sm:block w-px h-8 bg-cyber-purple"></div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-cyber-pink">2 ans</div>
                <div className="text-muted-foreground text-xs sm:text-sm">Expérience</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Filter Buttons - Responsive */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12 px-2">
          {categories.map(category => (
            <Button
              key={category.id}
              onClick={() => setFilter(category.id)}
              variant={filter === category.id ? "default" : "outline"}
              className={`${
                filter === category.id 
                  ? 'bg-gradient-to-r from-cyber-purple to-cyber-blue text-black' 
                  : 'border-cyber-purple text-cyber-purple hover:bg-cyber-purple hover:text-black'
              } font-semibold px-3 sm:px-6 py-2 rounded-full transition-all duration-300 text-xs sm:text-sm`}
            >
              {category.label}
            </Button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id}
              className="glass-morphism overflow-hidden group hover:scale-105 transition-all duration-500 cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-cyber-purple/20 to-cyber-blue/20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project.status === 'Livré' 
                      ? 'bg-green-500/20 text-green-400 border border-green-400' 
                      : 'bg-yellow-500/20 text-yellow-400 border border-yellow-400'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-xs opacity-75">{project.client}</div>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-cyber-purple mb-2 group-hover:neon-text transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-2 py-1 bg-cyber-purple/20 text-cyber-purple text-xs rounded-full border border-cyber-purple/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Project Actions */}
                <div className="flex space-x-3">
                  <Button 
                    size="sm"
                    className="bg-gradient-to-r from-cyber-purple to-cyber-blue text-black font-semibold hover:animate-pulse-cyber flex-1"
                  >
                    VOIR DÉTAILS
                  </Button>
                  <Button 
                    size="sm"
                    variant="outline"
                    className="border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-black"
                  >
                    DEMO
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="glass-morphism rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-cyber-purple mb-4">
              Votre projet mérite l'excellence
            </h3>
            <p className="text-muted-foreground mb-6">
              Rejoignez mes clients satisfaits et donnez vie à votre vision avec un développement de qualité supérieure
            </p>
            <Button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-cyber-purple to-cyber-blue text-black font-bold px-8 py-3 rounded-full hover:animate-pulse-cyber transition-all duration-300"
            >
              DÉMARRER VOTRE PROJET
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
