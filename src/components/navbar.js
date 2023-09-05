import { Suspense, useState, useEffect, React } from "react";
import Blob from "./blob";
import { Canvas } from "@react-three/fiber";

export default function Navbar(){

    const [isTop, setIsTop] = useState(true);
    const [current, setCurrent] = useState({
        about:false,
        skills:false,
        hobbies:false,
        contact:false
    });

    const checkTop = () => {
        if (window.scrollY) {
            setIsTop(false);
        } else {
            setCurrent({about:false,skills:false,hobbies:false,contact:false});
            setIsTop(true);
        }
    };

    const selectCurrent = (selection) => {
        switch(selection){
            case 1:
                setCurrent({about:true,skills:false,hobbies:false,contact:false,});
                break;
            case 2:
                setCurrent({about:false,skills:true,hobbies:false,contact:false,});
                break;
            case 3:
                setCurrent({about:false,skills:false,hobbies:true,contact:false,});
                break;
            case 4:
                setCurrent({about:false,skills:false,hobbies:false,contact:true,});
                break;
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', checkTop);
        return () => {
            window.removeEventListener('scroll', checkTop);
        };
    }, []);

    return(
        <div>
        <div className="nav">
            <div className="navText" onClick={()=>selectCurrent(1)}>
                <div className={current.about ? "selected" : "hide"}>
                    <Canvas shadows camera={{ position:[5,5,15], fov:30, near: 0.5 }} style={{height:"70px", width: "70px"}}>
                        <ambientLight intensity={2}/>
                        <directionalLight position={[10, 5, 5]} intensity={1} />
                        <Suspense fallback={null}>
                            <Blob speed="-0.7"/>
                        </Suspense>
                    </Canvas> 
                </div>
                <div className={`nav-text-con ${isTop ? "" : "nav-not-top"} `}>
                    <h3>ABOUT ME</h3>
                </div>
            </div>
            <div className="navText" onClick={()=>selectCurrent(2)}>
                <div className={current.skills ? "selected" : "hide"}>
                    <Canvas shadows camera={{ position:[5,5,15], fov:30, near: 0.5 }} style={{height:"70px", width: "70px"}}>
                        <ambientLight intensity={2}/>
                        <directionalLight position={[10, 5, 5]} intensity={1} />
                        <Suspense fallback={null}>
                            <Blob speed="-0.7"/>
                        </Suspense>
                    </Canvas> 
                </div>
                <div className={`nav-text-con ${isTop ? "" : "nav-not-top"} `}>
                    <h3>SKILLS</h3>
                </div>
            </div>
            <div className="navText" onClick={()=>selectCurrent(3)}>
                <div className={current.hobbies ? "selected" : "hide"}>
                    <Canvas shadows camera={{ position:[5,5,15], fov:30, near: 0.5 }} style={{height:"70px", width: "70px"}}>
                        <ambientLight intensity={2}/>
                        <directionalLight position={[10, 5, 5]} intensity={1} />
                        <Suspense fallback={null}>
                            <Blob speed="-0.7"/>
                        </Suspense>
                    </Canvas> 
                </div>
                <div className={`nav-text-con ${isTop ? "" : "nav-not-top"} `}>
                    <h3>HOBBIES</h3>
                </div>
            </div>
            <div className="navText" onClick={()=>selectCurrent(4)}>
                <div className={current.contact ? "selected" : "hide"}>
                    <Canvas shadows camera={{ position:[5,5,15], fov:30, near: 0.5 }} style={{height:"70px", width: "70px"}}>
                        <ambientLight intensity={2}/>
                        <directionalLight position={[10, 5, 5]} intensity={1} />
                        <Suspense fallback={null}>
                            <Blob speed="-0.7"/>
                        </Suspense>
                    </Canvas> 
                </div>
                <div className={`nav-text-con ${isTop ? "" : "nav-not-top"} `}>
                    <h3>CONTACT ME</h3>
                </div>
            </div>
        </div>
        </div>
    )
}