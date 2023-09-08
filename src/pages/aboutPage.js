import { Canvas } from "@react-three/fiber";
import Plus from "../components/aboutPlus"
export default function About(){

    return(
        <div className="about">
            <div className="aboutCon">
                <h2>about me</h2>
            </div>
            <Canvas>
                <pointLight color="#ffffff" position={[0, 0, 30]} intensity={0.5}/>
                <Plus />
            </Canvas>
        </div>
    );
}