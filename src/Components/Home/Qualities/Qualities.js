import React from "react";
import trust01 from "../../../Assets/images/Trust/trust01.png";
import trust02 from "../../../Assets/images/Trust/trust02.png";
import trust03 from "../../../Assets/images/Trust/trust03.png";

const Qualities = () => {
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
        <div className="mt-10 grid grid-cols-1 mdl:grid-cols-3 items-center gap-8">
          <div className="space-y-4 flex flex-col items-center text-center">
            <img src={trust01} alt="trust" className="max-w-[100px]" />
            <h3 className="text-xl font-semibold">
              Certified Natural Solution
            </h3>
            <p className="">
              We use 100% safe and natural ingredients on our products.
            </p>
          </div>
          <div className="space-y-4 flex flex-col items-center text-center">
            <img src={trust02} alt="trust" className="max-w-[100px]" />
            <h3 className="text-xl font-semibold">Lab Tested</h3>
            <p className="">
              All the products are lab tested for ensuring the best quality.
            </p>
          </div>
          <div className="space-y-4 flex flex-col items-center text-center">
            <img src={trust03} alt="trust" className="max-w-[100px]" />
            <h3 className="text-xl font-semibold">No Side Effect</h3>
            <p className="">
              All the products are safe from harmful side effects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qualities;
