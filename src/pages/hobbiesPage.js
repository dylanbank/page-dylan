import { useEffect, useState } from "react";


export default function Hobbies(){
    const [ current, setCurrent ] = useState(1);

    useEffect(()=>{
        const hobbyContainer = document.getElementById('hobbyContainer')
        hobbyContainer.scrollLeft = (hobbyContainer.scrollWidth - hobbyContainer.clientWidth ) / 2;

        function handleResize() {
            hobbyContainer.scrollLeft = 0;
            setCurrent(0);
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [])

    const scrollLeft = () => {
        const hobbyContainer = document.getElementById('hobbyContainer');
        console.log(hobbyContainer.scrollLeft);
        if(current===1){
            hobbyContainer.scrollLeft = 0;
        }
        else if(current===2){
            hobbyContainer.scrollLeft = hobbyContainer.scrollLeftMax/2;
        }
        if(current != 0){
            setCurrent(prevState => prevState-1);
        }
    }
    const scrollRight = () => {
        const hobbyContainer = document.getElementById('hobbyContainer');
        console.log(hobbyContainer);
        hobbyContainer.scrollLeft += hobbyContainer.scrollLeftMax/2;
        if(current===0){
            hobbyContainer.scrollLeft = hobbyContainer.scrollLeftMax/2;
        }
        else if(current===1){
            hobbyContainer.scrollLeft = hobbyContainer.scrollLeftMax;
        }
        if(current != 2){
            setCurrent(prevState => prevState+1);
        }
    }

    return(
        <div className="hobbies">
            <div className="hobbiesH2">
                <h2>HOBBIES</h2>
                
            </div>
            <div>
                <div id="hobbyContainer" >
                    <div className="leftHobby">
                        <p style={{display: 'block'}}>
                            sending the v0 in the corner, this is what i do for something fun and physical.
                        </p>
                    </div>
                    <div className="hobby climb" style={current === 0 ?{webkitFilter: 'grayscale(0%)', mozFilter: 'grayscale(0%)', filter: 'grayscale(0%)'}: {}}/>
                    <div className="hobby ski" style={current === 1 ?{webkitFilter: 'grayscale(0%)', mozFilter: 'grayscale(0%)', filter: 'grayscale(0%)'}: {}} />
                    <div className="hobby game" style={current === 2 ?{webkitFilter: 'grayscale(0%)', mozFilter: 'grayscale(0%)', filter: 'grayscale(0%)'}: {}} />
                    <div className="rightHobby">
                        <p style={{display: 'block'}}>
                            competitive gaming, specifically on the videogame Rocket League, was my main path of personal growth during my highschool and university days. 
                            I competed on the UNT Varsity Rocket League team as captain for 5 years, lead the team to multiple high stake victories, and even got a national champtionship win.
                        </p>
                        <br />
                        <p style={{display: 'block'}}>
                            even if I don't play Rocket League much anymore, gaming will always mean a lot to me and i'll always be playing something.
                        </p>
                        <a className='earningsBtn' href="https://liquipedia.net/rocketleague/Dbanq">
                            <div className="earningsIcon" />
                        </a>
                    </div>
                </div>
                <div className="pairWrapper">
                    <div className='btnPair'>
                        <div style={{height: '95px', paddingTop: '10px'}}>
                            <div className="hobbyBtnWrap" onClick={scrollLeft} style={current===0 ? {opacity: '0', cursor: 'auto', backgroundColor: '#fe5000'}: {backgroundColor: '#fe5000'}}>
                                <div id='leftArrow' />
                            </div>
                        </div>
                        <div style={{height: '95px', paddingTop: '10px', marginLeft: '12vw'}}>
                            <div className="socialWrap" style={current===2 ? {opacity: '0', cursor: 'auto'}: {}} onClick={scrollRight} >
                                <div id='rightArrow' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}