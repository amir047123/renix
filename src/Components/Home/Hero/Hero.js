import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper';

import img from '../../../Assets/images/hero-img.svg'

const Hero = () => {
      const slides = [
        {
          title: "NATURAL HEALING",
          subtitle: "with HERBAL SOLUTIONS.",
          description: "Your Path to a Healthier Life Starts Here!",
          buttonText: "Shop Now",
          img: img,
        },
        {
          title: "ORGANIC REMEDIES",
          subtitle: "for BETTER HEALTH.",
          description: "Discover Nature's Healing Power",
          buttonText: "Learn More",
          img: img,
        },
        {
          title: "HOLISTIC WELLNESS",
          subtitle: "through NATURAL CARE.",
          description: "Experience Traditional Healing Methods",
          buttonText: "Explore Now",
          img: img,
        },
      ];
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