"use client";

import ScrollAnimation from "../ScrollAnimation";
import { useState, useRef } from "react";

const experiences = [
  {
    title: "Software Engineer Intern",
    company: "University of Waikato, NZ",
    period: "July 2024 - Present",
    location: "Hamilton, New Zealand",
    type: "Full-time",
    description:
      "Leading end-to-end development of web applications using modern technologies and best practices.",
    responsibilities: [
      "Developed and maintained 15+ client-facing web applications using React, Next.js, and TypeScript",
      "Built robust RESTful APIs and GraphQL endpoints using Node.js and Python",
      "Collaborated with cross-functional teams including designers, product managers, and QA engineers",
      "Implemented CI/CD pipelines and deployed applications to AWS cloud infrastructure",
      "Mentored junior developers and conducted code reviews to maintain high code quality standards",
    ],
    technologies: ["WordPress", "Greenstone Digital Library"],
    achievements: [
      "Reduced application load time by 40% through performance optimization",
      "Led migration from legacy systems to modern tech stack",
      "Improved team productivity by implementing automated testing suites",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "",
    period: "January 2024 - June 2024",
    location: "sss, USA",
    type: "Part-time - Remote",
    description:
      "Specialized in creating responsive, accessible user interfaces for diverse client portfolio.",
    responsibilities: [
      "Built responsive web interfaces using React, Vue.js, and vanilla JavaScript",
      "Collaborated closely with UX/UI designers to implement pixel-perfect designs",
      "Optimized websites for performance and SEO across multiple devices and browsers",
      "Integrated third-party APIs and services for enhanced functionality",
    ],
    technologies: ["React", "Vue.js", "JavaScript", "SCSS", "Webpack", "Figma"],
    achievements: [
      "Delivered 20+ successful client projects on time and within budget",
      "Improved accessibility scores to 95+ for all client websites",
      "Established frontend coding standards and best practices",
    ],
  },
  {
    title: "Junior Web Developer",
    company: "StartUp Hub",
    period: "March 2020 - May 2021",
    location: "Remote",
    type: "Contract",
    description:
      "Gained foundational experience in full-stack development while contributing to startup ecosystem.",
    responsibilities: [
      "Developed features for multiple startup MVPs using various tech stacks",
      "Fixed bugs and implemented enhancements based on user feedback",
      "Learned and adapted to new technologies quickly in fast-paced environment",
      "Participated in agile development processes and daily standups",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "Bootstrap"],
    achievements: [
      "Successfully launched 5 MVP products from concept to production",
      "Gained experience across 10+ different technology stacks",
      "Built strong foundation in software development lifecycle",
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
