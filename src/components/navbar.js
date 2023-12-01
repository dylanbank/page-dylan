import { useState, useEffect, React } from "react";
import GIT from "../assets/githubWLogo.png"
import TWIT from "../assets/twitter.png"
import LI from '../assets/linkedin.png'

export default function Navbar(props){
    const [mobile, setMobile] = useState(window.innerWidth < 800);
    const [open, setOpen] = useState(true);
    const [isTop, setIsTop] = useState(true);
    const [current, setCurrent] = useState({
        about:false,
        skills:false,
        hobbies:false,
        contact:false
    });

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
            default:
                
        }
    }

    useEffect(() => {
        
        function handleResize(){
            window.innerWidth > 800 && setOpen(false); 
            setMobile(window.innerWidth < 810);
        }
        function checkTop(){
            if (window.scrollY) {
                setIsTop(false);
            } else {
                setCurrent({about:false,skills:false,hobbies:false,contact:false});
                setIsTop(true);
            }
        }
        window.addEventListener("resize", handleResize);
        window.addEventListener('scroll', checkTop);
        checkTop();
        return () => {
            window.removeEventListener('scroll', checkTop);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return(
        <>
        { !mobile ?
        <div className={`nav ${!isTop ? 'navbar-not-top' : ''}`}  >
            
                <div className={`navLogo `} /> 
                
                <div style={{ gap: '30px', display: 'flex'}}>
                    <div className="navText" onClick={()=>{selectCurrent(1); props.homeProps.ScrollToView('about')}}>
                        <div className={`nav-text-con ${isTop ? "" : "nav-not-top"} ${current.about ? "nav-selected" : ""}`}>
                            <h3>ABOUT</h3>
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
        :
    
        <>
        { open ?
            <div className="mobileNav">
                <div className="mobileMenuWrapper" onClick={()=>setOpen(false)}>
                    <div className="mobileCloseIcon" />
                </div>
                <div>
                    <div>
                        <div className={`navLogo `} /> 
                        
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                        <div className="navText" style={{ alignItems: 'normal'}} onClick={()=>{selectCurrent(1); props.homeProps.ScrollToView('about'); setOpen(false)}}>
                            <h3>ABOUT</h3>
                        </div>
                        <div className="navText" style={{ alignItems: 'normal'}} onClick={()=>{selectCurrent(2); props.homeProps.ScrollToView('skills'); setOpen(false)}}>
                            
                                <h3>SKILLS</h3>
                        
                        </div>
                        <div className="navText" style={{ alignItems: 'normal'}} onClick={()=>{selectCurrent(3); props.homeProps.ScrollToView('hobbies'); setOpen(false)}}>
                            
                                <h3>HOBBIES</h3>
                        </div>
                        <div className="navText" style={{ alignItems: 'normal'}} onClick={()=>{selectCurrent(4); props.homeProps.ScrollToView('contact'); setOpen(false)}}>
                            
                                <h3>CONTACT ME</h3>
                        
                        </div>
                    </div>
                </div>
                <div className="socials" style={{width: '', gap: '10px'}}>
                        <div style={{height:'95px', paddingTop:'10px'}}>
                            <a className="socialWrap" href={'https://www.linkedin.com/in/dylan-windebank'}>
                                <div className="social" style={{backgroundImage: `url(${LI})`}} />
                            </a>
                        </div>
                        <div style={{height:'95px', paddingTop:'10px'}}>
                            <a className="socialWrap" href={'https://github.com/dylanbank'}>
                                <div className="social" style={{backgroundImage: `url(${GIT})`}} />
                            </a>
                        </div>
                        <div style={{height:'95px', paddingTop:'10px'}}>
                            <a className="socialWrap" href={'https://twitter.com/dbanq_'}>    
                                <div className="social" style={{backgroundImage: `url(${TWIT})`}} />
                            </a>
                        </div>
                    </div>
            </div>
            :
            
                <div className="mobileMenuWrapper" onClick={()=>setOpen(true)}>
                    <div className="mobileMenuIcon" />
                </div>
            
        }</>
        
        
        }
        
        </>
    )
}