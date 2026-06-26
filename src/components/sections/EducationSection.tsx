import ScrollAnimation from "../ScrollAnimation";
import StaggeredAnimation from "../StaggeredAnimation";

const degrees = [
  {
    degree: "Master of Information Technology",
    grade: "First-Class Honours",
    institution: "University of Waikato",
    location: "Hamilton, New Zealand",
    year: "2025",
    icon: "🎓",
    highlights: [
      "Full-stack social media platform (Next.js, NestJS, MongoDB, Socket.io)",
      "eVoting system with AWS Lambda, DynamoDB, SQS, and Cognito",
      "Software Development Internship — Te Ra Māori digital archive",
      "Graduated with First-Class Honours",
    ],
    color: {
      bg: "bg-amber-900/20",
      border: "border-amber-600/40",
      borderHover: "hover:border-amber-500/70",
      tag: "bg-amber-400/10 text-amber-300 border-amber-400/20",
      grade: "text-amber-300",
      icon: "text-amber-400",
      bullet: "text-amber-400",
    },
  },
  {
    degree: "BEng (Hons) in Software Engineering",
    grade: "Second-Class Honours",
    institution: "University of Westminster",
    location: "London, United Kingdom",
    year: "2021",
    icon: "🏛️",
    highlights: [
      "Software engineering fundamentals, algorithms, and systems design",
      "Final-year project in web application development",
      "Completed while balancing cricket and leadership commitments",
      "Foundation for professional career across four countries",
    ],
    color: {
      bg: "bg-cyan-900/20",
      border: "border-cyan-600/40",
      borderHover: "hover:border-cyan-500/70",
      tag: "bg-cyan-400/10 text-cyan-300 border-cyan-400/20",
      grade: "text-cyan-300",
      icon: "text-cyan-400",
      bullet: "text-cyan-400",
    },
  },
];

const achievements = [
  {
    title: "School Colors Award — Cricket",
    detail:
      "Royal College vs S. Thomas' College — the second longest-running sporting rivalry in the world since 1879",
    icon: "🏏",
  },
  {
    title: "Senior Prefect, Royal College Colombo",
    detail:
      "Elected to lead school-wide initiatives, mentor junior students, and represent the school in academic and community forums",
    icon: "👑",
  },
];

export default function EducationSection() {
  return (
    <section
      id="education"
      className="min-h-screen flex items-center px-4 lg:px-8 py-20 bg-slate-950"
    >
      <div className="max-w-6xl mx-auto w-full">
        <ScrollAnimation direction="up" delay={0.1}>
          <div className="flex items-center mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-100">
              Education
            </h2>
            <div className="flex-1 h-px bg-slate-600 ml-4 lg:ml-8"></div>
          </div>
        </ScrollAnimation>

        {/* Degree Cards */}
        <StaggeredAnimation
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
          staggerDelay={0.15}
        >
          {degrees.map((edu) => (
            <div
              key={edu.institution}
              className={`${edu.color.bg} ${edu.color.border} ${edu.color.borderHover} border rounded-2xl p-8 transition-all duration-300`}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`text-3xl ${edu.color.icon}`}>
                      {edu.icon}
                    </span>
                    <span
                      className={`text-xs font-mono px-3 py-1 rounded-full border ${edu.color.tag}`}
                    >
                      {edu.year}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-100 mb-1">
                    {edu.degree}
                  </h3>
                  <p className={`font-semibold text-sm mb-2 ${edu.color.grade}`}>
                    {edu.grade}
                  </p>
                  <p className="text-slate-300 font-medium">{edu.institution}</p>
                  <p className="text-slate-400 text-sm font-mono mt-1">
                    {edu.location}
                  </p>
                </div>
              </div>

              {/* Highlights */}
              <ul className="space-y-2">
                {edu.highlights.map((point, i) => (
                  <li key={i} className="flex items-start text-slate-300 text-sm">
                    <span className={`mr-3 mt-1 font-mono text-xs ${edu.color.bullet}`}>
                      ▹
                    </span>
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </StaggeredAnimation>

        {/* Achievements & Leadership */}
        <ScrollAnimation direction="up" delay={0.5}>
          <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-8">
            <h3 className="text-lg font-bold text-slate-100 mb-6">
              Achievements &amp; Leadership
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <h4 className="font-semibold text-slate-200 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
