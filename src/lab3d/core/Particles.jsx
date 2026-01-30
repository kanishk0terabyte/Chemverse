import { useMemo } from 'react';
import { Points, PointMaterial } from '@react-three/drei';

export default function Particles({ count = 100, type = 'true', position = [0, 0, 0] }) {
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 1;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 1;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 1;
    }
    return pos;
  }, [count]);

  // Visibility based on type: true solution invisible, colloid visible, suspension settle
  const visible = type !== 'true';
  const size = type === 'suspension' ? 0.02 : 0.01;

  return visible ? (
    <Points positions={positions} position={position}>
      <PointMaterial transparent color="white" size={size} sizeAttenuation depthWrite={false} />
    </Points>
  ) : null;
}