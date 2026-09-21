import { useState } from "react";
import ScrollAnimation from "../ScrollAnimation";

interface TechCategory {
  title: string;
  icon: string;
  technologies: string[];
  description: string;
  proficiency: string;
  experience?: string;
}

const techCategories: TechCategory[] = [
  {
    title: "Frontend",
    icon: "🎨",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "MaterialUI",
      "Tailwind CSS",
      "Angular",
      "HTML5",
      "CSS3",
      "JavaScript",
    ],
    description: "Creating beautiful, responsive user interfaces",
    proficiency: "Advanced",
    experience: "~3 years",
  },
  {
    title: "Backend",
    icon: "⚙️",
    technologies: [
      "Node.js",
      "NestJS",
      "REST APIs",
      "Express.js",
      "GraphQL",
      "C# (learning)",
    ],
    description: "Building robust server-side applications",
    proficiency: "Advanced",
    experience: "2+ years",
  },
  {
    title: "Database",
    icon: "🗄️",
    technologies: [
      "MySQL",
      "MongoDB",
      "PostgreSQL",
      "Prisma",
      "Firebase Firestore",
    ],
    description: "Designing efficient data storage solutions",
    proficiency: "Advanced",
    experience: "2+ years",
  },
  {
    title: "Cloud & DevOps",
    icon: "☁️",
    technologies: [
      "AWS",
      "Firebase",
      "Vercel",
      "Git",
      "GitHub Actions",
      "Linux",
    ],
    description: "Deploying and maintaining scalable applications",
    proficiency: "Intermediate",
    experience: "1+ years",
  },
  {
    title: "Project Management",
    icon: "📋",
    technologies: [
      "Trello",
      "Loop",
      "Jira",
      "Notion",
      "Slack",
      "MS Teams",
      "GitHub Projects",
    ],
    description: "Organizing workflows and team collaboration",
    proficiency: "Proficient",
    experience: "~3 years",
  },
  {
    title: "Tools & Others",
    icon: "🛠️",
    technologies: [
      "VS Code",
      "Figma",
      "Postman",
      "Vite",
      "ESLint",
      "Git",
      "NPM/Yarn",
      "Jest",
      "Prettier",
    ],
    description: "Essential tools for productive development",
    proficiency: "Expert",
    experience: "3+ years",
  },
  {
    title: "AI & Automation",
    icon: "🤖",
    technologies: [
      "Anthropic API",
      "LLM Structured Outputs",
      "Prompt Engineering",
      "Claude Code",
      "GitHub Copilot",
      "Agentic Workflows",
    ],
    description: "Building with language models and AI-assisted development tools",
    proficiency: "Advanced",
  },
  {
    title: "IT Support & Systems",
    icon: "🖥️",
    technologies: [
      "Troubleshooting",
      "Microsoft 365",
      "Google Workspace",
      "Windows",
      "Linux",
      "User Access Management",
      "Single Sign-On",
      "Role-Based Access Control",
      "Technical Documentation",
      "User Training",
    ],
    description: "Supporting users and systems, from access control to day-to-day troubleshooting",
    proficiency: "Proficient",
  },
  {
    title: "Business Analysis",
    icon: "📊",
    technologies: [
      "Requirements Gathering",
      "Stakeholder Engagement",
      "Process Improvement",
      "Technical Documentation",
      "Data Analysis",
      "Agile & Scrum",
      "Jira",
      "Trello",
    ],
    description: "Bridging business needs and technical delivery",
    proficiency: "Proficient",
  },
];

