import "./Herostyles.css";
function Hero(props){
    return(
        <>
        <div className={props.cName}>
        <img alt="homedeco"src={props.heroImg}/>
        <div className="hero-text">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <a href={props.url } className={props.btnClass}> {props.btnText} </a>
        </div>
        </div>
        </>
    )
}
export default Hero;