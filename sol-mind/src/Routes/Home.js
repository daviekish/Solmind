import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import IMG_06 from '../Assets/IMG-06.jpg';
import Footer from "../Components/Footer";
import Landing from "../Components/Landing";
import Choice from "../Components/Choice";

function Home(){
    return(
        <>
        <Navbar/>
        <Hero
        cName="hero"

        heroImg={IMG_06}

        title="Solmind Wellness"

        text="We Journey together"

        btnText="Get Started"
        url="/service"
        btnClass="show"
        
        />

        <Landing/>
        <Choice/>
        <Footer/>
        </>
    )
}
export default Home;