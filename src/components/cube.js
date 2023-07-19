import React from "react";

export default function Cube() {
  return (
    <mesh>
      <boxGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="blue" />
    </mesh>
  );
}
