// src/components/ProjectsSection.tsx
import React from 'react';

// Import images for the project section
import projectImg1 from '../assets/Projects/projects1.jpg';
import projectImg2 from '../assets/Projects/projects2.jpg';
import projectImg3 from '../assets/Projects/projects3.jpg';
import projectImg4 from '../assets/Projects/projects4.jpg';
import projectImg5 from '../assets/Projects/projects5.jpg';
import projectImg6 from '../assets/Projects/projects6.jpg';
import projectImg7 from '../assets/Projects/projects7.jpg';
import projectImg8 from '../assets/Projects/projects8.jpg';
 import About from '../assets/Backgrounds/About.jpg';


const ProjectsSection: React.FC = () => {
  // Array of project images
  const projectImages = [
    projectImg1,
    projectImg2,
    projectImg3,
    projectImg4,
    projectImg5,
    projectImg6,
    projectImg7,
    projectImg8,
  ];

  return (
    <section
      className="w-full bg-yellow-500 py-16 px-6 text-center"
      style={{
        backgroundImage: `url(${About})`, // Background image
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2 className="text-4xl font-bold text-white">OUR PROJECTS</h2>
      <p className="mt-4 max-w-3xl mx-auto text-lg text-white">
        From books to films, Team Bertho runs multiple creative projects, including 'Human Heroes' and 'Fueling Hope.'
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
        {projectImages.map((img, index) => (
          <div key={index} className="flex justify-center">
            <img src={img} alt={`Project ${index + 1}`} className="w-full h-auto rounded-lg shadow-lg" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
