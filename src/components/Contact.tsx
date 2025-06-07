
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    budget: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message envoyé avec succès !",
        description: "Je vous recontacterai dans les plus brefs délais.",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        budget: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'EMAIL',
      value: 'steevebille1@gmail.com',
      action: 'mailto:steevebille1@gmail.com'
    },
    {
      icon: '📱',
      title: 'TÉLÉPHONE',
      value: '+237 656 642 801',
      action: 'tel:+237656642801'
    },
    {
      icon: '📍',
      title: 'LOCALISATION',
      value: 'Yaoundé, CAMEROUN',
      action: '#'
    }
  ];

  const services = [
    {
      title: 'DÉVELOPPEMENT WEB',
      description: 'Sites vitrines, e-commerce, applications web sur mesure',
      price: 'À partir de 150 000 FCFA'
    },
    {
      title: 'APPLICATIONS REACT',
      description: 'SPAs modernes, dashboards, interfaces complexes',
      price: 'À partir de 300 000 FCFA'
    },
    {
      title: 'OPTIMISATION & MAINTENANCE',
      description: 'Performance, SEO, mise à jour, support technique',
      price: 'À partir de 75 000 FCFA'
    }
  ];

  return (
    <section id="contact" className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-cyber-purple to-cyber-blue bg-clip-text text-transparent">
            CONTACT
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Transformons votre vision en réalité digitale. 
            Parlons de votre projet et donnons-lui vie ensemble.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-purple to-cyber-blue mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info & Services */}
          <div className="space-y-8">
            {/* Contact Information */}
            <Card className="glass-morphism p-6">
              <h3 className="text-2xl font-bold text-cyber-purple mb-6 neon-text">
                📬 INFORMATIONS DE CONTACT
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.action}
                    className="flex items-center p-4 glass-morphism rounded-lg hover:scale-105 transition-all duration-300 group cursor-pointer"
                  >
                    <span className="text-2xl mr-4 group-hover:animate-bounce">{info.icon}</span>
                    <div>
                      <div className="text-sm text-muted-foreground">{info.title}</div>
                      <div className="font-semibold text-cyber-blue group-hover:neon-text transition-all duration-300">
                        {info.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </Card>

            {/* Services & Pricing */}
            <Card className="glass-morphism p-6">
              <h3 className="text-2xl font-bold text-cyber-purple mb-6 neon-text">
                💼 SERVICES & TARIFS
              </h3>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <div key={index} className="p-4 glass-morphism rounded-lg hover:scale-105 transition-all duration-300">
                    <h4 className="font-bold text-cyber-blue mb-2">{service.title}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{service.description}</p>
                    <div className="text-cyber-purple font-semibold">{service.price}</div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-gradient-to-r from-cyber-purple/10 to-cyber-blue/10 rounded-lg border border-cyber-purple/20">
                <p className="text-sm text-center">
                  🎯 <strong>Consultation gratuite</strong> pour évaluer votre projet et établir un devis personnalisé
                </p>
              </div>
            </Card>

            {/* Availability */}
            <Card className="glass-morphism p-6 text-center">
              <h4 className="text-xl font-bold text-cyber-purple mb-4">⚡ DISPONIBILITÉ IMMÉDIATE</h4>
              <p className="text-muted-foreground mb-4">
                Nouveau projet accepté dès maintenant. Réponse garantie sous 24h.
              </p>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-semibold">En ligne</span>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="glass-morphism p-6">
            <h3 className="text-2xl font-bold text-cyber-purple mb-6 neon-text">
              🚀 DÉMARRER VOTRE PROJET
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-cyber-blue">
                    Nom complet *
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-black/20 border-cyber-purple/30 focus:border-cyber-purple focus:ring-cyber-purple"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-cyber-blue">
                    Email *
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-black/20 border-cyber-purple/30 focus:border-cyber-purple focus:ring-cyber-purple"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-cyber-blue">
                  Type de projet *
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 bg-black/20 border border-cyber-purple/30 rounded-lg focus:border-cyber-purple focus:ring-cyber-purple text-foreground"
                >
                  <option value="">Sélectionnez un type</option>
                  <option value="site-vitrine">Site Vitrine</option>
                  <option value="e-commerce">E-commerce</option>
                  <option value="application-web">Application Web</option>
                  <option value="dashboard">Dashboard</option>
                  <option value="maintenance">Maintenance/Optimisation</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-cyber-blue">
                  Budget estimé
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-black/20 border border-cyber-purple/30 rounded-lg focus:border-cyber-purple focus:ring-cyber-purple text-foreground"
                >
                  <option value="">Sélectionnez une fourchette</option>
                  <option value="50-150k">50 000 - 150 000 FCFA</option>
                  <option value="150-300k">150 000 - 300 000 FCFA</option>
                  <option value="300-500k">300 000 - 500 000 FCFA</option>
                  <option value="500k+">500 000+ FCFA</option>
                  <option value="a-discuter">À discuter</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-cyber-blue">
                  Description du projet *
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="bg-black/20 border-cyber-purple/30 focus:border-cyber-purple focus:ring-cyber-purple"
                  placeholder="Décrivez votre projet, vos objectifs, fonctionnalités souhaitées..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-cyber-purple to-cyber-blue text-black font-bold py-3 rounded-full hover:animate-pulse-cyber transition-all duration-300 transform hover:scale-105 disabled:opacity-50"
              >
                {isSubmitting ? 'ENVOI EN COURS...' : 'ENVOYER MA DEMANDE 🚀'}
              </Button>
            </form>

            <div className="mt-6 text-center text-sm text-muted-foreground">
              <p>⏱️ Réponse garantie sous 24h • 📞 Appel découverte gratuit offert</p>
            </div>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="glass-morphism p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-cyber-purple mb-4">
              🎯 PRÊT À RÉVOLUTIONNER VOTRE PRÉSENCE DIGITALE ?
            </h3>
            <p className="text-muted-foreground mb-6">
              Rejoignez les entrepreneurs visionnaires qui ont choisi l'excellence. 
              Votre succès numérique commence par un simple message.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+237656642801"
                className="bg-gradient-to-r from-cyber-purple to-cyber-blue text-black font-bold px-8 py-3 rounded-full hover:animate-pulse-cyber transition-all duration-300 transform hover:scale-105 inline-block"
              >
                📱 APPELER MAINTENANT
              </a>
              <a
                href="mailto:steevebille1@gmail.com"
                className="border-2 border-cyber-purple text-cyber-purple hover:bg-cyber-purple hover:text-black font-bold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 inline-block"
              >
                📧 ENVOYER UN EMAIL
              </a>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
