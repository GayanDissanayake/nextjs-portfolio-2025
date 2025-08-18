import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import ScrollAnimation from "../ScrollAnimation";

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
    title: "Interactive Portfolio 2025",
    description:
      "A modern, interactive portfolio website built with Next.js, Tailwind CSS and TypeScript, featuring 3D elements, smooth animations, and an immersive user experience. This project serves as both a showcase of my work and a learning journey into Three.js and advanced web technologies.",
    technologies: [
      "Next.js 14",
      "TypeScript",
      "Three.js",
      "Tailwind CSS",
      "Framer Motion",
      "Leaflet Maps",
      "React",
    ],
    imageUrl: "/images/projects/portfolio.png",
    githubUrl: "https://github.com/GayanDissanayake/nextjs-portfolio-2025",
    liveUrl: "https://gayan-dissanayake-portfolio.vercel.app/",
    category: "Portfolio & Learning",
    highlights: [
      "3D interactive elements with Three.js",
      "Responsive design with smooth animations",
      "Interactive maps integration with Leaflet",
      "Modern UI/UX with Tailwind CSS",
      "Performance optimized with Next.js 14",
      "School journey storytelling page",
    ],
  },
  {
    title: "TERAA Digital Archive",
    description:
      "A comprehensive digital archive project for the University of Waikato, managing TB of historical data using Greenstone Digital Library. Includes a responsive WordPress website built from Figma designs, representing a significant cultural preservation initiative for New Zealand heritage.",
    technologies: [
      "Greenstone Digital Library",
      "WordPress",
      "Figma",
      "JavaScript",
      "Trello",
      "Documentation",
    ],
    imageUrl: "/images/projects/teraa-2.png",
    liveUrl: "https://teraa.co.nz/",
    category: "Cultural Heritage & Archives",
    highlights: [
      "Managing TB of historical data",
      "Greenstone Digital Library implementation",
      "Custom WordPress theme development",
      "Figma to WordPress conversion",
      "Client communication and requirements gathering",
      "New Zealand cultural heritage preservation",
    ],
  },
  {
    title: "Pet Social Media Platform",
    description:
      "A full-stack social media platform designed for pet owners, featuring real-time chat functionality, user profiles, and social interactions. Built during my first trimester of Masters studies, showcasing modern web development practices with a complete tech stack.",
    technologies: [
      "Next.js",
      "TypeScript",
      "NestJS",
      "MongoDB",
      "Socket.io",
      "MUI",
      "JWT Authentication",
    ],
    imageUrl: "/images/projects/pet-social-1.png",
    githubUrl: "https://github.com/GayanDissanayake/pet-social-media-frontend",
    liveUrl: "https://pet-social-media-frontend.vercel.app/",
    category: "Full-Stack Social Platform",
    highlights: [
      "Real-time chat with Socket.io",
      "JWT-based authentication system",
      "MongoDB database design",
      "RESTful API with NestJS",
      "Responsive social media interface",
      "University coursework project",
    ],
  },
];

