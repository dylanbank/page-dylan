import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

export default function Cube() {
  const [ rotX, setRotX ] = useState(0.02);
  const [ rotY, setRotY ] = useState(0.02);
  const meshRef = useRef();
  useFrame(() => {
    if(!meshRef.current){
      return;
    }

    meshRef.current.rotation.x += rotX;
    meshRef.current.rotation.y += rotY;
  });

  function onHover(){
    setRotX(-0.005);
    setRotY(-0.005)
  }

  function onNotHover(){
    setRotX(0.01);
    setRotY(0.01);
  }
  function onScroll(){
    setRotX(rotX+0.001);
    setRotY(rotY+0.001);
  }
  return (
    <mesh ref={meshRef} scale={[3,3,3]} onPointerOver={onHover} onPointerOut={onNotHover} onWheel={onScroll}>
      <boxGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="blue" />
    </mesh>
  );
}
