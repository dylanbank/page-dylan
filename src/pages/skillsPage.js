import { Suspense, useEffect, useState, useRef } from 'react';
import { Canvas, useThree, useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { CameraControls, OrbitControls } from '@react-three/drei';
import SkillSheet from "../components/skillSheet"
import SkillBlob from '../components/skillBlob';

export default function Skills(){
    const [selectedText, setSelectedText] = useState("JS");
    const isMobile = window.innerWidth < 750;
    const cameraControlRef = useRef(null);
    const titleRef = useRef(null);
    const [open, setOpen] = useState(false);
    const [openAni, setOpenAni] = useState(false);
    const [height, setHeight] = useState(null);
    const Expand = () => {
        console.log((openAni))
        setOpen(!open);
        openAni ? setTimeout(()=>setOpenAni(!openAni), 1000) : setOpenAni(!openAni);
        console.log((openAni))
    }
    const HandleChange = (newSkill) => {
        if(newSkill===''){
            cameraControlRef.current?.rotate(-Math.PI, 0, true);
        }
        else if(selectedText==''){
            setSelectedText(newSkill); 
            cameraControlRef.current?.rotate(-Math.PI, 0, true);
        } else if(selectedText!=newSkill){
            cameraControlRef.current?.rotate(-Math.PI, 0, true);
            setTimeout(()=> {setSelectedText(newSkill); cameraControlRef.current?.rotate(Math.PI, 0, true);}, 300);
        }
    }
    useEffect(()=>{
        setHeight(titleRef.current.style.maxHeight);
    }, []);
    const Skill = {
        "JS":{
            'experience': 'i am most proficient in this language',
            'favorite': 'true',
            'length': '3 years',
        },
        "PY":{
            'experience': 'i have used this language for image processing (scipy.py) and manipulating data (pandas.py)',
            'length': '1 year',
        },
        "SQL":{
            'experience': 'i have used this language to interact with production databases',
            'length': '2 years',
        },
        "CPP":{
            'experience': 'i am most proficient in this language',
            'length': '2 years',
        },
        "JS":{
            "name": 'javascript',
            'experience': 'i am most proficient in this language',
            'length': '2 years',
        },
        "JS":{
            "name": 'javascript',
            'experience': 'i am most proficient in this language',
            'length': '2 years',
        },
        "JS":{
            "name": 'javascript',
            'experience': 'i am most proficient in this language',
            'length': '2 years',
        },
        "JS":{
            "name": 'javascript',
            'experience': 'i am most proficient in this language',
            'length': '2 years',
        },
        "JS":{
            "name": 'javascript',
            'experience': 'i am most proficient in this language',
            'length': '2 years',
        },
        "JS":{
            "name": 'javascript',
            'experience': 'i am most proficient in this language',
            'length': '2 years',
        },
        "JS":{
            "name": 'javascript',
            'experience': 'i am most proficient in this language',
            'length': '2 years',
        },
        "JS":{
            "name": 'javascript',
            'experience': 'i am most proficient in this language',
            'length': '2 years',
        },

        
    }
    return(
        <div style={{padding: '15vw'}}>
            <div className="skills flex">
                <div>
                    <Canvas style={{width:'100%', height:'100%', top:'0', left:'0', position:'absolute', zIndex:'15'}}> 
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
                    <Canvas style={{width:'100%', height:'100%', top:'0', left:'0', position:'absolute', zIndex:'10'}}> 
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
                            
                                <SkillBlob  cameraControlRef/>
                        </group>
                    </Canvas>
                    
                </div>
                <div style={{position:'absolute', width:'100%', height:'100%', zIndex: "20", display: 'flex', flexDirection:'column', justifyContent:'center', alignItems:'flexStart'}}>
                    <h2 style={{cursor: 'pointer'}} onClick={()=>{ Expand(); HandleChange("")}}>SKILLS:</h2>
                    <div className="skillWrapper" >
                            {height}
                            <p > &#123; </p> {height==='0px' ? <p> &#125; </p> : ''}
                            <div ref={titleRef} className='nested' style={ open ? {maxHeight:'600px'} : {maxHeight: '0'}}>
                                
                                <p className='skill' style={ selectedText === 'JS' ? {background: '#7017fc'} : {}}onClick={()=>{ HandleChange('JS')}}>"javascript"</p><p >:</p>
                                <br/> 
                                <p className='skill' style={ selectedText === 'PY' ? {background: '#7017fc'} : {}}onClick={()=>{ HandleChange('PY')}}>"python"</p><p >:</p>
                                <br/> 
                                <p className='skill' style={ selectedText === 'SQL' ? {background: '#7017fc'} : {}}onClick={()=>{ HandleChange('SQL')}}>"sql"</p><p >:</p>
                                <br/> 
                                <p className='skill' style={ selectedText === 'CPP' ? {background: '#7017fc'} : {}}onClick={()=>{ HandleChange('CPP')}}>"c++"</p><p >:</p>
                                <br/> 
                                <p className='skill' style={ selectedText === 'HTML' ? {background: '#7017fc'} : {}}onClick={()=>{ HandleChange('HTML')}}>"html"</p><p >:</p>
                                <br/> 
                                <p className='skill' style={ selectedText === 'CSS' ? {background: '#7017fc'} : {}}onClick={()=>{ HandleChange('CSS')}}>"css"</p><p >:</p>
                                <br/> 
                                <p className='skill' style={ selectedText === 'AWS' ? {background: '#7017fc'} : {}}onClick={()=>{ HandleChange('AWS')}}>"aws"</p><p >:</p>
                                <br/>
                                <p className='skill' style={ selectedText === 'REST' ? {background: '#7017fc'} : {}}onClick={()=>{ HandleChange('REST')}}>"rest api"</p><p >:</p>
                                <br/> 
                                <p className='skill' style={ selectedText === 'REACT' ? {background: '#7017fc'} : {}}onClick={()=>{ HandleChange('REACT')}}>"react"</p><p >:</p>
                                <br/>
                                <p className='skill' style={ selectedText === 'NODE' ? {background: '#7017fc'} : {}}onClick={()=>{ HandleChange('NODE')}}>"node"</p><p >:</p>
                                <br/> 
                                <p className='skill' style={ selectedText === 'THREE' ? {background: '#7017fc'} : {}}onClick={()=>{ HandleChange('THREE')}}>"three"</p><p >:</p>
                                <br/> 
                                <p className='skill' style={ selectedText === 'GIT' ? {background: '#7017fc'} : {}}onClick={()=>{ HandleChange('GIT')}}>"git"</p><p>:</p>
                                <br/>
                            </div>
                            {height ? '' : <p> &#125; </p>}
                        
                    </div>
                </div>
            </div>
        </div>
    );
}