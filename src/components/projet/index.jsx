import "./style.css"
import projets from "../../assets/index"
import { Link } from "react-router-dom"

function SectionProjet() {

    return(
        <div className="section-projet">
            <h2>Mes projets</h2>
    
            <div className="content-projet">
                {projets.map((projet, index) => (

                    <div key={index} className="card">
                    
                            <div className="title-and-label">
                                <h3>{projet.titre}</h3>
                            </div>
                            <div className="projet-desc-min">
                                <p>{projet.desc}</p>
                            </div>
                            <div className="competence-content">
                                <div className="content-logo">
                                {projet.logoComp.map((logo, indexLogo) => (
                                    
                                        <img key={indexLogo} src={logo} />
                                   
                                ))} </div>
                        {/* <p><b>Compétences techniques :</b> {projet.competences}</p> */}
                        <Link to={`/Projet/${index}`}><p>En savoir plus</p></Link>
                        </div>
                    </div>
                ))}

            </div>
        </div>


    )
}

export default SectionProjet