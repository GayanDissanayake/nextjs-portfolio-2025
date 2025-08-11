"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Text,
  OrbitControls,
  Environment,
  Stars,
  Sparkles,
} from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
import * as THREE from "three";

interface FloatingElementProps {
  position: [number, number, number];
  color: string;
  content: string;
  type: "skill" | "project" | "experience";
  onClick: () => void;
  isSelected: boolean;
}

function FloatingElement({
  position,
  color,
  content,
  type,
  onClick,
  isSelected,
}: FloatingElementProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      // Mouse-responsive floating
      const mouse = state.mouse;
      meshRef.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.2;
      meshRef.current.position.x = position[0] + mouse.x * 0.5;
      meshRef.current.position.z = position[2] + mouse.y * 0.5;

      // Rotation
      if (hovered || isSelected) {
        meshRef.current.rotation.y += 0.02;
        meshRef.current.rotation.x += 0.01;
      }

      // Scale and color changes
      const targetScale = hovered ? 1.3 : isSelected ? 1.2 : 1;
      meshRef.current.scale.lerp(
        new THREE.Vector3(targetScale, targetScale, targetScale),
        0.1
      );
    }
  });

  const getShape = () => {
    switch (type) {
      case "skill":
        return <boxGeometry args={[0.8, 0.8, 0.8]} />;
      case "project":
        return <sphereGeometry args={[0.5, 16, 16]} />;
      case "experience":
        return <cylinderGeometry args={[0.4, 0.4, 0.8, 8]} />;
      default:
        return <boxGeometry args={[0.8, 0.8, 0.8]} />;
    }
  };

  return (
    <group position={position}>
      <mesh
        ref={meshRef}
        onClick={onClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        castShadow
        receiveShadow
      >
        {getShape()}
        <meshStandardMaterial
          color={isSelected ? "#fbbf24" : color}
          roughness={0.3}
          metalness={0.2}
          emissive={hovered ? color : "#000000"}
          emissiveIntensity={hovered ? 0.3 : 0}
        />
      </mesh>

      {/* Content label */}
      <Text
        position={[0, 1.2, 0]}
        fontSize={0.25}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {content}
      </Text>

      {/* Glowing effect when selected */}
      {isSelected && (
        <>
          <Sparkles count={20} scale={2} size={1} speed={0.5} color={color} />
          {/* Orbiting particles */}
          <group>
            {[...Array(8)].map((_, i) => (
              <mesh
                key={i}
                position={[
                  Math.cos((i / 8) * Math.PI * 2) * 1.2,
                  Math.sin(Date.now() * 0.003 + i) * 0.3,
                  Math.sin((i / 8) * Math.PI * 2) * 1.2,
                ]}
              >
                <sphereGeometry args={[0.03]} />
                <meshBasicMaterial color={color} />
              </mesh>
            ))}
          </group>
        </>
      )}
    </group>
  );
}

