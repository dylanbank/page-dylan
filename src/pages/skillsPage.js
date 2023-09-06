import { Suspense } from 'react';
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { Vector3 } from 'three'
import CSS from "../assets/css.png";
import HTML from "../assets/HTML5_logo.png";
import JS from "../assets/JavaScript-logo.png";
import SkillSphere from "../components/sphere"

export default function Skills(){

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
                
                <pointLight color="#ffffff" position={[0, -3, 30]} />
                <group>
                    <Suspense fallback={null}>
                        <SkillSphere position={[-4.5, 2, 0]} image={CSS} scale={0.7}/>
                        <SkillSphere position={[-1.5, 2, 0]} image={HTML} scale={0.7}/>
                        <SkillSphere position={[1.5, 2, 0]} image={JS} scale={0.7}/>
                        <SkillSphere position={[4.5, 2, 0]} image={CSS} scale={0.7}/>
                        <SkillSphere position={[-4.5, 0, 0]} image={CSS} scale={0.7}/>
                        <SkillSphere position={[-1.5, 0, 0]} image={CSS} scale={0.7}/>
                        <SkillSphere position={[1.5, 0, 0]} image={CSS} scale={0.7}/>
                        <SkillSphere position={[4.5, 0, 0]} image={CSS} scale={0.7}/>
                        <SkillSphere position={[-4.5, -2, 0]} image={CSS} scale={0.7}/>
                        <SkillSphere position={[-1.5, -2, 0]} image={CSS} scale={0.7}/>
                        <SkillSphere position={[1.5, -2, 0]} image={CSS} scale={0.7}/>
                        <SkillSphere position={[4.5, -2, 0]} image={CSS} scale={0.7}/>
                    </Suspense>
                </group>
            <Rig />
            </Canvas> 
        </div>
    );
}