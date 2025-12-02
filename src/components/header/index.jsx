import photopp from "../../images/IMG_20230101_152028_285.webp"
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
                                <p>Après 3 années passées à faire du recrutement et du commerce dans des société de services, j'ai entammé une 
                                    reconversion professionnelle en tant que <b>développeur Web</b>.
                                </p>
                                <p>Passionné par ce domaine depuis mon adolescence, je me suis formé et ai déjà pu réalisé de nombreux projets faisant appel à différents outils de développement.
                                </p>
                                <p>Je me porte garant du bon fonctionnement de vos <b>sites Web</b> et <b>applications Web</b>.
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