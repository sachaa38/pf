import photopp from "../../images/IMG_20230101_152028_285.jpg"
import Button from "../button"
import "./style.css"
function Header() { 
    return (
        <div className="header">
            <div className="header-contact-and-barreV">
                <div className="barre-v"></div>
            <div className="header-contact">
            <a href="mailto:santoniotto@gmail.com">santoniotto@gmail.com</a>
            <a href="tel:+330688887782">06 88 88 77 82</a>
            </div>
            </div>
            <div className="content-img-and-info">
                 
                <div className="content-info">
                    <img className="img-header" src = {photopp} alt="Sacha Antoniotto"></img>
                    <p className="name">Sacha Antoniotto</p>
                    <p className="job">Développeur freelance | Junior et motivé</p>
                    <Button />
                    
                </div>
               
            </div>
        </div>
    )
}

export default Header