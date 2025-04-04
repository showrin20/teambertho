import { BrowserRouter as Router, Route , Routes} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Exhibition from "./pages/Exhibition";
import ProjectList from "./pages/ProjectList";

import './App.css'

function App() {

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={  <div className="w-full h-full">
      <Home />
    </div>} />
        <Route path="/projects" element={<ProjectList />} />
        <Route path="/exhibition" element={<Exhibition />} />

      </Routes>
    
    </Router>
    
    </>
  )
}

export default App
