import { useRef } from 'react';
import { SpotLight } from '@react-three/drei';

export default function LightBeam({ position = [2, 2, 2], target = [0, 1, 0], on = false }) {
  const lightRef = useRef();
  if (!on) return null;

  return (
    <>
      <SpotLight
        ref={lightRef}
        position={position}
        angle={Math.PI / 6}
        penumbra={0.5}
        intensity={2}
        castShadow
      />
      <primitive object={lightRef.current?.target} position={target} />
    </>
  );
}