import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-10">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
        {/* Logo & Brand Name */}
        <div className="flex items-center space-x-3">
          <img src="/images.png" alt="Team Bertho Logo" className="h-10 w-10" /> 
          <h5 className="text-2xl font-bold text-gray-800">Team Bertho</h5>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-600 hover:text-blue-500">Home</Link>
          <Link to="/exhibition" className="text-gray-600 hover:text-blue-500">Exhibition</Link>
          <Link to="/short-films" className="text-gray-600 hover:text-blue-500">Short Films</Link>
          <Link to="https://www.rokomari.com/book/209447/fueling-hope" className="text-gray-600 hover:text-blue-500">Shop</Link>
          <Link to="/contact" className="text-gray-600 hover:text-blue-500">Contact Us</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
