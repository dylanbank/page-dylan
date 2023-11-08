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
    const nestedRef = useRef(null);
    const skillsRef = useRef([])
    const [open, setOpen] = useState(false);
    const [height, setHeight] = useState(null);
    const [jsHeight, setJSHeight] = useState(null);
    const [pyHeight, setPYHeight] = useState(null);
    const [sqlHeight, setSQLHeight] = useState(null);
    const [cppHeight, setCPPHeight] = useState(null);
    const [htmlHeight, setHTMLHeight] = useState(null);
    const [cssHeight, setCSSHeight] = useState(null);
    const [awsHeight, setAWSHeight] = useState(null);
    const [nodeHeight, setNodeHeight] = useState(null);
    const Expand = () => {
        setOpen(!open);
        
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
        /*
        if(nestedRef.current){
            const observer = new ResizeObserver(entries => {
                for (const entry of entries) {
                    const newSize = entry.contentRect;
                    console.log('Div resized to:', newSize);
                    setHeight(newSize.height)
                }
                });
        
            // Start observing the div.
            observer.observe(nestedRef.current);
    
            // Don't forget to disconnect the observer when the component unmounts.
            return () => {
                observer.disconnect();
            };
        }
        */
        if(skillsRef.current){
            skillsRef.current.forEach((skillRef, index) => {
                new ResizeObserver(entries => {
                    for (const entry of entries) {
                        const newSize = entry.contentRect;
                        console.log('Div resized to:', newSize);
                        var key = Object.keys(Skill)[index];
                        console.log(key+'this is key');
                        switch(key){
                            case 'JS':
                                setJSHeight(newSize.height)
                                break;
                            case 'PY':
                                setPYHeight(newSize.height)
                                break;
                            case 'SQL':
                                setSQLHeight(newSize.height)
                                break;
                            case 'CPP':
                                setCPPHeight(newSize.height)
                                break;
                            case 'HTML':
                                setHTMLHeight(newSize.height)
                                break;
                            case 'CSS':
                                setCSSHeight(newSize.height)
                                break;
                            case 'AWS':
                                setAWSHeight(newSize.height)
                                break;
                            case 'NODE':
                                setNodeHeight(newSize.height)
                                break;
                        
                        }
                    }
                }).observe(skillRef)
            });
        
            // Start observing the div.
            
    
            // Don't forget to disconnect the observer when the component unmounts.
            
        }
        
      }, []);

    
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
            'description': 'i am most proficient in this language',
            'time': '2',
        },
        "HTML":{
            "name": 'html',
            'description': 'from custom widgets to building out full websites and apps',
            'time': '3',
        },
        "CSS":{
            "name": 'css',
            'description': 'designed and catered visions to clients',
            'time': '2',
        },
        "AWS":{
            "name": 'aws',
            'description': 'i am most proficient in this language',
            'time': '2',
        },
        "NODE":{
            "name": 'node',
            'description': 'i am most proficient in this language',
            'time': '2',
        },

        
    }
    const whichSkillHeight = (key) =>{
        switch(key){
            case 'JS':
                return jsHeight;
                break;
            case 'PY':
                return pyHeight;
                break;
            case 'SQL':
                return sqlHeight;
                break;
            case 'CPP':
                return cppHeight;
                break;
            case 'HTML':
                return htmlHeight;
                break;
            case 'CSS':
                return cssHeight;
                break;
            case 'AWS':
                return awsHeight;
                break;
            case 'NODE':
                return nodeHeight;
                break;
        }
    }
    return(
        <div className='skillPadding'>
            <div className="skills flex">
                <div className='skillRender'>
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
                            <p > &#123; </p> {height===0 ? <p> ... &#125; </p> : ''}
                            <div className='nested' ref={nestedRef} style={ open ? {maxHeight:'600px'} : {maxHeight: '0'}}>
                                {Object.keys(Skill).map((key, index)=>(
                                    <div>
                                        <p className='skill' style={ selectedText === key ? {background: '#7017fc'} : {}} onClick={()=>{ HandleChange(key)}}>"{Skill[key].name}"</p><p >&nbsp;&nbsp;:&nbsp;&nbsp;</p>
                                        <p>&#123;&nbsp;</p>
                                        {(whichSkillHeight(key))!== 0 ? '' : <p className='loading'> &#125; </p>}
                                        
                                        <div className='nested nestedSub' ref={(el)=>skillsRef.current[index]=el} style={ selectedText === key ? {maxHeight:'100px'} : {maxHeight: '0'}}> 
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
                                        { whichSkillHeight(key)!==0 ? <p className='closedBracket'> &#125;, </p> : '' }
                                    </div>
                                    
                                ))}
                                
                            </div>
                            {height===0? '' : <p> &#125; </p>}
                        
                    </div>
                </div>
            </div>
        </div>
    );
}