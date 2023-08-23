import { useState } from "react";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";

export default function Blob() {
  const [ distort, setDistort ] = useState(0.3);
  
  function pointerIn(){
    setDistort(0.65);
  }

  function pointerOut(){
    setDistort(0.5);
  }
  return (
    <Sphere visible args={[1, 199, 200]} scale={2} onPointerEnter={pointerIn} onPointerLeave={pointerOut}>
      <MeshDistortMaterial 
        color="#7017fc"
        attach="material"
        distort={distort}
        speed={0.6}
        roughness={1}
      />
    </Sphere>
  );
}
