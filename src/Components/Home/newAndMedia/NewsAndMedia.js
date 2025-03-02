import { motion } from "framer-motion";
import React from "react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

const newsandMediaInfo = [
  {
    id: 1,
    videoUrl: "https://www.youtube.com/embed/WZT7HzlGkNs?si=LJD9vz0CKTqP_Y8b",
  },
  {
    id: 2,
    videoUrl: "https://www.youtube.com/embed/CohYY9RcILk?si=9HZrg_rItNkku3ad",
  },
  {
    id: 3,
    videoUrl: "https://www.youtube.com/embed/UazPMjH6Opw?si=SQqdxloZXOZK3puD",
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/embed/fzpH2WLvZk4?si=1gC2MoNxbaccGnwl",
  },
  {
    id: 5,
    videoUrl: "https://www.youtube.com/embed/5bdIoNS3HiE?si=3oYcbe3CgfAkf12z",
  },
  {
    id: 6,
    videoUrl: "https://www.youtube.com/embed/cOb1i2jyhDU?si=LEtZR9Q5dqEF0aEM",
  },
];

const NewsAndMedia = () => {
  return (
    <section className="w-[90%] container mx-auto py-10 text-center">
      {/* ✅ Section Header */}
      <motion.h1
        className="text-primary font-bold text-3xl md:text-4xl uppercase tracking-wide"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        News and Media
      </motion.h1>

      <motion.p
        className="mt-3 text-gray-600 text-lg"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Stay updated with our latest videos and media highlights.
      </motion.p>

      {/* ✅ Swiper Video Slider */}
      <div className="mt-10 container mx-auto">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
          className="pb-10"
        >
          {newsandMediaInfo.map((info) => (
            <SwiperSlide key={info.id}>
              <motion.div
                className="relative bg-white rounded-lg shadow-lg overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {/* ✅ Video Container */}
                <div className="w-full">
                  <iframe
                    title={`video-${info.id}`}
                    src={info.videoUrl}
                    className="w-full h-[250px] sm:h-[280px] md:h-[320px] lg:h-[360px] rounded-lg"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default NewsAndMedia;
