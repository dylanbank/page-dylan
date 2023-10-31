import { Capsule } from "@react-three/drei";

export default function Plus1({...props}){
    return(
        <mesh {...props}>
            <Capsule args={[0.5,3]} >
                <meshLambertMaterial attach="material" color={"#7017fc"} roughness={0.6} />
            </Capsule>
        </mesh>
    );
}