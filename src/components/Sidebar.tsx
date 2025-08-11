interface SidebarProps {
  activeSection: string;
  showMainContent: boolean;
  scrollToSection: (sectionId: string) => void;
}

const navItems = [
  { id: "about", label: "About Me", number: "01" },
  { id: "technical", label: "Technical", number: "02" },
  { id: "experience", label: "Experience", number: "03" },
  { id: "projects", label: "Projects", number: "04" },
  { id: "contact", label: "Contact", number: "05" },
];

export default function Sidebar({
  activeSection,
  showMainContent,
  scrollToSection,
}: SidebarProps) {
  return (
    <div
      className={`fixed left-0 top-0 h-full w-80 bg-navy-light border-r border-gray-800 z-50 transition-transform duration-500 ${
        showMainContent ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="h-full flex flex-col justify-between p-8">
        {/* Top Section - Name and Description */}
        <div className="space-y-6">
          <button
            onClick={() => scrollToSection("intro")}
            className="text-left group"
          >
            <h1 className="text-2xl font-bold text-beige mb-2 group-hover:text-beige-accent transition-colors">
              Gayan Dissanayake
            </h1>
            <h2 className="text-lg text-gray-400 mb-4">Full-Stack Developer</h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              I build exceptional digital experiences using modern web
              technologies.
            </p>
          </button>

          {/* Navigation */}
          <nav className="space-y-4 mt-12">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center group w-full text-left transition-all duration-200 ${
                  activeSection === item.id
                    ? "text-beige-accent"
                    : "text-gray-400 hover:text-beige"
                }`}
              >
                <div
                  className={`w-8 h-px mr-4 transition-all duration-200 ${
                    activeSection === item.id
                      ? "bg-beige-accent w-16"
                      : "bg-gray-600 group-hover:bg-beige-accent group-hover:w-12"
                  }`}
                ></div>
                <span className="text-xs font-mono mr-3">{item.number}.</span>
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Bottom Section - Social Links and Resume */}
        <div className="space-y-6">
          {/* Resume Button */}
          <div className="space-y-3">
            <a
              href="/documents/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center border border-beige-accent text-beige-accent px-4 py-2 rounded text-sm hover:bg-beige-accent hover:text-navy transition-all duration-200"
            >
              View Resume
            </a>
            <a
              href="/documents/cv.pdf"
              download="Gayan_Dissanayake_CV.pdf"
              className="block text-center bg-beige-accent text-navy px-4 py-2 rounded text-sm hover:bg-amber-300 transition-all duration-200"
            >
              Download CV
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/GayanDissanayake"
              target="_blank"
              rel="noopener noreferrer"
              className="text-beige-accent hover:!text-gray-400 transition-colors duration-300 transform hover:-translate-y-1"
              title="GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-beige-accent hover:!text-gray-400 transition-colors duration-300 transform hover:-translate-y-1"
              title="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
