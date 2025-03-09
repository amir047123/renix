import { motion } from "framer-motion";
import React, { useState } from "react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

const NewsAndMedia = () => {
  const [newsAndMediaInfo, setNewsandMediaInfo] = useState([
    {
      id: 1,
      videoUrl: "WZT7HzlGkNs",
      show: false,
    },
    {
      id: 2,
      videoUrl: "CohYY9RcILk",
      show: false,
    },
    {
      id: 3,
      videoUrl: "UazPMjH6Opw",
      show: false,
    },
    {
      id: 4,
      videoUrl: "fzpH2WLvZk4",
      show: false,
    },
    {
      id: 5,
      videoUrl: "5bdIoNS3HiE",
      show: false,
    },
    {
      id: 6,
      videoUrl: "cOb1i2jyhDU",
      show: false,
    },
  ]);

  return (
    <section className="">
      <div className="w-[90%] container mx-auto py-10 text-center ">
        {/* ✅ Section Header */}
        <div className="text-center mb-12">
          {/* <h3 className="bg-thirdLightPrimary  w-44 font-semibold  mx-auto text-sm text-gray-700 py-1 rounded-md">
            🎥 MEDIA{" "}
          </h3> */}
          <h2 className="text-secondary font-bold text-2xl md:text-3xl mt-3 uppercase">
            Watch Our Journey Unfold
          </h2>
          <p> Stay updated with our latest videos and media.</p>
        </div>

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
            {newsAndMediaInfo.map((info, i) => (
              <SwiperSlide key={info.id}>
                <motion.div
                  className="relative bg-white rounded-lg shadow-lg overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* ✅ Video Container */}
                  <div className="w-full">
                    {!newsAndMediaInfo?.[i]?.show ? (
                      <img
                        src={`https://img.youtube.com/vi/${info.videoUrl}/hqdefault.jpg`}
                        alt="Video Thumbnail"
                        style={{ cursor: "pointer" }}
                        className="w-full h-[250px] sm:h-[280px] md:h-[320px] lg:h-[360px] rounded-lg object-cover"
                        onClick={() =>
                          setNewsandMediaInfo((prev) => {
                            return prev?.map((item) => {
                              if (item.id === info.id) {
                                return { ...item, show: true };
                              }
                              return item;
                            });
                          })
                        }
                      />
                    ) : (
                      <iframe
                        title={`video-${info.id}`}
                        src={`https://www.youtube.com/embed/${info.videoUrl}`}
                        className="w-full h-[250px] sm:h-[280px] md:h-[320px] lg:h-[360px] rounded-lg"
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    )}
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default NewsAndMedia;
