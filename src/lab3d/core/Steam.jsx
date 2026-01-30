// src/lab3d/core/Steam.jsx
import { useFrame } from "@react-three/fiber";
import { useMemo } from "react";
import * as THREE from "three";
import { isBoiling } from "./HeatEngine";

export default function Steam() {
  const particles = useMemo(
    () =>
      new Array(80).fill().map(() => ({
        pos: new THREE.Vector3(
          (Math.random() - 0.5) * 0.5,
          0.8,
          (Math.random() - 0.5) * 0.5
        ),
        speed: Math.random() * 0.005 + 0.002,
      })),
    []
  );

  useFrame(() => {
    if (!isBoiling()) return;

    particles.forEach((p) => {
      p.pos.y += p.speed;
      if (p.pos.y > 2) p.pos.y = 0.8;
    });
  });

  if (!isBoiling()) return null;

  return (
    <>
      {particles.map((p, i) => (
        <mesh key={i} position={p.pos}>
          <sphereGeometry args={[0.05, 6, 6]} />
          <meshStandardMaterial
            color="white"
            transparent
            opacity={0.4}
          />
        </mesh>
      ))}
    </>
  );
}