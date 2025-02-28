import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";
import { SlideComponentOne } from "../SlideComponent/SlideComponent";

const HomeSlider = () => {
  return (
    <div className="">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper "
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <SlideComponentOne></SlideComponentOne>
        </SwiperSlide>
        {/* <SwiperSlide>
          <SlideComponentTwo></SlideComponentTwo>
        </SwiperSlide>
        <SwiperSlide>
          <SlideComponentThree></SlideComponentThree>
        </SwiperSlide>
        <SwiperSlide>
          <SlideComponentFour></SlideComponentFour>
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default HomeSlider;
