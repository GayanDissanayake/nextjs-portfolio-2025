import Image from "next/image";
import { useState } from "react";

const personalStories = [
  {
    id: "travel-map",
    title: "🗺️ My Interactive Travel Map",
    description: "Places I've been, dreams I'm chasing",
    icon: "🌍",
    coming: false,
  },
  {
    id: "education",
    title: "🎓 School & Learning Journey",
    description: "From curious student to lifelong learner",
    icon: "📚",
    coming: true,
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
    if (id === "travel-map") {
      // Navigate to the travel map page in the same tab
      window.location.href = "/travel-map";
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
      className="min-h-screen flex items-center px-4 lg:px-8 pt-5 pb-20"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <div className="flex items-center mb-16">
          <span className="text-beige-accent font-mono text-lg mr-4">01.</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-beige text-shimmer">
            About Me - The Human Side
          </h2>
          <div className="flex-1 h-px bg-gray-600 ml-4 lg:ml-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Personal Story */}
          <div className="space-y-6">
            <div className="text-gray-300 space-y-4">
              <p className="text-lg leading-relaxed">
                Hello! I&apos;m Gayan - not just a developer, but a curious soul
                who believes that the best code comes from understanding people,
                places, and experiences beyond the screen.
              </p>
              <p className="text-lg leading-relaxed">
                When I&apos;m not crafting digital experiences, you&apos;ll find
                me exploring new places (ask me about my travel stories!),
                experimenting in the kitchen, or spending quality time with my
                furry coding companion who&apos;s always ready to
                &quot;debug&quot; my work with enthusiastic tail wags.
              </p>
              <p className="text-lg leading-relaxed">
                I believe that great technology should tell human stories. Every
                project I work on is influenced by the diverse experiences
                I&apos;ve collected - from different cultures I&apos;ve
                encountered to the simple joy of a perfectly brewed cup of
                coffee during a late-night coding session.
              </p>
            </div>
          </div>

          {/* Profile Image with Fun Twist */}
          <div className="lg:col-span-1">
            <div className="relative group max-w-sm mx-auto lg:mx-0">
              <div className="relative">
                <div className="w-80 h-80 rounded-2xl overflow-hidden transform transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src="/images/profile/beach.jpeg"
                    alt="Gayan Dissanayake - The person behind the code"
                    width={320}
                    height={320}
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
        </div>

        {/* Interactive Story Cards */}
        <div className="mb-8">
          <h3 className="text-xl md:text-2xl font-bold text-beige mb-8 text-center">
            Explore Different Facets of My Life
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {personalStories.map((story) => (
              <div
                key={story.id}
                className={`relative p-6 rounded-xl border transition-all duration-300 cursor-pointer group safe-hover ${
                  hoveredCard === story.id
                    ? "border-beige-accent bg-navy-light/80 shadow-xl shadow-beige-accent/20"
                    : "border-gray-700 bg-navy-light/50 hover:border-beige-accent/50 hover:bg-navy-light/70"
                }`}
                onMouseEnter={() => setHoveredCard(story.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => handleCardClick(story.id)}
              >
                {/* Coming Soon Badge */}
                {story.coming && (
                  <div className="absolute top-2 right-2 bg-beige-accent text-navy text-xs px-2 py-1 rounded-full font-mono">
                    Coming Soon
                  </div>
                )}

                <div className="flex items-start space-x-4">
                  <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                    {story.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-beige mb-2 group-hover:text-beige-accent transition-colors">
                      {story.title}
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {story.description}
                    </p>
                  </div>
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-beige-accent/5 to-green-400/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-gray-400 mb-6">
            Want to know more about any of these? Click the cards above, or
            let&apos;s chat about it in an interview!
          </p>
          <div className="inline-flex items-center space-x-2 text-beige-accent font-mono text-sm">
            <span>💡</span>
            <span>
              Pro tip: Each section will be interactive and tell a unique story
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
