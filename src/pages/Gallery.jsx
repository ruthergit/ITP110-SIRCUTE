import React from "react";

const Gallery = ({ galleryRef }) => {
  return (
    <div
      ref={galleryRef}
      className="min-h-screen bg-white flex flex-col items-center justify-start px-6 py-12"
    >
      {/* Gallery Title */}
      <h2 className="text-3xl font-bold text-green-900 mb-6 text-center">
        PnC Gallery
      </h2>
      <p className="text-gray-600 mb-8 text-center max-w-xl">
        Explore some highlights from Pamantasan ng Cabuyao — our campus,
        activities, and events.
      </p>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        {/* Card 1 */}
        <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
          <img
            src="main.jpg"
            alt="Campus Building"
            className="w-full h-56 object-cover"
          />
          <p className="p-4 text-center text-gray-700 font-medium">
            Main Campus Building
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
          <img
            src="bch.jpg"
            alt="University Auditorium"
            className="w-full h-56 object-cover"
          />
          <p className="p-4 text-center text-gray-700 font-medium">
            Bagong Cabuyao Hall
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
          <img
            src="library.jpg"
            alt="Campus Library"
            className="w-full h-56 object-cover"
          />
          <p className="p-4 text-center text-gray-700 font-medium">
            Campus Library
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
          <img
            src="studentact.jpg"
            alt="Students Activity"
            className="w-full h-56 object-cover"
          />
          <p className="p-4 text-center text-gray-700 font-medium">
            Student Activities
          </p>
        </div>

        {/* Card 5 */}
        <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
          <img
            src="ccs.jpg"
            alt="Sports Facilities"
            className="w-full h-56 object-cover"
          />
          <p className="p-4 text-center text-gray-700 font-medium">
            Sports Activities
          </p>
        </div>

        {/* Card 6 */}
        <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
          <img
            src="univevents.jpg"
            alt="University Events"
            className="w-full h-56 object-cover"
          />
          <p className="p-4 text-center text-gray-700 font-medium">
            University Events
          </p>
        </div>

        {/* Card 7 */}
        <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
          <img
            src="comlab.jpg"
            alt="Laboratory Facilities"
            className="w-full h-56 object-cover"
          />
          <p className="p-4 text-center text-gray-700 font-medium">
            Laboratory Facilities
          </p>
        </div>

        {/* Card 8 */}
        <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
          <img
            src="hangout.jpg"
            alt="Campus Garden"
            className="w-full h-56 object-cover"
          />
          <p className="p-4 text-center text-gray-700 font-medium">
            Hangout Spot
          </p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
