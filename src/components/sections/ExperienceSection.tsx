const experiences = [
  {
    title: "Full Stack Developer",
    company: "Your Company",
    period: "January 2023 - Present",
    responsibilities: [
      "Write modern, performant, maintainable code for a diverse array of client and internal projects",
      "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, React, and Next.js",
      "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="min-h-screen flex items-center px-4 lg:px-8 py-20"
    >
      <div className="max-w-4xl mx-auto w-full">
        <div className="flex items-center mb-16">
          <span className="text-beige-accent font-mono text-lg mr-4">02.</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-beige">
            Where I&apos;ve Worked
          </h2>
          <div className="flex-1 h-px bg-gray-600 ml-4 lg:ml-8"></div>
        </div>

        <div className="max-w-3xl">
          {experiences.map((experience, index) => (
            <div key={index} className="mb-12">
              <h3 className="text-xl font-semibold text-beige mb-2">
                {experience.title}{" "}
                <span className="text-beige-accent">
                  @ {experience.company}
                </span>
              </h3>
              <p className="text-gray-400 font-mono text-sm mb-6">
                {experience.period}
              </p>
              <ul className="space-y-3">
                {experience.responsibilities.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex items-start text-gray-300"
                  >
                    <span className="text-beige-accent mr-3 mt-1 font-mono">
                      ▹
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
