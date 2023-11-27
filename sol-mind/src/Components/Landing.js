import "./LandingStyles.css";
import LandingData from "./LandingData";

function Landing (){
return (
    <div className="Header">
        <h4>Learn a little about yourself
            
        </h4>
        

    <div className="Headercard">
        <LandingData
            icon ="fa-brands fa-pagelines"
            heading="Lorem ipsum dolor"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
        />

        <LandingData
            icon ="fa-solid fa-fire"
            heading="Lorem ipsum dolor"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
        />
        
        <LandingData
            icon ="fa-solid fa-seedling"
            heading="Lorem ipsum dolor"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
        />
    </div>
    </div>
);
}

export default Landing;