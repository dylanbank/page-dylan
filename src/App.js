import { React, useState, Suspense } from "react";
import Blob from "./components/blob";
import { Canvas } from "@react-three/fiber";
import "./styles/css/sass.css";

import First from "./pages/firstPage" 

function App() {
  
  return (
    <div className="App">
      <div className="hero">
        <div className="header">
          <div>
            <h1>hello! <br/> my name is <br/>dylan windebank,</h1>
            <div className="wrapper">
              <p>and i'm a web developer that </p>
              <div className="words">
                <span><p className="p-front"> competes</p></span>
                <span><p className="p-front"> leads </p></span>
                <span><p className="p-front"> strives </p></span>
                <span><p className="p-front"> codes, dur </p></span>
                <span><p className="p-front"> competes </p></span>
              </div>
            </div>
          </div>
        </div>
          <div className="nav">
            <Canvas shadows camera={{ position:[5,5,15], fov:30, near: 0.5 }} style={{height:"230px", width: "230px"}}>
              
              <ambientLight intensity={2}/>
              <directionalLight position={[10, 5, 5]} intensity={1} />
              <Suspense fallback={null}>
                <Blob />
              </Suspense>
            </Canvas>
            <div className="navText"><p className="">about me</p></div>
            <div className="navText"><p>languages</p></div>
            <div className="navText"><p>hobbies</p></div>
            <div className="navText"><p>contact me</p></div>
            <Canvas shadows camera={{ position:[5,5,15], fov:30, near: 0.5 }} style={{height:"230px", width: "230px"}}>
              
              <ambientLight intensity={2}/>
              <directionalLight position={[10, 5, 5]} intensity={1} />
              <Suspense fallback={null}>
                <Blob />
              </Suspense>
            </Canvas>
          </div>
      </div>
    </div>
  );
}

export default App;
