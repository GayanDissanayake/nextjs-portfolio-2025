import { useState, useEffect } from "react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  category: string;
  highlights: string[];
}

const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with real-time inventory management, secure payment processing, and comprehensive admin dashboard. Features include user authentication, product search, shopping cart, order tracking, and analytics.",
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Stripe API",
      "AWS",
      "Tailwind CSS",
    ],
    imageUrl: "/images/projects/ecommerce-mockup.jpg",
    githubUrl: "https://github.com/yourusername/ecommerce-platform",
    category: "Full-Stack Application",
    highlights: [
      "Real-time inventory synchronization",
      "Secure payment gateway integration",
      "Advanced search and filtering",
      "Responsive admin dashboard",
    ],
  },
  {
    title: "Task Management System",
    description:
      "A collaborative project management tool inspired by modern productivity apps. Features include team workspaces, real-time collaboration, task dependencies, time tracking, and detailed analytics with beautiful data visualizations.",
    technologies: [
      "React",
      "Node.js",
      "Socket.io",
      "MongoDB",
      "Express",
      "Chart.js",
    ],
    imageUrl: "/images/projects/taskmanager-mockup.jpg",
    githubUrl: "https://github.com/yourusername/task-manager",
    category: "Collaboration Tool",
    highlights: [
      "Real-time team collaboration",
      "Advanced task dependencies",
      "Time tracking & analytics",
      "Intuitive drag-and-drop interface",
    ],
  },
  {
    title: "Weather Analytics Dashboard",
    description:
      "An interactive weather data visualization platform that aggregates data from multiple APIs to provide comprehensive weather insights. Features predictive analytics, historical data comparison, and customizable alert systems.",
    technologies: ["Vue.js", "Python", "FastAPI", "D3.js", "Redis", "Docker"],
    imageUrl: "/images/projects/weather-dashboard-mockup.jpg",
    githubUrl: "https://github.com/yourusername/weather-dashboard",
    category: "Data Visualization",
    highlights: [
      "Multi-source data aggregation",
      "Predictive weather modeling",
      "Interactive data visualizations",
      "Customizable alert system",
    ],
  },
];

export default function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    setIsAutoPlaying(false);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center px-4 lg:px-8 py-20"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex items-center mb-16">
          <span className="text-beige-accent font-mono text-lg mr-4">04.</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-beige">
            Projects I&apos;ve Worked On
          </h2>
          <div className="flex-1 h-px bg-gray-600 ml-4 lg:ml-8"></div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-navy-light border border-gray-700 rounded-full flex items-center justify-center hover:border-beige-accent/50 hover:bg-beige-accent/10 transition-all duration-300 group"
            aria-label="Previous project"
          >
            <svg
              className="w-5 h-5 text-gray-400 group-hover:text-beige-accent transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-navy-light border border-gray-700 rounded-full flex items-center justify-center hover:border-beige-accent/50 hover:bg-beige-accent/10 transition-all duration-300 group"
            aria-label="Next project"
          >
            <svg
              className="w-5 h-5 text-gray-400 group-hover:text-beige-accent transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Carousel Content */}
          <div className="overflow-hidden rounded-xl bg-navy-light/30 border border-gray-700">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    {/* Project Image */}
                    <div className="relative h-64 lg:h-96 bg-gradient-to-br from-beige-accent/20 to-navy-light">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-gray-400">
                          <svg
                            className="w-16 h-16 mx-auto mb-4 opacity-50"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1}
                              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                          <p className="text-sm font-mono">
                            {project.title} Preview
                          </p>
                          <p className="text-xs mt-1">Coming Soon</p>
                        </div>
                      </div>
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent"></div>
                    </div>

                    {/* Project Content */}
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <div className="mb-4">
                        <span className="text-beige-accent font-mono text-sm">
                          {project.category}
                        </span>
                      </div>

                      <h3 className="text-2xl lg:text-3xl font-bold text-beige mb-4">
                        {project.title}
                      </h3>

                      <p className="text-gray-300 leading-relaxed mb-6">
                        {project.description}
                      </p>

                      {/* Highlights */}
                      <div className="mb-6">
                        <h4 className="text-beige font-semibold text-sm mb-3">
                          Key Features:
                        </h4>
                        <ul className="space-y-2">
                          {project.highlights.map(
                            (highlight, highlightIndex) => (
                              <li
                                key={highlightIndex}
                                className="flex items-start text-gray-300 text-sm"
                              >
                                <span className="text-green-400 mr-2 mt-1 text-xs">
                                  ✓
                                </span>
                                <span>{highlight}</span>
                              </li>
                            )
                          )}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="mb-8">
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="bg-beige-accent/10 text-beige-accent text-xs px-3 py-1 rounded-full font-mono"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Links */}
                      <div className="flex gap-4">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-gray-400 hover:text-beige-accent transition-colors"
                          >
                            <svg
                              className="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                            </svg>
                            <span className="text-sm font-mono">View Code</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-8 gap-3">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-beige-accent scale-125"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
