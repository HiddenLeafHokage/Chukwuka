import React, { useState } from 'react';
import { ExternalLink, Github, Layers, ShoppingCart, Mail, Lock, Globe, Server } from 'lucide-react';

type Project = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  icon: React.ElementType;
  gradient: string;
  features: string[];
  category: string;
  image?: string;
  projectUrl?: string;
  sourceCodeUrl?: string;
};

const projects: Project[] = [
  {
    id: 'apex',
    title: 'Apex Online Store',
    description: 'Full-stack e-commerce application enabling users to create, browse products, and manage cart.',
    longDescription: 'Developed a full-stack e-commerce application with a relational database schema using MSSQL for efficient product and order management. Built responsive front-end interfaces with Angular, integrating a RESTful API for seamless data flow between client and server. Implemented secure user authentication and authorization, ensuring data protection and user privacy.',
    technologies: ['.NET', 'Angular', 'MSSQL', 'Azure App Service'],
    icon: ShoppingCart,
    gradient: 'from-emerald-500 to-teal-600',
    features: ['Product Management', 'Shopping Cart', 'User Authentication', 'Order Management', 'RESTful API', 'Responsive Design'],
    category: 'Full Stack',
    image: '/images/aerial-view-factory-trucks-parked-near-warehouse-daytime.jpg',
    projectUrl: 'https://apexecommerce.azurewebsites.net/',
    sourceCodeUrl: 'https://dev.azure.com/aghaulorelvis/Ecommerce/',
  },
  {
    id: 'mail',
    title: 'Mail Manager',
    description: 'Web application for composing, sending, and scheduling emails with a user-friendly interface.',
    longDescription: 'Created a web application for composing, sending, and scheduling emails. Utilized MongoDB for flexible storage of email data and scheduled mails, optimizing data retrieval and updates. Integrated Ethereal and Gmail SMTP servers for reliable email delivery and testing, supporting both immediate and scheduled sending using a .Net background service.',
    technologies: ['.NET', 'Angular', 'MongoDB', 'Ethereal/Gmail SMTP', 'Azure App Service'],
    icon: Mail,
    gradient: 'from-blue-500 to-indigo-600',
    features: ['Email Composing', 'Scheduled Sending', 'SMTP Integration', 'Background Service', 'MongoDB Storage', 'Email Templates'],
    category: 'Full Stack',
    image: '/images/cloud-storage-background-business-network-design.jpg',
    projectUrl: 'https://bulkmailmanager.azurewebsites.net/',
    sourceCodeUrl: 'https://github.com/HiddenLeafHokage/MailSenderProject.git',
  },
  {
    id: 'cryptify',
    title: 'Cryptify',
    description: 'Web-based tool for experimenting with various encryption and decryption algorithms.',
    longDescription: 'Built a web-based tool for experimenting with various encryption and decryption. Implemented multiple cryptographic algorithms (e.g., AES, Xor Cipher) in .NET, enabling users to test and compare encryption techniques. Designed an interactive Angular front-end for users to input data, go to algorithm menu, and view encrypted/decrypted outputs.',
    technologies: ['.NET', 'Angular', 'Azure App Service'],
    icon: Lock,
    gradient: 'from-purple-500 to-pink-600',
    features: ['AES Encryption', 'XOR Cipher', 'Algorithm Comparison', 'Interactive UI', 'Real-time Processing', 'Multiple Algorithms'],
    category: 'Security',
    image: '/images/concept-online-storage.jpg',
    projectUrl: 'https://cryptify-gse8hrghashxb0hp.canadacentral-01.azurewebsites.net/',
    sourceCodeUrl: 'https://github.com/HiddenLeafHokage/Cryptify',
  },
  {
    id: 'credit',
    title: 'Enterprise Credit Solution',
    description: 'Enterprise-grade credit management system supporting multiple banks across Africa.',
    longDescription: 'Developed and maintained a comprehensive credit management solution used by multiple banks across Africa. Worked on end-of-day processes, repayment background services, and customizations based on client requirements. Ensured smooth operations and resolved production issues efficiently.',
    technologies: ['C#', '.NET Core', 'Angular', 'SQL Server', 'Azure'],
    icon: Globe,
    gradient: 'from-orange-500 to-red-600',
    features: ['Multi-bank Support', 'End-of-day Processing', 'Repayment Services', 'Custom Workflows', 'Production Support', 'Africa-wide Deployment'],
    category: 'Enterprise',
  },
  {
    id: 'banking',
    title: 'Cloud Core Banking',
    description: 'Multi-tenant cloud core banking solution with Angular frontend and .NET backend.',
    longDescription: 'Led the architecture and development of the front-end Angular project for a multi-tenant Cloud Core Banking solution. Worked extensively on the backend architecture with .NET Core, MySQL, MSSQL, and Azure Cloud. Managed deployment using Azure DevOps for continuous integration and deployment.',
    technologies: ['.NET Core', 'Angular', 'MySQL', 'MSSQL', 'Azure Cloud', 'Azure DevOps'],
    icon: Server,
    gradient: 'from-cyan-500 to-blue-600',
    features: ['Multi-tenant Architecture', 'Cloud Deployment', 'CI/CD Pipeline', 'Banking APIs', 'Azure Integration', 'Scalable Design'],
    category: 'Enterprise',
  },
  {
    id: 'atm',
    title: 'ATM Monitoring System',
    description: 'Real-time ATM monitoring application with SignalR for live data updates.',
    longDescription: 'Upgraded legacy ASP.Net MVC ATM Monitoring application to .Net 8 using Entity Framework Core and Dapper. Implemented SignalR for real-time data monitoring, enabling live tracking of ATM status and performance across the network.',
    technologies: ['.NET 8', 'Entity Framework Core', 'Dapper', 'SignalR', 'ASP.NET MVC'],
    icon: Layers,
    gradient: 'from-amber-500 to-orange-600',
    features: ['Real-time Monitoring', 'SignalR Integration', '.NET 8 Migration', 'Live Data Updates', 'ATM Key Generation', 'Legacy Modernization'],
    category: 'Enterprise',
  },
];

