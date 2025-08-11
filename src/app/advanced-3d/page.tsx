import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Advanced 3D Showcase | Gayan Dissanayake",
  description:
    "Explore advanced 3D implementations using Three.js and React Three Fiber",
};

export default function Advanced3DShowcase() {
  const showcases = [
    {
      title: "Enhanced 3D About Me",
      description:
        "Immersive personal 3D scene with detailed character, animated pet, cricket bat, and interactive story objects with enhanced animations and effects.",
      path: "/enhanced-3d-about-me",
      tech: "Three.js + Advanced Animations + Sparkles",
      features: [
        "👤 Detailed 3D Character with animations",
        "🐕 Interactive pet with tail wagging",
        "🏏 Cricket bat and personal items",
        "✨ Sparkle effects and particles",
        "🎯 Enhanced object interactions",
      ],
      preview: "enhanced-about-me",
      complexity: "Expert",
    },
    {
      title: "Mouse-Responsive Scene",
      description:
        "Mouse-responsive 3D environment with dynamic lighting, floating elements, and real-time camera interactions.",
      path: "/3d-immersive-scene",
      tech: "Three.js + Mouse Tracking + Particles",
      features: [
        "🖱️ Mouse-responsive camera",
        "✨ Dynamic particle effects",
        "🎨 Color-changing elements",
        "🌟 Real-time lighting",
        "🔮 Glowing hover effects",
      ],
      preview: "immersive-scene",
      complexity: "Advanced",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 py-12 px-4">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Advanced 3D Showcase
        </h1>
        <p className="text-gray-300 text-xl mb-8 max-w-3xl mx-auto">
          Explore cutting-edge 3D implementations featuring personal
          storytelling and advanced interaction patterns. Built with Three.js,
          React Three Fiber, and creative 3D modeling.
        </p>

        <div className="flex justify-center space-x-4 mb-8">
          <div className="bg-blue-600/20 border border-blue-400/30 rounded-lg px-4 py-2">
            <span className="text-blue-300 text-sm font-medium">
              Three.js Powered
            </span>
          </div>
          <div className="bg-purple-600/20 border border-purple-400/30 rounded-lg px-4 py-2">
            <span className="text-purple-300 text-sm font-medium">
              Interactive
            </span>
          </div>
          <div className="bg-pink-600/20 border border-pink-400/30 rounded-lg px-4 py-2">
            <span className="text-pink-300 text-sm font-medium">Immersive</span>
          </div>
        </div>
      </div>

      {/* Showcase Grid */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {showcases.map((showcase) => (
            <div
              key={showcase.title}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-600/30 hover:border-gray-400/50 transition-all duration-300 overflow-hidden group"
            >
              {/* Preview Area */}
              <div className="h-48 bg-gradient-to-br from-gray-700 to-gray-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                  <div className="flex items-center justify-center h-full">
                    <div className="text-6xl opacity-50 group-hover:opacity-70 transition-opacity">
                      {showcase.preview === "enhanced-about-me" ? "🌟" : "✨"}
                    </div>
                  </div>
                </div>

                {/* Complexity Badge */}
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      showcase.complexity === "Expert"
                        ? "bg-red-600/80 text-red-100"
                        : "bg-blue-600/80 text-blue-100"
                    }`}
                  >
                    {showcase.complexity}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {showcase.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {showcase.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-4">
                  <div className="text-xs text-gray-400 mb-2">
                    Technology Stack:
                  </div>
                  <code className="bg-gray-900/50 text-green-400 text-xs px-2 py-1 rounded">
                    {showcase.tech}
                  </code>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <div className="text-xs text-gray-400 mb-2">
                    Key Features:
                  </div>
                  <div className="space-y-1">
                    {showcase.features.slice(0, 3).map((feature, idx) => (
                      <div
                        key={idx}
                        className="text-xs text-gray-300 flex items-center"
                      >
                        <span className="mr-2">{feature.split(" ")[0]}</span>
                        <span>{feature.split(" ").slice(1).join(" ")}</span>
                      </div>
                    ))}
                    {showcase.features.length > 3 && (
                      <div className="text-xs text-gray-400">
                        +{showcase.features.length - 3} more features
                      </div>
                    )}
                  </div>
                </div>

                {/* Action Button */}
                <Link
                  href={showcase.path}
                  className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-center py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
                >
                  Experience Demo
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Implementation Guide */}
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-600/30 p-8">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Implementation Highlights
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Visual Excellence
              </h3>
              <p className="text-gray-300 text-sm">
                Advanced materials, lighting, and particle systems create
                stunning visual experiences that rival professional 3D
                applications.
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Performance Optimized
              </h3>
              <p className="text-gray-300 text-sm">
                Efficient rendering, proper cleanup, and optimized geometries
                ensure smooth 60fps performance across devices.
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Interactive Design
              </h3>
              <p className="text-gray-300 text-sm">
                Mouse tracking, click events, hover effects create engaging user
                experiences.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm mb-4">
              All implementations use modern React patterns with TypeScript for
              type safety
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <code className="bg-gray-900/50 text-blue-400 text-xs px-2 py-1 rounded">
                @react-three/fiber
              </code>
              <code className="bg-gray-900/50 text-green-400 text-xs px-2 py-1 rounded">
                @react-three/drei
              </code>
              <code className="bg-gray-900/50 text-yellow-400 text-xs px-2 py-1 rounded">
                three.js
              </code>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="text-center mt-12">
          <Link
            href="/"
            className="inline-flex items-center bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-colors"
          >
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
}
