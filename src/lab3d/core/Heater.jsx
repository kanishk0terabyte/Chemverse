// src/lab3d/core/Heater.jsx
export default function Heater({ active }) {
  return (
    <mesh position={[0, -0.25, 0]}>
      <cylinderGeometry args={[0.4, 0.4, 0.1, 32]} />
      <meshStandardMaterial
        color={active ? "orange" : "#444"}
        emissive={active ? "red" : "black"}
      />
    </mesh>
  );
}