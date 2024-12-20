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
                    <div className="sectionDesc">
                        <div className="divObj">
                            <h3>Contexte & Objectif</h3>
                            <div className="divScroll">
                            {projet.obj.map((obj, index) => (
                                <p className="divScrollP">{obj}</p>
                            ))}
                            </div>
                        </div>
                        <div className="divTache">
                            <h3>Tâches réalisées</h3>
                            <div className="divScroll">
                            {projet.tache.map((tache, index) => (
                                <p className="divScrollP">{tache}</p>
                            ))}
                            </div>
                        </div>
                        {projet.fonction && (
                            <div className="divFonct">
                                <h3>Fonctionnalités</h3>
                                <div className="divScroll">
                                {projet.fonction.map((fonct, index) => (
                                    <p className="divScrollP">{fonct}</p>
                                    
                                ))}
                                </div>
                            </div>
                    )}
                    </div>
                </div>
                <div className="contener-competence">
                <div className="projet-competence-content">
                    <div className="competence-utilise">{projet.logoComp.map((logo, index) => (
                        <img key={index} src={logo} alt="logo" />
                ))}</div>
                </div>
                </div>
                <div className="codeGit">
                    <p>Lien vers le code du projet : {projet.lien}</p>
                </div>
                <div className="divVideo">
                    <h3>Présentation vidéo du projet</h3>
                <video width="600" controls key={projet.video}>
                    <source src={projet.video} type="video/mp4" />
                    Votre navigateur ne supporte pas la balise vidéo.
                </video>
                </div>

            </div>
        </div>
    )
}

export default ProjetContent