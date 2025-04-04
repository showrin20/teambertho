import { BrowserRouter as Router, Route , Routes} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Exhibition from "./pages/Exhibition";
import ProjectList from "./pages/ProjectList";
import Contact from "./pages/Contact";

import ShortFilms from "./pages/ShortFilms";
import Footer from "./components/Footer";

import './App.css'

function App() {

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
    
            <Route path="/" element={<Home />} />

        <Route path="/projects" element={<ProjectList />} />
        <Route path="/exhibition" element={<Exhibition />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/short-films"  element={<ShortFilms/>} />

      </Routes>
      <Footer/>

    </Router>
    
    </>
  )
}

export default App
