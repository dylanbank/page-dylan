import { useRef, useState, useEffect } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { Plane, Text, MeshDistortMaterial } from "@react-three/drei";

export default function SkillSheet({ image, mousePosition, tooltipText, ...props}) {
  const sheetRef = useRef();
  const tooltipRef = useRef();
  const [tooltip, setTooltip] = useState(false);
  const texture = useLoader(TextureLoader, image);
  
  useFrame(({ viewport }) => {
    const x = (mousePosition.x * viewport.width) / 2.5
    const y = (mousePosition.y * viewport.height) / 2.5
    sheetRef.current.lookAt(x/3, y/4, 1)
  });
  useEffect(() => {
    if(tooltipRef && tooltipRef.current){
      tooltipRef.current.visible = tooltip;
    }
  },[tooltip]);

  return (
    <>
      <mesh
        {...props}
        ref={sheetRef}
      >
        <Plane args={[2,2]} visible>
          <MeshDistortMaterial attach="material" map={texture} color={"#ffffff"} roughness={0.6} distort={0}/>
        </Plane>
        {props.children}
      </mesh>
    </>
  )
}
