import Image from "next/image";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "Halcyon Theme",
    description:
      "A minimal, dark blue theme for VS Code, Atom, Sublime Text, and more. Available on Visual Studio Marketplace, Package Control, apm, and npm.",
    technologies: ["VS Code", "Sublime Text", "Atom", "iTerm2", "Hyper"],
    imageUrl: "/images/project1.jpg",
    githubUrl: "https://github.com/yourusername/halcyon-theme",
    liveUrl:
      "https://marketplace.visualstudio.com/items?itemName=brittanychiang.halcyon-vscode",
    featured: true,
  },
  {
    title: "Spotify Profile",
    description:
      "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
    technologies: [
      "React",
      "Styled Components",
      "Express",
      "Spotify API",
      "Heroku",
    ],
    imageUrl: "/images/project2.jpg",
    githubUrl: "https://github.com/yourusername/spotify-profile",
    liveUrl: "https://spotify-profile-demo.herokuapp.com/",
    featured: true,
  },
  {
    title: "Algolia DocSearch",
    description:
      "Algolia DocSearch crawler for the freeCodeCamp Guide and News. Dockerized and deployed to Kubernetes cluster on Google Cloud Platform.",
    technologies: ["Docker", "Kubernetes", "Google Cloud", "Algolia"],
    imageUrl: "/images/project3.jpg",
    githubUrl: "https://github.com/yourusername/algolia-docsearch",
    featured: true,
  },
];

const otherProjects = [
  {
    title: "Integrating Algolia Search with WordPress Multisite",
    description:
      "Building a custom multisite compatible WordPress plugin to build global search with Algolia",
    technologies: ["WordPress", "PHP", "Algolia"],
    githubUrl: "https://github.com/yourusername/project1",
  },
  {
    title: "Google Keep Clone",
    description:
      "A simple Google Keep clone built with React and Firebase for learning purposes",
    technologies: ["React", "Firebase", "CSS3"],
    githubUrl: "https://github.com/yourusername/project2",
  },
  {
    title: "OctoProfile",
    description:
      "A nicer look at your GitHub profile and repo stats. Includes data visualizations of your top languages, starred repositories, and more.",
    technologies: ["Next.js", "Chart.js", "GitHub API"],
    githubUrl: "https://github.com/yourusername/project3",
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center px-4 lg:px-8 py-20"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex items-center mb-16">
          <span className="text-beige-accent font-mono text-lg mr-4">03.</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-beige">
            Some Things I&apos;ve Built
          </h2>
          <div className="flex-1 h-px bg-gray-600 ml-4 lg:ml-8"></div>
        </div>

        {/* Featured Projects */}
        <div className="space-y-24 mb-32">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                index % 2 === 1 ? "lg:text-right" : ""
              }`}
            >
              {/* Project Image */}
              <div
                className={`lg:col-span-7 ${
                  index % 2 === 1 ? "lg:col-start-6" : "lg:col-start-1"
                } relative group`}
              >
                <div className="relative overflow-hidden rounded-lg bg-beige-accent/10">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-navy/50 transition-opacity duration-300 group-hover:bg-navy/20"></div>
                </div>
              </div>

              {/* Project Content */}
              <div
                className={`lg:col-span-6 ${
                  index % 2 === 1 ? "lg:col-start-1" : "lg:col-start-7"
                } z-10`}
              >
                <p className="text-beige-accent font-mono text-sm mb-2">
                  Featured Project
                </p>
                <h3 className="text-2xl font-bold text-beige mb-4">
                  {project.title}
                </h3>
                <div className="bg-navy-light p-6 rounded-lg shadow-lg mb-4">
                  <p className="text-gray-300">{project.description}</p>
                </div>
                <ul
                  className={`flex flex-wrap gap-4 font-mono text-sm text-gray-400 mb-6 ${
                    index % 2 === 1 ? "lg:justify-end" : ""
                  }`}
                >
                  {project.technologies.map((tech, techIndex) => (
                    <li key={techIndex}>{tech}</li>
                  ))}
                </ul>
                <div
                  className={`flex gap-4 ${
                    index % 2 === 1 ? "lg:justify-end" : ""
                  }`}
                >
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-beige-accent transition-colors"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-beige-accent transition-colors"
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
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-bold text-beige mb-4">
            Other Noteworthy Projects
          </h3>
          <p className="text-beige-accent font-mono">view the archive</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <div
              key={index}
              className="bg-navy-light p-6 rounded-lg hover:bg-navy-light/80 transition-colors group"
            >
              <div className="flex justify-between items-start mb-4">
                <svg
                  className="w-8 h-8 text-beige-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 5a2 2 0 012-2h4a2 2 0 012 2v2H8V5z"
                  />
                </svg>
                <div className="flex gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-beige-accent transition-colors"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
              <h4 className="text-lg font-semibold text-beige mb-2 group-hover:text-beige-accent transition-colors">
                {project.title}
              </h4>
              <p className="text-gray-300 text-sm mb-4">
                {project.description}
              </p>
              <ul className="flex flex-wrap gap-2 font-mono text-xs text-gray-400">
                {project.technologies.map((tech, techIndex) => (
                  <li key={techIndex}>{tech}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
