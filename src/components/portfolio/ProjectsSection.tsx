import React, { useState } from "react";
import {
  ExternalLink,
  Github,
  Store,
  Glasses,
  Hotel,
  ShoppingBag,
  CreditCard,
  Globe,
} from "lucide-react";

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
    id: "treda",
    title: "Treda Marketplace API",
    description:
      "A production-grade classifieds marketplace backend   vendors list products, buyers browse, orders are tracked and payments flow through a vendor wallet.",
    longDescription:
      "Built a full-featured REST API for a Jiji-style marketplace platform using .NET 9 and Clean Architecture. The system supports vendor registration with email OTP verification, product listings with image upload, real-time messaging between buyers and sellers, order management, and an integrated vendor wallet. Deployed on Render with Docker, monitored via Prometheus metrics and Sentry error tracking.",
    technologies: [
      ".NET 9",
      "PostgreSQL",
      "Docker",
      "JWT",
      "Clean Architecture",
      "Sentry",
      "Prometheus",
      "EF Core",
    ],
    icon: Store,
    gradient: "from-violet-500 to-purple-600",
    features: [
      "Vendor Wallet",
      "Real-time Messaging",
      "Order Management",
      "Email OTP Auth",
      "Docker Deployment",
      "Prometheus Metrics",
    ],
    category: "Backend",
    projectUrl: "https://treda-mjiy.onrender.com/health",
    sourceCodeUrl: "https://github.com/HiddenLeafHokage/TREDA",
  },
  {
    id: "igh-xr",
    title: "Molecular Biology VR",
    description:
      "A virtual reality educational app for exploring molecular biology in immersive 3D, built for Oculus Quest 3.",
    longDescription:
      "An interactive VR learning application built with Unity 6 and C# for the Oculus Quest 3. Users explore DNA, RNA, proteins and virus structures (such as HIV and SARS-CoV-2) in immersive 3D, using XR grab interactables, molecule selection, teleport anchors and voiceover guidance. Developed at the Institute of Genomics and Global Health to make molecular biology tangible for students.",
    technologies: [
      "Unity 6",
      "C#",
      "Oculus Quest 3",
      "XR Interaction Toolkit",
      "3D Visualization",
    ],
    icon: Glasses,
    gradient: "from-fuchsia-500 to-pink-600",
    features: [
      "Immersive 3D",
      "XR Interactions",
      "Molecule Visualization",
      "Teleport Navigation",
      "Voiceover Guidance",
      "Educational",
    ],
    category: "VR / 3D",
    sourceCodeUrl: "https://github.com/HiddenLeafHokage/IGH_XR",
  },
  {
    id: "natours",
    title: "Natours   Tours & Payments API",
    description:
      "A secure tour-booking platform with Stripe payments, JWT authentication, and a hardened REST API.",
    longDescription:
      "A full-featured tour-booking application built on Node.js, Express and MongoDB (Mongoose). Implements Stripe payment processing for bookings, JWT authentication with bcrypt password hashing, and production-grade API security   rate limiting, Helmet headers, NoSQL-injection sanitisation, XSS protection and HPP. Includes email notifications (Nodemailer) and image processing (Sharp).",
    technologies: [
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "Stripe",
      "JWT",
      "Security Hardening",
    ],
    icon: CreditCard,
    gradient: "from-emerald-500 to-teal-600",
    features: [
      "Stripe Payments",
      "JWT Auth & bcrypt",
      "Rate Limiting",
      "NoSQL Injection Protection",
      "XSS / HPP Protection",
      "Email Notifications",
    ],
    category: "Backend",
    sourceCodeUrl: "https://github.com/loveisthekeysteven/Natours",
  },
  {
    id: "dotnet-ecommerce",
    title: ".NET E-Commerce Platform",
    description:
      "A full-stack e-commerce app built with .NET 8 (Onion architecture) and a React + TypeScript frontend.",
    longDescription:
      "A modern e-commerce platform with a .NET 8 backend structured using Onion architecture   separated Domain, Application, Infrastructure and API layers   backed by EF Core and SQL Server. The React (Vite) + TypeScript + Tailwind frontend delivers product catalog browsing, a full shopping cart (add/update/remove) and user authentication.",
    technologies: [
      ".NET 8",
      "C#",
      "EF Core",
      "SQL Server",
      "React",
      "TypeScript",
      "Onion Architecture",
    ],
    icon: ShoppingBag,
    gradient: "from-orange-500 to-red-600",
    features: [
      "Onion Architecture",
      "Product Catalog",
      "Shopping Cart",
      "User Authentication",
      "EF Core + SQL Server",
      "React + TypeScript UI",
    ],
    category: "Full Stack",
    sourceCodeUrl: "https://github.com/HiddenLeafHokage/DotNetTask",
  },
  {
    id: "justmove",
    title: "JustMove Global",
    description:
      "A live travel & immigration agency website I built and deployed for a client, covering study permits, work permits and visa migration services across 200+ destinations.",
    longDescription:
      "A production website I designed, built and deployed for a client     JustMove Global, a travel and immigration agency. The site presents migration routes and services (study permits, work permits, flight reservations, financial and job assistance) across destinations including Canada, the UK, Sweden, Ireland, Poland and New Zealand. Built with React and deployed on a custom domain (justmoveglobal.com), it features destination showcases, service breakdowns, client testimonials and a contact/enquiry flow.",
    technologies: ["React", "JavaScript", "CSS", "Production Hosting"],
    icon: Globe,
    gradient: "from-cyan-500 to-blue-600",
    features: [
      "Live in Production",
      "Custom Domain",
      "200+ Destinations",
      "Service Showcase",
      "Client Testimonials",
      "Contact / Enquiry Flow",
    ],
    category: "Full Stack",
    projectUrl: "https://www.justmoveglobal.com/",
    sourceCodeUrl: "https://github.com/loveisthekeysteven/JustMove-Global",
  },
  {
    id: "bookit",
    title: "Bookit   Hotel Booking",
    description:
      "An online hotel booking application built with Next.js and TypeScript. (In progress)",
    longDescription:
      "A modern hotel booking web application built with Next.js and TypeScript   browse hotels, view room details, and make reservations through a clean, responsive interface. Currently in active development.",
    technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
    icon: Hotel,
    gradient: "from-violet-500 to-fuchsia-600",
    features: [
      "Hotel Listings",
      "Room Details",
      "Reservations",
      "Responsive UI",
      "Search & Filter",
      "Modern Stack",
    ],
    category: "Full Stack",
    sourceCodeUrl: "https://github.com/loveisthekeysteven/bookit",
  },
];

const categories = ["All", "Backend", "Full Stack", "VR / 3D"];

const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeCategory === "All"
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
            Featured{" "}
            <span className="dark:text-gradient text-gradient-light">Work</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of projects that showcase my expertise and passion for
            building great software
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
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "text-muted-foreground hover:text-foreground bg-card border border-border hover:border-primary/30"
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
                <div
                  className={`relative h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
                >
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
                  <div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
                  >
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
                <div
                  className={`relative h-40 bg-gradient-to-br ${selectedProject.gradient} rounded-t-2xl flex items-center justify-center`}
                >
                  <selectedProject.icon className="w-20 h-20 text-white/20" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                </div>
              )}

              <div className="p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${selectedProject.gradient} flex items-center justify-center`}
                  >
                    <selectedProject.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {selectedProject.title}
                    </h3>
                    <span className="text-xs text-primary font-medium">
                      {selectedProject.category}
                    </span>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mt-4 mb-6">
                  {selectedProject.longDescription}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
                    Key Features
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {selectedProject.features.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
                    Technologies
                  </h4>
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
