import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tech: string[];
  status: string;
  client: string;
}

interface NewProject {
  title: string;
  category: string;
  description: string;
  tech: string;
  status: string;
  client: string;
}

interface EditingProject {
  id: number;
  title: string;
  category: string;
  description: string;
  tech: string;
  status: string;
  client: string;
}

const Dashboard = () => {
  const { toast } = useToast();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('projects');
  const [projects, setProjects] = useState<Project[]>([
    {
      id: 1,
      title: 'E-Commerce Luxury',
      category: 'e-commerce',
      description: 'Plateforme e-commerce haut de gamme avec paiement sécurisé',
      tech: ['React', 'Node.js', 'Stripe'],
      status: 'Livré',
      client: 'Boutique Premium'
    },
    {
      id: 2,
      title: 'Dashboard Analytics',
      category: 'dashboard',
      description: 'Interface d\'analyse de données en temps réel',
      tech: ['React', 'D3.js', 'Firebase'],
      status: 'Livré',
      client: 'StartUp Tech'
    }
  ]);

  const [newProject, setNewProject] = useState<NewProject>({
    title: '',
    category: '',
    description: '',
    tech: '',
    status: 'En cours',
    client: ''
  });

  const [editingProject, setEditingProject] = useState<EditingProject | null>(null);

  const handleLogin = () => {
    if (password === 'admin2025') {
      setIsAuthenticated(true);
      toast({
        title: "Connexion réussie !",
        description: "Bienvenue dans le dashboard administrateur.",
      });
    } else {
      toast({
        title: "Erreur de connexion",
        description: "Code d'accès incorrect.",
        variant: "destructive"
      });
    }
  };

  const handleAddProject = () => {
    if (!newProject.title || !newProject.description) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs obligatoires.",
        variant: "destructive"
      });
      return;
    }

    const project: Project = {
      id: Date.now(),
      title: newProject.title,
      category: newProject.category,
      description: newProject.description,
      tech: newProject.tech.split(',').map(t => t.trim()),
      status: newProject.status,
      client: newProject.client
    };

    setProjects([...projects, project]);
    setNewProject({
      title: '',
      category: '',
      description: '',
      tech: '',
      status: 'En cours',
      client: ''
    });

    toast({
      title: "Projet ajouté !",
      description: "Le nouveau projet a été ajouté avec succès.",
    });
  };

  const handleEditProject = (project: Project) => {
    setEditingProject({
      id: project.id,
      title: project.title,
      category: project.category,
      description: project.description,
      tech: project.tech.join(', '),
      status: project.status,
      client: project.client
    });
  };

  const handleUpdateProject = () => {
    if (!editingProject) return;

    const updatedProjects = projects.map(p => 
      p.id === editingProject.id 
        ? {
            id: editingProject.id,
            title: editingProject.title,
            category: editingProject.category,
            description: editingProject.description,
            tech: editingProject.tech.split(',').map(t => t.trim()),
            status: editingProject.status,
            client: editingProject.client
          }
        : p
    );

    setProjects(updatedProjects);
    setEditingProject(null);

    toast({
      title: "Projet mis à jour !",
      description: "Les modifications ont été sauvegardées.",
    });
  };

  const handleDeleteProject = (id: number) => {
    setProjects(projects.filter(p => p.id !== id));
    toast({
      title: "Projet supprimé !",
      description: "Le projet a été supprimé avec succès.",
    });
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPassword('');
    toast({
      title: "Déconnexion",
      description: "Vous avez été déconnecté du dashboard.",
    });
  };

  if (!isAuthenticated) {
    return (
      <section id="dashboard" className="min-h-screen py-20 px-4 flex items-center justify-center">
        <Card className="glass-morphism p-8 max-w-md w-full">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-black mb-4 bg-gradient-to-r from-cyber-purple to-cyber-blue bg-clip-text text-transparent">
              🔐 ACCÈS DASHBOARD
            </h2>
            <p className="text-muted-foreground">
              Entrez le code d'accès administrateur
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2 text-cyber-blue">
                Code d'accès
              </label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Entrez le code..."
                className="bg-black/20 border-cyber-purple/30 focus:border-cyber-purple focus:ring-cyber-purple"
                onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
              />
            </div>

            <Button
              onClick={handleLogin}
              className="w-full bg-gradient-to-r from-cyber-purple to-cyber-blue text-black font-bold py-3 rounded-full hover:animate-pulse-cyber transition-all duration-300"
            >
              ACCÉDER AU DASHBOARD
            </Button>
          </div>

          <div className="mt-6 text-center text-xs text-muted-foreground">
            <p>🔒 Accès réservé à l'administrateur</p>
          </div>
        </Card>
      </section>
    );
  }

  return (
    <section id="dashboard" className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-black mb-4 bg-gradient-to-r from-cyber-purple to-cyber-blue bg-clip-text text-transparent">
              DASHBOARD ADMIN
            </h2>
            <p className="text-muted-foreground">Gestion du portfolio et des projets</p>
          </div>
          <Button
            onClick={handleLogout}
            variant="outline"
            className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
          >
            DÉCONNEXION
          </Button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-4 mb-8">
          <Button
            onClick={() => setActiveTab('projects')}
            variant={activeTab === 'projects' ? 'default' : 'outline'}
            className={activeTab === 'projects' 
              ? 'bg-gradient-to-r from-cyber-purple to-cyber-blue text-black' 
              : 'border-cyber-purple text-cyber-purple'
            }
          >
            PROJETS
          </Button>
          <Button
            onClick={() => setActiveTab('add')}
            variant={activeTab === 'add' ? 'default' : 'outline'}
            className={activeTab === 'add' 
              ? 'bg-gradient-to-r from-cyber-purple to-cyber-blue text-black' 
              : 'border-cyber-purple text-cyber-purple'
            }
          >
            AJOUTER PROJET
          </Button>
          <Button
            onClick={() => setActiveTab('stats')}
            variant={activeTab === 'stats' ? 'default' : 'outline'}
            className={activeTab === 'stats' 
              ? 'bg-gradient-to-r from-cyber-purple to-cyber-blue text-black' 
              : 'border-cyber-purple text-cyber-purple'
            }
          >
            STATISTIQUES
          </Button>
        </div>

        {/* Content */}
        {activeTab === 'projects' && (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-cyber-purple">Gestion des Projets</h3>
            <div className="grid gap-6">
              {projects.map((project) => (
                <Card key={project.id} className="glass-morphism p-6">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-cyber-purple mb-2">{project.title}</h4>
                      <p className="text-muted-foreground mb-2">{project.description}</p>
                      <div className="flex items-center space-x-4 text-sm">
                        <span className="text-cyber-blue">Client: {project.client}</span>
                        <span className="text-cyber-pink">Status: {project.status}</span>
                        <span className="text-muted-foreground">Tech: {project.tech.join(', ')}</span>
                      </div>
                    </div>
                    <div className="flex space-x-2 ml-4">
                      <Button
                        size="sm"
                        onClick={() => handleEditProject(project)}
                        className="bg-cyber-blue hover:bg-cyber-blue/80"
                      >
                        MODIFIER
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => handleDeleteProject(project.id)}
                      >
                        SUPPRIMER
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'add' && (
          <div className="max-w-2xl">
            <h3 className="text-2xl font-bold text-cyber-purple mb-6">Ajouter un Nouveau Projet</h3>
            <Card className="glass-morphism p-6">
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-cyber-blue">Titre *</label>
                    <Input
                      value={newProject.title}
                      onChange={(e) => setNewProject({...newProject, title: e.target.value})}
                      className="bg-black/20 border-cyber-purple/30"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-cyber-blue">Catégorie *</label>
                    <select
                      value={newProject.category}
                      onChange={(e) => setNewProject({...newProject, category: e.target.value})}
                      className="w-full p-3 bg-black/20 border border-cyber-purple/30 rounded-lg text-foreground"
                    >
                      <option value="">Sélectionner</option>
                      <option value="e-commerce">E-commerce</option>
                      <option value="dashboard">Dashboard</option>
                      <option value="portfolio">Portfolio</option>
                      <option value="vitrine">Site Vitrine</option>
                      <option value="mobile">Mobile</option>
                      <option value="education">Éducation</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-cyber-blue">Client</label>
                    <Input
                      value={newProject.client}
                      onChange={(e) => setNewProject({...newProject, client: e.target.value})}
                      className="bg-black/20 border-cyber-purple/30"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-cyber-blue">Status</label>
                    <select
                      value={newProject.status}
                      onChange={(e) => setNewProject({...newProject, status: e.target.value})}
                      className="w-full p-3 bg-black/20 border border-cyber-purple/30 rounded-lg text-foreground"
                    >
                      <option value="En cours">En cours</option>
                      <option value="Livré">Livré</option>
                      <option value="En pause">En pause</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-cyber-blue">Technologies (séparées par des virgules)</label>
                  <Input
                    value={newProject.tech}
                    onChange={(e) => setNewProject({...newProject, tech: e.target.value})}
                    placeholder="React, Node.js, MongoDB"
                    className="bg-black/20 border-cyber-purple/30"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-cyber-blue">Description *</label>
                  <Textarea
                    value={newProject.description}
                    onChange={(e) => setNewProject({...newProject, description: e.target.value})}
                    rows={4}
                    className="bg-black/20 border-cyber-purple/30"
                  />
                </div>

                <Button
                  onClick={handleAddProject}
                  className="w-full bg-gradient-to-r from-cyber-purple to-cyber-blue text-black font-bold"
                >
                  AJOUTER LE PROJET
                </Button>
              </div>
            </Card>
          </div>
        )}

        {activeTab === 'stats' && (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-cyber-purple">Statistiques du Portfolio</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="glass-morphism p-6 text-center">
                <div className="text-3xl font-bold text-cyber-purple mb-2">{projects.length}</div>
                <div className="text-muted-foreground">Projets Total</div>
              </Card>
              <Card className="glass-morphism p-6 text-center">
                <div className="text-3xl font-bold text-cyber-blue mb-2">
                  {projects.filter(p => p.status === 'Livré').length}
                </div>
                <div className="text-muted-foreground">Projets Livrés</div>
              </Card>
              <Card className="glass-morphism p-6 text-center">
                <div className="text-3xl font-bold text-cyber-pink mb-2">
                  {projects.filter(p => p.status === 'En cours').length}
                </div>
                <div className="text-muted-foreground">En Cours</div>
              </Card>
            </div>
          </div>
        )}

        {/* Edit Modal */}
        {editingProject && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <Card className="glass-morphism p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <h3 className="text-2xl font-bold text-cyber-purple mb-6">Modifier le Projet</h3>
              <div className="space-y-4">
                <Input
                  value={editingProject.title}
                  onChange={(e) => setEditingProject({...editingProject, title: e.target.value})}
                  className="bg-black/20 border-cyber-purple/30"
                  placeholder="Titre"
                />
                <Textarea
                  value={editingProject.description}
                  onChange={(e) => setEditingProject({...editingProject, description: e.target.value})}
                  className="bg-black/20 border-cyber-purple/30"
                  placeholder="Description"
                />
                <Input
                  value={editingProject.tech}
                  onChange={(e) => setEditingProject({...editingProject, tech: e.target.value})}
                  className="bg-black/20 border-cyber-purple/30"
                  placeholder="Technologies"
                />
                <div className="flex space-x-4">
                  <Button
                    onClick={handleUpdateProject}
                    className="bg-gradient-to-r from-cyber-purple to-cyber-blue text-black"
                  >
                    SAUVEGARDER
                  </Button>
                  <Button
                    onClick={() => setEditingProject(null)}
                    variant="outline"
                    className="border-gray-500 text-gray-500"
                  >
                    ANNULER
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
};

export default Dashboard;
