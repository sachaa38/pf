import { useParams } from "react-router-dom"
import projets from "../../assets"
import "./style.css"
import arrLeft from "../../images/arrow-left.png"
import arrRight from "../../images/arrow-right.png"
import { useState } from "react"
import { Link } from "react-router-dom"


function ProjetContent() {
    const { idProjet } = useParams();
    const projet = projets[idProjet]
    const idProjetInt = parseInt(idProjet)

    const previousId = idProjetInt === 0 ? projets.length - 1 : idProjetInt - 1
    const nextId = idProjetInt === projets.length -1 ? 0 : idProjetInt + 1

    return(

        <div className="projet-contener">
            <div className="projet-arrow-and-title">
                    <Link to={`/Projet/${previousId}`}><img className="arrow-car L"  src={arrLeft} alt="Projet-précendant" /></Link>
                <div className="titre-and-barreH">
                    <h1>Portfolio</h1>
                    <div className="barre-h"></div>
                </div>
                <Link to={`/Projet/${nextId}`}><img className="arrow-car R" src={arrRight} alt="Projet-précendant" /></Link>
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