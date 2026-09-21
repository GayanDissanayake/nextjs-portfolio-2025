"use client";

import ScrollAnimation from "../ScrollAnimation";
import { useState, useRef } from "react";

const experiences = [
  {
    title: "Software Engineer (Volunteer)",
    company: "Efalata Trust",
    period: "2026 – Present",
    location: "Hamilton, New Zealand",
    type: "Volunteer",
    description:
      "Building a student management system for an education trust that had run enrolment, attendance and student records on paper for over a decade. Architected three custom WordPress plugins, designed the relational MySQL schema, and built role-based access across four user groups so administrators, teachers, students and parents each reach only their own records.",
    responsibilities: [
      "Architected three custom WordPress plugins to digitise enrolment, attendance and student records",
      "Designed the relational MySQL schema underpinning the student management system",
      "Built role-based access control across four user groups — administrators, teachers, students and parents",
      "Gathered requirements from six non-technical staff and wrote the system documentation",
      "Trained staff to run the system unaided",
    ],
    technologies: [
      "WordPress",
      "PHP",
      "MySQL",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Plugin Development",
      "Requirements Gathering",
    ],
    achievements: [
      "Replaced over a decade of paper-based enrolment, attendance and student records with a digital system",
      "Delivered role-based access ensuring each of four user groups reaches only their own records",
      "Enabled six non-technical staff to operate the system independently through training and documentation",
    ],
  },
  {
    title: "Front End Engineer (Volunteer)",
    company: "GDC Consultants Ltd",
    period: "2026 – Present",
    location: "Hamilton, New Zealand",
    type: "Volunteer",
    description:
      "Contributing to a UI modernisation project within a small development team, building reusable React components and refactoring legacy code as the product transitions to a new interface.",
    responsibilities: [
      "Building reusable React components and refactoring legacy code as the product transitions to a new interface",
      "Working with React, Bootstrap, Redux Toolkit, and Redux Saga, applying component-driven development practices",
      "Delivering consistent and maintainable front-end architecture across the modernised product",
      "Collaborating closely within a small team to ensure quality and continuity during the transition",
    ],
    technologies: [
      "React",
      "Bootstrap",
      "Redux Toolkit",
      "Redux Saga",
      "TypeScript",
      "GitHub",
    ],
    achievements: [
      "Actively contributing to a live UI modernisation project in a professional NZ environment",
      "Applying component-driven development to improve front-end maintainability",
      "Building real-world Redux Toolkit and Redux Saga experience alongside professional engineers",
    ],
  },
  {
    title: "Software Development Intern",
    company: "Auckland ICT Graduate School, University of Waikato",
    period: "2025",
    location: "Hamilton, New Zealand",
    type: "Internship",
    description:
      "Delivered full-stack integration work on the Te Rā Māori digital archive, building secure Single Sign-On, role-based access control, and Linux environment configuration.",
    responsibilities: [
      "Built secure Single Sign-On using server-side authentication logic with role-based access control",
      "Configured and managed Linux server environments for the digital archive platform",
      "Served as a key communicator between the development team and project stakeholders, managing expectation-setting around scope changes",
      "Collaborated in an Agile team using Trello for sprint management",
      "Systematically debugged complex environment and authentication issues across the stack",
    ],
    technologies: [
      "Greenstone Digital Library",
      "WordPress",
      "Linux",
      "JavaScript",
      "Figma",
      "Trello",
      "GitHub",
    ],
    achievements: [
      "Delivered full-stack integration work on a live cultural heritage archive serving New Zealand communities",
      "Successfully led multiple project pivots while keeping stakeholder delivery on track",
      "Gained valuable experience in NZ professional culture, client communication, and Agile delivery",
    ],
  },
  {
    title: "Customer Service Representative",
    company: "Mitre 10 MEGA Hamilton",
    period: "2024 – Present",
    location: "Hamilton, New Zealand",
    type: "Part-time",
    description:
      "First point of contact for over 300 customer and internal interactions daily across four departments, troubleshooting point-of-sale, scanner and online order faults, escalating to specialist support, and maintaining data accuracy across pricing, ticketing and order systems.",
    responsibilities: [
      "First point of contact for 300+ customer and internal interactions daily across four departments",
      "Troubleshooting point-of-sale, scanner and online order faults",
      "Escalating unresolved issues to specialist support teams",
      "Maintaining data accuracy across pricing, ticketing and order systems",
    ],
    technologies: [
      "Point-of-Sale Systems",
      "Order Management Systems",
      "Technical Troubleshooting",
      "Data Accuracy",
      "Customer Support",
    ],
    achievements: [
      "Sustained high-volume, high-accuracy support across pricing, ticketing and order systems",
      "Built strong troubleshooting instincts for point-of-sale and systems faults, escalating effectively when needed",
      "Maintained consistent data accuracy across four departments under daily high interaction volume",
    ],
  },
  {
    title: "Software Developer",
    company: "Digital Yogin SRL",
    period: "Nov 2021 – Nov 2023",
    location: "Italy – Remote",
    type: "Full-time",
    description:
      "Designed and delivered multiple full-stack web applications end-to-end at a dynamic startup, architecting NestJS back-ends, building REST APIs with Prisma ORM, and deploying to production in Agile sprints.",
    responsibilities: [
      "Architected NestJS and Node.js back-ends and built REST APIs with Prisma ORM and schema design",
      "Developed React front ends with custom hooks, Redux and Context API state management, and reusable component libraries",
      "Integrated third-party services and managed application hosting and deployment processes",
      "Collaborated across design, product, and engineering — managing sprint reviews, weekly releases, and bug triage",
      "Built scalable database layers using Firestore, MongoDB, and MySQL for production workloads",
      "Mentored junior developers through code reviews and technical guidance",
    ],
    technologies: [
      "ReactJS",
      "NestJS",
      "TypeScript",
      "NodeJS",
      "GraphQL",
      "Prisma",
      "MongoDB",
      "MySQL",
      "Firestore",
      "Figma",
      "GitHub",
    ],
    achievements: [
      "Delivered 3+ client projects with diverse requirements end-to-end, from architecture to production",
      "Mentored junior developers improving team productivity and code quality",
      "Established effective Agile workflows in a fully remote international team",
    ],
  },
  {
    title: "Software Developer Intern",
    company: "Mediio Ltd",
    period: "May 2021 – Oct 2021",
    location: "South Korea – Remote",
    type: "Internship",
    description:
      "Built a responsive doctor-patient consultation platform (Medigrant) using Node.js, GraphQL, ReactJS, Material UI, and AWS S3, delivering a complete working product from design through deployment.",
    responsibilities: [
      "Developed features for the Mediio.net healthcare platform using ReactJS and Material UI",
      "Built backend functionality using NodeJS and GraphQL for healthcare data management",
      "Translated UI/UX wireframes into clean, accessible React components with cross-browser compatibility",
      "Participated in daily standup meetings and Agile development processes",
      "Debugged and resolved issues in production healthcare applications serving real users",
    ],
    technologies: [
      "ReactJS",
      "NodeJS",
      "GraphQL",
      "Material UI",
      "AWS S3",
      "Figma",
      "GitHub",
    ],
    achievements: [
      "Delivered a complete working product from design through to deployment",
      "Contributed to live healthcare platforms serving real users under strict deadlines",
      "Developed a collaborative, feedback-driven working style suited to fast-moving teams",
    ],
  },
  {
    title: "Freelance Frontend Developer",
    company: "Korean Financial Solutions Inc",
    period: "Jan 2022 – Oct 2022",
    location: "South Korea – Remote",
    type: "Contract",
    description:
      "Freelance contract building responsive financial application interfaces with weekly client collaboration and pixel-perfect Figma-to-code implementation.",
    responsibilities: [
      "Developed responsive financial application interfaces using ReactJS and TypeScript",
      "Implemented complex UI components using Material UI design system",
      "Collaborated with Korean development teams in weekly standup meetings",
      "Translated Figma designs into pixel-perfect, functional web applications",
    ],
    technologies: ["ReactJS", "TypeScript", "Material UI", "Figma"],
    achievements: [
      "Delivered financial application features on tight deadlines with high code quality",
      "Established effective communication with international client teams across time zones",
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
    if (Math.abs(dragOffset) > 100) {
      if (dragOffset > 0) prevExperience();
      else nextExperience();
    }
    setDragOffset(0);
  };

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

  const typeColors: Record<string, string> = {
    Volunteer: "bg-purple-400/10 text-purple-400 border-purple-400/20",
    Internship: "bg-blue-400/10 text-blue-400 border-blue-400/20",
    "Full-time": "bg-green-400/10 text-green-400 border-green-400/20",
    Contract: "bg-amber-400/10 text-amber-400 border-amber-400/20",
    "Part-time": "bg-orange-400/10 text-orange-400 border-orange-400/20",
  };

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
          {/* Navigation */}
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

          {/* Experience Card */}
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
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-3 flex-wrap">
                    <h3 className="text-2xl font-bold text-teal-100">
                      {currentExperience.title}
                    </h3>
                    <span
                      className={`text-xs font-mono px-3 py-1 rounded-full border ${
                        typeColors[currentExperience.type] ??
                        "bg-slate-400/10 text-slate-400 border-slate-400/20"
                      }`}
                    >
                      {currentExperience.type}
                    </span>
                  </div>
                  <h4 className="text-xl font-semibold text-teal-200 mb-2">
                    {currentExperience.company}
                  </h4>
                  <div className="flex items-center gap-4 text-teal-300 font-mono text-sm mb-4 flex-wrap">
                    <span>{currentExperience.period}</span>
                    <span>•</span>
                    <span>{currentExperience.location}</span>
                  </div>
                  <p className="text-teal-100/90 leading-relaxed max-w-2xl">
                    {currentExperience.description}
                  </p>
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h5 className="text-teal-100 font-semibold text-sm mb-3">
                  Technologies:
                </h5>
                <div className="flex flex-wrap gap-2">
                  {currentExperience.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-cyan-800/30 text-yellow-300 text-sm px-3 py-1 rounded-lg font-mono border border-yellow-300/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Expand toggle */}
              <div className="flex justify-center">
                <button
                  onClick={() => toggleExpanded(currentIndex)}
                  className="flex items-center space-x-2 text-teal-200 hover:text-teal-100 transition-colors duration-300 group"
                >
                  <span className="font-mono text-sm">
                    {expandedCard === currentIndex ? "Show Less" : "Show Details"}
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

              {/* Expanded details */}
              {expandedCard === currentIndex && (
                <div className="mt-8 pt-8 border-t border-teal-700/30 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h5 className="text-teal-100 font-semibold text-lg mb-4">
                      Key Responsibilities
                    </h5>
                    <ul className="space-y-3">
                      {currentExperience.responsibilities.map((item, i) => (
                        <li key={i} className="flex items-start text-teal-100/90">
                          <span className="text-teal-200 mr-3 mt-1 font-mono text-sm">
                            ▹
                          </span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-teal-100 font-semibold text-lg mb-4">
                      Key Achievements
                    </h5>
                    <ul className="space-y-3">
                      {currentExperience.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start text-teal-100/90">
                          <span className="text-teal-300 mr-3 mt-1">✓</span>
                          <span className="leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </ScrollAnimation>

          {/* Dot indicators */}
          <ScrollAnimation direction="up" delay={0.4}>
            <div className="flex justify-center space-x-3 mt-8">
              {experiences.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setExpandedCard(null);
                  }}
                  className={`rounded-full transition-all duration-300 ${
                    currentIndex === index
                      ? "w-6 h-3 bg-teal-400"
                      : "w-3 h-3 bg-teal-700/50 hover:bg-teal-600/70"
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
