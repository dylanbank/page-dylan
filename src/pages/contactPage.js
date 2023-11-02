import { useState, useRef } from "react";
import emailjs from '@emailjs/browser'
export default function Contact(){
    const [ info, setInfo ] = useState({email: null, name: null, subject: null, content: null});
    const isMobile = window.innerWidth < 1500;
    const form = useRef();

    const HandleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };


    return(
        <div className="contact">
            <h2>CONTACT ME</h2>
            <form onSubmit={HandleSubmit} ref={form}>
                <div className="flex" style={{width:'100%', gap: '5%', justifyContent: 'flex-start'}}>
                    <div className="formField">
                        <label><h3>your email</h3></label>
                        <input required name='userEmail' className='formInput' placeholder="" value={info.email} onChange={(e) => setInfo({...info, email: e.target.value})}/>
                    </div>
                    <div className="formField">
                        <label><h3>your name</h3></label>
                        <input required name='userName' className='formInput' placeholder="" value={info.name} onChange={(e) => setInfo({...info, name: e.target.value})}/>
                    </div>
                    <div className="formField">
                        <label><h3>subject</h3></label>
                        <input required name='userSubject'className='formInput' placeholder="" value={info.subject} onChange={(e) => setInfo({...info, subject: e.target.value})}/>
                    </div>
                    <div className="sendButton">
                        <button>

                        </button>
                    </div>
                </div>
                <div style={{marginTop:'2vh'}}>
                    <label><h3>content</h3></label>
                    <textarea required name='userContent' placeholder="" value={info.content} onChange={(e) => setInfo({...info, content: e.target.value})}/>
                </div>
                <div className="sendMobileButton">
                    <input type='submit' value="send"/>
                </div>
            </form>
        </div>
    );
}