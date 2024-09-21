import { Link } from "react-router-dom"
import "./style.css"
import arrowBack from "../../images/retour.png"

function Return() {

    return(
        <div className="retour">
            <Link to="/Accueil"><img src={arrowBack} atl="retour" /><span>Retour</span></Link>
        </div>
    )
}

export default Return