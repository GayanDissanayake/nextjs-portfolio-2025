export default function IntroSection() {
  const scrollToAbout = () => {
    const aboutElement = document.getElementById("about");
    if (aboutElement) {
      // For mobile, use less offset to avoid scrolling past content
      const isMobile = window.innerWidth < 768;
      const offsetPosition = aboutElement.offsetTop - (isMobile ? 60 : 0);
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

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
        onClick={scrollToAbout}
        className="absolute bottom-30 md:bottom-20 left-1/2 transform -translate-x-1/2 animate-fade-in-up animation-delay-800 group z-10"
      >
        <div className="relative p-2">
          {/* Background circle for better visibility on mobile */}
          <div className="absolute inset-0 bg-navy/70 rounded-full blur-md scale-125 md:hidden"></div>
          <svg
            className="relative w-10 h-10 md:w-8 md:h-8 text-beige-accent animate-bounce group-hover:text-beige transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={3}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </button>
    </section>
  );
}
