// src/components/AboutUs.tsx
import React from 'react';
import About from '../assets/Backgrounds/About.jpg';

const AboutUs: React.FC = () => {
  return (
<section
  className="w-full py-16 px-6 text-black text-center bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: `url(${About})` }}
>

      <h2 className="text-4xl font-bold mb-6">Who We Are</h2>
      <p className="mt-4 max-w-3xl mx-auto text-lg leading-relaxed">
        Team Bertho is a multi-award-winning youth organization dedicated to bridging the gaps of the world through individually crafted human life stories. Founded in 2016, we document the diverse life experiences of individuals from all races, nationalities, ethnicities, religions, gender identities, and sexualities, striving for global peace through inclusivity and connection. Our mission is to circulate these poignant stories and shared morals, allowing audiences to learn from the profound and often overlooked truths of life. With curiosity, empathy, and compassion as our guiding principles, we’ve created an inclusive platform where everyone can contribute their unique perspectives, fostering a richer understanding of humanity.
      </p>

      <h2 className="text-4xl font-bold mb-6 mt-12">What We Do</h2>
      <p className="mt-4 max-w-3xl mx-auto text-lg leading-relaxed">
        At Team Bertho, our activities manifest through four fundamental learning styles: visual, auditory, reading, and kinesthetic. By segmenting our initiatives this way, we aim to share profound human insights through storytelling and personal experiences, educating individuals around the globe about the morals that traditional textbooks often overlook. We proudly embrace this approach as the “Cross-Pollination of Education,” creating a vibrant exchange of knowledge and understanding among diverse communities.
      </p>
    </section>
  );
};

export default AboutUs;
