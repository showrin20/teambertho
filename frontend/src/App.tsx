import { BrowserRouter as Router, Route , Routes} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Exhibition from "./pages/Exhibition";
import ProjectList from "./pages/ProjectList";
import Contact from "./pages/Contact";

import ShortFilms from "./pages/ShortFilms";
import Footer from "./components/Footer";
import Signin from './pages/signin';
import Signup from './pages/signup';
import Profile from './pages/profile';
import Dashboard from "./pages/dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
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
        <Route path="/signin"  element={<Signin/>} />
        <Route path="/signup"  element={<Signup/>} />
        <Route path="/profile"  element={<Profile/>} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

      </Routes>
      <Footer/>

    </Router>
    
    </>
  )
}

export default App
