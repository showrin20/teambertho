// src/components/Approach.tsx
import React from 'react';
import VisualImage from '../assets/Approach/Visual.png';
import AudioImage from '../assets/Approach/Audio.png';
import ReadingImage from '../assets/Approach/Reading.png';
import KinestheticImage from '../assets/Approach/Kinaesthetic.png';


const Approach: React.FC = () => {
  return (
    <section className="w-full bg-gray-100 py-16 px-6 text-center relative">
      <h5 className="text-4xl font-bold text-black drop-shadow-lg">OUR APPROACH</h5>
      <p className="mt-4 max-w-2xl mx-auto text-lg text-black drop-shadow-lg">
        Team Bertho’s activities are categorized into the four base learning styles: Visual, Audio, Reading and Kinesthetic.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
        {[
          { src: VisualImage, label: "Visual" },
          { src: AudioImage, label: "Audio" },
          { src: ReadingImage, label: "Reading" },
          { src: KinestheticImage, label: "Kinaesthetic" }
        ].map(({ src, label }) => (
          <div key={label} className="flex flex-col items-center transition-transform transform hover:scale-105">
            <img src={src} alt={`${label} Learning`} className="w-[50%]" />
            <h3 className="mt-2 text-lg font-semibold text-black drop-shadow-lg">{label}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Approach;
