import { useState, useRef } from "react";
import emailjs from '@emailjs/browser'
import GIT from "../assets/githubWLogo.png"
import TWIT from "../assets/twitter.png"
import LI from '../assets/linkedin.png'

export default function Contact(){
    const [ info, setInfo ] = useState({email: null, name: null, subject: null, content: null});
    const [ sent, setSent] = useState(false);
    const [ visibleBtn, setVisibleBtn ] = useState(true);
    const isMobile = window.innerWidth < 1500;
    const form = useRef();

    const HandleSubmit = (e) => {
        e.preventDefault();

        if(info.email && info.name && info.subject && info.content){
            setTimeout(()=>{
                setVisibleBtn(false);
            }, 1000);
            setSent(true);
            emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        }else{
            alert("fill out all fields");
        }
        
    };


    return(
        <div className="contact">
            <h2>CONTACT ME</h2>
            <div className="flex">
                <form id='contactForm' ref={form} style={{flexGrow: '4'}}>
                    <div className="flex" style={{width:'100%', gap: '5%', justifyContent: 'flex-start'}}>
                        <div className="formField">
                            <label><h4>your email</h4></label>
                            <input required name='userEmail' className='formInput' placeholder="" value={info.email} onChange={(e) => setInfo({...info, email: e.target.value})}/>
                        </div>
                        <div className="formField">
                            <label><h4>your name</h4></label>
                            <input required name='userName' className='formInput' placeholder="" value={info.name} onChange={(e) => setInfo({...info, name: e.target.value})}/>
                        </div>
                        <div className="formField">
                            <label><h4>subject</h4></label>
                            <input required name='userSubject'className='formInput' placeholder="" value={info.subject} onChange={(e) => setInfo({...info, subject: e.target.value})}/>
                        </div>
                    </div>
                    <div style={{marginTop:'2vh'}}>
                        <label><h4>content</h4></label>
                        <textarea required name='userContent' placeholder="" value={info.content} onChange={(e) => setInfo({...info, content: e.target.value})}/>
                    </div>
                    <div style={{marginTop: '3vh', width:'100%', position: 'relative'}}>
                        <div style={{position: 'absolute'}}>
                            <p>sent!</p>
                        </div>
                        { visibleBtn &&
                            <a className={`sendMobileButton ${sent ? 'clicked' : ''}`} onClick={(e)=>{HandleSubmit(e)}} style={sent ?{left:'100%', opacity: '0'}:{left:'75px', opacity: '100%'} }>
                                <div className="sendEmail" style={{width: '30px', height: '20px'}} />
                            </a>
                        }
                    </div>
                </form>
                <div className="socials" >
                    <div style={{height:'95px', paddingTop:'10px'}}>
                        <a className="socialWrap" href={'https://www.linkedin.com/in/dylan-windebank-8a19a4194/'}>
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
        </div>
    );
}