import { Suspense, useEffect, useState } from 'react';
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { Vector3 } from 'three';
import SkillContainer from '../components/skillContainer';
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

    return(
        <div className="skills flex">
            <SkillContainer title={"LANGUAGES"}  skills={['javascript', 'python', 'sql', 'c++']} images={[JS, PY, SQL, CPP]}/>
            <SkillContainer title={"SKILLS"}  skills={['html', 'css', 'aws', 'rest api']} images={[HTML, CSS, AWS, REST]}/>
            <SkillContainer title={"FRAMEWORKS"}  skills={['react.js', 'node.js', 'three.js', 'next.js']} images={[JS, PY, SQL, CPP]}/>
        </div>
    );
}