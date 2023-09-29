import { useState } from "react";
export default function SkillContainer(props){

    const [selected, setSelected] = useState("")

    return(
        <div className='skillsCon'>
            <h2>{props.title}</h2>
            <div className='flex skillPicGroup'>
                <div className='flex skillCol'>
                    {props.skills.map((item) => 
                        <div className="skill" style={ selected === item ? {borderLeft: "5px solid #7017fc", fontWeight: "bold", paddingLeft: "2.5vw"} : {borderLeft: "none"}}><p onClick={()=>setSelected(item)}>{item}</p></div>
                    )}
                </div>
                {/*
                <Canvas> 
                    <pointLight color="#ffffff" position={[0, 0, 30]} intensity={0.2}/>
                    <group>
                        <Suspense fallback={null}>
                            <SkillSheet position={[0, 0, 0]} tooltipText={"javascript"} image={JS} scale={2} mousePosition={globalMousePosition}/>
                        </Suspense>
                    </group>
                </Canvas>
    */} 
            </div>
        </div>
    );
}