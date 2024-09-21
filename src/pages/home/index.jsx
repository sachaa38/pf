
import Description from "../../components/description/index.jsx";
import SectionProjet from "../../components/projet/index.jsx";
import Header from "../../components/header/index.jsx";
import Contact from "../../components/contact/index.jsx";
import SectionVide from "../../components/sectionVide/index.jsx";

function Home() {

    return(
<div>
    <Header />
    <SectionVide />
    <Description />
    <SectionProjet />
    <Contact />
</div>
    )
}

export default Home