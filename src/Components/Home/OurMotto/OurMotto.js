import React from "react";
import plantGivingHand from "../../../Assets/images/plantGivingHand.jpg";

const OurMotto = () => {
  return (
    <div
      className="mx-auto py-36 sml:py-60 relative"
      style={{
        backgroundImage: `url(${plantGivingHand})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute top-0 left-0 md:left-1/4 bottom-0 right-0 bg-gradient-to-r from-transparent to-white" />
      <div className="w-[90%] lg:w-[80%] mx-auto flex items-end flex-col container">
        {/* ✅ Card Container */}
        <div className="mt-10 z-10 max-w-[600px]">
          <h2 className="text-5xl font-semibold mb-6 text-white drop-shadow-md">
            Our Motto
          </h2>
          <p className="text-black text-3xl">
            With a motto “Natural Solution for Healthy Life”, we use a
            combination of science and nature to ensure people live healthier,
            happier lives.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurMotto;
