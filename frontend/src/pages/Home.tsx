// src/pages/Home.tsx
import React from 'react';
import HeroSlider from '../components/HeroSlider'; // Import HeroSlider component
import AboutUs from '../components/AboutUs';
import Approach from '../components/Approach';
import ProjectsSection from '../components/ProjectsSection';
import ImpactOverview from '../components/ImpactOverview';
import WatchSection from '../components/WatchSection';
import TestimonialSection from '../components/TestimonialSection';
import img1 from "../assets/header/img1.jpg";
import img2 from "../assets/header/img2.jpg";
import img3 from "../assets/header/img3.png";
import img4 from "../assets/header/img4.png";
import img5 from "../assets/header/img5.png";
import img6 from "../assets/header/img6.png";
import img7 from "../assets/header/img7.png";
import img8 from "../assets/header/img8.png";

// Slider images array
const sliderImages: string[] = [img1, img2, img3, img4, img5, img6, img7, img8];

// Video data for the Watch section
const videoData: { src: string; title: string }[] = [
  { src: "https://www.youtube.com/embed/G6uesc01lO4", title: "Inspiring Story 1" },
  { src: "https://www.youtube.com/embed/kedIYOoAKhg", title: "Behind the Scenes" },
];

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-full font-oswald">
      {/* Hero Section */}
      <section className="w-full">
      <HeroSlider 
          images={sliderImages} 
          delay={5000} 
          title="Welcome to Our Platform"
          description="Discover amazing content and experiences with us."
        />      </section>

      {/* About Us Section */}
      <AboutUs />

      {/* Our Approach Section */}
      <Approach />

      {/* Our Projects Section */}
      <ProjectsSection />

      {/* Impact Overview Section */}
      <ImpactOverview />

      {/* Watch Section */}
      <WatchSection videos={videoData} />

      {/* Testimonial Section */}
      <TestimonialSection />
      
      {/* Footer */}
      {/* Add your Footer component here */}
    </div>
  );
};

export default Home;
