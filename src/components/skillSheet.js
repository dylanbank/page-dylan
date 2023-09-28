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
    sheetRef.current.lookAt(x/3, y/3, 1)
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
        onPointerOver={() => setTooltip(true)}
        onPointerOut={() => setTooltip(false)}
      >
        <Plane args={[2,2]} visible>
          <MeshDistortMaterial attach="material" map={texture} color={"#ffffff"} roughness={0.6} distort={0}/>
        </Plane>
        {props.children}
      </mesh>
      <mesh
        ref={tooltipRef}
      >
        <Plane args={[1.2,0.3]} position={[props.position[0], props.position[1]-0.9, 0.2]}>
          <meshLambertMaterial color={"#7017fc"} roughness={0.6} distort={0} map={null}/>
        </Plane>
        <Text fontSize={0.3}position={[props.position[0], props.position[1]-0.8, 0.21]} color={"#ffffff"}>
          {tooltipText}
        </Text>
      </mesh>
    </>
  )
}
