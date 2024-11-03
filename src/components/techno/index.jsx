
import "./style.css"
import {competencesData} from "../../assets"



  function Techno() {
    return (
        <div className="selectionTechno">
            <h2>Les technologies</h2>
            <div className="technoContainer">
                {competencesData.map((competence, index) => (
                    <div key={index} className="competence-item">
                        <img src={competence.image} alt={`${competence.nom} logo`} className="competence-logo" />
                        <h3 className="competence-name">{competence.nom}</h3>
                        {/* <p className={`competence-lieu ${competence.lieu === "Openclassroom" ? "openclassroom" : competence.lieu === "Projet perso" ? "projet-perso" : ""}`}>{competence.lieu}</p> */}
                    </div>
                ))}
            </div>         
        </div>
    );
}
export default Techno
