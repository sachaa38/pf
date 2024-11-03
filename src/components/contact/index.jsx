import "./style.css"
import photopp from "../../images/IMG_20230101_152028_285.webp"

function Contact() {

    return (
        <div className="footer">
        <div className="content-contact-card">
            <h2>Parlons de votre projet</h2>
            <div className="img-and-text-footer">
            <div className="img-contact">
                <img src={photopp} alt="Sacha Antoniotto" />
            </div>
            <div className="barre-v"></div>
            <div className="info-contact-content">
                <div className="contact-phrase1">Besoin de discuter de votre projet et obtenir l'avis d'un expert ?</div>
                <div className="contact-phrase2"><a href="mailto:santoniotto@gmail.com">Contactez moi par mail</a> ou directement par téléphone au <a href="tel:+330688887782">06 88 88 77 82</a>.</div>
                
            </div>
           </div>
        </div>
        </div>
    )
}

export default Contact