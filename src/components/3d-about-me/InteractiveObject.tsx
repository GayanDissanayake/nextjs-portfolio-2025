import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Text, Float, Sparkles } from "@react-three/drei";
import * as THREE from "three";

interface InteractiveObjectProps {
  position: [number, number, number];
  title: string;
  color: string;
  shape: "box" | "sphere" | "cylinder";
  icon: string;
  onClick: () => void;
  isSelected: boolean;
}

export default function InteractiveObject({
  position,
  title,
  color,
  shape,
  icon,
  onClick,
  isSelected,
}: InteractiveObjectProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      // Floating animation
      meshRef.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.1;

      // Rotation when hovered
      if (hovered || isSelected) {
        meshRef.current.rotation.y += 0.02;
        meshRef.current.rotation.x += 0.01;
      }

      // Scale effect
      const targetScale = hovered ? 1.3 : isSelected ? 1.15 : 1;
      meshRef.current.scale.lerp(
        new THREE.Vector3(targetScale, targetScale, targetScale),
        0.1
      );
    }
  });

  const renderShape = () => {
    const props = {
      ref: meshRef,
      onClick,
      onPointerOver: () => setHovered(true),
      onPointerOut: () => setHovered(false),
      castShadow: true,
      receiveShadow: true,
    };

    const material = (
      <meshStandardMaterial
        color={isSelected ? "#fbbf24" : color}
        roughness={0.2}
        metalness={0.3}
        emissive={hovered ? color : "#000000"}
        emissiveIntensity={hovered ? 0.3 : 0}
      />
    );

    switch (shape) {
      case "sphere":
        return (
          <mesh {...props}>
            <sphereGeometry args={[0.6, 20, 20]} />
            {material}
          </mesh>
        );
      case "cylinder":
        return (
          <mesh {...props}>
            <cylinderGeometry args={[0.4, 0.4, 1.2, 12]} />
            {material}
          </mesh>
        );
      default:
        return (
          <mesh {...props}>
            <boxGeometry args={[1, 1, 1]} />
            {material}
          </mesh>
        );
    }
  };

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.4}>
      <group position={position}>
        {renderShape()}

        {/* Icon/Emoji above object */}
        <Text
          position={[0, 1.5, 0]}
          fontSize={0.8}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {icon}
        </Text>

        {/* Title below */}
        <Text
          position={[0, -1.3, 0]}
          fontSize={0.25}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {title}
        </Text>

        {/* Sparkles when selected */}
        {isSelected && (
          <Sparkles count={30} scale={3} size={2} speed={0.5} color="#fbbf24" />
        )}

        {/* Orbiting particles when selected */}
        {isSelected && (
          <group>
            {[...Array(16)].map((_, i) => (
              <mesh
                key={i}
                position={[
                  Math.cos((i / 16) * Math.PI * 2) * 2,
                  Math.sin(Date.now() * 0.002 + i) * 0.5,
                  Math.sin((i / 16) * Math.PI * 2) * 2,
                ]}
              >
                <sphereGeometry args={[0.04]} />
                <meshBasicMaterial color="#fbbf24" />
              </mesh>
            ))}
          </group>
        )}
      </group>
    </Float>
  );
}
