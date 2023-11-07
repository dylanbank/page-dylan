import { useRef, useState, useEffect } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { Sphere, MeshDistortMaterial, Plane} from "@react-three/drei";
import JS from "../assets/jsLogo.png";
import PY from "../assets/pythonLogo.png"
import CPP from "../assets/cppLogo.png"
import SQL from "../assets/sqlLogo.png"
import CSS from "../assets/cssLogo.png";
import HTML from "../assets/htmlLogo.png";
import AWS from "../assets/awsLogo.png";
import REACT from "../assets/reactLogo.png";
import NODE from "../assets/nodeLogo.png";
import THREE from "../assets/threeLogo.png";
import GIT from '../assets/githubWLogo.png';

export default function SkillSheet({ ...props}) {
  const [ selectedTexture , setSelectedTexture] = useState(null);
  const [ ratio, setRatio ] = useState(window.innerWidth/1080)
  useEffect(()=> {
    setSelectedTexture(texture[props.selected]);
    console.log(props.selected)
    console.log(selectedTexture)
  }, [props.selected]);
  
  useEffect(()=> {
      setRatio(window.innerWidth/1080);
  }, [window.innerWidth]);

  const texture = {
      JS: useLoader(TextureLoader, JS),
      PY: useLoader(TextureLoader, PY),
      CPP: useLoader(TextureLoader, CPP),
      SQL: useLoader(TextureLoader, SQL),
      CSS: useLoader(TextureLoader, CSS),
      HTML: useLoader(TextureLoader, HTML),
      AWS: useLoader(TextureLoader, AWS),
      REACT: useLoader(TextureLoader, REACT),
      NODE: useLoader(TextureLoader, NODE),
      THREE: useLoader(TextureLoader, THREE),
      GIT: useLoader(TextureLoader, GIT),
  };

  const isMobile = window.innerWidth < 750;

  return (
    <>
      <mesh
        position={[-0.5 * ratio, 0, isMobile ? -2.5 : -3]}
        scale={ isMobile ? 0.8*ratio : 0.6}
        rotation={[Math.PI/8, Math.PI, -Math.PI/16]}
      >
        { selectedTexture && 
          <Plane args={[2,2]} visible>
            <MeshDistortMaterial attach="material" map={selectedTexture} roughness={0.6} distort={0} transparent={true} opacity={1}/>
          </Plane>
        }
      </mesh>
      
    </>
  )
}
