import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Componets/Navbar/Navbar';
import Home from './Pages/Home/Home';
import About from './Pages/About';
import Contact from './Pages/Contact/Contact';
import Projects from './Pages/Projects/Projects';
import Lenis from 'lenis'
import './App.css'
import 'lenis/dist/lenis.css'

const App = () => {
 
  return (
    <Router>
     <Navbar/> 
     
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path ="/Projects" element = {<Projects / >} />
        
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
