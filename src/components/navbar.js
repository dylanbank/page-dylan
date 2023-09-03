import { Suspense, useState, useEffect, React, useRef } from "react";
import Blob from "./blob";
import { Canvas } from "@react-three/fiber";

export default function Navbar(){

    const [isSticky, setSticky] = useState(false);
    
    const navbarRef = useRef(null);
    const originalOffsetTop = useRef(0);

    const checkSticky = () => {
        if (navbarRef.current && window.scrollY>(originalOffsetTop.current-(window.innerHeight/140))) {
            setSticky(true);
        } else {
            setSticky(false);
        }
    };

    useEffect(() => {
        if (navbarRef.current) {
            originalOffsetTop.current = navbarRef.current.offsetTop;
        }
        window.addEventListener('scroll', checkSticky);
        return () => {
            window.removeEventListener('scroll', checkSticky);
        };
    }, []);

    return(
        <div>
        { isSticky ? <div style={{height:"20vh", width: "100%"}}></div>: ""}
        <div className={`nav ${isSticky ? 'nav-fixed' : ''}`} ref={navbarRef}>
            <Canvas shadows camera={{ position:[5,5,15], fov:30, near: 0.5 }} style={{height:"20vh", width: "20vw"}}>

                <ambientLight intensity={2}/>
                <directionalLight position={[10, 5, 5]} intensity={1} />
                <Suspense fallback={null}>
                <Blob speed="0.7" />
                </Suspense>
            </Canvas>
            <div className="navText"><h3>about me</h3></div>
            <div className="navText"><h3>skills</h3></div>
            <div className="navText"><h3>hobbies</h3></div>
            <div className="navText"><h3>contact me</h3></div>
            <Canvas shadows camera={{ position:[5,5,15], fov:30, near: 0.5 }} style={{height:"20vh", width: "20vw"}}>
                
                <ambientLight intensity={2}/>
                <directionalLight position={[10, 5, 5]} intensity={1} />
                <Suspense fallback={null}>
                <Blob speed="-0.7"/>
                </Suspense>
            </Canvas>
        </div>
        </div>
    )
}