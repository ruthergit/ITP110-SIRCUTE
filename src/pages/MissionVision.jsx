import React from "react";

const MissionVision = ({ missionVisionRef }) => {
  return (
    <div
      ref={missionVisionRef}
      className="relative flex flex-col items-center justify-start px-6 py-8 bg-gradient-to-b from-green-50 to-white overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-contain opacity-5 pointer-events-none"
        style={{
          backgroundImage: "url('/pnc-logo.png')", // Make sure the image is in public folder
          backgroundSize: "60%",
          backgroundPosition: "center",
        }}
      ></div>

      <h2 className="text-4xl font-bold text-green-900 mb-4 tracking-wide text-center relative z-10">
        PnC Vision & Mission
      </h2>
      <div className="w-24 h-1 bg-green-600 mb-10 rounded-full relative z-10"></div>
      <div className="flex flex-col md:flex-row gap-8 max-w-6xl w-full relative z-10">
        <div className="flex-1 bg-white border-2 border-green-300 rounded-2xl p-10 flex flex-col justify-between shadow-md transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:border-green-500 hover:bg-green-50">
          <h3 className="text-2xl font-semibold text-green-800 mb-6 text-center uppercase tracking-wide transition-colors duration-300 group-hover:text-green-900">
            Vision
          </h3>
          <p className="text-gray-700 text-center leading-relaxed text-lg">
            A premier institution of higher learning in Region IV, developing
            globally-competitive and value-laden professionals and leaders
            instrumental to community development and nation-building.
          </p>
        </div>
        <div className="flex-1 bg-white border-2 border-green-300 rounded-2xl p-10 flex flex-col justify-between shadow-md transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:border-green-500 hover:bg-green-50">
          <h3 className="text-2xl font-semibold text-green-800 mb-6 text-center uppercase tracking-wide transition-colors duration-300 group-hover:text-green-900">
            Mission
          </h3>
          <p className="text-gray-700 text-center leading-relaxed text-lg">
            As an institution of higher learning, UC (PnC) is committed to equip
            individuals with knowledge, skills, and values that will enable them
            to achieve their professional goals & provide leadership and service
            for national development.
          </p>
        </div>
      </div>
      <div className="mt-10 max-w-4xl w-full relative z-10">
        <div className="bg-white border-2 border-green-300 rounded-2xl p-8 shadow-md transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:border-green-500 hover:bg-green-50 text-center">
          <h3 className="text-2xl font-semibold text-green-800 mb-4 uppercase tracking-wide transition-colors duration-300 group-hover:text-green-900">
            Institutional Core Values
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            As a God-fearing institution respecting multi-faith of people, PnC
            adheres to the following core values:{" "}
            <span className="font-semibold text-green-800">
              Personal Dignity, Nurturing Community, and Commitment to
              Excellence.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
