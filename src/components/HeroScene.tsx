import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { useRef, useMemo, Suspense } from "react";
import * as THREE from "three";

const FloatingHead = ({ mouse }: { mouse: React.MutableRefObject<{ x: number; y: number }> }) => {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y = THREE.MathUtils.lerp(
        meshRef.current.rotation.y,
        mouse.current.x * 0.3,
        0.05
      );
      meshRef.current.rotation.x = THREE.MathUtils.lerp(
        meshRef.current.rotation.x,
        -mouse.current.y * 0.2,
        0.05
      );
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={meshRef} position={[0, 0, 0]} scale={1.8}>
        <Sphere args={[1, 64, 64]}>
          <MeshDistortMaterial
            color="#1a8fff"
            attach="material"
            distort={0.3}
            speed={2}
            roughness={0.2}
            metalness={0.8}
          />
        </Sphere>
      </mesh>
    </Float>
  );
};

const FloatingIcons = () => {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  const icons = useMemo(() => {
    const items = [];
    for (let i = 0; i < 20; i++) {
      const theta = (i / 20) * Math.PI * 2;
      const radius = 2.5 + Math.random() * 1.5;
      const y = (Math.random() - 0.5) * 3;
      items.push({
        pos: [Math.cos(theta) * radius, y, Math.sin(theta) * radius] as [number, number, number],
        scale: 0.05 + Math.random() * 0.1,
        color: ["#1a8fff", "#8b5cf6", "#06d6a0", "#ff6b9d"][Math.floor(Math.random() * 4)],
        speed: 1 + Math.random() * 2,
      });
    }
    return items;
  }, []);

  return (
    <group ref={groupRef}>
      {icons.map((icon, i) => (
        <Float key={i} speed={icon.speed} rotationIntensity={0.5} floatIntensity={1}>
          <mesh position={icon.pos} scale={icon.scale}>
            <octahedronGeometry args={[1, 0]} />
            <meshStandardMaterial
              color={icon.color}
              emissive={icon.color}
              emissiveIntensity={0.5}
              transparent
              opacity={0.8}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
};

const Particles = () => {
  const particlesRef = useRef<THREE.Points>(null!);
  const count = 500;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02;
      particlesRef.current.rotation.x = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#1a8fff" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
};

const HeroScene = ({ mouse }: { mouse: React.MutableRefObject<{ x: number; y: number }> }) => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 6], fov: 60 }} dpr={[1, 2]}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <pointLight position={[5, 5, 5]} intensity={1} color="#1a8fff" />
          <pointLight position={[-5, -3, 3]} intensity={0.5} color="#8b5cf6" />
          <pointLight position={[0, 3, -5]} intensity={0.3} color="#06d6a0" />
          
          <FloatingHead mouse={mouse} />
          <FloatingIcons />
          <Particles />
          <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default HeroScene;
