import React from "react";
import {
  FaAppleAlt,
  FaBone,
  FaBrain,
  FaCapsules,
  FaHeartbeat,
  FaLeaf,
  FaLungs,
  FaStethoscope,
} from "react-icons/fa";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

const healthCategories = [
  {
    name: "Cardiovascular Health",
    icon: <FaHeartbeat />,
    text: "text-red-600",
  },
  { name: "Immunity Boosters", icon: <FaLeaf />, text: "text-green-600" },
  { name: "Brain & Memory", icon: <FaBrain />, text: "text-blue-600" },
  { name: "Respiratory Care", icon: <FaLungs />, text: "text-cyan-600" },
  { name: "General Wellness", icon: <FaStethoscope />, text: "text-blue-600" },
  {
    name: "Nutrition & Digestion",
    icon: <FaAppleAlt />,
    text: "text-orange-600",
  },
  { name: "Bone & Joint Support", icon: <FaBone />, text: "text-purple-600" },
  { name: "Herbal Supplements", icon: <FaCapsules />, text: "text-gray-600" },
];

const HealthSolutions = () => {
  return (
    <div className="py-16 px-6 md:px-12 bg-gradient-to-r from-thirdLightPrimary via-whiteSmoke to-thirdLightPrimary">
      <div className="container mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
          Health Solutions
        </h2>
        <p className="text-secondary text-lg md:w-3/4 mx-auto">
          Discover herbal products crafted for your health and well-being.
        </p>
      </div>

      {/* Categories Auto-Slider */}
      <div className="mt-10 container mx-auto">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
          className="pb-10"
        >
          {healthCategories.map((category, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white flex flex-col items-center justify-center border border-gray-200  p-6 rounded-xl shadow-md ">
                <div className={`text-4xl ${category.text} mb-3`}>
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-secondary">
                  {category.name}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HealthSolutions;
