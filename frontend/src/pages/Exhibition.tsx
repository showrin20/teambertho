import React from "react";
import Gallery from "../components/Gallery";

const imageData = [
  { src: "https://picsum.photos/300/200?random=1", title: "A Bend in the Road is Not the End of the Road, Ridita" },
  { src: "https://picsum.photos/300/200?random=2", title: "Know Your Worth, Ridita" },
  { src: "https://picsum.photos/300/200?random=3", title: "Representation Matters, Nasheen" },
  { src: "https://picsum.photos/300/200?random=4", title: "Memory is the Diary That We All Carry About With Us, Oyshi" },
];

const Exhibition = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <header 
        className="relative text-white text-center py-24 bg-cover bg-center"
        style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?art,exhibition')" }}
      >
        <div className="bg-black bg-opacity-50 py-16">
          <h1 className="text-5xl font-bold">EXHIBITION</h1>
          <p className="mt-4 text-lg px-6 max-w-2xl mx-auto">
            A SERIES OF ILLUSTRATIONS PROMPTED FROM OUR COLLECTION OF STORIES AND EXPERIENCES
            SHARED BY PEOPLE ALL ACROSS THE WORLD
          </p>
        </div>
      </header>

      {/* Gallery Component */}
      <Gallery images={imageData} />
    </div>
  );
};

export default Exhibition;
