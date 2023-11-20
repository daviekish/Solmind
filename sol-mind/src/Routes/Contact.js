import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import IMG_04 from '../Assets/IMG-04.jpg';
import Footer from "../Components/Footer";
import ContactForm from "../Components/ContactForm";
function Contact(){
    return(
        <>
        <Navbar/>
        <Hero
        cName="hero"

        heroImg={IMG_04}

        title="Contact us here"

        text="You are our priority"
        
        />

        <ContactForm/>
        <Footer/>
        </>
    )
}
export default Contact;