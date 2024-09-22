import "./style.css"
import photopp from '../../images/IMG_20230101_152028_285.webp'

function Description() {

    return (
        <div className="description-content">
            <h2 className="title-description">À propos de moi</h2> 
            <div className="text-img-content">
                <div className="text-description">
                    <div className="content-para-barre">
                    <div className="barre-v"></div>
                        <div className="p-desc">
                                <p>Après 3 années passées à faire du recrutement et du commerce dans des société de services, j'ai entammé une 
                                    reconversion professionnelle en tant que <b>développeur WEB</b>.
                                </p>
                                <p>Passionné par ce domaine depuis mon adolescence, je me suis formé et ai déjà pu montrer réalisé de nombreux projets faisant appel à différents outils de développement.
                                </p>
                                <p>Je me porte garant du bon fonctionnement de vos <b>sites WEB</b>.
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