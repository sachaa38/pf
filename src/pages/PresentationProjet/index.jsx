import projets from "../../assets"
import ProjetContent from "../../components/projetContent"
import Return from "../../components/return"
import SecondHeader from "../../components/secondHeader"
import Contact from "../../components/contact"

function PresentationProjet() {

    return(
        <div>
            <SecondHeader />
            <ProjetContent />
            <Contact />

        </div>
    )
}

export default PresentationProjet