import React from "react";
import healthProduct1 from "../../../../../src/Assets/images/Products/09. Syrup Hazmina Plus.webp";
import healthProduct2 from "../../../../Assets/images/Products/Capsule Valaria.webp";
import medicine from "../../../../Assets/images/health-Product-Images/medicine.png";

const HealthCareProducts = () => {
  return (
    <div className=" mt-10 ">
      <div className="container mx-auto w-[90%] ">
        {/* Title & Description */}
        <div className="mb-10">
          <h3 className="bg-thirdLightPrimary w-36 mx-auto text-sm font-semibold text-gray-700 py-1 rounded-md text-center">
            FEATURED
          </h3>
          <h1 className="text-secondary text-center font-bold text-3xl mt-3 uppercase">
            Healthcare Products{" "}
          </h1>
        </div>

        {/* Section 1 of Health Product */}
        <div className="flex gap-10 mb-10 flex-col md:flex-row">
          <div className="flex gap-y-7 md:gap-y-0 shadow-lg p-10 bg-opacity-30 bg-whiteSmoke flex-col lg:flex-row lg:justify-between lg:items-center rounded-2xl w-full md:w-1/2 lg:w-full">
            <div className="w-full md:w-1/2 lg:w-3/4">
              <p className="uppercase text-lg lg:text-base text-primary">
                Save up to 30% off
              </p>
              <h1 className="text-2xl lg:text-4xl font-bold leading-normal">
                Healthcare Products
              </h1>
              <a
                href="https://renixcare.com/shop"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="uppercase mt-4 border border-primary px-4 py-2 text-xs lg:text-sm text-primary transition-all duration-300 hover:bg-primary hover:text-white">
                  Shop Now
                </button>
              </a>
            </div>
            <div className="self-center lg:w-1/4">
              <img className="w-full" src={medicine} alt="Healthcare Product" />
            </div>
          </div>
          <div className="bg-primary rounded-3xl flex justify-center items-center md:p-4 md:w-1/2 lg:w-1/3">
            <img
              className="lg:w-full sm:w-2/3"
              src={healthProduct1}
              alt="Syrup Hazmina Plus"
            />
          </div>
        </div>

        {/* Section 2 of Health Product */}
        <div className="flex flex-col md:flex-row-reverse gap-10">
          <div className="flex gap-y-7 md:gap-y-0 shadow-lg p-10 bg-opacity-30 bg-whiteSmoke flex-col lg:flex-row lg:justify-between lg:items-center rounded-2xl w-full md:w-1/2 lg:w-full">
            <div className="self-center">
              <p className="uppercase text-lg lg:text-base text-primary">
                Save up to 30% off
              </p>
              <h1 className="text-2xl lg:text-4xl font-bold leading-normal">
                Healthcare Products
              </h1>
              <a
                href="https://renixcare.com/shop"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="uppercase mt-4 border border-primary px-4 py-2 text-xs lg:text-sm text-primary transition-all duration-300 hover:bg-primary hover:text-white">
                  Shop Now
                </button>
              </a>
            </div>
            <div className="lg:w-1/4">
              <img
                className="w-full mx-auto"
                src={healthProduct2}
                alt="Capsule Valaria"
              />
            </div>
          </div>
          <div className="bg-secondary text-primary rounded-3xl p-8 w-full md:w-1/2 lg:w-1/3 mx-auto">
            <h1 className="text-3xl">Trusted Brands</h1>
            <p className="md:my-2 text-whiteSmoke">
              Renix Unani Laboratories Limited is a trusted brand dedicated to
              producing high-quality, natural medicine that is effective in
              treating illnesses without harmful side effects.
            </p>
            <div className="ml-9 mt-4">
              <ul className="list-disc text-whiteSmoke">
                <li>Selected products</li>
                <li>Always low price</li>
                <li>Free shipping</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthCareProducts;
