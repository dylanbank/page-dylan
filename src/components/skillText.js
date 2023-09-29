import { Text } from "@react-three/drei";

export default function SkillText(){
    return(
        <mesh>
            <Text fontSize={0.6} font={"https://fonts.googleapis.com/css2?family=Righteous&display=swap"} position={[0,1,1]} >
                I have been working with javascript in a professional web development setting for the past 3 years now.
            </Text>
            <Text fontSize={0.6} font={"https://fonts.googleapis.com/css2?family=Righteous&display=swap"} position={[0,0,1]} >
                From working on my alma mater's ABET accreditation survey tool frontend, to working on my internship's production application code,
                javascript is my most proficient language as of recent years.
            </Text>
        </mesh>
    );
}