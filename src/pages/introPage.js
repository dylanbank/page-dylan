import Navbar from "../components/navbar";

export default function Intro(props){
    return(
        
        <div className="intro">
            <Navbar homeProps={props}/>
            <div  style={{height: '75%', display: 'flex'}}>
                <div id="introBlock1" />
                <div id="introBlock2">
                    <div >
                        <h1>a webdeveloper.<br/>
                        that values <br/>
                        creativity + efficiency.</h1>
                    </div>
                </div>
            </div>
            <div id="introBlock3" />
        </div>
    );
}