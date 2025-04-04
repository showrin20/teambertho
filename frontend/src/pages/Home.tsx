import React from "react";
import Watch from "../components/Watch";  // Adjust path if necessary
import Testimonial from "../components/Testimonial";  // Adjust path if necessary
import Footer from "../components/Footer";  // Adjust path if necessary
import Projects from "../components/Projects"; // Import Projects component
import HeroSlider from "../components/HeroSlider"; // Import HeroSlider component

// Importing images from assets
import VisualImage from '../assets/Approach/Visual.png';
import AudioImage from '../assets/Approach/Audio.png';
import ReadingImage from '../assets/Approach/Reading.png';
import KinestheticImage from '../assets/Approach/Kinaesthetic.png';
import img1 from "../assets/header/img1.jpg";
import img2 from "../assets/header/img2.jpg";
import img3 from "../assets/header/img3.png";
import img4 from "../assets/header/img4.png";
import img5 from "../assets/header/img5.png";
import img6 from "../assets/header/img6.png";
import img7 from "../assets/header/img7.png";
import img8 from "../assets/header/img8.png";

// Slider images array
const sliderImages = [img1, img2, img3, img4, img5, img6, img7, img8];

// Video data for the Watch component
const videoData = [
  { src: "https://www.youtube.com/embed/G6uesc01lO4", title: "Inspiring Story 1" },
  { src: "https://www.youtube.com/embed/kedIYOoAKhg", title: "Behind the Scenes" },
];
export default function Home() {
  return (
    <div className="flex flex-col items-center w-full font-oswald">
      {/* Hero Section */}
      <section className="w-full">
        <HeroSlider
          images={sliderImages}
          delay={5000} // Optional custom delay
        />
      </section>

      {/* About Us Section */}
      <section className="w-full bg-yellow-400 py-16 px-6 text-black text-center">
        <h2 className="text-4xl font-bold mb-6">Who We Are</h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg leading-relaxed">
          Team Bertho is a multi-award-winning youth organization dedicated to bridging the gaps of the world through individually crafted human life stories. Founded in 2016, we document the diverse life experiences of individuals from all races, nationalities, ethnicities, religions, gender identities, and sexualities, striving for global peace through inclusivity and connection. Our mission is to circulate these poignant stories and shared morals, allowing audiences to learn from the profound and often overlooked truths of life. With curiosity, empathy, and compassion as our guiding principles, we’ve created an inclusive platform where everyone can contribute their unique perspectives, fostering a richer understanding of humanity.
        </p>

        <h2 className="text-4xl font-bold mb-6 mt-12">What We Do</h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg leading-relaxed">
          At Team Bertho, our activities manifest through four fundamental learning styles: visual, auditory, reading, and kinesthetic. By segmenting our initiatives this way, we aim to share profound human insights through storytelling and personal experiences, educating individuals around the globe about the morals that traditional textbooks often overlook. We proudly embrace this approach as the “Cross-Pollination of Education,” creating a vibrant exchange of knowledge and understanding among diverse communities.
        </p>
      </section>

      {/* Our Approach Section */}
      <section
        className="w-full bg-gray-100 py-16 px-6 text-center relative"
        style={{
          backgroundImage: "url('../assets/Backgrounds/your-background-image.jpg')", // Update this path
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2 className="text-4xl font-bold text-black drop-shadow-lg">OUR APPROACH</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-black drop-shadow-lg">
          Team Bertho’s activities are categorized into the four base learning styles: Visual, Audio, Reading, and Kinesthetic.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {/* Learning Styles */}
          <div className="flex flex-col items-center transition-transform transform hover:scale-105">
            <img src={VisualImage} alt="Visual Learning" className="w-[50%]" />
            <h3 className="mt-2 text-lg font-semibold text-black drop-shadow-lg">Visual</h3>
          </div>

          <div className="flex flex-col items-center transition-transform transform hover:scale-105">
            <img src={AudioImage} alt="Audio Learning" className="w-[50%]" />
            <h3 className="mt-2 text-lg font-semibold text-black drop-shadow-lg">Audio</h3>
          </div>

          <div className="flex flex-col items-center transition-transform transform hover:scale-105">
            <img src={ReadingImage} alt="Reading Learning" className="w-[50%]" />
            <h3 className="mt-2 text-lg font-semibold text-black drop-shadow-lg">Reading</h3>
          </div>

          <div className="flex flex-col items-center transition-transform transform hover:scale-105">
            <img src={KinestheticImage} alt="Kinesthetic Learning" className="w-[50%]" />
            <h3 className="mt-2 text-lg font-semibold text-black drop-shadow-lg">Kinaesthetic</h3>
          </div>
        </div>
      </section>

      {/* Our Projects Section */}
      <section className="w-full bg-yellow-500 py-16 px-6 text-center">
        <h2 className="text-4xl font-bold">OUR PROJECTS</h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg">
          From books to films, Team Bertho runs multiple creative projects, including 'Human Heroes' and 'Fueling Hope.'
        </p>
        <Projects />
      </section>

      {/* Impact Overview Section */}
      <section className="w-full bg-gray-200 py-16 px-6 text-center">
        <h2 className="text-4xl font-bold">AN OVERVIEW OF OUR IMPACT</h2>
        <p className="mt-4 text-lg">100+ Age Groups | 81+ Countries | 657,753+ People Impacted</p>
      </section>

      {/* Watch Section */}
      <section
        className="w-full bg-yellow-500 py-16 px-6 text-center"
        style={{ backgroundImage: "url('../assets/Backgrounds/Watch.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <h2 className="text-4xl font-bold">WATCH</h2>
        <div className="mt-6">
          <Watch videos={videoData} />
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="w-full bg-gray-100 py-16 px-6 text-center">
        <h2 className="text-4xl font-bold">TESTIMONIAL</h2>
        <div className="mt-6">
          <Testimonial />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
