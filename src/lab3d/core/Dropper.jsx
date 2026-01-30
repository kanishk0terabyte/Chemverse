import { Cylinder, Sphere } from "@react-three/drei";

export default function Dropper({ x = -2.2, z = 0 }) {
  return (
    <group position={[x, 2, z]} scale={0.4}>
      <Cylinder args={[0.12, 0.12, 2, 16]}>
        <meshStandardMaterial color="#dddddd" metalness={0.2} />
      </Cylinder>

      <Sphere args={[0.22, 16, 16]} position={[0, 1, 0]}>
        <meshStandardMaterial color="red" />
      </Sphere>
    </group>
  );
}