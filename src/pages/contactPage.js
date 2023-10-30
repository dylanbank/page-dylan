import { useState } from "react";
export default function Contact(){
    const [ info, setInfo ] = useState({email: null, subject: null, content: null});

    const HandleSubmit = () => {
        console.log('submit trest')
    }

    return(
        <div className="contact">
            <h2>CONTACT ME</h2>
            <form onSubmit={HandleSubmit}>
                <div className="flex" style={{width:'100%', gap: '5rem'}}>
                    <div className="formField">
                        <label><h3>your email</h3></label>
                        <input className='formInput' placeholder="email address" value={info.email} onChange={(e) => setInfo({...info, email: e.target.value})}/>
                    </div>
                    <div className="formField">
                        <label><h3>subject</h3></label>
                        <input className='formInput' placeholder="subject" value={info.subject} onChange={(e) => setInfo({...info, subject: e.target.value})}/>
                    </div>
                </div>
                <div style={{marginTop:'2vh'}}>
                    <label><h3>content</h3></label>
                    <textarea placeholder="content" value={info.content} onChange={(e) => setInfo({...info, content: e.target.value})}/>
                </div>
                <input type='submit'/>
            </form>
        </div>
    );
}