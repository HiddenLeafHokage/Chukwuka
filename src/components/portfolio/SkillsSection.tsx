import React from 'react';
import { Code } from 'lucide-react';

const skills = [
  { name: 'C#' },
  { name: 'JavaScript' },
  { name: 'TypeScript' },
  { name: 'SQL' },
  { name: 'HTML' },
  { name: 'CSS' },
];

const SkillsSection: React.FC = () => {
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
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Skills grid - no levels or progress */}
        <div className="max-w-3xl mx-auto">
          <div className="p-6 lg:p-10 rounded-2xl border border-border bg-card">
            <div className="flex items-center gap-3 mb-8">
              <Code className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold text-foreground">Languages & Markup</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {skills.map((skill, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 px-5 py-4 rounded-xl border border-border bg-muted/30 hover:bg-muted/50 hover:border-primary/30 transition-all duration-200 group"
                >
                  <span className="text-base font-medium text-foreground group-hover:text-primary transition-colors">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
