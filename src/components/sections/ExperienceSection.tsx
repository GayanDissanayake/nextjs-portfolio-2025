"use client";

import ScrollAnimation from "../ScrollAnimation";

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Tech Solutions Inc.",
    period: "January 2023 - Present",
    location: "Auckland, New Zealand",
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
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "AWS",
    ],
    achievements: [
      "Reduced application load time by 40% through performance optimization",
      "Led migration from legacy systems to modern tech stack",
      "Improved team productivity by implementing automated testing suites",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Digital Agency NZ",
    period: "June 2021 - December 2022",
    location: "Wellington, New Zealand",
    type: "Full-time",
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
  return (
    <section
      id="experience"
      className="min-h-screen flex items-center px-4 lg:px-8 py-20"
    >
      <div className="max-w-6xl mx-auto w-full">
        <ScrollAnimation direction="up" delay={0.1}>
          <div className="flex items-center mb-16">
            <span className="text-beige-accent font-mono text-lg mr-4">
              03.
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-beige">
              Where I&apos;ve Worked
            </h2>
            <div className="flex-1 h-px bg-gray-600 ml-4 lg:ml-8"></div>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {experiences.map((experience, index) => (
            <ScrollAnimation key={index} direction="up" delay={index * 0.1}>
              <div className="bg-navy-light/50 border border-gray-700 rounded-xl p-6 transition-all duration-300 group safe-hover hover:border-beige-accent/50 hover:bg-navy-light/70 hover:shadow-lg hover:shadow-beige-accent/10 h-full min-h-[600px] flex flex-col">
                {/* Company Header */}
                <div className="mb-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold text-beige group-hover:text-beige-accent transition-colors">
                      {experience.title}
                    </h3>
                    <span className="text-xs font-mono text-beige-accent bg-beige-accent/10 px-2 py-1 rounded-full">
                      {experience.type}
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold text-beige-accent mb-1">
                    {experience.company}
                  </h4>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-400 font-mono text-sm">
                    <span>{experience.period}</span>
                    <span className="hidden sm:inline">•</span>
                    <span>{experience.location}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {experience.description}
                </p>

                {/* Key Responsibilities */}
                <div className="mb-6 flex-1">
                  <h5 className="text-beige font-semibold text-sm mb-3">
                    Key Responsibilities:
                  </h5>
                  <ul className="space-y-2">
                    {experience.responsibilities
                      .slice(0, 3)
                      .map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="flex items-start text-gray-300 text-sm"
                        >
                          <span className="text-beige-accent mr-2 mt-1 font-mono text-xs">
                            ▹
                          </span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h5 className="text-beige font-semibold text-sm mb-3">
                    Technologies:
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-beige-accent/10 text-beige-accent text-xs px-2 py-1 rounded-md font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="mt-auto">
                  <h5 className="text-beige font-semibold text-sm mb-3">
                    Key Achievements:
                  </h5>
                  <ul className="space-y-1">
                    {experience.achievements.map(
                      (achievement, achievementIndex) => (
                        <li
                          key={achievementIndex}
                          className="flex items-start text-gray-300 text-sm"
                        >
                          <span className="text-green-400 mr-2 mt-1 text-xs">
                            ✓
                          </span>
                          <span className="leading-relaxed">{achievement}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
