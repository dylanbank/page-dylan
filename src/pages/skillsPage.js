import { Suspense, useEffect, useState, useRef } from 'react';
import { Canvas, useThree, useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { CameraControls, OrbitControls } from '@react-three/drei';
import SkillContainer from '../components/skillContainer';
import SkillSheet from "../components/skillSheet"

export default function Skills(){
    const [selectedText, setSelectedText] = useState("");

    const HandleChange = (newSkill) => {
        console.log(newSkill);
        
        const angle = cameraControlRef.current.azimuthAngle;
        const remainder = angle%(2*Math.PI);
        const equalize = (2*Math.PI)-remainder;
        console.log(`angle: ${angle}`);
        console.log(`remainder: ${remainder}`);
        console.log(`equalize: ${equalize}`);
        if(selectedText==''){
            setSelectedText(newSkill); 
        } else if(selectedText!=newSkill){
            cameraControlRef.current?.rotate((2*Math.PI)+equalize, 0, true);

            setTimeout(()=> {setSelectedText(newSkill); }, 300);
        }
    }
    const cameraControlRef = useRef(null);

    return(
        <div className="skills flex">
            <div style={{width: '50%'}}>
                <Canvas style={{width:'38vw', height:'80vh'}}> 
                    <pointLight color="#ffffff" position={[0, 0, 10]} intensity={0.1}/>
                    <pointLight color="#ffffff" position={[0, 0, -10]} intensity={0.1}/>
                    <pointLight color="#ffffff" position={[-10, 0, 0]} intensity={0.1}/>
                    <pointLight color="#ffffff" position={[10, 0, 0]} intensity={0.1}/>
                    <pointLight color="#ffffff" position={[10, 0, 10]} intensity={0.3}/>
                    <pointLight color="#ffffff" position={[-10, 0, -10]} intensity={0.3}/>
                    <pointLight color="#ffffff" position={[-10, 0, 10]} intensity={0.3}/>
                    <pointLight color="#ffffff" position={[10, 0, -10]} intensity={0.3}/>
                    <pointLight color="#ffffff" position={[0, 10, 0]} intensity={0.8}/>
                    <pointLight color="#ffffff" position={[0, -10, 0]} intensity={0.8}/>
                    <group>
                        
                            <SkillSheet selected={selectedText} cameraControlRef/>
                    </group>
                    <CameraControls dollyToCursor={true} minDistance={5} maxDistance={5} ref={cameraControlRef} maxPolarAngle={Math.PI /2} minPolarAngle={Math.PI/2} zoom={false}/>
                </Canvas>
            </div>
            <div style={{width:'50%'}}>
                <h2>SKILLS</h2>
                <p className='skill' style={ selectedText === 'JS' ? {borderBottom: "5px solid #7017fc", fontWeight: "bold", cursor: 'pointer'} : {borderLeft: "none", cursor: 'pointer'}}onClick={()=>{ HandleChange('JS')}}>javascript</p>
                <p className='skill' style={ selectedText === 'PY' ? {borderBottom: "5px solid #7017fc", fontWeight: "bold", cursor: 'pointer'} : {borderLeft: "none", cursor: 'pointer'}}onClick={()=>{ HandleChange('PY')}}>python</p>
                <p className='skill' style={ selectedText === 'SQL' ? {borderBottom: "5px solid #7017fc", fontWeight: "bold", cursor: 'pointer'} : {borderLeft: "none", cursor: 'pointer'}}onClick={()=>{ HandleChange('SQL')}}>sql</p>
                <p className='skill' style={ selectedText === 'CPP' ? {borderBottom: "5px solid #7017fc", fontWeight: "bold", cursor: 'pointer'} : {borderLeft: "none", cursor: 'pointer'}}onClick={()=>{ HandleChange('CPP')}}>c++</p>
                <p className='skill' style={ selectedText === 'HTML' ? {borderBottom: "5px solid #7017fc", fontWeight: "bold", cursor: 'pointer'} : {borderLeft: "none", cursor: 'pointer'}}onClick={()=>{ HandleChange('HTML')}}>html</p>
                <p className='skill' style={ selectedText === 'CSS' ? {borderBottom: "5px solid #7017fc", fontWeight: "bold", cursor: 'pointer'} : {borderLeft: "none", cursor: 'pointer'}}onClick={()=>{ HandleChange('CSS')}}>css</p>
                <p className='skill' style={ selectedText === 'AWS' ? {borderBottom: "5px solid #7017fc", fontWeight: "bold", cursor: 'pointer'} : {borderLeft: "none", cursor: 'pointer'}}onClick={()=>{ HandleChange('AWS')}}>aws</p>
                <p className='skill' style={ selectedText === 'REST' ? {borderBottom: "5px solid #7017fc", fontWeight: "bold", cursor: 'pointer'} : {borderLeft: "none", cursor: 'pointer'}}onClick={()=>{ HandleChange('REST')}}>rest api</p>
                <p className='skill' style={ selectedText === 'REACT' ? {borderBottom: "5px solid #7017fc", fontWeight: "bold", cursor: 'pointer'} : {borderLeft: "none", cursor: 'pointer'}}onClick={()=>{ HandleChange('REACT')}}>react</p>
                <p className='skill' style={ selectedText === 'NODE' ? {borderBottom: "5px solid #7017fc", fontWeight: "bold", cursor: 'pointer'} : {borderLeft: "none", cursor: 'pointer'}}onClick={()=>{ HandleChange('NODE')}}>node</p>
                <p className='skill' style={ selectedText === 'THREE' ? {borderBottom: "5px solid #7017fc", fontWeight: "bold", cursor: 'pointer'} : {borderLeft: "none", cursor: 'pointer'}}onClick={()=>{ HandleChange('THREE')}}>three</p>
                <p className='skill' style={ selectedText === 'NEXT' ? {borderBottom: "5px solid #7017fc", fontWeight: "bold", cursor: 'pointer'} : {borderLeft: "none", cursor: 'pointer'}}onClick={()=>{ HandleChange('NEXT')}}>next</p>
            </div>
            {/*
            <SkillContainer title={"LANGUAGES"}  skills={['javascript', 'python', 'sql', 'c++']} />
            
            <SkillContainer title={"SKILLS"}  skills={['html', 'css', 'aws', 'rest api']} />
            
            <SkillContainer title={"FRAMEWORKS"}  skills={['react.js', 'node.js', 'three.js', 'next.js']}/>
    */}
        </div>
    );
}