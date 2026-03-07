import React, { useState } from 'react';
import { Briefcase, ChevronDown, ChevronUp, MapPin, Calendar, Building2 } from 'lucide-react';

type Experience = {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  type: 'full-time' | 'trainee';
  description: string[];
  technologies: string[];
};

const experiences: Experience[] = [
  {
    id: 'sterling',
    company: 'SterlingPRO Business Applications',
    role: 'Software Developer',
    period: 'Sep 2025 - Present',
    location: 'Lagos, Nigeria',
    type: 'full-time',
    description: [
      'Upgrade of legacy ASP.Net MVC ATM Monitoring application to .Net 8 using Entity Framework Core and Dapper. SignalR was used for real-time data monitoring.',
      'Fixed bugs and added features to the ATM keys generation application.',
      'Fixed bugs and added features to the legacy ATM Monitoring application.',
    ],
    technologies: ['.NET 8', 'Entity Framework Core', 'Dapper', 'SignalR', 'ASP.NET MVC'],
  },
  {
    id: 'fintrak-dev',
    company: 'FinTrak Software',
    role: 'Full Stack Developer',
    period: 'Oct 2020 - Aug 2025',
    location: 'Lagos, Nigeria',
    type: 'full-time',
    description: [
      'Developed various modules for the Enterprise Credit Solution, including enhancements to the end-of-day process, repayment background service, and customization based on user requirements using C#, JavaScript, Angular, ASP.NET, and .NET Core.',
      'Led the architecture and development of the front-end Angular project for a multi-tenant Cloud Core Banking solution, while also working extensively on the architecture and development of the backend with .NET Core, MySQL, MSSQL, and Azure Cloud.',
      'Supported the Credit Solution on production for multiple banks across Africa, ensuring smooth operations and resolving issues efficiently.',
      'Managed the deployment of the Cloud Core Banking solution on Azure Cloud and utilized Azure DevOps for continuous integration and deployment.',
      'Utilized various tools and technologies such as Node.js, IIS, and Azure to enhance the performance and scalability of solutions.',
      'Integrated the frontend Angular application with Microsoft Msal.',
      'Mentoring junior team members and training the Academy trainees on software development and DevOps.',
    ],
    technologies: ['C#', '.NET Core', 'Angular', 'TypeScript', 'Azure', 'Azure DevOps', 'MySQL', 'MSSQL', 'Node.js', 'IIS', 'Microsoft Msal', 'SignalR'],
  },
  {
    id: 'Blueloop-trainee',
    company: 'Blueloop Software',
    role: 'Graduate Trainee',
    period: 'Dec 2023 - Nov 2024',
    location: 'Lagos, Nigeria',
    type: 'trainee',
    description: [
      'Received training in diverse software engineering technologies and applied these skills in the development and support of a Credit Management solution for banks across several African countries.',
      'Assisted in troubleshooting, maintaining, and enhancing the Credit Management solution, ensuring smooth functionality and meeting the specific needs of clients in the banking sector.',
    ],
    technologies: ['C#', '.NET', 'SQL Server', 'React', 'JavaScript'],
  },
];

const ExperienceSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string>('fintrak-dev');

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? '' : id);
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
            Professional <span className="dark:text-gradient text-gradient-light">Journey</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Building enterprise solutions across fintech and banking sectors
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
                    <div className={`absolute left-4 lg:left-6 top-6 w-4 h-4 rounded-full border-2 transition-colors duration-300 ${
                      index === 0
                        ? 'bg-primary border-primary shadow-lg shadow-primary/30'
                        : 'bg-card border-border'
                    }`} />

                    {/* Card */}
                    <div
                      className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                        isExpanded
                          ? 'border-primary/30 bg-card shadow-lg'
                          : 'border-border bg-card hover:border-primary/20'
                      }`}
                    >
                      {/* Header - clickable */}
                      <button
                        onClick={() => toggleExpand(exp.id)}
                        className="w-full text-left p-6 flex items-start justify-between gap-4"
                      >
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className={`px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider ${
                              index === 0
                                ? 'bg-emerald-500/10 text-emerald-500'
                                : 'bg-muted text-muted-foreground'
                            }`}>
                              {index === 0 ? 'Current' : exp.type === 'trainee' ? 'Trainee' : 'Previous'}
                            </span>
                          </div>
                          <h3 className="text-lg lg:text-xl font-bold text-foreground">{exp.role}</h3>
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
                              <li key={i} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                          <div>
                            <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Technologies Used</h4>
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
                <h4 className="text-lg font-semibold text-foreground">Ambrose Alli University</h4>
                <p className="text-muted-foreground text-sm">Bachelors of Science (Human Physiology) </p>
              </div>
              <div className="text-sm text-muted-foreground flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                2018 - 2021
              </div>
            </div>
            <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              Benin City, Nigeria
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
