
import Description from "../../components/description/index.jsx";
import SectionProjet from "../../components/projet/index.jsx";
import Header from "../../components/header/index.jsx";
import Contact from "../../components/contact/index.jsx";
import Techno from "../../components/techno"

function Home() {

    return(
<div>
    <Header />
    <Description />
    <Techno />
    <SectionProjet />
    <Contact />
</div>
    )
}

export default Home