import React from "react";

interface ImageProps {
  src: string;
  title: string;
}

interface GalleryProps {
  images: ImageProps[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <section className="w-full py-16 px-6 text-center bg-white">
      <h2 className="text-5xl font-bold text-gray-900 font-serif">Gallery</h2>
      <p className="mt-4 text-xl text-gray-700 italic">
        A collection of our best moments and creative work.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
        {images.length > 0 ? (
          images.map((image, index) => (
            <div key={index} className="relative group overflow-hidden p-4">
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-56 object-cover transition-transform transform group-hover:scale-105 duration-300 rounded-md shadow-lg"
                loading="lazy" // Lazy loading for better performance
                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                  e.currentTarget.src = 'https://via.placeholder.com/200'; // Placeholder image on error
                }}
                aria-label={image.title} // Accessibility
              />
              <h3 className="mt-4 text-gray-800 text-lg font-bold italic font-cursive group-hover:text-blue-600 transition-colors duration-300">
                {image.title}
              </h3>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No images available.</p> // Message for empty gallery
        )}
      </div>
    </section>
  );
};

export default Gallery;
