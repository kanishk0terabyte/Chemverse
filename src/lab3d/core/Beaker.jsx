import { useGLTF } from "@react-three/drei";

export default function Beaker(props) {
  const { scene } = useGLTF("/lab3d/models/Beaker100ml.glb");

 

  scene.scale.set(6, 6, 6);     // BIG SCALE for test
  scene.position.set(0, 2, 0);     // Table top
  return <primitive object={scene} />;
}