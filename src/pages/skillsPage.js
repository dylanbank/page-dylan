import { Suspense, useEffect, useState } from 'react';
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { Vector3 } from 'three';
import JS from "../assets/jsLogo.png";
import PY from "../assets/pythonLogo.png"
import CPP from "../assets/cppLogo.png"
import SQL from "../assets/mysqlLogo.png"
import CSS from "../assets/cssLogo.png";
import HTML from "../assets/htmlLogo.png";
import REST from "../assets/restLogo.png";
import AWS from "../assets/awsLogo.png";
import REACT from "../assets/reactLogo.png";
import NODE from "../assets/nodeLogo.png";
import THREE from "../assets/threeLogo.png";
import NEXT from "../assets/nextLogo.png";
import SkillSheet from "../components/skillSheet"
import SkillText from "../components/skillText";

export default function Skills(){

    const [globalMousePosition, setGlobalMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateMousePosition = (event) => {
            setGlobalMousePosition({
                x: event.clientX / window.innerWidth * 2 - 1,  // Normalize to -1 to 1
                y: -(event.clientY / window.innerHeight) * 2 + 1,  // Normalize to -1 to 1
            });
        };

        window.addEventListener('mousemove', updateMousePosition);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);

    function Rig() {
        const { camera, mouse } = useThree();
        const vec = new Vector3();
        
        return useFrame(() => {
            camera.position.lerp(vec.set(mouse.x, mouse.y, camera.position.z), 0.05)
            camera.lookAt(0, 0, 0)
        })
    }

    return(
        <div className="skills">
            <Canvas> 
                <pointLight color="#ffffff" position={[0, 0, 30]} intensity={0.5}/>
                <group>
                    <Suspense fallback={null}>
                        <SkillText />
                        <SkillSheet position={[-5.5, 2, 0]} tooltipText={"javascript"} image={JS} scale={0.7} mousePosition={globalMousePosition}/>
                        <SkillSheet position={[-2.5, 2, 0]} tooltipText={"python"} image={PY} scale={0.7} mousePosition={globalMousePosition}/>
                        <SkillSheet position={[2.5, 2, 0]} tooltipText={"c++"} image={CPP} scale={0.7} mousePosition={globalMousePosition}/>
                        <SkillSheet position={[5.5, 2, 0]} tooltipText={"sql"} image={SQL} scale={0.7} mousePosition={globalMousePosition}/>
                        <SkillSheet position={[-6, 0, 0]} tooltipText={"html"} image={HTML} scale={0.7} mousePosition={globalMousePosition}/>
                        <SkillSheet position={[-3, 0, 0]} tooltipText={"css"} image={CSS} scale={0.7} mousePosition={globalMousePosition}/>
                        <SkillSheet position={[3, 0, 0]} tooltipText={"rest api"} image={REST} scale={0.7} mousePosition={globalMousePosition}/>
                        <SkillSheet position={[6, 0, 0]} tooltipText={"aws"} image={AWS} scale={0.7} mousePosition={globalMousePosition}/>
                        <SkillSheet position={[-5.5, -2, 0]} tooltipText={"react.js"} image={REACT} scale={0.7} mousePosition={globalMousePosition}/>
                        <SkillSheet position={[-2.5, -2, 0]} tooltipText={"node.js"} image={NODE} scale={0.7} mousePosition={globalMousePosition}/>
                        <SkillSheet position={[2.5, -2, 0]} tooltipText={"three.js"} image={THREE} scale={0.7} mousePosition={globalMousePosition}/>
                        <SkillSheet position={[5.5, -2, 0]} tooltipText={"next.js"} image={NEXT} scale={0.7} mousePosition={globalMousePosition}/>
                    </Suspense>
                </group>
            <Rig />
            </Canvas> 
        </div>
    );
}