import React from "react";
import { Link } from "react-router-dom";
import { FaUser, FaSignInAlt, FaUserPlus } from "react-icons/fa"; // Importing icons

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-10">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
        {/* Logo & Brand Name */}
        <div className="flex items-center space-x-3">
  <a href="/" className="flex items-center space-x-3">
    <img src="/images.png" alt="Team Bertho Logo" className="h-10 w-10" />
    <h5 className="text-2xl font-bold text-gray-800">Team Bertho</h5>
  </a>
</div>


        {/* Navigation Links - Centered */}
        <div className="flex-1 flex justify-center space-x-8">
          <Link to="/" className="text-gray-600 hover:text-blue-500">Home</Link>
          <Link to="/exhibition" className="text-gray-600 hover:text-blue-500">Exhibition</Link>
          <Link to="/short-films" className="text-gray-600 hover:text-blue-500">Short Films</Link>
          <Link to="https://www.rokomari.com/book/209447/fueling-hope" className="text-gray-600 hover:text-blue-500">Shop</Link>
          <Link to="/contact" className="text-gray-600 hover:text-blue-500">Contact Us</Link>
        </div>

        {/* User-related Links with Icons */}
        <div className="flex space-x-4">
          <Link to="/signin" className="text-gray-600 hover:text-blue-500 flex items-center space-x-1">
            <FaSignInAlt /> <span>Signin</span>
          </Link>
          <Link to="/signup" className="text-gray-600 hover:text-blue-500 flex items-center space-x-1">
            <FaUserPlus /> <span>Signup</span>
          </Link>
          <Link to="/profile" className="text-gray-600 hover:text-blue-500 flex items-center space-x-1">
            <FaUser /> <span>Profile</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
