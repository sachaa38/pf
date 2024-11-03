import Home from './pages/home';
import Error from './pages/error';
import PresentationProjet from './pages/PresentationProjet';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/apropos';
import './style.css'

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/pf" element={<Home />} />
        <Route path="/A-propos" element={<About />} />
        <Route path="/Projet/:idProjet" element={<PresentationProjet />} />
      </Routes>
    </Router>
  );
}

export default App;
