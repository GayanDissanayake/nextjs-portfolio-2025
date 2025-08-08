const skills = [
  "JavaScript (ES6+)",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "PostgreSQL",
  "AWS",
];
export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center px-4 lg:px-8 pt-5 pb-20"
    >
      {" "}
      <div className="max-w-4xl mx-auto w-full">
        {" "}
        <div className="flex items-center mb-16">
          {" "}
          <span className="text-beige-accent font-mono text-lg mr-4">
            01.
          </span>{" "}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-beige">
            About Me
          </h2>{" "}
          <div className="flex-1 h-px bg-gray-600 ml-4 lg:ml-8"></div>{" "}
        </div>{" "}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {" "}
          <div className="lg:col-span-2">
            {" "}
            <div className="text-gray-300 space-y-4 mb-8">
              {" "}
              <p>
                {" "}
                Hello! I&apos;m Gayan, a full-stack developer based in New
                Zealand who enjoys creating things that live on the internet. My
                interest in web development started back when I decided to try
                editing custom themes — turns out hacking together HTML & CSS
                taught me a lot about web development!{" "}
              </p>{" "}
              <p>
                {" "}
                Fast-forward to today, and I&apos;ve had the privilege of
                working on various projects ranging from small business websites
                to large-scale applications. My main focus these days is
                building accessible, inclusive products and digital experiences
                for users.{" "}
              </p>{" "}
              <p>
                {" "}
                Here are a few technologies I&apos;ve been working with
                recently:{" "}
              </p>{" "}
            </div>{" "}
            <div className="grid grid-cols-2 gap-2 font-mono text-sm text-gray-300">
              {" "}
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center">
                  {" "}
                  <span className="text-beige-accent mr-2">▹</span> {skill}{" "}
                </div>
              ))}{" "}
            </div>{" "}
          </div>{" "}
          <div className="lg:col-span-1">
            {" "}
            <div className="relative group max-w-xs mx-auto lg:mx-0">
              {" "}
              <div className="relative">
                {" "}
                <div className="w-64 h-64 bg-beige-accent/20 rounded-lg flex items-center justify-center">
                  {" "}
                  <span className="text-beige-accent text-6xl">👨‍💻</span>{" "}
                </div>{" "}
                <div className="absolute inset-0 border-2 border-beige-accent rounded-lg transform translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
