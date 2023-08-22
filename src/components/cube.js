import { useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";

export default function Cube() {
  const [ distort, setDistort ] = useState(0.2);

  
  function pointerMove(){
    if(distort+0.2<1){
      setDistort(distort+0.1)
    }
  }

  return (
    <Sphere visible args={[1, 199, 200]} scale={2} onWheel={pointerMove}>
      <MeshDistortMaterial 
        color="#7017fc"
        attach="material"
        distort={distort}
        speed={1}
        roughness={1}
      />
    </Sphere>
  );
}
