import Image from "next/image";
import { motion } from "framer-motion";

export default function IntroSection() {
  const scrollToAbout = () => {
    const aboutElement = document.getElementById("about");
    if (aboutElement) {
      const isMobile = window.innerWidth < 768;
      const offsetPosition = aboutElement.offsetTop - (isMobile ? 60 : 0);
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section
      id="intro"
      className="min-h-screen flex flex-col lg:flex-row items-center justify-center px-8 lg:px-16 relative gap-12 lg:gap-20 bg-slate-950"
    >
      {/* Text Content */}
      <div className="text-center lg:text-left max-w-2xl order-2 lg:order-1">
        <motion.p
          className="text-beige-accent font-mono text-base mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
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
          className="text-xl md:text-2xl lg:text-3xl font-semibold text-slate-400 mb-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Software &amp; IT Professional
        </motion.h2>

        <motion.p
          className="text-beige-accent/90 font-mono text-sm md:text-base tracking-wide mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
        >
          Development · IT Support · Business Systems
        </motion.p>

        <motion.p
          className="text-base lg:text-lg text-gray-300 leading-relaxed max-w-xl mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          I build and support software across the stack — from React and
          Next.js frontends to Node.js and NestJS backends and serverless AWS
          infrastructure — and I work closely with the people who use it,
          gathering requirements, troubleshooting issues, and documenting
          systems along the way. First-Class Honours Master of Information
          Technology graduate, currently based in Hamilton, New Zealand.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <button
            onClick={scrollToAbout}
            className="px-6 py-3 bg-beige-accent text-navy font-semibold rounded-lg hover:bg-beige-accent/90 transition-all duration-200 text-sm"
          >
            Explore My Work
          </button>
        </motion.div>
      </div>

      {/* Profile Image */}
      <motion.div
        className="flex-shrink-0 order-1 lg:order-2"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
      >
        <div className="relative">
          <div className="w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden border-2 border-beige-accent/20 shadow-2xl shadow-black/40">
            <Image
              src="/images/profile/profile-photo-2.jpg"
              alt="Gayan Dissanayake"
              width={320}
              height={320}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          {/* Decorative accent corner */}
          <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border-2 border-beige-accent/20 -z-10" />
        </div>
      </motion.div>

      {/* Scroll Down indicator */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 group z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Scroll to about section"
      >
        <svg
          className="w-8 h-8 text-beige-accent/60 animate-bounce group-hover:text-beige-accent transition-colors"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.button>
    </section>
  );
}
