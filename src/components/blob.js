import { useState } from "react";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";

export default function Blob(props) {

  return (
    <Sphere visible args={[1, 199, 200]} scale={2}>
      <MeshDistortMaterial 
        color="#7017fc"
        attach="material"
        distort={0.7}
        speed={props.speed}
        roughness={1}
      />
    </Sphere>
  );
}
