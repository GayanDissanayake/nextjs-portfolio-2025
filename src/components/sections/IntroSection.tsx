interface IntroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

export default function IntroSection({ scrollToSection }: IntroSectionProps) {
  return (
    <section
      id="intro"
      className="min-h-screen flex flex-col items-center justify-center px-4 lg:px-8 relative"
    >
      <div className="text-center max-w-4xl mx-auto">
        <p className="text-beige-accent font-mono text-lg mb-6 animate-fade-in-up">
          Hi, my name is
        </p>

        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-beige mb-6 animate-fade-in-up animation-delay-200">
          Gayan Dissanayake
        </h1>

        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-400 mb-8 animate-fade-in-up animation-delay-400">
          I build things for the web.
        </h2>

        <p className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-16 animate-fade-in-up animation-delay-600">
          I&apos;m a full-stack developer specializing in building exceptional
          digital experiences. Currently focused on creating accessible,
          human-centered products using modern web technologies.
        </p>
      </div>

      {/* Scroll Down Button */}
      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-fade-in-up animation-delay-800 group"
      >
        <div className="flex flex-col items-center space-y-2">
          {/* <span className="text-beige-accent text-sm font-mono mb-4">scroll down</span> */}
          {/* <div className="w-6 h-10 border-2 border-beige-accent rounded-full flex justify-center">
            <div className="w-1 h-3 bg-beige-accent rounded-full mt-2 animate-pulse"></div>
          </div> */}
          <svg
            className="w-6 h-6 text-beige-accent mt-2 animate-bounce group-hover:text-beige transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </button>
    </section>
  );
}
