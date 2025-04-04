import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-blue-100 h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-5xl font-bold text-gray-800">Welcome to Team Bertho</h1>
      <p className="text-lg text-gray-600 mt-4">
        A platform for managing and showcasing amazing projects.
      </p>
      <Link to="/projects">
        <button className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
          View Projects
        </button>
      </Link>
    </div>
  );
};

export default Hero;
