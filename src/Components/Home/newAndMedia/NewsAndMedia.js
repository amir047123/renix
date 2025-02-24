import React from "react";

const NewsAndMedia = () => {
  const newsandMediaInfo = [
    {
      id: 1,
      // videoUrl: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FRenixlaboratoriesltd1%2Fvideos%2F6133048600107424%2F&show_text=false&width=560&t=0"
      videoUrl: "https://www.youtube.com/embed/8m4wzSCTGks",
    },
    {
      id: 2,
      videoUrl: "https://www.youtube.com/embed/KiuZyU9rq1U",
    },
    {
      id: 3,
      videoUrl: "https://www.youtube.com/embed/6zkmOr-I8qc",
    },
    // {
    //     id: 4,
    //     videoUrl: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FRenixlaboratoriesltd1%2Fvideos%2F211425601500261%2F&show_text=false&width=560&t=0"

    // },
  ];

  return (
    <div className=" w-full lg:w-[90%] mx-auto py-10 text-center">
      <h1 className="text-secondary font-semibold text-3xl mt-3">
        News and Media
      </h1>
      <p className="mt-3 text-textColor">
        Comprehensive and Personalized Care for Your Well-being{" "}
      </p>
      <div className=" flex  flex-wrap  items-center pt-14">
        {newsandMediaInfo.map((info) => (
          <div className="w-full md:w-6/12 lg:w-4/12" key={info.id}>
            <div className="aspect-w-16 aspect-h-9  px-3 py-3">
              <iframe
                title="video"
                src={info.videoUrl}
                className="border-none overflow-hidden  w-full h-full  lg:h-[225px] lg:w-[400px]"
                scrolling="no"
                frameborder="0"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen="true"
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsAndMedia;
