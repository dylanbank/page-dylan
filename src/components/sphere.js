import { useRef, useState, useMemo } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { Color } from "three";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";

export default function SkillSphere({ image, ...props}) {
  const ref = useRef();
  const black = useMemo(() => new Color('black'), []);
  const white = useMemo(() => new Color('white'), []);
  const [hovered, setHovered] = useState(false);
  const texture = useLoader(TextureLoader, image);
  
  useFrame(({ mouse, viewport }) => {
    const x = (mouse.x * viewport.width) / 2.5
    const y = (mouse.y * viewport.height) / 2.5
    ref.current.lookAt(x, y, 1)
    ref.current.material.color.lerp(hovered ? white : black, 0.05)
  })

  return (
    <mesh
      {...props}
      ref={ref}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <Sphere visible>
        <MeshDistortMaterial attach="material" map={texture} color={`#7017fc`} roughness={0.6} distort={0.6}/>
      </Sphere>
        {/*
      <Text fontSize={0.5} position-z={0.501}>
        {text}
      </Text>
  */}
      {props.children}
    </mesh>
  )
}
