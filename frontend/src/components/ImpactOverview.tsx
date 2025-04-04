// src/components/ImpactOverview.tsx
import React from 'react';
import Counter from '../components/Counter'; // Adjust path if necessary
import Countdown from '../assets/Backgrounds/Countdown.jpg';

const ImpactOverview: React.FC = () => {
  return (
    <section
      className="w-full"
      style={{
        backgroundImage: `url(${Countdown})`, // Background image
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2 className="text-4xl  text-black py-1 font-bold">AN OVERVIEW OF OUR IMPACT</h2>
      <Counter />
    </section>
  );
};

export default ImpactOverview;
