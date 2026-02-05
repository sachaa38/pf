import photopp from "../../images/SachaPP.jpg"
import Button from "../button"
import Description from "../description"
import "./style.css"
function Header() { 
    return (
        <div className="header">
            <div className="header-contact-and-barreV">
                <div className="barre-v"></div>
            <div className="header-contact">
            <a href="mailto:santoniotto@gmail.com">santoniotto@gmail.com</a>
            <a href="tel:+330688887782">06 88 88 77 82</a>
            </div>
            </div>
            <div className="content-img-and-info">
                 
                <div className="content-info">

                    
                    <p className="name">Sacha Antoniotto</p>
               
                    <p className="job">Mon portfolio</p>
                    <Button />
                    
                </div>
               
            </div> 
            <div className="text-img-content">
                <div className="text-description">
                    <div className="content-para-barre">
                    <div className="barre-v"></div>
                        <div className="p-desc">
                                   <p>
                            Vous trouverez sur ce site une sélection de <b>mes projets</b> réalisés dans le cadre de mes formations et initiatives personnelles.
                          </p>
                          <p>


                            Passionné par l’informatique depuis mon adolescence, je me suis formé en autodidacte et à travers mes études, et j’ai pu concrétiser plusieurs projets variés, principalement en développement web et developpement d'applications mobile. Je continue aujourd’hui à développer mes compétences en IA. Cette sélection reflète mon travail en developpement web et application.
                          </p>
                        </div>
                    </div>
                </div>
                
                <img className="photo-description" src={photopp} alt="Photo de Sacha Antoniotto" />
                
                
            </div>
        </div>
    )
}

export default Header