import React from "react";

const Gallery = ({ galleryRef }) => {
  const images = [
   // Placeholder images; replace with actual image URLs
  ];

  return (
    <section
      ref={galleryRef}
      className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-12"
    >
      <h2 className="text-3xl font-bold text-green-900 mb-6">PnC Gallery</h2>
      <p className="text-gray-600 mb-8 text-center max-w-xl">
        Explore some highlights from our recent events and activities.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl w-full">
        {images.map((src, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden shadow hover:shadow-lg transition transform hover:-translate-y-1"
          >
            <img
              src={src}
              alt={`Gallery ${index + 1}`}
              className="w-full h-56 object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