function InteractiveCamera() {
  const { camera } = useThree();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame(() => {
    // Smooth camera movement based on mouse
    camera.position.x += (mousePosition.x * 2 - camera.position.x) * 0.02;
    camera.position.y += (mousePosition.y * 2 - camera.position.y) * 0.02;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

function ParticleField() {
  const particlesRef = useRef<THREE.Points>(null);

  useFrame(() => {
    if (particlesRef.current) {
      particlesRef.current.rotation.x += 0.0005;
      particlesRef.current.rotation.y += 0.001;
    }
  });

  const particleCount = 200;
  const positions = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
  }

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#60a5fa"
        transparent
        opacity={0.6}
        sizeAttenuation={true}
      />
    </points>
  );
}

const portfolioData = [
  {
    id: "react",
    content: "React",
    type: "skill" as const,
    color: "#61dafb",
    position: [2, 1, 0] as [number, number, number],
    description: "Modern frontend development with React and hooks",
  },
  {
    id: "portfolio",
    content: "Portfolio",
    type: "project" as const,
    color: "#f59e0b",
    position: [-2, 1, 2] as [number, number, number],
    description: "This interactive 3D portfolio website",
  },
  {
    id: "startup",
    content: "Startup",
    type: "experience" as const,
    color: "#10b981",
    position: [0, 2, -2] as [number, number, number],
    description: "Built scalable solutions at tech startup",
  },
  {
    id: "python",
    content: "Python",
    type: "skill" as const,
    color: "#3776ab",
    position: [3, 0, 1] as [number, number, number],
    description: "Backend development and data analysis",
  },
  {
    id: "mobile-app",
    content: "Mobile App",
    type: "project" as const,
    color: "#ec4899",
    position: [-3, 0, -1] as [number, number, number],
    description: "Cross-platform mobile application",
  },
  {
    id: "consulting",
    content: "Consulting",
    type: "experience" as const,
    color: "#8b5cf6",
    position: [1, -1, 3] as [number, number, number],
    description: "Technical consulting for various clients",
  },
];

export default function SimpleImmersiveScene() {
  const [selectedElement, setSelectedElement] = useState<string | null>(null);

  const handleElementClick = (id: string) => {
    setSelectedElement(selectedElement === id ? null : id);
  };

  const selectedData = portfolioData.find(
    (item) => item.id === selectedElement
  );

  return (
    <div className="h-screen w-full bg-gradient-to-b from-black via-gray-900 to-blue-900 relative overflow-hidden">
      {/* UI Overlay */}
      <div className="absolute top-6 left-6 z-10 text-white max-w-sm">
        <h1 className="text-3xl font-bold mb-3 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Immersive Portfolio
        </h1>
        <p className="text-gray-300 text-sm mb-3">
          Move your mouse around to explore the 3D space. Click elements to
          learn more!
        </p>

        {selectedData && (
          <div className="bg-black/80 backdrop-blur-sm rounded-xl p-4 mt-4 border border-white/20 shadow-lg">
            <h3 className="text-lg font-semibold text-yellow-400 mb-2 capitalize">
              {selectedData.content}
              <span className="text-xs text-gray-400 ml-2">
                ({selectedData.type})
              </span>
            </h3>
            <p className="text-gray-300 text-sm mb-3">
              {selectedData.description}
            </p>

            <button
              className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white px-3 py-2 rounded-lg text-sm transition-all transform hover:scale-105"
              onClick={() => {
                console.log(`Explore ${selectedData.content}`);
              }}
            >
              Explore Details →
            </button>
          </div>
        )}
      </div>

      {/* Mouse Indicator */}
      <div className="absolute top-6 right-6 z-10 text-white text-xs bg-black/40 backdrop-blur-sm rounded-lg p-3 border border-white/10">
        <div className="space-y-1">
          <div>🖱️ Move mouse to control camera</div>
          <div>🎯 Click elements to interact</div>
          <div>🔍 Scroll to zoom</div>
          <div>✨ Watch particles respond</div>
        </div>
      </div>

      {/* Three.js Canvas */}
      <Canvas
        camera={{ position: [5, 3, 5], fov: 75 }}
        style={{ background: "transparent" }}
      >
        {/* Dynamic Lighting */}
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.8} color="#60a5fa" />
        <pointLight
          position={[-10, -10, -10]}
          intensity={0.6}
          color="#ec4899"
        />
        <spotLight
          position={[0, 10, 0]}
          angle={0.3}
          penumbra={1}
          intensity={0.5}
          color="#fbbf24"
          castShadow
        />

        {/* Environment */}
        <Environment preset="night" />
        <Stars
          radius={100}
          depth={50}
          count={1000}
          factor={4}
          saturation={0}
          fade
        />

        {/* Particle field */}
        <ParticleField />

        {/* Interactive elements */}
        {portfolioData.map((item) => (
          <FloatingElement
            key={item.id}
            position={item.position}
            color={item.color}
            content={item.content}
            type={item.type}
            onClick={() => handleElementClick(item.id)}
            isSelected={selectedElement === item.id}
          />
        ))}

        {/* Interactive camera */}
        <InteractiveCamera />

        {/* Orbit controls as backup */}
        <OrbitControls
          enablePan={false}
          enableZoom={true}
          enableRotate={true}
          minDistance={3}
          maxDistance={20}
          enableDamping={true}
          dampingFactor={0.05}
        />
      </Canvas>
    </div>
  );
}
