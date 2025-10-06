import React from "react";

const MissionVision = ({ missionVisionRef }) => {
  return (
    <section
      ref={missionVisionRef}
      className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-6 py-12 text-center"
    >
      <h2 className="text-3xl font-bold text-green-900 mb-6">
       PnC Vision & Mission
      </h2>

      <div className="max-w-3xl space-y-8 text-gray-700">
        <div>
          <h3 className="text-2xl font-semibold text-green-800 mb-2">
            Vision
          </h3>
          <p>
            A premier institution of higher learning in Region IV, developing globally-competitive and value laden professionals and leaders instrumental to community development and nation-building.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-green-800 mb-2">
            Mission
          </h3>
          <p>
            As an institution of higher learning, UC (PnC) is commited to equipt individuals with knowledge, skills, and values that will enable them to achieve their professional goals & provide leadership and service for national development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
