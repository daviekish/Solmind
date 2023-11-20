
import IMG_09 from '../Assets/IMG-09.jpg';
import IMG_11 from '../Assets/IMG-11.jpg';
import IMG_12 from '../Assets/IMG-12.jpg';
import "./Blog.css";
import BlogalertData from "../Components/BlogalertData";


function Blogalert (){
 
 return(

    <div className="trip">
        <div className='quote'>
            <h1>Blog Post</h1>
            
            <p>People will need help and support either intermittently or continuously, but their mental health experience no more defines them than their sexuality, gender, personality or any other aspect of their identity. <br></br> <em>Mike Slade, Lindsay oades, & Aaron Jarden, 2017</em></p>
        
        </div>
           
        <div className="tripcard">

            <BlogalertData
                img={IMG_09}
                heading = "Mental Health"
                text ="When individuals experience poor mental health, they may start to withdraw and can experience
                debilitating symptoms such as depression and anxiety. Poor mental health can also affect physical health,
               as individuals might react by neglecting their physical  ."


            />

            <BlogalertData
                img={IMG_12}
                heading = "lorem ipsum"
                text ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Curabitur euismod turpis ac quam interdum, sit amet maximus ligula elementum.
                Praesent lectus risus lorem!"

                

            />
            <BlogalertData
                img={IMG_11}
                heading = "loerium ipsum"
                text ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Curabitur euismod turpis ac quam interdum, sit amet maximus ligula elementum.
                Praesent lectus risus!"

                

            />
       </div>

       <div className="blog-card">
       <div className="q-card">
            <h4>Mental Health</h4>    
            <p>When individuals experience poor mental health, they may start to withdraw and can experience
             debilitating symptoms such as depression and anxiety. Poor mental health can also affect physical health,
            as individuals might react by neglecting their physical 
            health through inconsistent eating habits, poor hygiene, and general malaise (Ohrnberger et al., 2017).
            This article will dig into quotations that can help empower individuals with mental health difficulties. 
            The quotations seek to inspire those who are experiencing mental health issues and provide education surrounding 
            mental health and the stigma around those who experience difficulties.
                </p>  
        </div>
        <div className="q-card">
            <h4>loerium ipsum</h4>    
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
           Curabitur euismod turpis ac quam interdum, sit amet maximus ligula elementum.
           Praesent lectus risus, iaculis sit amet nunc quis, pretium aliquam leo. Morbi efficitur
           commodo justo a finibus. Donec lorem lectus, ullamcorper eget commodo sit amet, sodales
           non neque. Vivamus sapien massa, scelerisque id sodales sit amet, rutrum in ex.
           Curabitur tellus tellus, placerat vitae gravida scelerisque, elementum at metus. 
           Curabitur a lobortis lectus, vel bibendum lorem!"
                </p>  
        </div>
        
        <div className="q-card">
            <h4>loerium ipsum</h4>    
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
           Curabitur euismod turpis ac quam interdum, sit amet maximus ligula elementum.
           Praesent lectus risus, iaculis sit amet nunc quis, pretium aliquam leo. Morbi efficitur
           commodo justo a finibus. Donec lorem lectus, ullamcorper eget commodo sit amet, sodales
           non neque. Vivamus sapien massa, scelerisque id sodales sit amet, rutrum in ex.
           Curabitur tellus tellus, placerat vitae gravida scelerisque, elementum at metus. 
           Curabitur a lobortis lectus, vel bibendum lorem!"
                </p>  
        </div>
        
       </div>
        
       
    </div>

 )

        
}
export default Blogalert;
