import Return from "../../components/return"
import "./style.css"

function Error() {
    return(
    <div>
        <div className="divRetourError">
        <Return />
        </div>
            <div className="msg"><p>Oups <span>!</span> Cette page n'existe pas !</p></div>
            <div className="quatre">
                <p id="quatre">404</p>
            </div>
    </div>
    )
}

export default Error