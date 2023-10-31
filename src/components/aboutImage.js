import { Image } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import ImageMe from "../assets/coloradoMe2.jpg";
export default function AboutImage({...props}){
    const texture = useLoader(TextureLoader, ImageMe);
    return(
        <mesh {...props}>
            <Image texture={texture} />
        </mesh>
    );
}