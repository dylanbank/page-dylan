import { useState, useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { MeshDistortMaterial, Plane} from "@react-three/drei";
import JS from "../assets/jsLogo.png";
import PY from "../assets/pythonLogo.png"
import CPP from "../assets/cppLogo.png"
import SQL from "../assets/sqlLogo.png"
import CSS from "../assets/cssLogo.png";
import HTML from "../assets/htmlLogo.png";
import AWS from "../assets/awsLogo.png";
import REACT from "../assets/reactLogo.png";
import NODE from "../assets/nodeLogo.png";


export default function SkillSheet({ ...props}) {
  const [ selectedTexture , setSelectedTexture] = useState(null);
  const [ ratio, setRatio ] = useState(window.innerWidth/1080);
  const [ mobile, setMobile ] = useState(window.innerWidth < 800);
  const [height, setHeight ] = useState(0.9);
  useEffect(()=> {
    setSelectedTexture(texture[props.selected]);
    if(Object.keys(texture).indexOf(props.selected) < (Object.keys(texture).length-1)/2){
      setHeight(-0.3);
    }else{
      setHeight(0.3);
    }
    
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
      SQL: useLoader(TextureLoader, SQL),
      CPP: useLoader(TextureLoader, CPP),
      REACT: useLoader(TextureLoader, REACT),
      HTML: useLoader(TextureLoader, HTML),
      CSS: useLoader(TextureLoader, CSS),
      AWS: useLoader(TextureLoader, AWS),
      NODE: useLoader(TextureLoader, NODE),
  };

  return (
    <>
      <mesh
        position={[mobile ? 0.3 : 0.5 * ratio, mobile ? height : 0, mobile ? 3 : 3]}
        scale={ mobile ? 0.7 *ratio: 0.35*ratio}
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
