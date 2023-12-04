import { useEffect, useState } from "react";


export default function Hobbies(){
    const [ current, setCurrent ] = useState(1);
    const [ tX, setTX ] = useState(39)
    const [ mobile, setMobile ] = useState(window.innerWidth < 800);
    useEffect(()=>{
        const hobbyContainer = document.getElementById('hobbyContainer')
        hobbyContainer.scrollLeft = (hobbyContainer.scrollWidth - hobbyContainer.clientWidth ) / 2;

        function handleResize() {
            
            setMobile(window.innerWidth < 800);
        }
        
        window.addEventListener("resize", handleResize);
        
        handleResize();
        return () => {
            window.removeEventListener("resize", handleResize); 
        }
    }, [])

    const scrollLeft = () => {
        const hobbyContainer = document.getElementById('hobbyContainer');
        const hobbyLabels = document.getElementById('hobbyLabels');
        if(current===1){
            hobbyContainer.scrollLeft = 0;
            hobbyLabels.scrollLeft = 0;
            setTX(68)
        }
        else if(current===2){
            hobbyContainer.scrollLeft = (hobbyContainer.scrollWidth - hobbyContainer.clientWidth)/2;
            hobbyLabels.scrollLeft = (hobbyLabels.scrollWidth - hobbyLabels.clientWidth)/2;
            setTX(37)
        }
        if(current !== 0){
            setCurrent(prevState => prevState-1);
        }
    }
    const scrollRight = () => {
        const hobbyContainer = document.getElementById('hobbyContainer');
        const hobbyLabels = document.getElementById('hobbyLabels');
        if(current===0){
            hobbyContainer.scrollLeft = (hobbyContainer.scrollWidth - hobbyContainer.clientWidth)/2;
            hobbyLabels.scrollLeft = (hobbyLabels.scrollWidth - hobbyLabels.clientWidth)/2;
            setTX(37)
        }
        else if(current===1){
            hobbyContainer.scrollLeft = hobbyContainer.scrollWidth - hobbyContainer.clientWidth;
            hobbyLabels.scrollLeft = hobbyLabels.scrollWidth - hobbyLabels.clientWidth;
            setTX(0)
        }
        if(current !== 2){
            setCurrent(prevState => prevState+1);
        }
    }

    return(
        <div className="hobbies">
            <div className="hobbiesH2">
                <h2>HOBBIES</h2>
                
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <div id="hobbyGallery">
                    <div id="hobbyContainer" >
                        {/*}
                        <div className="leftHobby">
                            <p style={{display: 'block'}}>
                                sending the v0 in the corner, this is what i do for something fun and physical.
                            </p>
    </div>*/}
                        <div className="hobby climb" style={current=== 0 && !mobile ? {webkitFilter: 'grayscale(0%)', mozFilter: 'grayscale(0%)', filter: 'grayscale(0%)'}: {}}/>
                        <div className="hobby ski" style={current === 1 && !mobile ? {webkitFilter: 'grayscale(0%)', mozFilter: 'grayscale(0%)', filter: 'grayscale(0%)'}: {}} />
                        <div className="hobby game" style={current === 2 && !mobile ? {webkitFilter: 'grayscale(0%)', mozFilter: 'grayscale(0%)', filter: 'grayscale(0%)'}: {}} />
                        {/*}
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
    */}
                    </div>
                    <div className="pairWrapper">
                        <div className='btnPair'>
                            
                                <h3 id="arrow" onClick={scrollLeft} style={current===0 ? {opacity: '0.2', cursor: 'auto'}: {}}>{"<="}</h3>
                            
                            
                                <h3 id="arrow" onClick={scrollRight} style={current===2 ? {opacity: '0.2', cursor: 'auto'}: {}}>{"=>"}</h3>
                            

                        </div>
                        <div style={{position: 'relative'}}>
                            <div id ="hobbyGradient" />
                            <div id="hobbyLabels" style={{transform: `translateX(${tX}%)`}}>
                                <h2 className="hobbyLabel">climbing</h2>
                                <h2 className="hobbyLabel">skiing</h2>
                                <h2 className="hobbyLabel">gaming</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}