import React, { useEffect, useState } from "react";

// Define a TypeScript interface for the project data
interface Project {
  _id: string;
  title: string;
  description: string;
  image: string;
}

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]); // Initialize the projects state with the defined type

  useEffect(() => {
    console.log("Fetching projects...");
    fetch("http://localhost:5000/api/projects")
      .then((res) => {
        console.log("Received response:", res);
        return res.json();
      })
      .then((data) => {
        console.log("Received data:", data);
        setProjects(data);
      })
      .catch((error) => console.error("Error fetching projects:", error));
  }, []); // Empty dependency array ensures it runs only once when the component mounts

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-center">Our Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-6">
        {projects.map((project) => (
          <div key={project._id} className="bg-white p-5 rounded-lg shadow-lg transition hover:scale-105">
            <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-lg" />
            <h3 className="text-xl font-semibold mt-3">{project.title}</h3>
            <p className="text-gray-600">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
