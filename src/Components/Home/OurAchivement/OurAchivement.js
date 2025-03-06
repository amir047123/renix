import React from "react";
import achivement from "../../../Assets/images/achivement.png";
import logo from "../../../Assets/images/logo.svg";

const OurAchivement = () => {
  return (
    <div className="mx-auto py-20 bg-gradient-to-r from-thirdLightPrimary via-whiteSmoke to-thirdLightPrimary">
      <div className="w-[90%] lg:w-[80%] mx-auto">
        {/* ✅ Section Title */}
        <div className="text-center mb-10">
          <h3 className="bg-thirdLightPrimary w-44 mx-auto text-sm font-semibold text-gray-700 py-1 rounded-md text-center">
            🌿 NATURE WITH RENIX
          </h3>
          <h1 className="text-secondary text-center font-bold text-3xl md:text-4xl mt-3 uppercase">
            Discover Innovation
          </h1>
        </div>

        {/* ✅ Card Container */}
        <div className="mt-10 grid grid-cols-1 mdl:grid-cols-2 items-center gap-8">
          <div className="flex flex-col gap-2 text-center items-center">
            <img
              src={logo}
              alt="logo"
              className="w-[140px] sml:w-[200px] mb-4"
            />
            <h2 className="text-3xl font-semibold">
              RENIX UNANI LABORATORIES LIMITED
            </h2>
            <p className="text-lg">
              Delpara, Kutubpur Fatullah, Narayangonj, Bangladesh.
            </p>
          </div>
          <div className="relative rounded-xl overflow-hidden w-full h-full max-h-[450px]">
            <img
              src={achivement}
              alt="about"
              className="w-full h-full object-scale-down"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurAchivement;
