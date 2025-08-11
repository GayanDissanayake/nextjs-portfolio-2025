import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Sparkles } from "@react-three/drei";
import EnhancedCharacter from "./EnhancedCharacter";
import EnhancedPetDog from "./EnhancedPetDog";
import InteractiveObject from "./InteractiveObject";
import { enhancedAboutMeData } from "./aboutMeData";

interface SceneProps {
  selectedObject: string | null;
  onObjectClick: (id: string) => void;
}

export default function Scene({ selectedObject, onObjectClick }: SceneProps) {
  return (
    <Canvas
      camera={{ position: [7, 5, 7], fov: 60 }}
      shadows
      style={{ background: "transparent" }}
    >
      {/* Enhanced Lighting */}
      <ambientLight intensity={0.3} />
      <directionalLight
        position={[10, 15, 5]}
        intensity={1.2}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={50}
        shadow-camera-left={-20}
        shadow-camera-right={20}
        shadow-camera-top={20}
        shadow-camera-bottom={-20}
      />
      <pointLight position={[-10, 5, -5]} intensity={0.6} color="#4ade80" />
      <pointLight position={[10, 5, 5]} intensity={0.4} color="#f59e0b" />

      {/* Environment */}
      <Environment preset="city" />

      {/* Enhanced Ground */}
      <mesh
        position={[0, -1.8, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        receiveShadow
      >
        <circleGeometry args={[15, 32]} />
        <meshStandardMaterial color="#1e293b" roughness={0.8} metalness={0.1} />
      </mesh>

      {/* Ambient particles */}
      <Sparkles
        count={50}
        scale={10}
        size={1}
        speed={0.2}
        color="#60a5fa"
        opacity={0.3}
      />

      {/* Main character (me) */}
      <EnhancedCharacter />

      {/* Pet dog */}
      <EnhancedPetDog />

      {/* Interactive objects */}
      {enhancedAboutMeData.map((item) => (
        <InteractiveObject
          key={item.id}
          position={item.position}
          title={item.title}
          color={item.color}
          shape={item.shape}
          icon={item.icon}
          onClick={() => onObjectClick(item.id)}
          isSelected={selectedObject === item.id}
        />
      ))}

      {/* Enhanced Orbit Controls */}
      <OrbitControls
        enablePan={false}
        enableZoom={true}
        enableRotate={true}
        minDistance={4}
        maxDistance={20}
        maxPolarAngle={Math.PI / 2.2}
        minPolarAngle={Math.PI / 6}
        target={[0, 0, 0]}
        autoRotate={false}
        enableDamping={true}
        dampingFactor={0.05}
      />
    </Canvas>
  );
}
