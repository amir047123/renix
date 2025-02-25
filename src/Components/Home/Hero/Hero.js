import { Box, CircularProgress } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

// ✅ Fetch Slides Function
const fetchSlides = async () => {
  const response = await fetch("http://localhost:3001/api/v1/slide/getSlide");
  if (!response.ok) {
    throw new Error("Failed to fetch slides");
  }
  const data = await response.json();
  return data.data; // Extract slides data
};

const Hero = () => {
  // ✅ Use TanStack Query for Fetching Data
  const {
    data: slides = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["slides"],
    queryFn: fetchSlides,
  });

  // ✅ Error Handling
  if (error) {
    toast.error("Error fetching slides. Please try again.");
  }

  return (
    <div className="relative w-full md:h-[650px] h-[400px]">
      {/* ✅ Loading State (Circular Progress) */}
      {isLoading && (
        <Box className="flex justify-center items-center h-full">
          <CircularProgress size={50} color="primary" />
        </Box>
      )}

      {/* ✅ Swiper (Only Render When Data is Available) */}
      {!isLoading && slides.length > 0 && (
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="w-full h-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full overflow-hidden">
                {/* ✅ Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={slide.img}
                    alt="Herbal capsules on leaves"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* ✅ Slide Content */}
                <div className="relative z-10 flex flex-col items-start justify-center h-full px-8 container mx-auto">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {slide.title}
                  </h2>
                  <h3 className="text-3xl md:text-4xl font-semibold text-[#FEF3C7] mb-4">
                    {slide.subtitle}
                  </h3>
                  <p className="text-base text-white mb-8">
                    {slide.description}
                  </p>
                  <button className="bg-accent text-white px-8 py-3 rounded-full hover:bg-accent/80 transition-colors duration-300">
                    {slide.buttonText}
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default Hero;
