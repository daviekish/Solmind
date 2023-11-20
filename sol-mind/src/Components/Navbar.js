import { Component } from "react";
import "./Navbarstyles.css"
import { MenuItems } from "./Menuitems";
import { Link } from "react-router-dom";


class Navbar extends Component{
    state = {clicked:false};
    handleClick = () =>{
        this.setState({clicked: !this.state.clicked})
    }

    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
            isScrolled: false,
        };
    }
    componentDidMount(){
        window.addEventListener("scroll", this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll = () => {
        if (window.scrollY > 10) {
            this.setState({ isScrolled: true });
        }else{
            this.setState({ isScrolled: false });
        }
    };
    render(){
        const { isScrolled } = this.state;
        
        return(
            <nav className={`NavbarItems ${isScrolled ? "scrolled" : ""}`}>

                <h1 className="logo">Solmind</h1>
                 
                <i className="menu-icons" onClick={this.handleClick}>

                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                    
                </i>

                <ul className={this.state.clicked ? 
                "nav-menu active" : "nav-menu"}> 

                {MenuItems.map((item, index)=> 
                {
                    return(

                        <li key={index}>

                        <Link className={item.cName} to={item.url}>

                            <i className={item.icon}>

                                </i>{item.title}</Link>
                    </li>
                    );
                })}
                    
                </ul>
            </nav>
        )
    }
}export default Navbar;