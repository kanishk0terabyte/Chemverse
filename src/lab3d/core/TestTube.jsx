import { Cylinder } from "@react-three/drei";

export default function TestTube({ x = -1.4, z = 0 }) {
  return (
    <group position={[x, 2, z]} scale={0.4}>
      <Cylinder args={[0.22, 0.22, 2, 32]}>
        <meshPhysicalMaterial
          transparent
          opacity={0.4}
          transmission={0.9}
          color="#e8f9ff"
        />
      </Cylinder>
    </group>
  );
}