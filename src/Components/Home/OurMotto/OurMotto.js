import React from "react";
import plantGivingHand from "../../../Assets/images/Moto.jpeg";

const OurMotto = () => {
  return (
    <div
      className="relative py-24 sml:py-40 bg-cover bg-center"
      style={{
        backgroundImage: `url(${plantGivingHand})`,
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 "></div>

      {/* Content Box */}
      <div className="relative max-w-5xl mx-auto px-6 flex justify-end items-center">
        <div className="bg-white bg-opacity-80 p-8 rounded-2xl shadow-lg max-w-lg">
          <h2 className="text-3xl font-bold text-gray-800">Our Motto</h2>
          <p className="mt-4 text-gray-700 text-lg leading-relaxed">
            With a motto{" "}
            <span className="font-semibold">
              “Natural Solution for Healthy Life”
            </span>
            , we use a combination of science and nature to ensure people live
            healthier, happier lives.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurMotto;
