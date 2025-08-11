import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import * as THREE from "three";

export default function EnhancedPetDog() {
  const dogRef = useRef<THREE.Group>(null);
  const tailRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (dogRef.current) {
      // Dog looking around
      dogRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
    }

    if (tailRef.current) {
      // Enthusiastic tail wagging
      tailRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 8) * 0.5;
    }
  });

  return (
    <group ref={dogRef} position={[2.5, -0.4, 1.5]}>
      {/* Body */}
      <mesh position={[0, 0, 0]} castShadow>
        <boxGeometry args={[1, 0.5, 0.5]} />
        <meshStandardMaterial color="#8b4513" roughness={0.6} />
      </mesh>

      {/* Head */}
      <mesh position={[0.6, 0.15, 0]} castShadow>
        <boxGeometry args={[0.4, 0.4, 0.4]} />
        <meshStandardMaterial color="#8b4513" />
      </mesh>

      {/* Ears */}
      <mesh position={[0.5, 0.4, -0.15]} rotation={[0.3, 0, -0.3]} castShadow>
        <boxGeometry args={[0.15, 0.3, 0.05]} />
        <meshStandardMaterial color="#654321" />
      </mesh>
      <mesh position={[0.5, 0.4, 0.15]} rotation={[-0.3, 0, -0.3]} castShadow>
        <boxGeometry args={[0.15, 0.3, 0.05]} />
        <meshStandardMaterial color="#654321" />
      </mesh>

      {/* Legs */}
      {[-0.35, -0.15, 0.05, 0.25].map((x, i) => (
        <mesh key={i} position={[x, -0.35, 0]} castShadow>
          <cylinderGeometry args={[0.06, 0.06, 0.3, 8]} />
          <meshStandardMaterial color="#654321" />
        </mesh>
      ))}

      {/* Tail */}
      <mesh
        ref={tailRef}
        position={[-0.6, 0.15, 0]}
        rotation={[0, 0, Math.PI / 4]}
        castShadow
      >
        <cylinderGeometry args={[0.04, 0.04, 0.4, 8]} />
        <meshStandardMaterial color="#8b4513" />
      </mesh>

      {/* Eyes */}
      <Text
        position={[0.75, 0.2, 0]}
        fontSize={0.1}
        color="black"
        anchorX="center"
        anchorY="middle"
      >
        👀
      </Text>
    </group>
  );
}
