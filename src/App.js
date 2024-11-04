import Home from './pages/home';
import Error from './pages/error';
import PresentationProjet from './pages/PresentationProjet';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/toScroll';
import './style.css'

function App() {
  return (
    
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/pf" element={<Home />} />
        <Route path="/Projet/:idProjet" element={<PresentationProjet />} />
      </Routes>
    </Router>
  );
}

export default App;
