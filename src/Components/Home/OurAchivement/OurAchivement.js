import React from "react";
import achivement from "../../../Assets/images/achivement.png";

const OurAchivement = () => {
  return (
    <div className="mx-auto py-10 bg-gradient-to-r from-thirdLightPrimary via-whiteSmoke to-thirdLightPrimary">
      <div className="w-[90%] lg:w-[80%] mx-auto">
        {/* ✅ Section Title */}
        <div className="text-center mb-10">
          <h3 className="bg-thirdLightPrimary  w-48 font-semibold  mx-auto text-sm text-gray-700 py-1 rounded-md">
            🌱 HOLISTIC WELLNESS
          </h3>
          <h1 className="text-secondary font-bold text-2xl md:text-3xl mt-3 uppercase">
            Achivement
          </h1>
        </div>

        {/* ✅ Card Container */}
        <div className="mt-10 grid grid-cols-1 mdl:grid-cols-2 items-center gap-8">
          <div className="flex flex-col gap-2 text-center items-center">
            {/* <img src={logo} alt="logo" className="w-20 mb-4" />
            <h2 className="text-xl md:text-2xl font-semibold">
              RENIX UNANI LABORATORIES LIMITED
            </h2>
            <p className="text-sm md:text-base">
              📍 Delpara, Kutubpur Fatullah, Narayangonj, Bangladesh
            </p> */}

            <h2 className="text-secondary font-bold text-2xl md:text-3xl mt-3 uppercase">
              Our Achivement
            </h2>
          </div>

          <div className="relative rounded-xl overflow-hidden  border-2 border-primary p-4 bg-white  w-full h-full max-h-[450px]">
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
