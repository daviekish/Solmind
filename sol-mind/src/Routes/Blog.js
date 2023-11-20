import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import IMG_08 from '../Assets/IMG-08.jpg';
import Footer from "../Components/Footer";
import Blogalert from "../Components/Blogalert";
function Blog(){
    return(
        <>
         <Navbar/>
        <Hero
        cName="hero"

        heroImg={IMG_08}

        title="Mental Health Ed"

        text="What Does Mental Health mean To You"
        
        />

        <Blogalert/>
        
        <Footer/>
        </>
    )
}
export default Blog;