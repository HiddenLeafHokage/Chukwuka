import React, { useState } from 'react';
import { Award, Calendar, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

type Certification = {
  title: string;
  issuer: string;
  date: string;
  type: 'microsoft' | 'hackerrank' | 'udemy' | 'other';
};

const certifications: Certification[] = [
  {
    title: 'Microsoft Certified Azure Fundamentals',
    issuer: 'Microsoft',
    date: 'July 2020',
    type: 'microsoft',
  },
  {
    title: 'HackerRank Certificate C# (Basic)',
    issuer: 'HackerRank',
    date: 'May 2021',
    type: 'hackerrank',
  },
  {
    title: 'HackerRank Certificate SQL (Basic)',
    issuer: 'HackerRank',
    date: 'Sep 2021',
    type: 'hackerrank',
  },
  {
    title: 'ASP.NET Core API: From Scratch to Master + Azure Deployment',
    issuer: 'Udemy',
    date: 'Nov 2025',
    type: 'udemy',
  },
  {
    title: 'C# 10 | Ultimate Guide - Beginner to Advanced | Master Class',
    issuer: 'Udemy',
    date: 'June 2024',
    type: 'udemy',
  },
  {
    title: 'Foundational C# with Microsoft',
    issuer: 'Microsoft',
    date: 'Oct 2024',
    type: 'microsoft',
  },
  {
    title: ' The Complete Full-Stack Web Development Bootcamp',
    issuer: 'Udemy',
    date: 'November 2022',
    type: 'udemy',
  },
  {
    title: 'Advanced JavaScript in 2022',
    issuer: 'Udemy',
    date: 'May 2023',
    type: 'udemy',
  },
  {
    title: 'Understanding TypeScript',
    issuer: 'Udemy',
    date: 'May 2024',
    type: 'udemy',
  },
  {
    title: 'HackerRank React (Intermediate)',
    issuer: 'HackerRank',
    date: 'Aug 2025',
    type: 'hackerrank',
  },
];

const issuerColors: Record<string, { bg: string; text: string; border: string }> = {
  microsoft: { bg: 'bg-blue-500/10', text: 'text-blue-500', border: 'border-blue-500/20' },
  hackerrank: { bg: 'bg-emerald-500/10', text: 'text-emerald-500', border: 'border-emerald-500/20' },
  udemy: { bg: 'bg-purple-500/10', text: 'text-purple-500', border: 'border-purple-500/20' },
  other: { bg: 'bg-orange-500/10', text: 'text-orange-500', border: 'border-orange-500/20' },
};

const CertificationsSection: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;

  const filtered = filter === 'all'
    ? certifications
    : certifications.filter((c) => c.type === filter);

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const paginatedCerts = filtered.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
    setCurrentPage(0);
  };

  return (
    <section id="certifications" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-mono uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Certifications
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Credentials & <span className="dark:text-gradient text-gradient-light">Achievements</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Continuous learning and professional development through industry-recognized certifications
          </p>
        </div>

        {/* Filter */}
        <div className="flex items-center justify-center gap-2 mb-10 flex-wrap">
          {[
            { key: 'all', label: 'All' },
            { key: 'microsoft', label: 'Microsoft' },
            { key: 'hackerrank', label: 'HackerRank' },
            { key: 'udemy', label: 'Udemy' },
          ].map((f) => (
            <button
              key={f.key}
              onClick={() => handleFilterChange(f.key)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                filter === f.key
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25'
                  : 'text-muted-foreground hover:text-foreground bg-card border border-border hover:border-primary/30'
              }`}
            >
              {f.label}
              <span className="ml-1.5 text-xs opacity-70">
                ({f.key === 'all' ? certifications.length : certifications.filter(c => c.type === f.key).length})
              </span>
            </button>
          ))}
        </div>

        {/* Certifications grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {paginatedCerts.map((cert, i) => {
            const colors = issuerColors[cert.type];
            return (
              <div
                key={i}
                className="p-6 rounded-2xl border border-border bg-card hover:border-primary/30 transition-all duration-300 group card-glow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center`}>
                    <Award className={`w-6 h-6 ${colors.text}`} />
                  </div>
                  <span className={`px-2.5 py-1 rounded-lg text-[10px] font-semibold uppercase tracking-wider ${colors.bg} ${colors.text} border ${colors.border}`}>
                    {cert.issuer}
                  </span>
                </div>

                <h3 className="text-sm font-semibold text-foreground mb-3 leading-snug group-hover:text-primary transition-colors line-clamp-2">
                  {cert.title}
                </h3>

                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Calendar className="w-3.5 h-3.5" />
                    {cert.date}
                  </span>
                  <button className="text-xs text-primary hover:underline flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="w-3 h-3" />
                    View
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
              disabled={currentPage === 0}
              className="w-10 h-10 rounded-xl border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-sm text-muted-foreground">
              Page {currentPage + 1} of {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage(Math.min(totalPages - 1, currentPage + 1))}
              disabled={currentPage === totalPages - 1}
              className="w-10 h-10 rounded-xl border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CertificationsSection;