const categories = ['All', 'Full Stack', 'Enterprise', 'Security'];

const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-mono uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Projects
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Featured <span className="dark:text-gradient text-gradient-light">Work</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of projects that showcase my expertise and passion for building great software
          </p>
        </div>

        {/* Category filter */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25'
                  : 'text-muted-foreground hover:text-foreground bg-card border border-border hover:border-primary/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/30 transition-all duration-300 card-glow cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Project image or gradient header */}
              {project.image ? (
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 rounded-lg text-[10px] font-semibold uppercase tracking-wider bg-black/50 backdrop-blur-sm text-white">
                      {project.category}
                    </span>
                  </div>
                </div>
              ) : (
                <div className={`relative h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                  <project.icon className="w-16 h-16 text-white/30" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 rounded-lg text-[10px] font-semibold uppercase tracking-wider bg-black/30 backdrop-blur-sm text-white">
                      {project.category}
                    </span>
                  </div>
                </div>
              )}

              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                    <project.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 4).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded text-[10px] font-medium border border-border bg-muted/50 text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-medium text-primary">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project detail modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            />
            <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-card border border-border rounded-2xl shadow-2xl">
              {/* Modal header */}
              {selectedProject.image ? (
                <div className="relative h-56 overflow-hidden rounded-t-2xl">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                </div>
              ) : (
                <div className={`relative h-40 bg-gradient-to-br ${selectedProject.gradient} rounded-t-2xl flex items-center justify-center`}>
                  <selectedProject.icon className="w-20 h-20 text-white/20" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                </div>
              )}

              <div className="p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${selectedProject.gradient} flex items-center justify-center`}>
                    <selectedProject.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{selectedProject.title}</h3>
                    <span className="text-xs text-primary font-medium">{selectedProject.category}</span>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mt-4 mb-6">
                  {selectedProject.longDescription}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">Key Features</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {selectedProject.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 rounded-lg text-xs font-medium border border-primary/20 bg-primary/5 text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-6 py-2.5 rounded-xl border border-border text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all"
                  >
                    Close
                  </button>
                  {selectedProject.projectUrl && (
                    <a
                      href={selectedProject.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all flex items-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                  {selectedProject.sourceCodeUrl && (
                    <a
                      href={selectedProject.sourceCodeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2.5 rounded-xl border border-border text-sm font-medium text-foreground hover:bg-muted/50 transition-all flex items-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
