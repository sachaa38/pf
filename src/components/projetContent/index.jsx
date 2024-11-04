import { useParams } from "react-router-dom"
import projets from "../../assets"
import "./style.css"
import arrLeft from "../../images/arrow-left.png"
import arrRight from "../../images/arrow-right.png"
import { useEffect } from "react"
import { Link } from "react-router-dom"



function ProjetContent() {
    const { idProjet } = useParams();
    const projet = projets[idProjet]
    const idProjetInt = parseInt(idProjet)

    const previousId = idProjetInt === 0 ? projets.length - 1 : idProjetInt - 1
    const nextId = idProjetInt === projets.length -1 ? 0 : idProjetInt + 1

    useEffect(() => {
    }, [idProjet]);

    return(

        <div className="projet-contener">
            <div className="projet-arrow-and-title">
                    <Link to={`/Projet/${previousId}`}><img className="arrow-car L"  src={arrLeft} alt="Projet-précendant" /></Link>
                <div className="titre-and-barreH">
                <h2>{projet.titre}</h2>
                    
                </div>
                <Link to={`/Projet/${nextId}`}><img className="arrow-car R" src={arrRight} alt="Projet-précendant" /></Link>
            </div>
            <div className="projet-content">
                
                {/* <div className="barre-h"></div> */}
                <div className="content-para-barre">
                    <div className="barre-v"></div>
                    <div className="p-desc">{projet.description}</div>
                </div>
                <div className="contener-competence">
                <div className="projet-competence-content">
                    <span id="tech-utilise">Technologie utilisées</span> 
                    <div className="competence-utilise">{projet.logoComp.map((logo, index) => (
                        <img key={index} src={logo} alt="logo" />
                ))}</div>
                </div>
                </div>
                <video width="600" controls key={projet.video}>
                    <source src={projet.video} type="video/mp4" />
                    Votre navigateur ne supporte pas la balise vidéo.
                </video>
                <p id="p-video">N'hésitez pas à augmenter la vitesse de lecture de la vidéo</p>

            </div>
        </div>
    )
}

export default ProjetContent