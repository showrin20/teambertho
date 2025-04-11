// src/components/TestimonialSection.tsx
import React from 'react';
import HeroSlider from '../components/HeroSlider'; // Adjust path if necessary
import test1 from '../assets/Testimonial/1.png';
import test2 from '../assets/Testimonial/2.png';
import test3 from '../assets/Testimonial/3.png';
import test4 from '../assets/Testimonial/4.png';

const testimonials: string[] = [test1, test2, test3, test4];

const TestimonialSection: React.FC = () => {
  return (
    <section className="w-full text-center">
      <div className="mt-6">
        <h2 className="text-4xl font-bold">Testimonial</h2>
        <HeroSlider images={testimonials} delay={1000}         title=""
          description=""/>
      </div>
    </section>
  );
};

export default TestimonialSection;
