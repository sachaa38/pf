import Home from './pages/home';
import Header from './components/header'
import Contact from './components/contact';
import SectionVide from './components/sectionVide'
import Error from './pages/error';
import PresentationProjet from './pages/PresentationProjet';
import ScrollToTop from './components/ScollToTop';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './style.css'

function App() {
  return (
    
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/Accueil" element={<Home />} />
        <Route path="/Projet/:idProjet" element={<PresentationProjet />} />
      </Routes>
    </Router>
  );
}

export default App;
