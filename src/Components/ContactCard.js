import '../CSS/Home.css';
import '../CSS/ContactCard.css';


function ContactCard() {
    return (
        <div>
            <div className="card ContactCard" >
                <div className="card-body">
                    <h5 className="card-title">Want to boost your business with <span className="brandcolor">Aero2Astro</span> ?</h5>
                    <p className="card-text">Let's talk to make it happen.</p>
                    <a href="/" className="btn btn-primary">Get Demo</a>
                </div>
            </div>
        </div>
    )
}

export default ContactCard
