import "./LandingStyles.css";

function LandingData(props){
return(
    <div className="h-card">
        <div className="h-icon">
            <i className={props.icon} alt="cards"></i>
        </div>
        <h3>{props.heading}</h3>
        <p>{props.text}</p>
        <button>Learn more</button>
    </div>
)
}
export default LandingData;