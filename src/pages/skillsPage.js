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
                        <SkillSheet position={[-4.5, 2, 0]} image={JS} scale={0.7} mousePosition={globalMousePosition}/>
                        <SkillSheet position={[-1.5, 2, 0]} image={PY} scale={0.7} mousePosition={globalMousePosition}/>
                        <SkillSheet position={[1.5, 2, 0]} image={CPP} scale={0.7} mousePosition={globalMousePosition}/>
                        <SkillSheet position={[4.5, 2, 0]} image={SQL} scale={0.7} mousePosition={globalMousePosition}/>
                        <SkillSheet position={[-5.5, 0, 0]} image={HTML} scale={0.7} mousePosition={globalMousePosition}/>
                        <SkillSheet position={[-2.5, 0, 0]} image={CSS} scale={0.7} mousePosition={globalMousePosition}/>
                        <SkillSheet position={[2.5, 0, 0]} image={REST} scale={0.7} mousePosition={globalMousePosition}/>
                        <SkillSheet position={[5.5, 0, 0]} image={AWS} scale={0.7} mousePosition={globalMousePosition}/>
                        <SkillSheet position={[-4.5, -2, 0]} image={REACT} scale={0.7} mousePosition={globalMousePosition}/>
                        <SkillSheet position={[-1.5, -2, 0]} image={NODE} scale={0.7} mousePosition={globalMousePosition}/>
                        <SkillSheet position={[1.5, -2, 0]} image={CSS} scale={0.7} mousePosition={globalMousePosition}/>
                        <SkillSheet position={[4.5, -2, 0]} image={CSS} scale={0.7} mousePosition={globalMousePosition}/>
                    </Suspense>
                </group>
            <Rig />
            </Canvas> 
        </div>
    );
}