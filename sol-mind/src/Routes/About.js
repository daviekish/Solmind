import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import IMG_22 from '../Assets/IMG-22.jpg';
import Footer from "../Components/Footer";
import AboutUs from "../Components/Aboutus";
function About(){
    return(
        <>
        <Navbar/>
        <Hero
        cName="hero"

        heroImg={IMG_22}

        title="Learn About Us"

        text="Who we are and our company"
        
        />
        <AboutUs/>
        <Footer/>
        </>
    )
}
export default About;