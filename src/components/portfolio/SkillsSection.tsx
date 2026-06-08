import React, { useState } from 'react';
import { Code, Server, Cloud, Database, Wrench } from 'lucide-react';

type SkillCategory = {
  id: string;
  label: string;
  icon: React.ElementType;
  skills: string[];
};

const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    label: 'Languages',
    icon: Code,
    skills: ['C#', 'JavaScript', 'TypeScript', 'SQL', 'HTML', 'CSS'],
  },
  {
    id: 'frameworks',
    label: 'Frameworks & Libraries',
    icon: Server,
    skills: [
      'ASP.NET Core',
      '.NET 8 / .NET 9',
      'REST APIs',
      'Microservices',
      'Distributed Systems',
      'React',
      'React Native',
      'Angular',
      'Entity Framework Core',
      'Dapper',
      'SignalR',
      'NestJS',
      'Node.js',
      'Express.js',
      'Unity 6 (VR/XR)',
    ],
  },
  {
    id: 'cloud',
    label: 'Cloud & DevOps',
    icon: Cloud,
    skills: ['Azure', 'Azure DevOps', 'Docker', 'CI/CD Pipelines', 'IIS', 'Render', 'Railway'],
  },
  {
    id: 'databases',
    label: 'Databases',
    icon: Database,
    skills: ['SQL Server', 'PostgreSQL', 'MySQL', 'MongoDB', 'Oracle SQL'],
  },
  {
    id: 'tools',
    label: 'Tools & Platforms',
    icon: Wrench,
    skills: [
      'Git & GitHub',
      'Visual Studio',
      'VS Code',
      'Swagger / OpenAPI',
      'JWT Authentication',
      'Sentry',
      'Prometheus',
      'Microsoft MSAL',
      'Azure App Service',
      'Postman',
    ],
  },
];

const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('languages');

  const active = skillCategories.find((c) => c.id === activeCategory)!;

  return (
    <section id="skills" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-mono uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Technical Skills
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            My <span className="dark:text-gradient text-gradient-light">Tech Stack</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies and tools I use to build production-grade software
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          {skillCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat.id
                    ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25'
                    : 'text-muted-foreground hover:text-foreground bg-card border border-border hover:border-primary/30'
                }`}
              >
                <Icon className="w-4 h-4" />
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Skills grid for active category */}
        <div className="max-w-4xl mx-auto">
          <div className="p-6 lg:p-10 rounded-2xl border border-border bg-card">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <active.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">{active.label}</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {active.skills.map((skill, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl border border-border bg-muted/30 hover:bg-primary/5 hover:border-primary/30 transition-all duration-200 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Summary count */}
        <div className="flex justify-center mt-8">
          <p className="text-sm text-muted-foreground">
            <span className="text-primary font-semibold">
              {skillCategories.reduce((sum, c) => sum + c.skills.length, 0)}+
            </span>{' '}
            technologies across {skillCategories.length} categories
          </p>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
