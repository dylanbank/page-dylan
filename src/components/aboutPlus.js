import { Capsule } from "@react-three/drei";

export default function Plus(){
    return(
        <mesh>
            <Capsule args={[1,2,20]}>
                <meshLambertMaterial attach="material" color={"#000000"} roughness={0.6} />
            </Capsule>
        </mesh>
    );
}