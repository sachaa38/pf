import { Link } from "react-router-dom"
import "./style.css"
import arrowBack from "../../images/arrow-left.png"

function Return() {

    return(
 
        <div className="retour">
            <Link to="/pf"><img src={arrowBack} atl="retour" /><span>Retour</span></Link>
        </div>
    )
}

export default Return