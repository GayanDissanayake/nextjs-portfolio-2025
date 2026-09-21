import Image from "next/image";
import React, { useRef, useState } from "react";
import ScrollAnimation from "../ScrollAnimation";
import StaggeredAnimation from "../StaggeredAnimation";

const personalStories = [
  {
    id: "education",
    title: "👑 The Royal Legacy",
    description:
      "My school and cricket journey at Royal College Colombo — 'Learnt of books and men, and learnt to play the game'",
    icon: "🏏",
    href: "/school-journey",
    coming: false,
  },
  {
    id: "travel",
    title: "🌍 Travel Adventures",
    description: "Places I've explored, cultures I've experienced across Asia, Europe, and New Zealand",
    icon: "✈️",
    href: "/travel-map",
    coming: false,
  },
  {
    id: "hobbies",
    title: "🏋️ Hobbies & Passions",
    description: "Cricket, gym, cooking, and all the things I do when I'm not writing code",
    icon: "🎯",
    href: null,
    coming: true,
  },
  {
    id: "pet",
    title: "🐾 My Furry Friend",
    description: "Meet the four-legged companion keeping my family company back in Sri Lanka",
    icon: "🐕",
    href: null,
    coming: true,
  },
  {
    id: "food",
    title: "🍜 Food Adventures",
    description: "From spicy Sri Lankan curries to sushi to Kiwi classics — and my Creamy Bacon Pasta",
    icon: "👨‍🍳",
    href: null,
    coming: true,
  },
  {
    id: "experiences",
    title: "🌟 Life Experiences",
    description: "Stories from Sri Lanka, Italy, South Korea, New Zealand and everywhere in between",
    icon: "✈️",
    href: null,
    coming: true,
  },
];

interface Image {
  src: string;
  alt: string;
}

const images: Image[] = [
  {
    src: "/images/profile/profile.jpeg",
    alt: "With my coding companion back home",
  },
  {
    src: "/images/school/cricket-2.jpeg",
    alt: "At the Battle of the Blues while being supported by my fellow Prefects",
  },
  {
    src: "/images/profile/profile-photo.jpg",
    alt: "A cool dude I met in Rotorua, New Zealand",
  },
  {
    src: "/images/profile/image.png",
    alt: "One of my favourite things in the world, Sunsets",
  },
];

