import Navbar from "../components/navbar";

export default function Intro(){
    
    return(
        
        <div className="hero">
            <Navbar />
            <div className="header">
                <div className="heroPic" />
            <div>
                <h1>hello! <br/> my name is <br/>dylan windebank,</h1>
                <div className="wrapper">
                <h3>and i'm a web developer that </h3>
                <div className="words">
                    <span><h3 className="p-front"> competes</h3></span>
                    <span><h3 className="p-front"> leads </h3></span>
                    <span><h3 className="p-front"> strives </h3></span>
                    <span><h3 className="p-front"> codes, dur </h3></span>
                    <span><h3 className="p-front"> competes </h3></span>
                </div>
                </div>
            </div>
            </div>
      </div>
    );
}