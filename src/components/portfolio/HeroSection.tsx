import React, { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Mail, MapPin, FileText, ChevronRight } from 'lucide-react';

const roles = [
  'Full Stack Developer',
  '.NET Specialist',
  'React Expert',
  'VR Developer',
  'API Engineer',
];

const HeroSection: React.FC = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < role.length) {
          setDisplayText(role.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(role.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 40 : 80);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 lg:pt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern dark:bg-grid-pattern" />
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-600/5" />
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm text-sm text-muted-foreground mb-6 animate-fade-in-up">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Available for opportunities
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-4 animate-fade-in-up animation-delay-100">
              <span className="block text-foreground">Hi, I'm</span>
              <span className="block dark:text-gradient text-gradient-light mt-1">Solomon Chukwuka</span>
            </h1>

            <div className="h-12 sm:h-14 flex items-center justify-center lg:justify-start mb-6 animate-fade-in-up animation-delay-200">
              <span className="text-xl sm:text-2xl lg:text-3xl font-mono text-muted-foreground">
                {'> '}
              </span>
              <span className="text-xl sm:text-2xl lg:text-3xl font-mono text-primary">
                {displayText}
              </span>
              <span className="w-0.5 h-7 sm:h-8 bg-primary animate-pulse ml-0.5" />
            </div>

            <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed animate-fade-in-up animation-delay-300">
              A result-driven Full Stack Developer with over <span className="text-foreground font-semibold">3 years of experience</span> building 
              scalable web applications with <span className="text-primary font-semibold">C#</span>, <span className="text-primary font-semibold">.NET</span>, 
              <span className="text-primary font-semibold"> React</span>, VR and  cloud technologies. Based in Lagos, Nigeria.
            </p>

            <div className="flex items-center gap-2 justify-center lg:justify-start text-sm text-muted-foreground mb-8 animate-fade-in-up animation-delay-300">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Lagos, Nigeria</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start animate-fade-in-up animation-delay-400">
              <button
                onClick={() => scrollToSection('projects')}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center gap-2 group"
              >
                View My Work
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl border border-border bg-card/50 backdrop-blur-sm text-foreground font-semibold hover:bg-muted/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Contact Me
              </button>
              <a
                href="/resume/Elvis%20Aghaulor%20CV.pdf"
                download="Solomon Chukwuka Resume.pdf"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl border border-primary/40 bg-primary/5 text-primary font-semibold hover:bg-primary/10 hover:border-primary/60 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4" />
                Download CV
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-8 justify-center lg:justify-start animate-fade-in-up animation-delay-500">
              <a
                href="https://github.com/HiddenLeafHokage"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl border border-border bg-card/50 backdrop-blur-sm flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-200 hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/chukwuka-solomon-7b7207302/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl border border-border bg-card/50 backdrop-blur-sm flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-200 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:solomon.chukwuka28@gmail.com"
                className="w-11 h-11 rounded-xl border border-border bg-card/50 backdrop-blur-sm flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-200 hover:scale-110"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-11 h-11 rounded-xl border border-border bg-card/50 backdrop-blur-sm flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-200 hover:scale-110"
                aria-label="Resume"
              >
                <FileText className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right side - Code block / Visual */}
          <div className="hidden lg:block animate-fade-in-up animation-delay-400">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-2xl blur-xl" />
              <div className="relative bg-card border border-border rounded-2xl overflow-hidden shadow-2xl">
                {/* Terminal header */}
                <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-2 text-xs text-muted-foreground font-mono">chuks-portfolio.ts</span>
                </div>
                {/* Code content */}
                <div className="p-6 font-mono text-sm leading-relaxed">
                  <div className="text-muted-foreground">
                    <span className="text-purple-400 dark:text-purple-400">const</span>{' '}
                    <span className="text-cyan-400">developer</span>{' '}
                    <span className="text-foreground">=</span>{' '}
                    <span className="text-yellow-500">{'{'}</span>
                  </div>
                  <div className="ml-4">
                    <span className="text-blue-400">name</span>
                    <span className="text-foreground">: </span>
                    <span className="text-emerald-400">"Solomon Chukwuka"</span>
                    <span className="text-foreground">,</span>
                  </div>
                  <div className="ml-4">
                    <span className="text-blue-400">role</span>
                    <span className="text-foreground">: </span>
                    <span className="text-emerald-400">"Full Stack Developer"</span>
                    <span className="text-foreground">,</span>
                  </div>
                  <div className="ml-4">
                    <span className="text-blue-400">experience</span>
                    <span className="text-foreground">: </span>
                    <span className="text-orange-400">"3+ years"</span>
                    <span className="text-foreground">,</span>
                  </div>
                  <div className="ml-4">
                    <span className="text-blue-400">stack</span>
                    <span className="text-foreground">: [</span>
                  </div>
                  <div className="ml-8">
                    <span className="text-emerald-400">"C#"</span>
                    <span className="text-foreground">, </span>
                    <span className="text-emerald-400">".NET"</span>
                    <span className="text-foreground">, </span>
                    <span className="text-emerald-400">"React"</span>
                    <span className="text-foreground">,</span>
                  </div>
                  <div className="ml-8">
                    <span className="text-emerald-400">"TypeScript"</span>
                    <span className="text-foreground">, </span>
                    <span className="text-emerald-400">"Azure"</span>
                    <span className="text-foreground">,</span>
                  </div>
                  <div className="ml-8">
                    <span className="text-emerald-400">"SQL Server"</span>
                    <span className="text-foreground">, </span>
                    <span className="text-emerald-400">"Docker"</span>
                  </div>
                  <div className="ml-4">
                    <span className="text-foreground">],</span>
                  </div>
                  <div className="ml-4">
                    <span className="text-blue-400">passion</span>
                    <span className="text-foreground">: </span>
                    <span className="text-emerald-400">"Building scalable solutions"</span>
                  </div>
                  <div>
                    <span className="text-yellow-500">{'}'}</span>
                    <span className="text-foreground">;</span>
                  </div>
                  <div className="mt-4 text-muted-foreground">
                    <span className="text-purple-400">export default</span>{' '}
                    <span className="text-cyan-400">developer</span>
                    <span className="text-foreground">;</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-32 left-1/2 -translate-x-1/2 animate-bounce hidden lg:block">
          <button
            onClick={() => scrollToSection('about')}
            className="w-10 h-10 rounded-full border border-border bg-card/50 backdrop-blur-sm flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
          >
            <ArrowDown className="w-5 h-5" />
          </button>
        </div>

        {/* Profile Image Section */}
        <div className="w-full flex justify-center items-center mt-16 lg:mt-20 mb-8">
          <div className="relative group">
            {/* Gradient background glow - light mode */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300 dark:opacity-60" />
            
            {/* Gradient background glow - dark mode enhanced */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/50 via-blue-600/50 to-purple-700/50 rounded-full blur-md dark:opacity-50 opacity-0" />
            
            {/* Circular image container */}
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-background shadow-2xl dark:shadow-cyan-500/20 light:shadow-blue-400/20">
              <img
                src="/images/pro-head-shot.png"
                alt="Solomon Chukwuka - Professional Headshot"
                className="w-full h-full object-cover"
              />
              
              {/* Overlay effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/5 dark:to-white/5 group-hover:from-cyan-500/10 group-hover:via-blue-500/10 group-hover:to-purple-600/10 dark:group-hover:to-white/10 transition-all duration-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
