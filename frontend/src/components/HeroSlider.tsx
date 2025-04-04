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
    <div className="relative w-full h-screen flex items-center justify-center px-4">  
      {/* Background Image Slider */}
      <Swiper
        modules={[EffectFade, Autoplay]}
        effect="fade"
        autoplay={{ delay, disableOnInteraction: false }}
        loop={true}
        className="relative w-full h-full max-w-[90vw] max-h-[90vh]" // Limits size to prevent overflow
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-contain rounded-2xl shadow-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Overlay Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-black/40 p-6 rounded-2xl">
        <h1 className="text-5xl md:text-6xl font-bold">{title}</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl">{description}</p>
      </div>
    </div>
  );
}
