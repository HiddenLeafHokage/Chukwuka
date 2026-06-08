import React, { useState } from "react";
import {
  Briefcase,
  ChevronDown,
  ChevronUp,
  MapPin,
  Calendar,
  Building2,
} from "lucide-react";

type Experience = {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  type: "full-time" | "trainee" | "nysc" | "contract";
  description: string[];
  technologies: string[];
};

const experiences: Experience[] = [
  {
    id: "sterlingpro",
    company: "SterlingPRO Business Applications",
    role: "Software Engineer",
    period: "Sep 2025 - Present",
    location: "Lagos, Nigeria",
    type: "full-time",
    description: [
      "Build and maintain backend systems across the financial services domain     card transaction monitoring, settlement and reconciliation, ATM monitoring, POS/teller and cross-border payment workflows     using C#, .NET 8 and clean architecture.",
      "Developed a card settlement and reconciliation platform on .NET 8 with a containerised (Docker), layered clean-architecture design.",
      "Built and modernised real-time ATM and transaction monitoring applications using SignalR, Entity Framework Core and Dapper for live status tracking and high-throughput data access.",
      "Worked on biometric onboarding and merchant-facing dashboard applications with React and TypeScript front-ends backed by .NET APIs.",
      "Implemented secure key-management and encryption modules (including ATM key handling) within a regulated financial environment.",
      "Diagnosed and resolved production issues, improving the reliability and stability of mission-critical financial systems.",
    ],
    technologies: [
      "C#",
      ".NET 8",
      "Entity Framework Core",
      "Dapper",
      "SignalR",
      "React",
      "TypeScript",
      "SQL Server",
      "Docker",
      "Clean Architecture",
    ],
  },
  {
    id: "igh",
    company: "Institute of Genomics and Global Health (IGH)",
    role: "VR Developer & Software Engineer",
    period: "2023 - 2025",
    location: "Lagos, Nigeria",
    type: "full-time",
    description: [
      "Designed and developed VR educational applications with Unity 6 and Oculus Quest 3, enabling interactive exploration of DNA, RNA, proteins and virus structures (e.g. HIV, SARS-CoV-2).",
      "Led development of the official Hackathon website, supporting registration, team selection and project tracking across biology, C#/Unity and 3D-design tracks.",
      "Built interactive virtual laboratory scenes with XR grab interactables, molecule selection, teleport anchors and voiceover guidance to simulate real-world learning environments.",
      "Wrote custom C# scripts for user interaction, animation and game-like experiences within VR.",
      "Mentored students on using VR for molecular biology and documented weekly IT/VR department progress for leadership.",
    ],
    technologies: [
      "Unity 6",
      "C#",
      "Oculus Quest 3",
      "XR Interaction Toolkit",
      "React",
      "3D Visualization",
    ],
  },
  {
    id: "nysc",
    company: "BlueLoop",
    role: "Full-Stack / Backend Developer",
    period: "2022 - 2023",
    location: "Nigeria",
    type: "nysc",
    description: [
      "Contributed to transitioning a backend codebase from Express.js to NestJS, improving modularity, structure and scalability.",
      "Designed and implemented APIs for user authentication and login, with robust security and data-protection measures.",
      "Managed and queried PostgreSQL databases for efficient, reliable data storage and retrieval.",
      "Collaborated using Gitpushing, forking, reviewing and merging codeand took part in code reviews to uphold quality standards.",
      "Engaged in continuous learning to stay current with emerging backend technologies.",
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "NestJS",
      "TypeScript",
      "JavaScript",
      "PostgreSQL",
      "Git",
      "REST APIs",
    ],
  },
];

const ExperienceSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string>("sterlingpro");

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? "" : id);
  };

  return (
    <section id="experience" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-mono uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Work Experience
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Professional{" "}
            <span className="dark:text-gradient text-gradient-light">
              Journey
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Building software across fintech, research/VR, and the web
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 lg:left-8 top-0 bottom-0 w-px bg-border" />

            <div className="space-y-6">
              {experiences.map((exp, index) => {
                const isExpanded = expandedId === exp.id;
                return (
                  <div key={exp.id} className="relative pl-16 lg:pl-20">
                    {/* Timeline dot */}
                    <div
                      className={`absolute left-4 lg:left-6 top-6 w-4 h-4 rounded-full border-2 transition-colors duration-300 ${
                        index === 0
                          ? "bg-primary border-primary shadow-lg shadow-primary/30"
                          : "bg-card border-border"
                      }`}
                    />

                    {/* Card */}
                    <div
                      className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                        isExpanded
                          ? "border-primary/30 bg-card shadow-lg"
                          : "border-border bg-card hover:border-primary/20"
                      }`}
                    >
                      {/* Header - clickable */}
                      <button
                        onClick={() => toggleExpand(exp.id)}
                        className="w-full text-left p-6 flex items-start justify-between gap-4"
                      >
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span
                              className={`px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider ${
                                index === 0
                                  ? "bg-emerald-500/10 text-emerald-500"
                                  : "bg-muted text-muted-foreground"
                              }`}
                            >
                              {index === 0
                                ? "Current"
                                : exp.type === "nysc"
                                  ? "NYSC"
                                  : exp.type === "trainee"
                                    ? "Trainee"
                                    : "Previous"}
                            </span>
                          </div>
                          <h3 className="text-lg lg:text-xl font-bold text-foreground">
                            {exp.role}
                          </h3>
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1.5">
                              <Building2 className="w-3.5 h-3.5 text-primary" />
                              {exp.company}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <Calendar className="w-3.5 h-3.5" />
                              {exp.period}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <MapPin className="w-3.5 h-3.5" />
                              {exp.location}
                            </span>
                          </div>
                        </div>
                        <div className="flex-shrink-0 mt-1">
                          {isExpanded ? (
                            <ChevronUp className="w-5 h-5 text-primary" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-muted-foreground" />
                          )}
                        </div>
                      </button>

                      {/* Expanded content */}
                      {isExpanded && (
                        <div className="px-6 pb-6 border-t border-border pt-4">
                          <ul className="space-y-3 mb-5">
                            {exp.description.map((item, i) => (
                              <li
                                key={i}
                                className="flex gap-3 text-sm text-muted-foreground leading-relaxed"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                          <div>
                            <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                              Technologies Used
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {exp.technologies.map((tech, i) => (
                                <span
                                  key={i}
                                  className="px-2.5 py-1 rounded-md text-xs font-medium border border-primary/20 bg-primary/5 text-primary"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="max-w-4xl mx-auto mt-16">
          <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-primary" />
            </div>
            Education
          </h3>
          <div className="p-6 rounded-2xl border border-border bg-card">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <h4 className="text-lg font-semibold text-foreground">
                  Ambrose Alli University
                </h4>
                <p className="text-muted-foreground text-sm">
                  Bachelors of Science (Human Physiology){" "}
                </p>
              </div>
              <div className="text-sm text-muted-foreground flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                2018 - 2021
              </div>
            </div>
            <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              Ekpoma, Edo State, Nigeria
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
