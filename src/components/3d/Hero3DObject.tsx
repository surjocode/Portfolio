"use client";

import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

interface Hero3DObjectProps {
  reducedMotion?: boolean;
}

export default function Hero3DObject({ reducedMotion = false }: Hero3DObjectProps) {
  const outerWireRef = useRef<THREE.Mesh>(null);
  const innerCoreRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  // Generate floating cyber particles
  const particleCount = 70;
  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const col = new Float32Array(particleCount * 3);
    const cyan = new THREE.Color("#00f2fe");
    const purple = new THREE.Color("#a855f7");

    for (let i = 0; i < particleCount; i++) {
      const radius = 2.4 + Math.random() * 1.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = radius * Math.cos(phi);

      const mixedColor = Math.random() > 0.5 ? cyan : purple;
      col[i * 3] = mixedColor.r;
      col[i * 3 + 1] = mixedColor.g;
      col[i * 3 + 2] = mixedColor.b;
    }
    return [pos, col];
  }, [particleCount]);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state, delta) => {
    // If reducedMotion is true, run at a calm pace rather than freezing completely
    const speedMultiplier = reducedMotion ? 0.3 : 1.0;
    // Cap delta at 0.1s to prevent teleporting or large jumps when browser tab wakes up
    const safeDelta = Math.min(delta, 0.1);

    // Responsive mouse tilt tracking on the main group
    if (groupRef.current) {
      const targetX = (state.pointer.y * Math.PI) / 8;
      const targetY = (state.pointer.x * Math.PI) / 6;

      groupRef.current.rotation.x = THREE.MathUtils.damp(
        groupRef.current.rotation.x,
        targetX,
        4,
        safeDelta
      );
      // Continuous ambient rotation on Y
      groupRef.current.rotation.y += safeDelta * 0.2 * speedMultiplier;
    }

    // Outer wireframe continuous rotation
    if (outerWireRef.current) {
      outerWireRef.current.rotation.x += safeDelta * 0.3 * speedMultiplier;
      outerWireRef.current.rotation.y += safeDelta * 0.4 * speedMultiplier;
    }

    // Inner glowing core rotation (counter-rotation for gyroscopic feel)
    if (innerCoreRef.current) {
      innerCoreRef.current.rotation.x -= safeDelta * 0.35 * speedMultiplier;
      innerCoreRef.current.rotation.z += safeDelta * 0.25 * speedMultiplier;
    }

    // Gyroscopic Orbit Rings
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x += safeDelta * 0.2 * speedMultiplier;
      ring1Ref.current.rotation.y += safeDelta * 0.6 * speedMultiplier;
    }

    if (ring2Ref.current) {
      ring2Ref.current.rotation.x -= safeDelta * 0.25 * speedMultiplier;
      ring2Ref.current.rotation.z -= safeDelta * 0.5 * speedMultiplier;
    }

    // Floating particles subtle ambient counter-spin
    if (pointsRef.current) {
      pointsRef.current.rotation.y -= safeDelta * 0.1 * speedMultiplier;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Ambient and multi-colored neon point lights */}
      <ambientLight intensity={0.6} />
      <pointLight position={[6, 6, 6]} color="#00f2fe" intensity={2.5} distance={20} />
      <pointLight position={[-6, -6, -6]} color="#a855f7" intensity={2.5} distance={20} />
      <pointLight position={[0, 4, -4]} color="#ec4899" intensity={1.5} distance={15} />

      <Float speed={reducedMotion ? 0 : 2} rotationIntensity={reducedMotion ? 0 : 0.4} floatIntensity={reducedMotion ? 0 : 0.6}>
        {/* Outer Cyber Polyhedron Wireframe */}
        <mesh ref={outerWireRef}>
          <icosahedronGeometry args={[1.7, 1]} />
          <meshStandardMaterial
            color="#00f2fe"
            emissive="#00f2fe"
            emissiveIntensity={0.6}
            wireframe
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>

        {/* Inner Glowing Crystal Core */}
        <mesh ref={innerCoreRef}>
          <octahedronGeometry args={[1.05, 0]} />
          <meshStandardMaterial
            color="#a855f7"
            emissive="#7e22ce"
            emissiveIntensity={0.8}
            roughness={0.1}
            metalness={0.9}
            wireframe={false}
          />
        </mesh>

        {/* Deep Central Core Sphere */}
        <mesh>
          <sphereGeometry args={[0.6, 24, 24]} />
          <meshStandardMaterial
            color="#050811"
            emissive="#00f2fe"
            emissiveIntensity={0.3}
            roughness={0.1}
            metalness={0.9}
          />
        </mesh>

        {/* Gyroscopic Cyan Orbit Ring */}
        <mesh ref={ring1Ref}>
          <torusGeometry args={[2.3, 0.025, 16, 100]} />
          <meshStandardMaterial
            color="#00f2fe"
            emissive="#00f2fe"
            emissiveIntensity={1.2}
            roughness={0.2}
          />
        </mesh>

        {/* Gyroscopic Purple Orbit Ring */}
        <mesh ref={ring2Ref}>
          <torusGeometry args={[2.0, 0.02, 16, 100]} />
          <meshStandardMaterial
            color="#c084fc"
            emissive="#a855f7"
            emissiveIntensity={1.2}
            roughness={0.2}
          />
        </mesh>

        {/* Floating Cyber Particle Field */}
        <points ref={pointsRef}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={particleCount}
              array={positions}
              itemSize={3}
            />
            <bufferAttribute
              attach="attributes-color"
              count={particleCount}
              array={colors}
              itemSize={3}
            />
          </bufferGeometry>
          <pointsMaterial
            size={0.06}
            vertexColors
            transparent
            opacity={0.85}
            blending={THREE.AdditiveBlending}
            sizeAttenuation
          />
        </points>
      </Float>
    </group>
  );
}
