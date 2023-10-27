import { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import SkillText from "./skillText";
import SkillSheet from "./skillSheet";
export default function SkillContainer(props){

    const [selectedText, setSelectedText] = useState("");
    const [selectedDesc, setSelectedDesc] = useState('')
    return(
        <div className="flex skillExtend">
            <div className='skillsCon'>
                <h2>{props.title}</h2>
                <div className='skillPicGroup'>
                    <div className='flex skillCol justify-between'>
                        {props.skills.map((item, index) => 
                            
                            <div className={(index+1)%2 ? "skill" : "skill skillR"}>
                                <p style={ selectedText === item ? {borderBottom: "5px solid #7017fc", fontWeight: "bold", cursor: 'pointer'} : {borderLeft: "none", cursor: 'pointer'}}onClick={()=>{ setSelectedText(item)}}>{item}</p>
                            </div>
                        )}
                    </div>
                    <div className="flex justify-between skillIconBlob">
                        <Canvas> 
                            <pointLight color="#ffffff" position={[0, 0, 10]} intensity={0.8}/>
                            <pointLight color="#ffffff" position={[-10, 0, 0]} intensity={0.8}/>
                            <pointLight color="#ffffff" position={[0, 0, -10]} intensity={0.8}/>
                            <pointLight color="#ffffff" position={[10, 0, 10]} intensity={0.8}/>
                            <group>
                                <Suspense fallback={null}>
                                    <SkillSheet />
                                </Suspense>
                            </group>
                            <OrbitControls enableDamping={true} enableZoom={false} maxPolarAngle={Math.PI /2} minPolarAngle={Math.PI/2}/>
                        </Canvas>
                    </div>
                </div>
            </div>
            <p>sdsdsdasds</p>
        </div>
    );
}