import { motion } from "framer-motion"; // ✅ Adding smooth animations
import React from "react";

const NewsAndMedia = () => {
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
  ];

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

      {/* ✅ Video Grid */}
      <div className="mt-10 grid grid-cols-1 sml:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsandMediaInfo.map((info) => (
          <motion.div
            key={info.id}
            className="relative bg-white rounded-lg shadow-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            {/* ✅ Video Container - Maintains Actual YouTube Size */}
            <div className="w-full">
              <iframe
                title={`video-${info.id}`}
                src={info.videoUrl}
                className="w-full h-[315px] md:h-[360px] lg:h-[400px] rounded-lg"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default NewsAndMedia;
