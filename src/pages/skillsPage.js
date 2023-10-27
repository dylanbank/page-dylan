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
            
            <SkillContainer title={"SKILLS"}  skills={['html', 'css', 'aws', 'rest api']} />
            
            <SkillContainer title={"FRAMEWORKS"}  skills={['react.js', 'node.js', 'three.js', 'next.js']}/>
    
        </div>
    );
}