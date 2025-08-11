"use client";

import { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import IntroSection from "@/components/sections/IntroSection";
import AboutSection from "@/components/sections/AboutSection";
import TechnicalSection from "@/components/sections/TechnicalSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>("intro");
  const [showMainContent, setShowMainContent] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "intro",
        "about",
        "technical",
        "experience",
        "projects",
        "contact",
      ];
      const scrollPosition = window.scrollY + window.innerHeight * 0.3;

      // Show main content after scrolling down from intro section
      if (window.scrollY > window.innerHeight * 0.7 && !showMainContent) {
        setShowMainContent(true);
      } else if (
        window.scrollY <= window.innerHeight * 0.3 &&
        showMainContent
      ) {
        setShowMainContent(false);
      }

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showMainContent]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-navy text-white">
      {/* Mobile Navigation Header - Only visible on small screens */}
      <div className="lg:hidden fixed top-0 left-0 right-0 bg-navy-light/95 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="flex items-center justify-between p-4">
          <button
            onClick={() => scrollToSection("intro")}
            className="text-beige font-bold text-lg"
          >
            Gayan Dissanayake
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-beige hover:text-beige-accent transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="bg-navy-light border-t border-gray-800">
            <nav className="p-4 space-y-4">
              {[
                { id: "about", label: "About Me", number: "01" },
                { id: "technical", label: "Technical", number: "02" },
                { id: "experience", label: "Experience", number: "03" },
                { id: "projects", label: "Projects", number: "04" },
                { id: "contact", label: "Contact", number: "05" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center w-full text-left transition-colors ${
                    activeSection === item.id
                      ? "text-beige-accent"
                      : "text-gray-400 hover:text-beige"
                  }`}
                >
                  <span className="text-xs font-mono mr-3">{item.number}.</span>
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>

      {/* Desktop Left Sidebar - Only visible on large screens and when showMainContent is true */}
      <div className="hidden lg:block">
        <Sidebar
          showMainContent={showMainContent}
          activeSection={activeSection}
          scrollToSection={scrollToSection}
        />
      </div>

      {/* Main Content */}
      <div
        className={`transition-all duration-500 ${
          showMainContent ? "lg:ml-80" : "lg:ml-0"
        } ${isMobileMenuOpen ? "pt-32" : "pt-16"} lg:pt-0`}
      >
        <IntroSection />
        <AboutSection />
        <TechnicalSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </div>

      {/* Floating Scroll to Top Button */}
      {showMainContent && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 lg:bottom-6 lg:right-6 z-40 w-12 h-12 bg-beige-accent text-navy rounded-full shadow-lg hover:bg-beige-accent/90 transition-all duration-300 transform hover:scale-110 flex items-center justify-center group"
          aria-label="Scroll to top"
        >
          <svg
            className="w-5 h-5 transform group-hover:-translate-y-0.5 transition-transform text-beige-accent animate-bounce group-hover:text-beige"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </div>
  );
}
