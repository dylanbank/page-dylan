import { Suspense, useEffect, useState } from 'react';
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { Vector3 } from 'three';
import SkillContainer from '../components/skillContainer';
import SkillSheet from "../components/skillSheet"
import SkillText from "../components/skillText";

export default function Skills(){

    return(
        <div className="skills flex">
            <SkillContainer title={"LANGUAGES"}  skills={['javascript', 'python', 'sql', 'c++']} />
            <div style={{height: '100px', width: '3px', backgroundColor: '#ffffff', borderRadius:'5px'}} />
            <SkillContainer title={"SKILLS"}  skills={['html', 'css', 'aws', 'rest api']} />
            <div style={{height: '100px', width: '3px', backgroundColor: '#ffffff', borderRadius:'5px'}} />
            <SkillContainer title={"FRAMEWORKS"}  skills={['react.js', 'node.js', 'three.js', 'next.js']}/>
    
        </div>
    );
}