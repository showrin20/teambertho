// src/components/WatchSection.tsx
import React from 'react';
import Watch from '../components/Watch'; // Adjust path if necessary

interface WatchSectionProps {
  videos: { src: string; title: string }[];
}

const WatchSection: React.FC<WatchSectionProps> = ({ videos }) => {
  return (
    <section
      className="w-full bg-yellow-500 py-16 px-6 text-center"
      style={{ backgroundImage: "url('../assets/Backgrounds/Watch.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <h2 className="text-4xl font-bold">WATCH</h2>
      <div className="mt-6">
        <Watch videos={videos} />
      </div>
    </section>
  );
};

export default WatchSection;
