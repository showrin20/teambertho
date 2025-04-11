import React from "react";

const Features = () => {
  const features = [
    { title: "Collaboration", description: "Work with teams seamlessly." },
    { title: "Project Management", description: "Organize tasks efficiently." },
    { title: "Real-time Updates", description: "Stay updated instantly." },
  ];

  return (
    <div className="bg-gray-50 py-16">
      <h2 className="text-3xl font-bold text-center">Why Choose Team Bertho?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-8 px-6">
        {features.map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold">{feature.title}</h3>
            <p className="text-gray-600 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
