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
  const [ selectedTexture , setSelectedTexture] = useState(null)
  useEffect(()=> {
    setSelectedTexture(texture[props.selected]);
    console.log(props.selected)
    console.log(selectedTexture)
  }, [props.selected])
  const dwa = useLoader(TextureLoader, JS);
  const texture = {
      JS: useLoader(TextureLoader, JS),
      PY: useLoader(TextureLoader, PY),
      CPP: useLoader(TextureLoader, CPP),
      SQL: useLoader(TextureLoader, SQL),
      CSS: useLoader(TextureLoader, CSS),
      HTML: useLoader(TextureLoader, HTML),
      REST: useLoader(TextureLoader, REST),
      AWS: useLoader(TextureLoader, AWS),
      REACT: useLoader(TextureLoader, REACT),
      NODE: useLoader(TextureLoader, NODE),
      THREE: useLoader(TextureLoader, THREE),
      NEXT: useLoader(TextureLoader, NEXT),
  };
  return (
    <>
      <mesh
        position={[0,0,2.5]}
        scale={0.6}
      >
        { selectedTexture && 
          <Plane args={[2,2]} visible>
            <MeshDistortMaterial attach="material" map={selectedTexture} color={"#ffffff"} roughness={0.6} distort={0}/>
          </Plane>
        }
      </mesh>
      
      <mesh
        position={[0, 0, 0]} 
        scale={1.7}
      >
        <Sphere visible args={[1, 100, 200]}>
          <MeshDistortMaterial 
            color="#7017fc"
            attach="material"
            distort={0.7}
            speed={0.7}
            roughness={1}
          />
        </Sphere>
      </mesh>
    </>
  )
}
