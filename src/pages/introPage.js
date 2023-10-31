import Navbar from "../components/navbar";

export default function Intro(){
    
    return(
        
        <div className="hero">
            <Navbar />
            <div className="header flex">
                <div className="heroPic" />
            <div>
                <h1>Hello! <br/> My name is <br/>Dylan Windebank,</h1>
                <div className="wrapper">
                <h3>and i'm a web developer that </h3>
                <div className="words">
                    <span><h3 className="p-front"> &nbsp;competes.</h3></span>
                    <span><h3 className="p-front"> &nbsp;leads. </h3></span>
                    <span><h3 className="p-front"> &nbsp;strives. </h3></span>
                    <span><h3 className="p-front"> &nbsp;needs a job. </h3></span>
                    <span><h3 className="p-front"> &nbsp;competes. </h3></span>
                </div>
                </div>
            </div>
            </div>
      </div>
    );
}