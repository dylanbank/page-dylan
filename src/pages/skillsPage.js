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
        <div className="skills flex">
            
            <div className='skillsCon'>
                <h2>LANGUAGES</h2>
                <div className='flex skillPicGroup'>
                    <div className='flex skillCol'>
                        <div> <p>javascript</p> </div>
                        <div><p>python</p></div>
                        <div><p>c++</p></div>
                        <div><p>sql</p></div>
                    </div>
                    <Canvas> 
                        <pointLight color="#ffffff" position={[0, 0, 30]} intensity={0.2}/>
                        <group>
                            <Suspense fallback={null}>
                                <SkillSheet position={[0, 0, 0]} tooltipText={"javascript"} image={JS} scale={2} mousePosition={globalMousePosition}/>
                            </Suspense>
                        </group>
                        <Rig />
                    </Canvas> 
                </div>
            </div>
            <div className='skillsCon'>
                <h2>SKILLS</h2>
                <div className='flex skillPicGroup'>
                    <div className='flex skillCol'>
                        <div><p>css</p></div>
                        <div><p>html</p></div>
                        <div><p>rest api</p></div>
                        <div><p>aws</p></div> 
                    </div>
                    <Canvas> 
                        <pointLight color="#ffffff" position={[0, 0, 30]} intensity={0.2}/>
                        <group>
                            <Suspense fallback={null}>
                                <SkillSheet position={[0, 0, 0]} tooltipText={"javascript"} image={JS} scale={2} mousePosition={globalMousePosition}/>
                            </Suspense>
                        </group>
                        <Rig />
                    </Canvas> 
                </div>
            </div>
            <div className='skillsCon'>
                <h2>FRAMEWORKS</h2>
                <div className='flex skillPicGroup'>
                    <div className='flex skillCol'>
                        <div><p>react.js</p></div>
                        <div><p>node.js</p></div>
                        <div><p>three.js</p></div>
                        <div><p>next.js</p></div>
                    </div>
                    <Canvas> 
                        <pointLight color="#ffffff" position={[0, 0, 30]} intensity={0.2}/>
                        <group>
                            <Suspense fallback={null}>
                                <SkillSheet position={[0, 0, 0]} tooltipText={"javascript"} image={JS} scale={2} mousePosition={globalMousePosition}/>
                            </Suspense>
                        </group>
                        <Rig />
                    </Canvas> 
                </div>
            </div>
        </div>
    );
}