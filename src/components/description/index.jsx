import "./style.css"
import photopp from '../../images/IMG_20230101_152028_285.webp'
import { Link } from "react-router-dom"

function Description() {

    return (
        <div className="description-content">
            <h2 className="title-description">À propos de moi</h2> 
            <div className="text-img-content">
                <div className="text-description">
                    <div className="content-para-barre">
                    <div className="barre-v"></div>
                        <div className="p-desc">
                          <p>
                            Vous trouverez sur ce site une sélection de <b>mes projets</b> réalisés dans le cadre de mes formations et initiatives personnelles.
                          </p>
                          <p>
                            Passionné par l’informatique depuis mon adolescence, je me suis formé en autodidacte et à travers mes études, et j’ai pu concrétiser plusieurs projets variés, principalement en développement web et automatisation. Je continue aujourd’hui à développer mes compétences en data et IA, et cette sélection reflète mon travail actuel ainsi que mon potentiel dans ces domaines.
                          </p>
                        </div>


                    </div>
                </div>
                
                <img className="photo-description" src={photopp} alt="Photo de Sacha Antoniotto" />
                
                
            </div>


        </div>
    )
}

export default Description
