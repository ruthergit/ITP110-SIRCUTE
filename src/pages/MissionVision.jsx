import React from "react";

const MissionVision = ({ missionVisionRef }) => {
  return (
    <div
      ref={missionVisionRef}
      className="min-h-screen bg-gray-100 flex flex-col items-center justify-start px-6 py-12"
    >
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-green-900 mb-12 text-center">
        PnC Vision & Mission
      </h2>

      {/* Cards Container */}
      <div className="flex flex-col md:flex-row gap-8 max-w-5xl w-full">
        {/* Vision Card */}
        <div className="bg-white shadow-md rounded-lg p-8 flex-1">
          <h3 className="text-2xl font-semibold text-green-800 mb-4 text-center">
            Vision
          </h3>
          <p className="text-gray-700 text-center">
            A premier institution of higher learning in Region IV, developing
            globally-competitive and value-laden professionals and leaders
            instrumental to community development and nation-building.
          </p>
        </div>

        {/* Mission Card */}
        <div className="bg-white shadow-md rounded-lg p-8 flex-1">
          <h3 className="text-2xl font-semibold text-green-800 mb-4 text-center">
            Mission
          </h3>
          <p className="text-gray-700 text-center">
            As an institution of higher learning, UC (PnC) is committed to equip
            individuals with knowledge, skills, and values that will enable them
            to achieve their professional goals & provide leadership and service
            for national development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
