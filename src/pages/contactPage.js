import { useState } from "react";
export default function Contact(){
    const [ info, setInfo ] = useState({email: null, subject: null, content: null});

    const HandleSubmit = () => {

    }

    return(
        <div className="contact">
            <h2>CONTACT ME</h2>
            <form onSubmit={HandleSubmit}>
                <div>
                    <label><h3>email</h3></label>
                    <input placeholder="email address" value={info.email} onChange={(e) => setInfo({...info, email: e.target.value})}/>
                </div>
                <div>
                    <label><h3>subject</h3></label>
                    <input placeholder="subject" value={info.subject} onChange={(e) => setInfo({...info, subject: e.target.value})}/>
                </div>
                <div>
                    <label><h3>content</h3></label>
                    <textarea placeholder="content" value={info.content} onChange={(e) => setInfo({...info, content: e.target.value})}/>
                </div>
            </form>
        </div>
    );
}