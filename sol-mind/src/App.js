import './App.css';
import Home from "./Routes/Home";
import About from "./Routes/About";
import Contact from "./Routes/Contact";
import Service from "./Routes/Service";
import Blog from "./Routes/Blog";
import { Routes,Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Routes>

        <Route path="/" element={ <Home/> }/>
        <Route path="/about" element={ <About/>}/>
        <Route path="/service" element={ <Service/>}/>
        <Route path="/contact" element={ <Contact/>}/>
        <Route path="/contact" element={ <Service/>}/>  
        <Route path="/blog" element={ <Blog/>}/>  

      </Routes>    
      
    </div>
  );
}

export default App;
