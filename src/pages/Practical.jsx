import LabScene from "../lab3d/core/LabScene";
import Beaker from "../lab3d/core/Beaker";
import Flask from "../lab3d/core/Flask";
import TestTube from "../lab3d/core/TestTube";
import Rack from "../lab3d/core/Rack";
import Burner from "../lab3d/core/Burner";
import Dropper from "../lab3d/core/Dropper";
import Rod from "../lab3d/core/Rod";

export default function Practical() {
  return (
    <div className="h-screen">
      <LabScene>
        <Beaker position={[-2,2,1]} scale={1.0} />
        <Flask position={[0,2,1]} />
        <TestTube position={[2,2,1]} />
        <Rack position={[-2,2,-1]} />
        <Burner position={[0,2,-1]} />
        <Dropper position={[2,2,-1]} />
        <Rod position={[0,2,0]} />
      </LabScene>
    </div>
  );
}