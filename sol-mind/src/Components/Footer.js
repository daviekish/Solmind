import "./FooterStyles.css"

const Footer = () => {
    return(
        <div className="footer">
            <div className="top">
                <div>
                    <h1>Solmind</h1>
                    <p>What mental health needs is more sunlight, more candor, and more unashamed conversation.<br></br><em>-Glenn Close</em></p>
                    </div>
                    
                    <div>
                        <a href="/">
                            <i className="fa-brands fa-facebook-square"></i>
                        </a>
                        <a href="/">
                            <i className="fa-brands fa-instagram-square"></i>
                         </a>
                        <a href="/">
                            <i className="fa-brands fa-behance-square"></i>
                        </a>
                        <a href="/">
                            <i className="fa-brands fa-twitter-square"></i>
                        </a>
                    </div>
                </div>
            <div/>

            <div className="bottom">
                <div>
                    <h4>Location</h4>
                    <a href="/">Change log</a>
                    <a href="/">Status</a>
                    <a href="/contact">Contact us</a>
                    <a href="/">Policy Licences</a>
                </div>
                <div>
                    <h4>Project</h4>
                    <a href="/">GitHub</a>
                    <a href="/">Issues</a>
                    <a href="/">Project</a>
                       
                </div>
                <div>
                    <h4>Help</h4>
                    <a href="/">Support</a>
                    <a href="/">Troublshooting</a>
                    <a href="/">Contact us</a>
                        
                </div>
                <div>
                    <h4>Policies</h4>
                    <a href="/">Terms and Conditions</a>
                    <a href="/">Status</a>
                    <a href="/">License</a>
                    <a href="/">Policy Licences</a>
                </div>
                </div>
         
        </div>
    )
    
}

export default Footer; 