import { useState } from "react";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";

export default function Cube() {
  const [ distort, setDistort ] = useState(0.3);
  
  function pointerMove(){
    setDistort(0.6);
  }

  function pointerOut(){
    setDistort(0.5);
  }
  return (
    <Sphere visible args={[1, 199, 200]} scale={2} onPointerEnter={pointerMove} onPointerLeave={pointerOut}>
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