export default function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying || isDragging) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isDragging]);

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

  // Touch/Mouse handlers for smooth dragging
  const handleStart = (clientX: number) => {
    setIsDragging(true);
    setDragStart(clientX);
    setDragOffset(0);
  };

  const handleMove = (clientX: number) => {
    if (!isDragging) return;
    const offset = clientX - dragStart;
    setDragOffset(offset);
  };

  const handleEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const threshold = 100; // Minimum drag distance to trigger slide change
    if (Math.abs(dragOffset) > threshold) {
      if (dragOffset > 0) {
        goToPrevious();
      } else {
        goToNext();
      }
    }
    setDragOffset(0);
  };

  // Mouse handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    handleStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    handleEnd();
  };

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    handleStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    handleEnd();
  };

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center px-4 lg:px-8 py-20 bg-slate-950"
    >
      <div className="max-w-6xl mx-auto w-full">
        <ScrollAnimation direction="up" delay={0.1}>
          <div className="flex items-center mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-100">
              Projects I&apos;ve Worked On
            </h2>
            <div className="flex-1 h-px bg-slate-600 ml-4 lg:ml-8"></div>
          </div>
        </ScrollAnimation>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-cyan-900/30 border border-cyan-600/40 rounded-full flex items-center justify-center hover:border-cyan-500/70 hover:bg-cyan-800/40 transition-all duration-300 group"
            aria-label="Previous project"
          >
            <svg
              className="w-5 h-5 text-cyan-200 group-hover:text-cyan-100 transition-colors"
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
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-cyan-900/30 border border-cyan-600/40 rounded-full flex items-center justify-center hover:border-cyan-500/70 hover:bg-cyan-800/40 transition-all duration-300 group"
            aria-label="Next project"
          >
            <svg
              className="w-5 h-5 text-cyan-200 group-hover:text-cyan-100 transition-colors"
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
          <div
            ref={containerRef}
            className="overflow-hidden rounded-xl bg-cyan-900/20 border border-cyan-600/30 cursor-grab active:cursor-grabbing select-none"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className={`flex transition-transform ${
                isDragging ? "duration-0" : "duration-500"
              } ease-in-out`}
              style={{
                transform: `translateX(-${currentIndex * 100}%) translateX(${
                  isDragging ? dragOffset * 0.1 : 0
                }px)`,
              }}
            >
              {projects.map((project, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-cyan-900/30 border border-cyan-600/40 rounded-xl overflow-hidden hover:border-cyan-500/70 transition-all duration-300 min-h-[500px] lg:min-h-[600px]">
                    {/* Project Image */}
                    <div className="relative h-64 lg:h-full bg-gradient-to-br from-cyan-900/50 to-cyan-800/30">
                      <Image
                        src={project.imageUrl}
                        alt={`${project.title} screenshot`}
                        fill
                        className="object-contain"
                        sizes="(max-width: 208px) 100vw, 50vw"
                        priority={index === 0}
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/60 via-transparent to-transparent"></div>

                      {/* Project Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="bg-cyan-900/80 backdrop-blur-sm text-cyan-100 text-xs px-3 py-1 rounded-full font-mono border border-cyan-600/40">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-8 lg:p-12 flex flex-col justify-between min-h-[400px] lg:min-h-[500px]">
                      <div>
                        <h3 className="text-2xl lg:text-3xl font-bold text-cyan-100 mb-4">
                          {project.title}
                        </h3>

                        <p className="text-cyan-100/90 leading-relaxed mb-6 text-sm lg:text-base">
                          {project.description}
                        </p>

                        {/* Highlights */}
                        <div className="mb-6">
                          <h4 className="text-cyan-100 font-semibold text-sm mb-3">
                            Key Features:
                          </h4>
                          <ul className="space-y-2">
                            {project.highlights.map(
                              (highlight, highlightIndex) => (
                                <li
                                  key={highlightIndex}
                                  className="flex items-start text-cyan-100/90 text-sm"
                                >
                                  <span className="text-cyan-300 mr-2 mt-1 text-xs">
                                    ✓
                                  </span>
                                  <span>{highlight}</span>
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      </div>

                      <div>
                        {/* Technologies */}
                        <div className="mb-8">
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="bg-cyan-800/30 text-yellow-300 text-xs px-3 py-1 rounded-full font-mono border border-yellow-300/20 hover:border-yellow-300/40 transition-colors"
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
                              className="flex items-center gap-2 text-cyan-200 hover:text-cyan-100 transition-colors"
                            >
                              <svg
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                              </svg>
                              <span className="text-sm font-mono">
                                View Code
                              </span>
                            </a>
                          )}
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 text-cyan-200 hover:text-cyan-100 transition-colors"
                            >
                              <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                />
                              </svg>
                              <span className="text-sm font-mono">
                                Live Demo
                              </span>
                            </a>
                          )}
                        </div>
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
                    ? "bg-cyan-400 scale-125"
                    : "bg-cyan-600/40 hover:bg-cyan-500/60"
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
