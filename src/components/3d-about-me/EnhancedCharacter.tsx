import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import * as THREE from "three";

export default function EnhancedCharacter() {
  const characterRef = useRef<THREE.Group>(null);
  const [isWaving, setIsWaving] = useState(false);

  useFrame((state) => {
    if (characterRef.current) {
      // Gentle breathing animation
      characterRef.current.scale.y =
        1 + Math.sin(state.clock.elapsedTime * 2) * 0.02;

      // Random waving
      if (Math.random() < 0.001) {
        setIsWaving(true);
        setTimeout(() => setIsWaving(false), 2000);
      }
    }
  });

  return (
    <group ref={characterRef} position={[0, 0, 0]}>
      {/* Body */}
      <mesh position={[0, 0, 0]} castShadow>
        <cylinderGeometry args={[0.5, 0.35, 1.4, 12]} />
        <meshStandardMaterial color="#3b82f6" roughness={0.3} />
      </mesh>

      {/* Head */}
      <mesh position={[0, 1.1, 0]} castShadow>
        <sphereGeometry args={[0.4, 20, 20]} />
        <meshStandardMaterial color="#fdbcb4" roughness={0.4} />
      </mesh>

      {/* Hair */}
      <mesh position={[0, 1.35, 0]} castShadow>
        <sphereGeometry args={[0.35, 16, 16]} />
        <meshStandardMaterial color="#2d1810" roughness={0.8} />
      </mesh>

      {/* Arms */}
      <mesh
        position={[-0.7, 0.3, 0]}
        rotation={[0, 0, isWaving ? Math.PI / 3 : Math.PI / 6]}
        castShadow
      >
        <cylinderGeometry args={[0.12, 0.12, 0.9, 8]} />
        <meshStandardMaterial color="#fdbcb4" />
      </mesh>
      <mesh position={[0.7, 0.3, 0]} rotation={[0, 0, -Math.PI / 6]} castShadow>
        <cylinderGeometry args={[0.12, 0.12, 0.9, 8]} />
        <meshStandardMaterial color="#fdbcb4" />
      </mesh>

      {/* Legs */}
      <mesh position={[-0.25, -0.9, 0]} castShadow>
        <cylinderGeometry args={[0.15, 0.15, 0.7, 8]} />
        <meshStandardMaterial color="#1f2937" />
      </mesh>
      <mesh position={[0.25, -0.9, 0]} castShadow>
        <cylinderGeometry args={[0.15, 0.15, 0.7, 8]} />
        <meshStandardMaterial color="#1f2937" />
      </mesh>

      {/* Face */}
      <Text
        position={[0, 1.1, 0.4]}
        fontSize={0.18}
        color="black"
        anchorX="center"
        anchorY="middle"
      >
        😊
      </Text>

      {/* Cricket bat (when sports is selected) */}
      <mesh position={[1.2, 0.5, 0]} rotation={[0, 0, Math.PI / 4]} castShadow>
        <cylinderGeometry args={[0.02, 0.02, 1.2, 8]} />
        <meshStandardMaterial color="#8b4513" />
      </mesh>
      <mesh position={[1.35, 0.8, 0]} castShadow>
        <boxGeometry args={[0.1, 0.4, 0.05]} />
        <meshStandardMaterial color="#ddd" />
      </mesh>
    </group>
  );
}
