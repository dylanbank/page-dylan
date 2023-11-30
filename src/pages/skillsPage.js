import { Suspense, useEffect, useState, useRef } from 'react';
import { Canvas, useThree, useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { CameraControls, OrbitControls } from '@react-three/drei';
import SkillSheet from "../components/skillSheet"
import SkillBlob from '../components/skillBlob';

export default function Skills(){
    const [selectedText, setSelectedText] = useState("JS");
    const [mobile, setMobile] = useState(window.innerWidth < 750);
    const cameraControlRef = useRef(null);
    const nestedRef = useRef(null);
    const [open, setOpen] = useState(false);
    const Expand = () => {
        setOpen(!open);
        
    }
    const HandleChange = (newSkill) => {
        if(selectedText!=newSkill){
            cameraControlRef.current?.rotate(-Math.PI, 0, true);
            setTimeout(()=> {setSelectedText(newSkill); cameraControlRef.current?.rotate(Math.PI, 0, true);}, 300);
        }
    }

    useEffect(()=>{
        function handleResize(){
          setMobile(window.innerWidth < 800);
        }
    
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
      }, [])

    
    const Skill = {
        "JS":{
            'name': 'javascript',
            'description': 'i am most proficient in this language',
            'favorite': 'true',
            'time': '3',
        },
        "PY":{
            'name': 'python',
            'description': 'i have used this language for image processing (scipy.py) and manipulating data (pandas.py)',
            'time': '1',
        },
        "SQL":{
            'name': 'sql',
            'description': 'i have used this language to interact with production databases',
            'time': '2',
        },
        "CPP":{
            'name': 'cpp',
            'description': 'i learned fundamental programming knowledge and concepts through this language during my undergrad.',
            'time': '3',
        },
        "REACT":{
            "name": 'react',
            'description': 'mostly paired with node, i have built upon and constructed production web apps using this framwork.',
            'favorite': 'true',
            'time': '2',
        },
        "HTML":{
            "name": 'html',
            'description': 'from custom widgets to building out full websites and apps, i am confident in this markup language',
            'time': '3',
        },
        "CSS":{
            "name": 'scss',
            'description': 'designed and catered visions to clients',
            'time': '2',
        },
        "AWS":{
            "name": 'aws',
            'description': 'i have used s3, ec2, cloud watch, and lambda for professional and personal use.',
            'time': '2',
        },
        "NODE":{
            "name": 'node',
            'description': 'i have utilized node to build multiple backend applications, mostly paired with react.',
            'time': '2',
        },

        
    }
    
    return(
        <div className='skillPadding'>
            <div className={`skills ${!mobile ? 'flex' : ''}`}>
                { !mobile &&
                    <div className='skillRender' >
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
                }
                <div style={{position:'absolute', width:'100%', height:'100%', zIndex: "20", display: 'flex', flexDirection:'column', justifyContent:'center', alignItems:'flexStart'}}>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <h2 style={{marginTop: "20px"}}>SKILLS</h2>
                        { mobile &&
                        <div style={{position: 'relative', width: '150px', height: '100px'}}>
                            <div style={{ position: 'absolute', width: '100%', height: '100%', zIndex: '20'}}>

                            </div>
                            <Canvas style={ mobile ? {width:'100%', height:'100%', top:'0', left:'0', position:'relative', zIndex:'15'} : {width:'100%', height:'100%', top:'0', left:'0', position:'absolute', zIndex:'15'}}> 
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
                                <CameraControls dollyToCursor={true} minDistance={3} maxDistance={3} ref={cameraControlRef} maxPolarAngle={Math.PI /2} minPolarAngle={Math.PI/2} zoom={false}/>
                            </Canvas>
                            
                        </div>
                        }
                    </div>
                    
                    
                    <div className="skillWrapper" >
                            <p > &#123; </p> 
                            <div className='nested' ref={nestedRef}>
                                {Object.keys(Skill).map((key, index)=>(
                                    <div>
                                        <p className='skill' style={ selectedText === key ? {background: '#7017fc'} : {}} onClick={()=>{ HandleChange(key)}}>"{Skill[key].name}"</p><p >&nbsp;&nbsp;:&nbsp;&nbsp;</p>
                                        <p>&#123;&nbsp;</p>
                                        {selectedText===key ? '' : <p className='loading'> &#125; </p>}
                                        
                                        <div className='nested nestedSub' style={ selectedText === key ? {maxHeight:'100px'} : {maxHeight: '0'}}> 
                                            <div style={{paddingLeft: '1.5em', textIndent: '-1.5em', display:'inline-block'}}>
                                                <p className='description'>"description"</p>
                                                <p>&nbsp;&nbsp;:&nbsp;&nbsp;</p>
                                                <p style={{color:'#b8d8be'}}>"{Skill[key].description}"</p>
                                                <p>,</p>
                                                <br/>
                                            </div>
                                            <p className='yearsSpent'>"yearsSpent"</p>
                                            <p>&nbsp;&nbsp;:&nbsp;&nbsp;</p>
                                            <p style={{color: '#FAC898'}}>{Skill[key].time}</p>
                                            <p>,</p>
                                            <br/>
                                            {Skill[key].favorite ==='true' ?
                                                <>
                                                <p className='favorite'>"favorite"</p>
                                                <p>&nbsp;&nbsp;:&nbsp;&nbsp;</p>
                                                <p style={{color:'#E1756F'}}>{Skill[key].favorite}</p> 
                                                <p>,</p>
                                                
                                                </>
                                            : ''}
                                        </div> 
                                        <p className='closedBracket' style={selectedText===key ? { display: 'block'} : { display: 'none', paddingTop: '1.513rem'}}> &#125;, </p>
                                    </div>
                                    
                                ))}
                                
                            </div>
                            <p> &#125; </p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}