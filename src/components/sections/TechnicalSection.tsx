import { useState } from "react";
import ScrollAnimation from "../ScrollAnimation";

const techCategories = [
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
    proficiency: "Expert",
    experience: "3+ years",
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
      "Python",
      "Flask",
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
    experience: "2+ years",
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
    proficiency: "Expert",
    experience: "3+ years",
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
];

export default function TechnicalSection() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <section
      id="technical"
      className="min-h-screen flex items-center px-4 lg:px-8 py-20"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <ScrollAnimation direction="up" delay={0.1}>
          <div className="flex items-center mb-16">
            <span className="text-beige-accent font-mono text-lg mr-4">
              02.
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-beige">
              Technical Background
            </h2>
            <div className="flex-1 h-px bg-gray-600 ml-4 lg:ml-8"></div>
          </div>
        </ScrollAnimation>

        {/* Introduction */}
        <ScrollAnimation direction="up" delay={0.2}>
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
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
            <h3 className="text-xl md:text-2xl font-bold text-beige mb-8 text-center">
              Technology Stack
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {techCategories.map((category, index) => (
                <ScrollAnimation
                  key={index}
                  direction="up"
                  delay={0.4 + index * 0.1}
                >
                  <div
                    className={`bg-navy-light/30 border border-gray-700 rounded-xl p-6 cursor-pointer transition-all duration-300 h-full min-h-[220px] flex flex-col ${
                      activeCategory === category.title
                        ? "border-beige-accent shadow-lg shadow-beige-accent/10 scale-105"
                        : "hover:border-gray-600"
                    }`}
                    onMouseEnter={() => setActiveCategory(category.title)}
                    onMouseLeave={() => setActiveCategory(null)}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <span className="text-2xl mr-3">{category.icon}</span>
                        <h4 className="text-beige font-bold text-lg">
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
                              : "bg-yellow-400/10 text-yellow-400"
                          }`}
                        >
                          {category.proficiency}
                        </span>
                        <span className="text-xs text-gray-500 mt-1">
                          {category.experience}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm mb-4">
                      {category.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {category.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-beige-accent/10 text-beige-accent text-xs px-2 py-1 rounded-md font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </ScrollAnimation>

        {/* Current Focus */}
        <ScrollAnimation direction="up" delay={0.8}>
          <div className="bg-gradient-to-r from-navy-light/50 to-navy-light/30 border border-gray-700 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold text-beige mb-4">
              🚀 Currently Exploring
            </h3>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {["Three.js", "Web3", "Microservices"].map((tech, index) => (
                <span
                  key={index}
                  className="bg-green-400/10 text-green-400 px-4 py-2 rounded-full font-mono text-sm border border-green-400/20 hover:bg-green-400/20 transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-gray-300 leading-relaxed">
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
