import "./style.css"
import Button from "../button"
import SectionVide2 from "../sectionVide2"


function SecondHeader() {


    return (
        <div>
        <div className="second-header">
            <div className="second-name-and-barreV">
                <div className="barre-v"></div>
                <p className="name">Sacha Antoniotto</p>
            </div>
            <div>
                <Button />
            </div>
        </div>
        <SectionVide2 />
        
        </div>
    )
}

export default SecondHeader