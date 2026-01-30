import { Cylinder, Cone } from "@react-three/drei";

export default function Burner({ x = 0, z = 3.8 }) {
  return (
    <group position={[x, 2, z]} scale={0.45}>
      <Cylinder args={[0.3, 0.3, 0.6, 24]}>
        <meshStandardMaterial color="#444" metalness={0.6} roughness={0.4} />
      </Cylinder>
      <Cone args={[0.22, 0.45, 24]} position={[0, 0.55, 0]}>
        <meshStandardMaterial color="#555" metalness={0.3} />
      </Cone>
    </group>
  );
}