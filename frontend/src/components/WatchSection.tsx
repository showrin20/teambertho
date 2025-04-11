// src/components/WatchSection.tsx
import React from 'react';
import Watch from '../components/Watch'; // Adjust path if necessary
import watch from '../assets/Backgrounds/Watch.jpg';


interface WatchSectionProps {
  videos: { src: string; title: string }[];
}

const WatchSection: React.FC<WatchSectionProps> = ({ videos }) => {
  return (
    <section
      className="w-full bg-yellow-500 py-16 px-6 text-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${watch})` }}
    >
      <h2 className="text-4xl font-bold">WATCH</h2>
      <div className="mt-6">
        <Watch videos={videos} />
      </div>
    </section>
  );
};

export default WatchSection;
