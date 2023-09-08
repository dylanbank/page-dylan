import { useRef, useState } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { Plane, MeshDistortMaterial } from "@react-three/drei";

export default function SkillSheet({ image, mousePosition, ...props}) {
  const ref = useRef();
  const [distort, setDistort] = useState(0);
  const texture = useLoader(TextureLoader, image);
  
  useFrame(({ viewport }) => {
    const x = (mousePosition.x * viewport.width) / 2.5
    const y = (mousePosition.y * viewport.height) / 2.5
    ref.current.lookAt(x/3, y/3, 1)
  })

  return (
    <mesh
      {...props}
      ref={ref}
      onPointerOver={() => setDistort(0.3)}
      onPointerOut={() => setDistort(0)}
    >
      <Plane args={[2,2]} visible>
        <MeshDistortMaterial attach="material" map={texture} color={"#ffffff"} roughness={0.6} distort={distort}/>
      </Plane>
        {/*
      <Text fontSize={0.5} position-z={0.501}>
        {text}
      </Text>
  */}
      {props.children}
    </mesh>
  )
}
