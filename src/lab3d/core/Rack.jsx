export default function Rack({ x = -3, z = 0 }) {
  return (
    <group position={[x, 2, z]} scale={0.5}>
      <mesh>
        <boxGeometry args={[3, 0.2, 1]} />
        <meshStandardMaterial color="#8b5a2b" roughness={0.7} />
      </mesh>
    </group>
  );
}