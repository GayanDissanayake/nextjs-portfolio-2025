import Image from "next/image";
import { motion } from "framer-motion";

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
      className="min-h-screen flex flex-col lg:flex-row items-center justify-center px-4 lg:px-8 relative gap-12 lg:gap-16 bg-slate-950"
    >
      {/* Profile Image */}
      <motion.div
        className="flex-shrink-0 order-1 lg:order-2"
        initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
      >
        <div className="relative">
          <Image
            src="/images/profile/beach.jpeg"
            alt="Gayan Dissanayake"
            width={300}
            height={300}
            className="rounded-full shadow-2xl border-4 border-beige-accent/20"
            priority
          />
          {/* Decorative ring */}
          <div className="absolute inset-0 rounded-full ring-2 ring-beige-accent/30 ring-offset-4 ring-offset-navy"></div>
        </div>
      </motion.div>

      {/* Text Content */}
      <div className="text-center lg:text-left max-w-2xl order-2 lg:order-1">
        <motion.p
          className="text-white font-mono text-lg mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            background:
              "linear-gradient(135deg, #f5f5dc 0%, #deb887 50%, #d2b48c 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Gayan Dissanayake
        </motion.h1>

        <motion.h2
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-400 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          I build things for the web.
        </motion.h2>

        <motion.p
          className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          I&apos;m a full-stack developer specializing in building exceptional
          digital experiences. Currently focused on creating accessible,
          human-centered products using modern web technologies.
        </motion.p>
      </div>

      {/* Scroll Down Button */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-30 md:bottom-20 left-1/2 transform -translate-x-1/2 group z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
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
      </motion.button>
    </section>
  );
}
