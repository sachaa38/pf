import SecondHeader from "../../components/secondHeader"
import Contact from "../../components/contact"
import Return from "../../components/return"
import { competencesAcquises } from "../../assets"
import "./style.css"
import Collapse from "../../components/collapse"

function About() {



    return(

        <div>
            <SecondHeader />
                <div className="about">
                    <div className="presentation">
                        <h1>À propos de moi</h1>
                        <p>Je m'appelle Sacha et je suis un développeur en reconversion. Après avoir travaillé dans des domaines variés, notamment le recrutement et le développement commercial pour des sociétés de conseils, j'ai décidé de me consacrer pleinement au développement web et à la programmation, un domaine qui m'a toujours attiré.</p>
                        <p>Récemment, j'ai décidé de franchir un cap en me formant à Python, après plusieurs années d'intérêt pour la programmation. Depuis, je continue à suivre des formations pour améliorer mes compétences en développement backend et web, avec l'ambition de proposer mes services en tant que freelance et de collaborer sur des projets innovants.</p>
                        <p>Je parle anglais et russe à un niveau correct, et je possède également des bases en espagnol. Mon parcours professionnel m'a permis d'acquérir des compétences polyvalentes et d'apprendre à collaborer avec des personnes venant d'horizons divers.</p>
                    </div>
                    <div>
                        <Collapse content= {competencesAcquises}/>
                        
                    </div>
                    <p className="lastP">En tant que freelance, je suis à la recherche de projets où je peux appliquer mes compétences techniques pour résoudre des problèmes et créer des solutions efficaces. N'hésitez pas à me contacter pour discuter de vos besoins ou projets, je suis toujours intéressé par de nouveaux défis !</p>
                </div>
            <Contact />


        </div>

    )
}

export default About