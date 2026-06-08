import React from "react";
import { Code2, Server, Cloud, Database, Users, Zap } from "lucide-react";

const highlights = [
  {
    icon: Server,
    title: "APIs & Microservices",
    description:
      "Designing robust REST APIs and microservices with .NET Core, C#, and Node.js",
  },
  {
    icon: Zap,
    title: "Payments & Transactions",
    description:
      "Building financial workflows payments, wallets, ledgers, and transaction processing",
  },
  {
    icon: Code2,
    title: "Backend Engineering",
    description:
      "Architecting scalable, secure distributed systems with clean architecture principles",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "Deploying with Docker, Azure, and CI/CD pipelines for reliable, repeatable releases",
  },
  {
    icon: Database,
    title: "Database Design",
    description:
      "Modeling efficient, consistent data with PostgreSQL, SQL Server, MySQL, and MongoDB",
  },
  {
    icon: Users,
    title: "Mentoring & Leadership",
    description:
      "Mentoring junior developers and driving architecture and code-quality decisions",
  },
];

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "6+", label: "Certifications" },
  { value: "8+", label: "Projects Delivered" },
  { value: "3+", label: "Industries Served" },
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
            Crafting Digital{" "}
            <span className="dark:text-gradient text-gradient-light">
              Experiences
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate about building scalable, maintainable, and
            high-performance software solutions
          </p>
        </div>

        {/* About content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <div>
            <p className="text-muted-foreground leading-relaxed mb-6 text-base lg:text-lg">
              I'm a Software Engineer with{" "}
              <span className="text-foreground font-medium">
                5 years of experience
              </span>{" "}
              building scalable, secure, and high-performance systems for
              fintech, e-commerce, and web platforms. I specialize in{" "}
              <span className="text-primary font-medium">
                .NET, C#, Node.js and TypeScript
              </span>
              , with strong experience designing APIs, microservices, and
              distributed systems.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6 text-base lg:text-lg">
              My focus is on real-world financial workflows {" "}
              <span className="text-foreground font-medium">
                payments, wallets, transactions, notifications, and
                authentication
              </span>
              . I've delivered production-ready systems focused on reliability,
              performance, and clean architecture. My engineering mindset is
              rooted in solving business problems, not just writing code.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base lg:text-lg">
              I'm currently deepening my expertise in{" "}
              <span className="text-foreground font-medium">
                financial systems design {" "}
              </span>
              payment processing, ledger systems, and transaction
              managementwhile building technology that creates impact in
              emerging markets. I also enjoy mentoring junior developers and
              contributing to technical communities.
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
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
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
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
