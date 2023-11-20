import Navbar from "../Components/Navbar";
import IMG_02 from '../Assets/IMG-20.jpg';
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
import ServicesOffered from "../Components/ServicesOffered";
function Service(){
    return(
        <>
         <Navbar/>
        <Hero
        cName="hero"

        heroImg={IMG_02}

        title="Solmind wellness services"

        text="How we can help you"
        
        />
        <ServicesOffered/>
        <Footer/>
        </>
    )
}
export default Service;