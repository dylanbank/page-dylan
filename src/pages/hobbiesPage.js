
export default function Hobbies(){

    return(
        <div className="hobbies">
            <h2 style={{marginLeft: '15vw'}}>HOBBIES</h2>
            <div className="hobbyContainer" style={{height: '60vh', gap: '50px'}}>
                <div className="hobby climb" />
                <div className="hobby ski" />
                <div className="hobby game" />
            </div>
        </div>
    );
}