import "./Contactfromstyles.css"

function ContactForm() {
    return( 
        
        <div className="form-container">
            <div className="location">

            <h2>Find us</h2>
                <p>
                Chyulu Road-Mara Road Junction <br></br>KMA Center, UpperHill Nairobi <br></br><br></br>
                info@solmindwellness.com
                <br></br><br></br>
                Tel: +254710322345
                <br></br><br></br>
                OPENING HOURS<br></br>
                Tue-Fri : 9am - 4pm<br></br>
                Saturday: 9am - 1pm<br></br>
                Sunday: closed<br></br>
                Holidays: 9am - 1pm

                </p>
                
            </div>
            <form>
                <input placeholder="Name"/>
                <input placeholder="Email"/>
                <input placeholder="Subject"/>
                <textarea placeholder="Message" rows="7" className="textarea"></textarea>
                <button>Send Message</button>
            </form>
        </div>
    )
    
    
}

export default ContactForm;