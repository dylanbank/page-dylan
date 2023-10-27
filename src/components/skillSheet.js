import { useRef, useState, useEffect } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { Sphere, MeshDistortMaterial, Plane} from "@react-three/drei";
import JS from "../assets/jsLogo.png";
import PY from "../assets/pythonLogo.png"
import CPP from "../assets/cppLogo.png"
import SQL from "../assets/mysqlLogo.png"
import CSS from "../assets/cssLogo.png";
import HTML from "../assets/htmlLogo.png";
import REST from "../assets/restLogo.png";
import AWS from "../assets/awsLogo.png";
import REACT from "../assets/reactLogo.png";
import NODE from "../assets/nodeLogo.png";
import THREE from "../assets/threeLogo.png";
import NEXT from "../assets/nextLogo.png";

export default function SkillSheet({ ...props}) {
  const [ texture , setTexture] = useState(useLoader(TextureLoader, JS))
  //setTexture(useLoader(TextureLoader, JS));
  return (
    <>
      <mesh
        position={[0,0,3]}
        scale={0.5}
      >
        <Plane args={[2,2]} visible>
          <MeshDistortMaterial attach="material" map={texture===null ? null : texture} color={"#ffffff"} roughness={0.6} distort={0}/>
        </Plane>
      </mesh>
      <mesh
        position={[0, 0, 0]} 
        scale={1.8}
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
