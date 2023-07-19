import React from "react";
import Cube from "./components/cube";
import { Canvas } from "@react-three/fiber";
import "./App.css";
import "./styles/css/sass.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dylan Windebank</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Canvas className="canvas">
        <Cube />
      </Canvas>
    </div>
  );
}

export default App;
