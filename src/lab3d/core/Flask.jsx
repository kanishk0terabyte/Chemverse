import { Sphere, Cylinder } from "@react-three/drei";

export default function Flask({ x = 1.4, z = 0 }) {
  return (
    <group position={[x, 2, z]} scale={0.4}>
      <Sphere args={[0.7, 32, 32]} position={[0, 0.25, 0]}>
        <meshPhysicalMaterial
          color="#d9f2ff"
          transparent
          opacity={0.45}
          transmission={0.9}
        />
      </Sphere>
      <Cylinder args={[0.25, 0.25, 1.1, 32]} position={[0, 1, 0]}>
        <meshPhysicalMaterial
          color="#d9f2ff"
          transparent
          opacity={0.45}
          transmission={0.9}
        />
      </Cylinder>
    </group>
  );
}