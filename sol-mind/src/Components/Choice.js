import "./ChoiceStyles.css"
import IMG_10 from '../Assets/IMG-17.jpg';

function Choice(){
    return(
        <div className="requests">
            <div className="form-container">
            <h1>Give us  review message</h1>
            <form>
                <input placeholder="Name"/>
                <input placeholder="Email"/>
                <textarea placeholder="Review Message"/>
                <button>Submit</button>
            </form>
            </div>
            <div className="req-image">
                <img alt="request" src={IMG_10}></img>
            </div>
       
        </div>
        
    )
}

export default Choice;