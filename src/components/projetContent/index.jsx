import { useParams } from "react-router-dom"
import projets from "../../assets"
import "./style.css"

function ProjetContent() {
    const { idProjet } = useParams();
    const projet = projets[idProjet]


    return(

        <div className="projet-contener">
            <div className="titre-and-barreH">
                <h1>Portfolio</h1>
                <div className="barre-h"></div>
            </div>
            <div className="projet-content">
                <h2>{projet.titre}</h2>
                <div className="content-para-barre">
                    <div className="barre-v"></div>
                    <div className="p-desc">{projet.description}</div>
                </div>
                <div className="contener-competence">
                <div className="projet-competence-content"><span id="tech-utilise">Technologie utilisées</span> <span id="competence-utilise">{projet.competences}</span></div>
                </div>
                <img src={projet.image} alt={projet.titre} />
            </div>
        </div>
    )
}

export default ProjetContent