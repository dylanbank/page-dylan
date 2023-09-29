import { useRef, useState, useEffect } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { Sphere, MeshDistortMaterial, Plane} from "@react-three/drei";

export default function SkillSheet({ image, ...props}) {
  const [ texture , setTexture] = useState(null)

  useEffect(()=>{
    setTexture(useLoader(TextureLoader, image));
  }, props.image)
  return (
    <>
      <mesh
        position={[0,0,2]}
      >
        <Plane args={[2,2]} visible>
          <MeshDistortMaterial attach="material" map={texture===null ? null : texture} color={"#ffffff"} roughness={0.6} distort={0}/>
        </Plane>
      </mesh>
      <mesh
        {...props}
      >
        <Sphere visible args={[1, 100, 200]}>
          <MeshDistortMaterial 
            color="#7017fc"
            attach="material"
            distort={0.7}
            speed={1}
            roughness={1}
          />
        </Sphere>
      </mesh>
    </>
  )
}
