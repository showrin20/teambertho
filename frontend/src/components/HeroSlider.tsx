import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade, Autoplay } from "swiper/modules";

interface HeroSliderProps {
  images: string[];
  title: string;
  description: string;
  delay?: number;
}

export default function HeroSlider({ images, title, description, delay = 300 }: HeroSliderProps) {
  return (
    <div className="relative w-full flex items-center justify-center py-10">  {/* Adjusted padding */}
      {/* Background Image Slider */}
      <Swiper
        modules={[EffectFade, Autoplay]}
        effect="fade"
        autoplay={{ delay, disableOnInteraction: false }}
        loop={true}
        className="relative w-full max-w-5xl" // Limit width for better layout
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-auto object-cover shadow-lg" // Ensures images fit well
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Overlay Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
        <p className="mt-2 max-w-2xl mx-auto text-lg md:text-xl">{description}</p>
      </div>
    </div>
  );
}
