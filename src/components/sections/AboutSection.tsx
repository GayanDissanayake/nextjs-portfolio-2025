import Image from "next/image";
import { useState } from "react";
import ScrollAnimation from "../ScrollAnimation";
import StaggeredAnimation from "../StaggeredAnimation";

const personalStories = [
  {
    id: "education",
    title: "👑 The Royal Legacy",
    description: `My School & Cricket journey - Where I, 'Learnt of books and men, and learnt to play the
              game'`,
    icon: "🏏",
    coming: false,
  },
  {
    id: "enhanced-3d-about-me",
    title: "🌟 Enhanced 3D About Me",
    description:
      "Immersive 3D experience with my character, pet, and interactive story objects",
    icon: "🎮",
    coming: true,
  },

  {
    id: "advanced-3d",
    title: "🎮 Advanced 3D Showcase",
    description: "Three.js experiments and interactive experiences",
    icon: "✨",
    coming: true,
  },
  {
    id: "travel",
    title: "🌍 Travel Adventures",
    description: "Places I've been, cultures I've experienced",
    icon: "✈️",
    coming: false,
  },
  {
    id: "hobbies",
    title: "🎨 Hobbies & Passions",
    description: "What I do when I'm not coding",
    icon: "🎯",
    coming: true,
  },
  {
    id: "pet",
    title: "🐾 My Furry Friend",
    description: "Meet my coding companion",
    icon: "🐕",
    coming: true,
  },
  {
    id: "food",
    title: "🍜 Food Adventures",
    description: "Culinary experiments and favorite dishes",
    icon: "👨‍🍳",
    coming: true,
  },
  {
    id: "experiences",
    title: "✈️ Life Experiences",
    description: "Stories that shaped who I am",
    icon: "🌟",
    coming: true,
  },
];

export default function AboutSection() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const handleCardClick = (id: string) => {
    if (id === "advanced-3d") {
      // Navigate to the advanced 3D showcase
      window.location.href = "/advanced-3d";
    } else if (id === "travel") {
      // Navigate to the interactive travel map
      window.location.href = "/travel-map";
    } else if (id === "education") {
      // Navigate to the school journey page
      window.location.href = "/school-journey";
    } else {
      // For other sections, show coming soon message
      alert(
        `Coming soon! This will take you to: ${
          personalStories.find((story) => story.id === id)?.title
        }`
      );
    }
  };

  return (
    <section
      id="about"
      className="min-h-screen flex items-center px-4 lg:px-8 pt-5 pb-20 bg-slate-950"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <ScrollAnimation direction="up" duration={0.8}>
          <div className="flex items-center mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-beige text-shimmer">
              About Me - The Human Side
            </h2>
            <div className="flex-1 h-px bg-gray-600 ml-4 lg:ml-8"></div>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Personal Story */}
          <ScrollAnimation direction="left" duration={0.8} delay={0.2}>
            <div className="space-y-6">
              <div className="text-gray-300 space-y-4">
                <p className="text-lg leading-relaxed">
                  Hello! I&apos;m Gayan, a full-stack developer and
                  Master&apos;s student in Information Technology at the
                  University of Waikato, with a knack for solving
                  problems—whether it&apos;s untangling a tricky bug in code or
                  finding the simplest way to tackle life&apos;s challenges. I
                  love the thrill of cracking a problem, whether it&apos;s
                  optimizing a ReactJS app or figuring out the most efficient
                  way to get things done (call it lazy genius, but I always
                  deliver!).
                </p>
                <p className="text-lg leading-relaxed">
                  When I&apos;m not coding, you&apos;ll catch me smashing
                  boundaries on the cricket pitch—a passion from my days as a
                  Sri Lankan school cricketer—or lifting weights at the gym to
                  stay sharp. I&apos;m all about good vibes with friends,
                  exploring new places in New Zealand, and chasing the next food
                  adventure (from spicy Sri Lankan curries to Sushi—my
                  favourite—to Kiwi classics). I&apos;m a beginner cook, but my
                  Creamy Bacon Pasta is a crowd-pleaser! Back in Sri Lanka, my
                  furry best friend (a tail-wagging problem-solver in his own
                  right) keeps my family company while I study abroad.
                </p>
                <p className="text-lg leading-relaxed">
                  For me, coding and life are about finding smart, efficient
                  solutions that make an impact. Whether it&apos;s building a
                  user-friendly Web Application or planning a weekend getaway
                  with mates, I focus on solutions, not problems, drawing
                  inspiration from diverse cultures, travel stories, and a good
                  plate of food.
                </p>
              </div>
            </div>
          </ScrollAnimation>

          {/* Profile Image with Fun Twist */}
          <ScrollAnimation direction="right" duration={0.8} delay={0.4}>
            <div className="lg:col-span-1 flex items-center">
              <div className="relative group w-full">
                <div className="relative">
                  <div className="w-full aspect-square rounded-2xl overflow-hidden transform transition-transform duration-300 group-hover:scale-105">
                    <Image
                      src="/images/profile/beach.jpeg"
                      alt="Gayan Dissanayake - The person behind the code"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                    {/* Fun overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <p className="text-beige text-sm font-mono">
                        📍 Somewhere awesome in New Zealand
                      </p>
                    </div>
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-beige-accent rounded-full animate-pulse"></div>
                  <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-green-400/20 rounded-full animate-pulse animation-delay-200"></div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>

        {/* Interactive Story Cards */}
        <ScrollAnimation direction="up" duration={0.8} delay={0.6}>
          <div className="mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-beige mb-8 text-center">
              Explore Different Facets of My Life
            </h3>
            <StaggeredAnimation
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              staggerDelay={0.15}
            >
              {personalStories.map((story) => (
                <div
                  key={story.id}
                  className={`relative p-6 rounded-xl border transition-all duration-300 cursor-pointer group safe-hover h-full min-h-[150px] flex flex-col ${
                    hoveredCard === story.id
                      ? "border-teal-500/70 bg-teal-800/50 shadow-xl shadow-teal-500/20"
                      : "border-teal-600/40 bg-teal-900/30 hover:border-teal-500/70 hover:bg-teal-800/40"
                  }`}
                  onMouseEnter={() => setHoveredCard(story.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={() => handleCardClick(story.id)}
                >
                  {/* Coming Soon Badge */}
                  {story.coming && (
                    <div className="absolute top-2 right-2 bg-teal-500 text-teal-950 text-xs px-2 py-1 rounded-full font-mono">
                      Coming Soon
                    </div>
                  )}

                  <div className="flex items-start space-x-4 flex-1">
                    <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                      {story.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-teal-100 mb-2 group-hover:text-teal-200 transition-colors">
                        {story.title}
                      </h4>
                      <p className="text-teal-200 text-sm leading-relaxed">
                        {story.description}
                      </p>
                    </div>
                  </div>

                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 to-teal-400/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </StaggeredAnimation>
          </div>
        </ScrollAnimation>

        {/* Call to Action */}
        <ScrollAnimation direction="up" duration={0.8} delay={0.8}>
          <div className="text-center">
            <p className="text-gray-400 mb-6">
              Want to know more about any of these? Click the cards above, or
              let&apos;s chat about it in an interview!
            </p>
            <div className="inline-flex items-center space-x-2 text-beige-accent font-mono text-sm">
              <span>💡</span>
              <span>
                Pro tip: Each section will be interactive and tell a unique
                story
              </span>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
