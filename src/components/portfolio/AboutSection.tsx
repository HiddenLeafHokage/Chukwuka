import React from 'react';
import { Code2, Server, Cloud, Database, Users, Zap } from 'lucide-react';

const highlights = [
  {
    icon: Code2,
    title: 'Frontend Development',
    description: 'Building responsive, interactive UIs with Angular, React, and TypeScript',
  },
  {
    icon: Server,
    title: 'Backend Engineering',
    description: 'Designing robust APIs and services with .NET Core, C#, and Node.js',
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    description: 'Deploying and managing applications on Azure, AWS with CI/CD pipelines',
  },
  {
    icon: Database,
    title: 'Database Design',
    description: 'Architecting efficient data solutions with SQL Server, Oracle SQL, MySQL, and MongoDB',
  },
  {
    icon: Users,
    title: 'Team Leadership',
    description: 'Mentoring junior developers and leading architecture decisions',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Optimizing system performance and delivering high-quality solutions',
  },
];

const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: '6+', label: 'Certifications' },
  { value: '5+', label: 'Major Projects' },
  { value: '3+', label: 'Industries Served' },
];

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-mono uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            About Me
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Crafting Digital <span className="dark:text-gradient text-gradient-light">Experiences</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate about building scalable, maintainable, and high-performance software solutions
          </p>
        </div>

        {/* About content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <div>
            <p className="text-muted-foreground leading-relaxed mb-6 text-base lg:text-lg">
              I'm a result-driven Full Stack Developer with over 3 years of experience in software development 
              with <span className="text-foreground font-medium">C#, JavaScript, TypeScript</span> and other related tools, 
              frameworks, and platforms. Proficient in leveraging frameworks like{' '}
              <span className="text-primary font-medium">ASP.NET, .Net, VR, React</span> to develop scalable and efficient solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6 text-base lg:text-lg">
              My expertise spans building APIs, developing web applications, creating background services, 
              and various types of applications based on requirements. I'm committed to writing clean, 
              maintainable, and high-performance code, with a strong focus on optimizing system performance 
              and delivering robust software solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base lg:text-lg">
              I've worked extensively in the <span className="text-foreground font-medium">fintech and banking sector</span>, 
              supporting credit solutions for multiple banks across Africa, leading architecture for multi-tenant 
              cloud core banking solutions, and managing deployments on Azure Cloud.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl border border-border bg-card hover:border-primary/30 transition-all duration-300 group card-glow text-center"
              >
                <div className="text-3xl sm:text-4xl font-bold dark:text-gradient text-gradient-light mb-1 group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Highlights grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {highlights.map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl border border-border bg-card hover:border-primary/30 transition-all duration-300 group card-glow"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
