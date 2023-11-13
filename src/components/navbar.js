import { useState, useEffect, React } from "react";


export default function Navbar(props){

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
            <div className="navText" onClick={()=>{selectCurrent(1); props.homeProps.ScrollToView('about')}}>
                <div className={`nav-text-con ${isTop ? "" : "nav-not-top"} ${current.about ? "nav-selected" : ""}`}>
                    <h3>ABOUT ME</h3>
                </div>
            </div>
            <div className="navText" onClick={()=>{selectCurrent(2); props.homeProps.ScrollToView('skills')}}>
                <div className={`nav-text-con ${isTop ? "" : "nav-not-top"} ${current.skills ? "nav-selected" : ""}`}>
                    <h3>SKILLS</h3>
                </div>
            </div>
            <div className="navText" onClick={()=>{selectCurrent(3); props.homeProps.ScrollToView('hobbies')}}>
                <div className={`nav-text-con ${isTop ? "" : "nav-not-top"} ${current.hobbies ? "nav-selected" : ""}`}>
                    <h3>HOBBIES</h3>
                </div>
            </div>
            <div className="navText" onClick={()=>{selectCurrent(4); props.homeProps.ScrollToView('contact')}}>
                <div className={`nav-text-con ${isTop ? "" : "nav-not-top"} ${current.contact ? "nav-selected" : ""}`}>
                    <h3>CONTACT ME</h3>
                </div>
            </div>
        </div>
        </div>
    )
}