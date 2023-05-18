import React from 'react';

const VideoPage = () => {
  const videoList = [
    {
      id: 1,
      title: 'সহজে মেদভুঁড়ি কমানোর উপায়',
      doctor:'উম্মে‌ সালমা‌ তামান্না‌',
      videoUrl: 'https://www.youtube.com/embed/9j2wC3TvblU',
    },
    {
      id: 2,
      title: 'গ্যাস্ট্রিকের‌ ওষুধের ঝুঁকি',
      doctor:'সায়লা হক',
      videoUrl: 'https://www.youtube.com/embed/3rDCzyRoL0k',
    },
    {
      id: 3,
      title: 'ডায়াবেটিক‌ রোগী‌ কি‌ কি ঝুঁকিতে থাকেন?',
      doctor:'নাহিদা আহমেদ',
      videoUrl: 'https://www.youtube.com/embed/6zkmOr-I8qc',
    },
    {
      id: 4,
      title: 'গ্যাস্টিকের‌ সমস্যা দূর করার সহজ পাঁচটি উপায় ',
      doctor:'উম্মে‌ সালমা‌ তামান্না‌',
      videoUrl: 'https://www.youtube.com/embed/rtHbv11mZm8',
    },
  ];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Renix Consulting</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {videoList.map((video) => (
          <div key={video.id} className="rounded-lg overflow-hidden shadow-md">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                title={video.title}
                src={video.videoUrl}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{video.title}</h2>
              <p className="text-gray-600">{video.doctor}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoPage;
