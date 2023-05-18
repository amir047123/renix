import React from 'react';

const NewsAndMedia = () => {
  // Dummy data for news and media
  const newsAndMediaData = [
    { title: 'The Benefits of Meditation: A Path to Inner Peace', description: 'Explore the profound benefits of meditation and how it can help reduce stress, increase mindfulness, and improve overall well-being.' },
    { title: 'The Rise of Artificial Intelligence: Impacts and Possibilities', description: 'Dive into the world of artificial intelligence, its growing significance in various industries, and the potential impacts and possibilities it presents for the future' },
    { title: 'The Power of Positive Thinking: Transforming Your Mindset', description: 'Discover the power of positive thinking and learn practical techniques to shift your mindset, overcome challenges, and embrace a more optimistic outlook on life..' },
    { title: 'Exploring Sustainable Living: Eco-Friendly Choices for a Better Future', description: 'Delve into the realm of sustainable living, discover eco-friendly practices, and learn how small lifestyle changes can make a big difference in creating a more sustainable future for our planet.' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">News and Media</h1>

      {/* Render news articles */}
      {newsAndMediaData.map((article, index) => (
        <div className="bg-white shadow-lg rounded-lg p-6 mb-4" key={index}>
          <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
          <p className="text-gray-600">{article.description}</p>
        </div>
      ))}
    </div>
  );
};

export default NewsAndMedia;
