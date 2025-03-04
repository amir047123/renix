// import { Box, CircularProgress } from "@mui/material";
import sliderImage01 from "../../../Assets/images/sliderImages/sliderImage01.webp";
import sliderImage02 from "../../../Assets/images/sliderImages/sliderImage02.webp";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { server_url } from "../../../Config/API";
import { Link } from "react-router-dom";

// ✅ Fetch Slides Function
const fetchSlides = async () => {
  const response = await fetch(`${server_url}/slide/getSlide`);
  if (!response.ok) {
    throw new Error("Failed to fetch slides");
  }
  const data = await response.json();
  return data.data; // Extract slides data
};

const staticSlides = [
  {
    title: "Renix Herbal Care",
    subtitle: "Traditional Unani for modern wellness.",
    buttonText: "🌱 Discover More",
    img: sliderImage01,
    link: "https://renixcare.com/",
    description:
      "Natural remedies for immunity, energy, and overall well-being.",
  },
  {
    title: "Renix Natural Remedies",
    subtitle: "Healing with the power of Unani herbs.",
    buttonText: "🍃 Shop Now",
    img: sliderImage02,
    link: "https://renixcare.com/",
    description:
      "Safe, effective, and time-tested herbal solutions for better health.",
  },
];

const Hero = () => {
  const [updatedSlides, setUpdatedSlides] = React.useState(staticSlides);

  // ✅ Use TanStack Query for Fetching Data
  const {
    data: slides = [],
    isLoading,
    isSuccess,
  } = useQuery({
    queryKey: ["slides"],
    queryFn: fetchSlides,
  });
  const [imageLoaded, setImageLoaded] = React.useState(false);

  // ✅ Error Handling

  useEffect(() => {
    if (isSuccess && slides?.length > 0) {
      setUpdatedSlides(slides);
    } else {
      setUpdatedSlides(staticSlides);
    }
  }, [isSuccess, slides]);

  console.log(slides, updatedSlides);

  return (
    <div className="relative w-full h-[300px] md:h-[500px]">
      {/* ✅ Loading State (Circular Progress) */}
      {/* {isLoading && (
        <Box className="flex justify-center items-center h-full">
          <CircularProgress size={50} color="primary" />
        </Box>       
      )} */}

      {/* ✅ Swiper (Only Render When Data is Available) */}
      {isLoading || updatedSlides?.length === 0 ? (
        <div className="relative w-full h-full overflow-hidden">
          {/* ✅ Background Image */}
          <div className="absolute inset-0">
            <img
              src={sliderImage01}
              alt="Herbal capsules on leaves"
              className="absolute top-0 w-full h-full object-cover"
            />
          </div>

          {/* ✅ Slide Content */}
          <div className="relative z-10 flex flex-col items-start justify-center h-full px-8 container mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
              Renix Herbal Care
            </h2>
            <h3 className="text-3xl md:text-4xl font-semibold text-[#FEF3C7] mb-4">
              Traditional Unani for modern wellness
            </h3>
            <p className="text-base text-white mb-8">
              Natural remedies for immunity, energy, and overall well-being.
            </p>
            <button className="bg-accent text-white px-8 py-3 rounded-full hover:bg-accent/80 transition-colors duration-300">
              🌱 Discover More
            </button>
          </div>
        </div>
      ) : (
        updatedSlides &&
        updatedSlides?.length > 0 && (
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
            {updatedSlides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-full overflow-hidden">
                  {/* ✅ Background Image */}
                  <div className="absolute inset-0">
                    <img
                      src={slide.img}
                      alt="Herbal capsules on leaves"
                      className={`absolute top-0 w-full h-full object-cover transition-opacity duration-500 ${
                        imageLoaded ? "opacity-100" : "opacity-0"
                      }`}
                      onLoad={() => setImageLoaded(true)}
                    />
                  </div>

                  {/* ✅ Slide Content */}
                  <div className="relative z-10 flex flex-col items-start justify-center h-full px-8 container mx-auto">
                    <h2 className="text-2xl md:text-5xl font-bold text-white mb-2">
                      {slide.title}
                    </h2>
                    <h3 className="text-xl md:text-4xl font-semibold text-[#FEF3C7] mb-4">
                      {slide.subtitle}
                    </h3>
                    <p className="text-sm text-white mb-8">
                      {slide.description}
                    </p>

                    {slide?.buttonText && slide?.link && (
                      <Link
                        to={slide.link}
                        className="bg-accent text-white px-4 py-2 text-sm md:text-base md:px-8 md:py-3 rounded-full hover:bg-accent/80 transition-colors duration-300"
                      >
                        {slide.buttonText}
                      </Link>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )
      )}
    </div>
  );
};

export default Hero;
