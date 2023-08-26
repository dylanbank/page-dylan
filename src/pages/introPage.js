import Navbar from "../components/navbar";

export default function Intro(){
    
    return(
        
        <div className="hero">
            <div className="header">
            <div>
                <h1>hello! <br/> my name is <br/>dylan windebank,</h1>
                <div className="wrapper">
                <p>and i'm a web developer that </p>
                <div className="words">
                    <span><p className="p-front"> competes</p></span>
                    <span><p className="p-front"> leads </p></span>
                    <span><p className="p-front"> strives </p></span>
                    <span><p className="p-front"> codes, dur </p></span>
                    <span><p className="p-front"> competes </p></span>
                </div>
                </div>
            </div>
            </div>
          <Navbar />
      </div>
    );
}