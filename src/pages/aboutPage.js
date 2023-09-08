import { Canvas } from "@react-three/fiber";
import Plus from "../components/aboutPlus"
import AboutImage from "../components/aboutImage";
export default function About(){

    return(
        <div className="about">
            <div className="aboutCon">
                <h2>about me</h2>
            </div>
            <Canvas>
                <pointLight color="#ffffff" position={[0, 0, 3]} intensity={1}/>
                <AboutImage scale={4} position={[3,1,-1]}/>
                <Plus rotation={[0, -Math.PI / 8, -Math.PI/8 ]}/>
                <Plus rotation={[0, -Math.PI / 8, -Math.PI / 2]}/>
            </Canvas>
        </div>
    );
}