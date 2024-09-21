import "./style.css"
import projets from "../../assets/index"
import { Link } from "react-router-dom"

function SectionProjet() {

    return(
        <div className="section-projet">
            <h2>Mes projets</h2>
    
            <div className="content-projet">
                {projets.map((projet, index) => (
                    <div key={index} className="content-card-projet">
                        <div className="card-haute">
                            <div className="title-and-label">
                                <h3>{projet.titre}</h3>
                                <div className="circle">
                                {projet.formation && <p className="label-projet">Projet formation</p>}
                                </div>
                            </div>
                            <div className="img-and-link">
                                <img className="img-card" src={projet.image}/>
                                <Link to={`/Projet/${projet.id}`}><p>En savoir plus</p></Link>
                            </div>
                        </div>
                        <div className="competence-content">
                        <p><b>Compétences techniques :</b> {projet.competences}</p>
                        </div>
                        <div className="circle-container">
</div>
                    </div>
                ))}

            </div>
        </div>


    )
}

export default SectionProjet