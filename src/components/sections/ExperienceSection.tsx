"use client";

import ScrollAnimation from "../ScrollAnimation";
import { useState, useRef } from "react";

const experiences = [
  {
    title: "Software Engineer Intern",
    company: "University of Waikato, NZ",
    period: "July 2025 - Present",
    location: "Hamilton, New Zealand",
    type: "Full-time",
    description:
      "Working in a team of 4 to develop a digital archive with TB of data and a WordPress website, gaining valuable experience in NZ professional culture and client communication.",
    responsibilities: [
      "Collaborating directly with clients to finalize project requirements and specifications",
      "Developing a comprehensive digital archive system using Greenstone Digital Library to handle TB of data",
      "Building a responsive WordPress website based on provided Figma designs",
      "Participating in team meetings and project planning sessions with 4-member development team",
      "Learning New Zealand professional standards and business communication practices",
    ],
    technologies: [
      "WordPress",
      "Greenstone Digital Library",
      "Figma",
      "GitHub",
      "Trello",
    ],
    achievements: [
      "Successfully established direct client communication channels within first 3 weeks",
      "Adapting to New Zealand professional culture and work practices",
      "Coming up with Project architecture reports, Project timelines and architecture diagrams",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "EmergeWave Technology LLC",
    period: "January 2024 - June 2024",
    location: "USA - Remote",
    type: "Part-time",
    description:
      "Part-time role focused on building responsive web applications using modern tech stack.",
    responsibilities: [
      "Built responsive web interfaces using ReactJS, NextJS and TypeScript",
      "Collaborated with design teams using Figma for pixel-perfect implementations",
      "Developed backend APIs using NestJS and managed MySQL databases",
      "Optimized applications for performance and cross-browser compatibility",
    ],
    technologies: ["React", "NextJS", "NestJS", "TypeScript", "MySQL", "Figma"],
    achievements: [
      "Delivered projects on schedule while maintaining code quality",
    ],
  },
  {
    title: "Software Developer",
    company: "Digital Yogin SRL",
    period: "Nov 2021 - Nov 2023",
    location: "Italy - Remote",
    type: "Full-time",
    description:
      "Two-year role at a dynamic startup where I mentored junior developers, worked on multiple client projects, and collaborated closely with project managers to deliver diverse solutions.",
    responsibilities: [
      "Mentored junior developers despite not holding a senior position, providing code reviews and technical guidance",
      "Developed multiple client projects with varying requirements using ReactJS, Material UI, and TypeScript",
      "Built robust backend solutions using NodeJS for full-stack applications",
      "Contributed to React Native mobile development projects",
      "Participated in weekly project meetings and collaborated extensively with project managers",
      "Worked closely with design teams using Figma to implement pixel-perfect UI/UX",
      "Used Trello for project management and task tracking across multiple concurrent projects",
      "Resolved complex bugs and implemented feature enhancements based on client feedback",
      "Managed application hosting and deployment processes",
    ],
    technologies: [
      "ReactJS",
      "Material UI",
      "TypeScript",
      "NodeJS",
      "React Native",
      "Figma",
      "Trello",
      "Github",
    ],
    achievements: [
      "Successfully mentored 3+ junior developers, improving team productivity",
      "Delivered 3+ client projects with diverse requirements and tech stacks",
      "Established effective communication workflows with project managers",
      "Gained expertise in startup environment and agile development practices",
    ],
  },
  {
    title: "Software Developer Intern",
    company: "Mediio Ltd",
    period: "May 2021 - Oct 2021",
    location: "South Korea - Remote",
    type: "Full-time",
    description:
      "Career-starting internship focused on healthcare technology platforms, involving steep learning curve in modern web development.",
    responsibilities: [
      "Developed features for Mediio.net healthcare platform using ReactJS and Material UI",
      "Contributed to Medigrant application development with focus on user interface",
      "Built backend functionality using NodeJS for healthcare data management",
      "Participated in daily standup meetings and agile development processes",
      "Collaborated with design teams using Figma for healthcare application interfaces",
      "Debugged and resolved issues in production healthcare applications",
    ],
    technologies: ["ReactJS", "NodeJS", "Material UI", "Figma", "GitHub"],
    achievements: [
      "Successfully navigated steep learning curve in professional development environment",
      "Contributed to live healthcare platforms serving real users",
      "Established foundation in modern web development practices",
      "Adapted quickly to international remote work culture",
    ],
  },
  {
    title: "Freelance Frontend Developer",
    company: "Korean Financial Solutions Inc",
    period: "Jan 2022 - Oct 2022",
    location: "South Korea - Remote",
    type: "Contract",
    description:
      "Freelance contract focused on building responsive financial application interfaces with weekly client collaboration.",
    responsibilities: [
      "Developed responsive financial application interfaces using ReactJS and TypeScript",
      "Implemented complex UI components using Material UI design system",
      "Collaborated with Korean development teams in weekly standup meetings",
      "Translated Figma designs into pixel-perfect, functional web applications",
      "Optimized applications for performance in financial services environment",
    ],
    technologies: ["ReactJS", "TypeScript", "Material UI", "Figma"],
    achievements: [
      "Successfully delivered financial application features on tight deadlines",
      "Maintained high code quality standards in financial services context",
      "Established effective communication with international client teams",
    ],
  },
];

export default function ExperienceSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const nextExperience = () => {
    setCurrentIndex((prev) => (prev + 1) % experiences.length);
    setExpandedCard(null);
  };

  const prevExperience = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + experiences.length) % experiences.length
    );
    setExpandedCard(null);
  };

  const toggleExpanded = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
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
        prevExperience();
      } else {
        nextExperience();
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

  const currentExperience = experiences[currentIndex];

  return (
    <section
      id="experience"
      className="min-h-screen flex items-center px-4 lg:px-8 py-20 bg-slate-950"
    >
      <div className="max-w-6xl mx-auto w-full">
        <ScrollAnimation direction="up" delay={0.1}>
          <div className="flex items-center mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-100">
              Where I&apos;ve Worked
            </h2>
            <div className="flex-1 h-px bg-slate-600 ml-4 lg:ml-8"></div>
          </div>
        </ScrollAnimation>

        <div className="max-w-4xl mx-auto">
          {/* Experience Navigation */}
          <ScrollAnimation direction="up" delay={0.2}>
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-4">
                <span className="text-teal-200 font-mono text-sm">
                  {String(currentIndex + 1).padStart(2, "0")} /{" "}
                  {String(experiences.length).padStart(2, "0")}
                </span>
                <div className="h-px bg-teal-600/40 w-16"></div>
              </div>

              <div className="flex items-center space-x-4">
                <button
                  onClick={prevExperience}
                  className="w-10 h-10 border border-teal-600/30 rounded-full flex items-center justify-center hover:border-teal-400/50 hover:text-teal-100 transition-all duration-300 group"
                  aria-label="Previous experience"
                >
                  <svg
                    className="w-4 h-4 group-hover:scale-110 transition-transform text-teal-200"
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
                  onClick={nextExperience}
                  className="w-10 h-10 border border-teal-600/30 rounded-full flex items-center justify-center hover:border-teal-400/50 hover:text-teal-100 transition-all duration-300 group"
                  aria-label="Next experience"
                >
                  <svg
                    className="w-4 h-4 group-hover:scale-110 transition-transform text-teal-200"
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
              </div>
            </div>
          </ScrollAnimation>

          {/* Current Experience Card */}
          <ScrollAnimation direction="left" delay={0.3} key={currentIndex}>
            <div
              ref={containerRef}
              className="bg-teal-900/30 border border-teal-600/40 rounded-2xl p-8 transition-all duration-500 hover:border-teal-500/70 hover:bg-teal-800/40 cursor-grab active:cursor-grabbing select-none"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              style={{
                transform: `translateX(${isDragging ? dragOffset * 0.1 : 0}px)`,
                transition: isDragging ? "none" : "transform 0.3s ease-out",
              }}
            >
              {/* Main Info */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <h3 className="text-2xl font-bold text-teal-100">
                      {currentExperience.title}
                    </h3>
                    <span className="text-xs font-mono text-teal-200 bg-teal-800/30 px-3 py-1 rounded-full">
                      {currentExperience.type}
                    </span>
                  </div>
                  <h4 className="text-xl font-semibold text-teal-200 mb-2">
                    {currentExperience.company}
                  </h4>
                  <div className="flex items-center gap-4 text-teal-300 font-mono text-sm mb-4">
                    <span>{currentExperience.period}</span>
                    <span>•</span>
                    <span>{currentExperience.location}</span>
                  </div>
                  <p className="text-teal-100/90 leading-relaxed max-w-2xl">
                    {currentExperience.description}
                  </p>
                </div>
              </div>

              {/* Technologies Preview */}
              <div className="mb-6">
                <h5 className="text-teal-100 font-semibold text-sm mb-3">
                  Technologies:
                </h5>
                <div className="flex flex-wrap gap-2">
                  {currentExperience.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-teal-800/30 text-teal-200 text-sm px-3 py-1 rounded-lg font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Expand/Collapse Button */}
              <div className="flex justify-center">
                <button
                  onClick={() => toggleExpanded(currentIndex)}
                  className="flex items-center space-x-2 text-teal-200 hover:text-teal-100 transition-colors duration-300 group"
                >
                  <span className="font-mono text-sm">
                    {expandedCard === currentIndex
                      ? "Show Less"
                      : "Show Details"}
                  </span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${
                      expandedCard === currentIndex ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>

              {/* Expanded Details */}
              {expandedCard === currentIndex && (
                <div className="mt-8 pt-8 border-t border-[#192E41]/25 grid grid-cols-1 md:grid-cols-2 gap-8 animate-fadeIn">
                  {/* Responsibilities */}
                  <div>
                    <h5 className="text-teal-100 font-semibold text-lg mb-4">
                      Key Responsibilities
                    </h5>
                    <ul className="space-y-3">
                      {currentExperience.responsibilities.map(
                        (item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="flex items-start text-teal-100/90"
                          >
                            <span className="text-teal-200 mr-3 mt-1 font-mono text-sm">
                              ▹
                            </span>
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h5 className="text-teal-100 font-semibold text-lg mb-4">
                      Key Achievements
                    </h5>
                    <ul className="space-y-3">
                      {currentExperience.achievements.map(
                        (achievement, achievementIndex) => (
                          <li
                            key={achievementIndex}
                            className="flex items-start text-teal-100/90"
                          >
                            <span className="text-teal-300 mr-3 mt-1">✓</span>
                            <span className="leading-relaxed">
                              {achievement}
                            </span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </ScrollAnimation>

          {/* Experience Indicators */}
          <ScrollAnimation direction="up" delay={0.4}>
            <div className="flex justify-center space-x-3 mt-8">
              {experiences.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setExpandedCard(null);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentIndex === index
                      ? "bg-[#192E41] scale-125"
                      : "bg-[#616862]/30 hover:bg-[#616862]/50"
                  }`}
                  aria-label={`Go to experience ${index + 1}`}
                />
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
