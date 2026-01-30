export default function Rod({ x = 2.2, z = 0 }) {
  return (
    <mesh position={[x, 2, z]} scale={[0.1, 2, 0.1]}>
      <boxGeometry />
      <meshStandardMaterial color="#888" metalness={0.4} />
    </mesh>
  );
}