export default function LightSource() {
  return (
    <pointLight
      position={[0, 6, 2]}
      intensity={0.5}
      castShadow
    />
  );
}