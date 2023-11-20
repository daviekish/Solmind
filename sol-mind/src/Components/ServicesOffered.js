import "./ServicesStyles.css"
import IMG_00 from '../Assets/IMG-04.jpg';
import IMG_01 from '../Assets/IMG-05.jpg';
import IMG_02 from '../Assets/IMG-21.jpg';
import IMG_03 from '../Assets/IMG-07.jpg';
import IMG_04 from '../Assets/IMG-14.jpg';
import IMG_05 from '../Assets/IMG-15.jpg';
import IMG_06 from '../Assets/IMG-18.jpg';
import IMG_07 from '../Assets/IMG-02.jpg';
import ServicesData from "./ServicesData";

const ServicesOffered = () =>{
    return(
        <div className="destinations">
            <h1>Solmind wellness Services</h1>
            <p>Your mental health is our priority</p>
            
           <ServicesData
           className="first-des"
           
           heading = "Service One"
           text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
           Curabitur euismod turpis ac quam interdum, sit amet maximus ligula elementum.
           Praesent lectus risus, iaculis sit amet nunc quis, pretium aliquam leo. Morbi efficitur
           commodo justo a finibus. Donec lorem lectus, ullamcorper eget commodo sit amet, sodales
           non neque. Vivamus sapien massa, scelerisque id sodales sit amet, rutrum in ex.
           Curabitur tellus tellus, placerat vitae gravida scelerisque, elementum at metus. 
           Curabitur a lobortis lectus, vel bibendum lorem!"

           img1={IMG_00}
           img2={IMG_01}

           
           />

        <ServicesData
        className="first-des-reverse"

           
           heading = "Service Two"
           text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
           Curabitur euismod turpis ac quam interdum, sit amet maximus ligula elementum.
           Praesent lectus risus, iaculis sit amet nunc quis, pretium aliquam leo. Morbi efficitur
           commodo justo a finibus. Donec lorem lectus, ullamcorper eget commodo sit amet, sodales
           non neque. Vivamus sapien massa, scelerisque id sodales sit amet, rutrum in ex.
           Curabitur tellus tellus, placerat vitae gravida scelerisque, elementum at metus. 
           Curabitur a lobortis lectus, vel bibendum lorem!"

           img1={IMG_03}
           img2={IMG_02}

           
           />
           <br></br>
           <br></br>
           <ServicesData
           
           className="first-des"
           
           heading = "Service Three"
           text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
           Curabitur euismod turpis ac quam interdum, sit amet maximus ligula elementum.
           Praesent lectus risus, iaculis sit amet nunc quis, pretium aliquam leo. Morbi efficitur
           commodo justo a finibus. Donec lorem lectus, ullamcorper eget commodo sit amet, sodales
           non neque. Vivamus sapien massa, scelerisque id sodales sit amet, rutrum in ex.
           Curabitur tellus tellus, placerat vitae gravida scelerisque, elementum at metus. 
           Curabitur a lobortis lectus, vel bibendum lorem!"

           img1={IMG_04}
           img2={IMG_05}

           
           />

        <ServicesData
        className="first-des-reverse"

           
           heading = "Service Four"
           text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
           Curabitur euismod turpis ac quam interdum, sit amet maximus ligula elementum.
           Praesent lectus risus, iaculis sit amet nunc quis, pretium aliquam leo. Morbi efficitur
           commodo justo a finibus. Donec lorem lectus, ullamcorper eget commodo sit amet, sodales
           non neque. Vivamus sapien massa, scelerisque id sodales sit amet, rutrum in ex.
           Curabitur tellus tellus, placerat vitae gravida scelerisque, elementum at metus. 
           Curabitur a lobortis lectus, vel bibendum lorem!"

           img1={IMG_06}
           img2={IMG_07}

           
           />
        </div>
    );
};

export default ServicesOffered;