import { Text } from "@react-three/drei";

export default function SkillText(){
    return(
        <mesh>
            <Text fontSize={0.6} font={"https://fonts.googleapis.com/css2?family=Righteous&display=swap"} position={[0,1,-0.5]} >
                languages,
            </Text>
            <Text position={[0,0,1]} >
                skills,
            </Text>
            <Text fontSize={0.6} position={[0,-1,-0.5]} >
                and frameworks.
            </Text>
        </mesh>
    );
}