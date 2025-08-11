import { useState } from "react";

const techCategories = [
  {
    title: "Frontend",
    icon: "🎨",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
    ],
    description: "Creating beautiful, responsive user interfaces",
  },
  {
    title: "Backend",
    icon: "⚙️",
    technologies: [
      "Node.js",
      "Python",
      "Express.js",
      "FastAPI",
      "REST APIs",
      "GraphQL",
    ],
    description: "Building robust server-side applications",
  },
  {
    title: "Database",
    icon: "🗄️",
    technologies: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "SQL"],
    description: "Designing efficient data storage solutions",
  },
  {
    title: "Cloud & DevOps",
    icon: "☁️",
    technologies: ["AWS", "Docker", "Vercel", "Git", "GitHub Actions", "Linux"],
    description: "Deploying and maintaining scalable applications",
  },
  {
    title: "Tools & Others",
    icon: "🛠️",
    technologies: ["VS Code", "Figma", "Postman", "Jest", "Cypress", "Webpack"],
    description: "Essential tools for productive development",
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
        <div className="flex items-center mb-16">
          <span className="text-beige-accent font-mono text-lg mr-4">02.</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-beige">
            Technical Background
          </h2>
          <div className="flex-1 h-px bg-gray-600 ml-4 lg:ml-8"></div>
        </div>

        {/* Introduction */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            Here&apos;s the technical side of my journey. I love learning new
            technologies and applying them to solve real-world problems. My
            approach is to choose the right tool for the job, not just the
            latest trendy framework.
          </p>
        </div>

        {/* Experience Highlights */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="bg-navy-light/50 border border-gray-700 rounded-lg p-6 hover:border-beige-accent/30 transition-all duration-300"
            >
              <div className="text-beige-accent font-mono text-sm mb-2">
                {exp.duration}
              </div>
              <h3 className="text-beige font-bold text-lg mb-2">{exp.title}</h3>
              <div className="text-beige-accent text-sm font-medium mb-3">
                {exp.highlight}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div> */}

        {/* Technology Categories */}
        <div className="mb-16">
          <h3 className="text-xl md:text-2xl font-bold text-beige mb-8 text-center">
            Technology Stack
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techCategories.map((category, index) => (
              <div
                key={index}
                className={`bg-navy-light/30 border border-gray-700 rounded-xl p-6 cursor-pointer transition-all duration-300 ${
                  activeCategory === category.title
                    ? "border-beige-accent shadow-lg shadow-beige-accent/10 scale-105"
                    : "hover:border-gray-600"
                }`}
                onMouseEnter={() => setActiveCategory(category.title)}
                onMouseLeave={() => setActiveCategory(null)}
              >
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">{category.icon}</span>
                  <h4 className="text-beige font-bold text-lg">
                    {category.title}
                  </h4>
                </div>
                <p className="text-gray-400 text-sm mb-4">
                  {category.description}
                </p>
                <div className="flex flex-wrap gap-2">
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
            ))}
          </div>
        </div>

        {/* Current Focus */}
        <div className="bg-gradient-to-r from-navy-light/50 to-navy-light/30 border border-gray-700 rounded-xl p-8 text-center">
          <h3 className="text-xl font-bold text-beige mb-4">
            🚀 Currently Exploring
          </h3>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {[
              "AI/ML Integration",
              "Three.js",
              "Web3",
              "Rust",
              "Microservices",
            ].map((tech, index) => (
              <span
                key={index}
                className="bg-green-400/10 text-green-400 px-4 py-2 rounded-full font-mono text-sm border border-green-400/20"
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
      </div>
    </section>
  );
}
