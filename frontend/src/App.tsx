import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Exhibition from "./pages/Exhibition";
import ProjectList from "./pages/ProjectList";
import Contact from "./pages/Contact";
import ShortFilms from "./pages/ShortFilms";
import Signin from './pages/signin';
import Signup from './pages/signup';
import Profile from './pages/profile';

import Dashboard from "./pages/dashboard";
import DashboardHome from "./pages/DashboardHome";
import Users from './pages/dashboard/Users';
import Blogs from './pages/dashboard/blogs';

import ProtectedRoute from "./components/ProtectedRoute";
import './App.css';

function AppRoutes() {
  const location = useLocation();
  const hideLayout = location.pathname.startsWith('/dashboard');

  return (
    <>
      {!hideLayout && <Navbar />}

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectList />} />
        <Route path="/exhibition" element={<Exhibition />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/short-films" element={<ShortFilms />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />

        {/* Protected Dashboard Routes */}
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }>
          <Route index element={<DashboardHome />} />
          <Route path="users" element={<Users />} />
          <Route path="blogs" element={<Blogs />} />
        </Route>
      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}
