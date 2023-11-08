import { Sphere, MeshDistortMaterial } from "@react-three/drei";
import { useState, useEffect } from "react";
export default function SkillBlob(){

  const [ ratio, setRatio ] = useState(window.innerWidth/1080)
  const isMobile = window.innerWidth < 750;

  useEffect(()=>{
    function handleResize(){
      setRatio(window.innerWidth/1080)
    }

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [])

  return(
      <mesh
      position={[0, 0, 0]} 
      scale={1.5*ratio}
    >
      <Sphere visible args={[1, 100, 200]}>
        <MeshDistortMaterial 
          color="#7017fc"
          attach="material"
          distort={0.5}
          speed={0.7}
          roughness={1}
        />
      </Sphere>
    </mesh>

  );
}