export default function AboutSection() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [showAllStories, setShowAllStories] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragOffSet, setDragOffSet] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    // setIsAutoPlaying(false);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleStart = (clientX: number) => {
    setIsDragging(true);
    setDragStart(clientX);
    setDragOffSet(0);
  };

  const handleMove = (clientX: number) => {
    if (!isDragging) return;
    const offset = clientX - dragStart;
    setDragOffSet(offset);
  };

  const handleEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const threshold = 100;
    if (Math.abs(dragOffSet) > threshold) {
      if (dragOffSet > 0) {
        goToPrevious();
      } else {
        goToNext();
      }
    }
    setDragOffSet(0);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    handleStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    handleEnd();
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    handleStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    e.preventDefault();
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    handleEnd();
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      handleEnd();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      goToPrevious();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      goToNext();
    }
  };

  const handleCardClick = (id: string) => {
    const story = personalStories.find((s) => s.id === id);
    if (story?.href) {
      window.location.href = story.href;
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
                  Hello! I&apos;m Gayan — a software &amp; IT professional with
                  a First-Class Honours Master&apos;s in Information Technology
                  from the University of Waikato. I build and support software
                  across the stack, and I&apos;m just as comfortable working
                  directly with the people who use it — gathering
                  requirements, troubleshooting issues, and writing the
                  documentation that keeps a system running after I&apos;ve
                  moved on.
                </p>
                <p className="text-lg leading-relaxed">
                  When I&apos;m not coding, you&apos;ll find me smashing
                  boundaries on the cricket pitch — a passion rooted in my days
                  as a school cricketer at Royal College Colombo — or lifting
                  weights at the gym to stay sharp. I love good vibes with
                  friends, exploring New Zealand, and chasing the next food
                  adventure (from spicy Sri Lankan curries to sushi to Kiwi
                  classics). Back in Sri Lanka, my furry best friend keeps my
                  family company while I&apos;m here building things.
                </p>
                <p className="text-lg leading-relaxed">
                  For me, coding and life share the same philosophy: find the
                  smartest solution, ship it, and keep improving. Whether
                  that&apos;s a full-stack web application or a weekend plan with
                  mates, I focus on outcomes — drawing inspiration from diverse
                  cultures, travel stories, and a good plate of food.
                </p>
              </div>
            </div>
          </ScrollAnimation>

          {/* Profile Image with Fun Twist */}
          <ScrollAnimation direction="right" duration={0.8} delay={0.4}>
            <div className="lg:col-span-1 flex items-center">
              <div className="relative group w-full">
                <div className="relative">
                  {/* <div className="relative"> */}
                  <button
                    onClick={goToPrevious}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-cyan-900/30 border border-cyan-600/40 rounded-full flex items-center justify-center hover:border-cyan-500/70 hover:bg-cyan-800/40 transition-all duration-300 group"
                    aria-label="Previous image"
                  >
                    <svg
                      className="w-5 h-5 text-cyan-200 group-hover:text-cyan-100 transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={goToNext}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-cyan-900/30 border border-cyan-600/40 rounded-full flex items-center justify-center hover:border-cyan-500/70 hover:bg-cyan-800/40 transition-all duration-300 group"
                    aria-label="Next image"
                  >
                    <svg
                      className="w-5 h-5 text-cyan-200 group-hover:text-cyan-100 transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                  {/* </div> */}
                  <div
                    ref={carouselRef}
                    className="overflow-hidden relative cursor-grab active:cursor-grabbing focus:outline-none focus:ring-2 focus:ring-cyan-500/50 rounded-2xl"
                    tabIndex={0}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseLeave}
                    onKeyDown={handleKeyDown}
                    role="region"
                    aria-label="Profile image carousel"
                  >
                    <div
                      className={`flex transition-transform duration-500 ease-in-out ${
                        isDragging ? "transition-none" : ""
                      }`}
                      style={{
                        transform: isDragging
                          ? `translateX(calc(-${
                              currentIndex * 100
                            }% + ${dragOffSet}px))`
                          : `translateX(-${currentIndex * 100}%)`,
                        userSelect: "none",
                      }}
                    >
                      {images.map((image, index) => (
                        <div key={index} className="w-full flex-shrink-0">
                          <div className="w-full aspect-[5/5] rounded-2xl overflow-hidden transform transition-transform duration-300 group-hover:scale-105 relative bg-slate-800">
                            <Image
                              src={image.src}
                              alt={image.alt}
                              width={400}
                              height={400}
                              className="w-full h-full object-contain"
                            />
                            {/* Fun overlay on hover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                              <p className="text-beige text-sm font-mono">
                                📍 {image.alt}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Carousel Indicators */}
                  <div className="flex justify-center mt-4 space-x-2">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentIndex
                            ? "bg-cyan-500 scale-110"
                            : "bg-cyan-700/50 hover:bg-cyan-600/70"
                        }`}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>
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
              className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${
                showAllStories
                  ? "lg:grid-cols-3"
                  : "lg:grid-cols-2 max-w-2xl mx-auto"
              }`}
              staggerDelay={0.15}
            >
              {(showAllStories
                ? personalStories
                : personalStories.filter((story) => !story.coming)
              ).map((story) => {
                const isClickable = !story.coming && !!story.href;
                return (
                  <div
                    key={story.id}
                    className={`relative p-6 rounded-xl border transition-all duration-300 h-full min-h-[150px] flex flex-col group ${
                      isClickable
                        ? "cursor-pointer hover:border-teal-500/70 hover:bg-teal-800/40 hover:shadow-xl hover:shadow-teal-500/10"
                        : "cursor-default opacity-70"
                    } ${
                      hoveredCard === story.id && isClickable
                        ? "border-teal-500/70 bg-teal-800/50"
                        : "border-teal-600/40 bg-teal-900/30"
                    }`}
                    onMouseEnter={() => isClickable && setHoveredCard(story.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    onClick={() => isClickable && handleCardClick(story.id)}
                  >
                    {story.coming && (
                      <div className="absolute top-2 right-2 bg-slate-700/60 text-slate-400 text-xs px-2 py-1 rounded-full font-mono border border-slate-600/40">
                        Coming Soon
                      </div>
                    )}
                    {!story.coming && (
                      <div className="absolute top-2 right-2 bg-teal-500/10 text-teal-400 text-xs px-2 py-1 rounded-full font-mono border border-teal-500/20">
                        Explore →
                      </div>
                    )}

                    <div className="flex items-start space-x-4 flex-1">
                      <div className={`text-3xl transition-transform duration-300 ${isClickable ? "group-hover:scale-110" : ""}`}>
                        {story.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className={`font-bold mb-2 transition-colors ${isClickable ? "text-teal-100 group-hover:text-teal-200" : "text-slate-400"}`}>
                          {story.title}
                        </h4>
                        <p className={`text-sm leading-relaxed ${isClickable ? "text-teal-200" : "text-slate-500"}`}>
                          {story.description}
                        </p>
                      </div>
                    </div>

                    {isClickable && (
                      <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 to-teal-400/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    )}
                  </div>
                );
              })}
            </StaggeredAnimation>

            {!showAllStories && (
              <div className="text-center mt-8">
                <button
                  onClick={() => setShowAllStories(true)}
                  className="text-teal-300 hover:text-teal-200 font-mono text-sm underline underline-offset-4 transition-colors"
                >
                  Show more life facets
                </button>
              </div>
            )}
          </div>
        </ScrollAnimation>

        {/* Call to Action */}
        <ScrollAnimation direction="up" duration={0.8} delay={0.8}>
          <div className="text-center">
            <p className="text-gray-400 mb-6">
              Click the active cards to explore those parts of my story.
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