export default function TechnicalSection() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <section
      id="technical"
      className="min-h-screen flex items-center px-4 lg:px-8 py-20 bg-slate-950"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <ScrollAnimation direction="up" delay={0.1}>
          <div className="flex items-center mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-100">
              Technical Background
            </h2>
            <div className="flex-1 h-px bg-slate-600 ml-4 lg:ml-8"></div>
          </div>
        </ScrollAnimation>

        {/* Introduction */}
        <ScrollAnimation direction="up" delay={0.2}>
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <p className="text-lg text-slate-300 leading-relaxed mb-8">
              Here&apos;s the technical side of my journey. I love learning new
              technologies and applying them to solve real-world problems. My
              approach is to choose the right tool for the job, not just the
              latest trendy framework.
            </p>
          </div>
        </ScrollAnimation>

        {/* Technology Categories */}
        <ScrollAnimation direction="up" delay={0.3}>
          <div className="mb-16">
            <h3 className="text-xl md:text-2xl font-bold text-slate-100 mb-8 text-center">
              Technology Stack
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {techCategories.map((category, index) => {
                // Different color schemes for each card
                const colorSchemes = [
                  // 1. Cyan (Frontend)
                  {
                    bg: "bg-cyan-900/30",
                    bgHover: "bg-cyan-800/50",
                    border: "border-cyan-600/40",
                    borderHover: "border-cyan-500/70",
                    title: "text-cyan-100",
                    desc: "text-cyan-200",
                    tags: "bg-cyan-800/50 text-cyan-200 border-cyan-600/30",
                  },
                  // 2. Violet (Backend)
                  {
                    bg: "bg-violet-900/30",
                    bgHover: "bg-violet-800/50",
                    border: "border-violet-600/40",
                    borderHover: "border-violet-500/70",
                    title: "text-violet-100",
                    desc: "text-violet-200",
                    tags: "bg-violet-800/50 text-violet-200 border-violet-600/30",
                  },
                  // 3. Emerald (Database)
                  {
                    bg: "bg-emerald-900/30",
                    bgHover: "bg-emerald-800/50",
                    border: "border-emerald-600/40",
                    borderHover: "border-emerald-500/70",
                    title: "text-emerald-100",
                    desc: "text-emerald-200",
                    tags: "bg-emerald-800/50 text-emerald-200 border-emerald-600/30",
                  },
                  // 4. Amber (Cloud & DevOps)
                  {
                    bg: "bg-amber-900/30",
                    bgHover: "bg-amber-800/50",
                    border: "border-amber-600/40",
                    borderHover: "border-amber-500/70",
                    title: "text-amber-100",
                    desc: "text-amber-200",
                    tags: "bg-amber-800/50 text-amber-200 border-amber-600/30",
                  },
                  // 5. Rose (Project Management)
                  {
                    bg: "bg-rose-900/30",
                    bgHover: "bg-rose-800/50",
                    border: "border-rose-600/40",
                    borderHover: "border-rose-500/70",
                    title: "text-rose-100",
                    desc: "text-rose-200",
                    tags: "bg-rose-800/50 text-rose-200 border-rose-600/30",
                  },
                  // 6. Slate-blue (Tools & Others)
                  {
                    bg: "bg-sky-900/30",
                    bgHover: "bg-sky-800/50",
                    border: "border-sky-600/40",
                    borderHover: "border-sky-500/70",
                    title: "text-sky-100",
                    desc: "text-sky-200",
                    tags: "bg-sky-800/50 text-sky-200 border-sky-600/30",
                  },
                  // 7. Indigo (AI & Automation)
                  {
                    bg: "bg-indigo-900/30",
                    bgHover: "bg-indigo-800/50",
                    border: "border-indigo-600/40",
                    borderHover: "border-indigo-500/70",
                    title: "text-indigo-100",
                    desc: "text-indigo-200",
                    tags: "bg-indigo-800/50 text-indigo-200 border-indigo-600/30",
                  },
                  // 8. Teal (IT Support & Systems)
                  {
                    bg: "bg-teal-900/30",
                    bgHover: "bg-teal-800/50",
                    border: "border-teal-600/40",
                    borderHover: "border-teal-500/70",
                    title: "text-teal-100",
                    desc: "text-teal-200",
                    tags: "bg-teal-800/50 text-teal-200 border-teal-600/30",
                  },
                  // 9. Fuchsia (Business Analysis)
                  {
                    bg: "bg-fuchsia-900/30",
                    bgHover: "bg-fuchsia-800/50",
                    border: "border-fuchsia-600/40",
                    borderHover: "border-fuchsia-500/70",
                    title: "text-fuchsia-100",
                    desc: "text-fuchsia-200",
                    tags: "bg-fuchsia-800/50 text-fuchsia-200 border-fuchsia-600/30",
                  },
                ];

                const colors = colorSchemes[index];

                return (
                  <ScrollAnimation
                    key={index}
                    direction="up"
                    delay={0.4 + index * 0.1}
                  >
                    <div
                      className={`${
                        colors.bg
                      } border rounded-xl p-6 cursor-pointer transition-all duration-300 h-full min-h-[220px] flex flex-col ${
                        activeCategory === category.title
                          ? `${colors.borderHover} scale-105 ${colors.bgHover}`
                          : `${colors.border} hover:${colors.borderHover}`
                      }`}
                      onMouseEnter={() => setActiveCategory(category.title)}
                      onMouseLeave={() => setActiveCategory(null)}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <span className="text-2xl mr-3">{category.icon}</span>
                          <h4 className={`${colors.title} font-bold text-lg`}>
                            {category.title}
                          </h4>
                        </div>
                        <div className="flex flex-col items-end">
                          <span
                            className={`text-xs px-2 py-1 rounded-full font-mono ${
                              category.proficiency === "Expert"
                                ? "bg-green-400/10 text-green-400"
                                : category.proficiency === "Advanced"
                                ? "bg-blue-400/10 text-blue-400"
                                : category.proficiency === "Proficient"
                                ? "bg-cyan-400/10 text-cyan-400"
                                : "bg-yellow-400/10 text-yellow-400"
                            }`}
                          >
                            {category.proficiency}
                          </span>
                          {category.experience && (
                            <span className="text-xs text-slate-400 mt-1">
                              {category.experience}
                            </span>
                          )}
                        </div>
                      </div>
                      <p className={`${colors.desc} text-sm mb-4`}>
                        {category.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {category.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className={`${colors.tags} text-xs px-2 py-1 rounded-md font-mono border`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </ScrollAnimation>
                );
              })}
            </div>
          </div>
        </ScrollAnimation>

        {/* Current Focus */}
        <ScrollAnimation direction="up" delay={0.8}>
          <div className="bg-slate-800/80 border border-slate-600/60 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold text-slate-100 mb-4">
              🚀 Currently Exploring
            </h3>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {[
                "C# / .NET",
                "ASP.NET Core",
                "Three.js / WebGL",
                "Microservices",
              ].map((tech, index) => (
                <span
                  key={index}
                  className="bg-green-400/10 text-green-400 px-4 py-2 rounded-full font-mono text-sm border border-green-400/20 hover:bg-green-400/20 transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-slate-300 leading-relaxed">
              Always learning, always growing. I believe the best developers are
              perpetual students who adapt to the ever-evolving tech landscape
              while maintaining strong fundamentals.
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
