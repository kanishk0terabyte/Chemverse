import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";

export default function LabScene({ children }) {
  const TABLE = { W: 10, H: 0.3, D: 6 };

  return (
    <Canvas
      shadows
      camera={{
        position: [0, 6, 9],    // Fixed camera angle
        fov: 45
      }}
      style={{ background: "#e7ecf1" }}
    >
      {/* ===== LIGHTING ===== */}
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[6, 10, 6]}
        intensity={0.8}
        castShadow
      />

      <Environment preset="city" />

      {/* ===== FLOOR ===== */}
      <mesh position={[0, -1.5, 0]} receiveShadow>
        <boxGeometry args={[20, 0.1, 20]} />
        <meshStandardMaterial color="grey" roughness={0.9} />
      </mesh>

      {/* ===== WALLS ===== */}
      <mesh position={[0, 3, -7]}>
        <planeGeometry args={[20, 8]} />
        <meshStandardMaterial color="skyblue" />
      </mesh>

      <mesh position={[-7, 3, 0]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[20, 8]} />
        <meshStandardMaterial color="skyblue" />
      </mesh>

      <mesh position={[7, 3, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <planeGeometry args={[20, 8]} />
        <meshStandardMaterial color="skyblue" />
      </mesh>

      <mesh position={[0, 7, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#f0f2f5" />
      </mesh>

      {/* ===== TABLE ===== */}
      <mesh position={[0, 0.9, 0]} castShadow>
        <boxGeometry args={[TABLE.W, TABLE.H, TABLE.D]} />
        <meshStandardMaterial color="#b58963" roughness={0.55} />
      </mesh>

      {/* TABLE LEGS */}
      {[
        [-TABLE.W / 2 + 0.4, -1, -TABLE.D / 2 + 0.4],
        [TABLE.W / 2 - 0.4, -1, -TABLE.D / 2 + 0.4],
        [-TABLE.W / 2 + 0.4, -1, TABLE.D / 2 - 0.4],
        [TABLE.W / 2 - 0.4, -1, TABLE.D / 2 - 0.4],
      ].map((pos, idx) => (
        <mesh key={idx} position={pos}>
          <boxGeometry args={[0.5, 4, 0.5]} />
          <meshStandardMaterial color="#b58963" roughness={0.65} />
        </mesh>
      ))}

      {/* ===== EXPERIMENT OBJECTS ===== */}
    {children}
    </Canvas>
  );
}