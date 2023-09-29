import { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import SkillText from "./skillText";
import SkillSheet from "./skillSheet";
export default function SkillContainer(props){

    const [selected, setSelected] = useState({selectedText:"", selectedImage:null})

    return(
        <div className="flex skillExtend">
            <div className='skillsCon'>
                <h2>{props.title}</h2>
                <div className='flex skillPicGroup'>
                    <div className='flex skillCol'>
                        {props.skills.map((item, index) => 
                            <div className="skill" style={ selected.selectedText === item ? {borderLeft: "5px solid #7017fc", fontWeight: "bold", paddingLeft: "2.5vw"} : {borderLeft: "none"}}><p onClick={()=>{
                                setSelected({
                                    selectedText: item,
                                    selectedImage: props.images[index]
                            })}}>{item}</p></div>
                        )}
                    </div>
                    <p>{selected.selectedImage}</p>
                </div>
            </div>
            <Canvas> 
                <pointLight color="#ffffff" position={[0, 0, 10]} intensity={0.8}/>
                <group>
                    <Suspense fallback={null}>
                        <SkillSheet image={selected.selectedImage} position={[0, 0, -1]}  scale={2} />
                    </Suspense>
                </group>
            </Canvas>
        </div>
    );
}