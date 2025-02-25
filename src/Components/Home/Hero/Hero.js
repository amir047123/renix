import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper';
import toast from 'react-hot-toast';

const Hero = () => {
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchSlide();
  }, []);

  const fetchSlide = () => {
    setLoading(true); // Set loading to true when fetching data
    fetch("http://localhost:3001/api/v1/slide/getSlide")
      .then((response) => response.json())
      .then((data) => {
        setSlides(data.data);
        setLoading(false); // Set loading to false when data is fetched
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); // Set loading to false if there's an error
        toast.error("Error fetching data.");
      });
  };
    return (
      <div className="relative w-full md:h-[650px] h-[400px] ">
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
              <div className="relative w-full h-full  overflow-hidden">
                {/* Background Image Pattern */}
                <div className="absolute inset-0 ">
                  <img
                    src={slide.img}
                    alt="Herbal capsules on leaves"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content Container */}
                <div className="relative z-10 flex flex-col items-start justify-center h-full px-8 container mx-auto">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {slide.title}
                  </h2>
                  <h3 className="text-3xl md:text-4xl font-semibold text-[#FEF3C7] mb-4">
                    {slide.subtitle}
                  </h3>
                  <p className="text-base text-white mb-8">{slide.description}</p>
                  <button className="bg-accent text-white px-8 py-3 rounded-full hover:bg-accent/80 transition-colors duration-300">
                    {slide.buttonText}
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
};

export default Hero;