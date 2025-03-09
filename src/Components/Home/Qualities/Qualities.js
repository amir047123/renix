import React from "react";
import trust01 from "../../../Assets/images/Trust/trust01.png";
import trust02 from "../../../Assets/images/Trust/trust02.png";
import trust03 from "../../../Assets/images/Trust/trust03.png";

const Qualities = () => {
  return (
    <div className="mx-auto py-16 ">
      <div className="w-[90%] lg:w-[80%] mx-auto">
        {/* ✅ Section Title */}
        <div className="text-center mb-12">
          {/* <h3 className="bg-thirdLightPrimary w-44 mx-auto text-sm font-semibold text-gray-700 py-1 rounded-md">
            🔬 Lab Tested
          </h3> */}
          <h2 className="text-secondary font-bold text-2xl md:text-3xl mt-3 uppercase">
            100% Safe & Natural
          </h2>
        </div>

        {/* ✅ Card Container */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-8">
          {/* ✅ Card 1 */}
          <div className="bg-white shadow-lg border-2 border-primary rounded-xl p-6 flex flex-col items-center text-center ">
            <div className="bg-gray-100 p-3 rounded-full">
              <img src={trust01} alt="Certified Natural" className="w-20" />
            </div>
            <h3 className="text-lg font-semibold mt-4">Certified Natural</h3>
            <p className="text-gray-600 text-sm mt-2">
              We use 100% safe and natural ingredients.
            </p>
          </div>

          {/* ✅ Card 2 */}
          <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center  border-2 border-primary ">
            <div className="bg-gray-100 p-3 rounded-full">
              <img src={trust02} alt="Lab Tested" className="w-20" />
            </div>
            <h3 className="text-lg font-semibold mt-4">Lab Tested</h3>
            <p className="text-gray-600 text-sm mt-2">
              All products undergo rigorous lab testing.
            </p>
          </div>

          {/* ✅ Card 3 */}
          <div className="bg-white shadow-lg rounded-xl p-6  border-2 border-primary flex flex-col items-center text-center ">
            <div className="bg-gray-100 p-3 rounded-full">
              <img src={trust03} alt="No Side Effects" className=" w-20" />
            </div>
            <h3 className="text-lg font-semibold mt-4">No Side Effects</h3>
            <p className="text-gray-600 text-sm mt-2">
              All products are safe from harmful effects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qualities;
