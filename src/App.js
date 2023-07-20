import React from "react";
import Cube from "./components/cube";
import { Canvas } from "@react-three/fiber";
import "./App.css";
import "./styles/css/sass.css";

function App() {
  return (
    <div className="App">
      <div className="flex">
        <Canvas shadows className="canvas" camera={{ position:[10,10,10], fov:30, near: 0.1 }} style={{height: '100vh', width: '50vw'}}>
          <ambientLight intensity={2}/>
          <pointLight position={[10, 5, 5]} />
          <Cube />
        </Canvas>
        <header className="header">
          <div>
            <h1>dylan windebank</h1>
            <p>web developer that</p>
          </div>
        </header>
      </div>
    </div>
  );
}

export default App;
