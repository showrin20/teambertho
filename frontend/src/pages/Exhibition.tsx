// src/pages/Exhibition.tsx
import React from "react";
import Gallery from "../components/Gallery";
import exhibitionHeader from "../assets/Exhibition.png";

const imageData = [
  { src: "https://picsum.photos/300/200?random=1", title: "A Bend in the Road is Not the End of the Road, Ridita" },
  { src: "https://picsum.photos/300/200?random=2", title: "Know Your Worth, Ridita" },
  { src: "https://picsum.photos/300/200?random=3", title: "Representation Matters, Nasheen" },
  { src: "https://picsum.photos/300/200?random=4", title: "Memory is the Diary That We All Carry About With Us, Oyshi" },
  { src: "https://picsum.photos/300/200?random=5", title: "Keep Your Head High, Nira" },
  { src: "https://picsum.photos/300/200?random=6", title: "Speak Your Truth, Zara" },
  { src: "https://picsum.photos/300/200?random=7", title: "Power in Unity, Alif" },
  { src: "https://picsum.photos/300/200?random=8", title: "The Future is You, Reem" },
];

const Exhibition = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <header
        className="w-full"
        style={{
          backgroundImage: `url(${exhibitionHeader})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: '60vh', // 🔧 reduced from 100vh
          margin: 0,
          padding: 0,
        }}
      ></header>

      {/* Gallery Component */}
      <Gallery images={imageData} />
    </div>
  );
};

export default Exhibition;
