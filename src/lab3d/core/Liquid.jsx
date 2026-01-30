export default function Liquid({ position = [0, 0, 0], level = 0.5, color = 'blue', opacity = 1 }) {
  const height = level * 1; // Max height 1
  return (
    <mesh position={[position[0], position[1] - (1 - height) / 2, position[2]]}>
      <cylinderGeometry args={[0.5, 0.5, height, 32]} />
      <meshStandardMaterial color={color} opacity={opacity} transparent />
    </mesh>
  );
}