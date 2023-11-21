import { useEffect } from "react";


export default function Hobbies(){

    useEffect(()=>{
        const hobbyContainer = document.getElementById('hobbyContainer')
        hobbyContainer.scrollLeft = (hobbyContainer.scrollWidth - hobbyContainer.clientWidth ) / 2;
    }, [])

    const scrollLeft = () => {
        const hobbyContainer = document.getElementById('hobbyContainer');
        console.log(hobbyContainer.scrollLeft);
        hobbyContainer.scrollLeft -= hobbyContainer.scrollLeftMax/2;
    }
    const scrollRight = () => {
        const hobbyContainer = document.getElementById('hobbyContainer');
        console.log(hobbyContainer);
        hobbyContainer.scrollLeft += hobbyContainer.scrollLeftMax/2;
    }

    return(
        <div className="hobbies">
            <div className="hobbiesH2">
                <h2>HOBBIES</h2>
                <div>
                    <button id='leftArrow' onClick={scrollLeft}>left arrow</button>
                    <button id='rightArrow' onClick={scrollRight}>right arrow</button>
                </div>
            </div>
            <div>
                <div id="hobbyContainer" >
                    <div className="leftHobby" />
                    <div className="hobby climb" />
                    <div className="hobby ski" />
                    <div className="hobby game" />
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
            </div>
        </div>
    );
}