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
  const [ ratio, setRatio ] = useState(window.innerWidth/1080);
  const [ mobile, setMobile ] = useState(window.innerWidth < 800)
  useEffect(()=> {
    setSelectedTexture(texture[props.selected]);
    console.log(props.selected)
    console.log(selectedTexture)
  }, [props.selected]);
  
  useEffect(()=>{
    function handleResize(){
      setRatio(window.innerWidth/1080);
      setMobile(window.innerWidth < 800);
    }

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [])


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


  return (
    <>
      <mesh
        position={[mobile ? 0 : 0.5 * ratio, mobile ? 0:0, mobile ? 3 : 3]}
        scale={ mobile ? 1 : 0.35*ratio}
        rotation={[-Math.PI/16, 0, mobile ? 0 : -Math.PI/16]}
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
