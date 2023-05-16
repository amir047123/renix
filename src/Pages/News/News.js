import React from 'react';

const NewsAndMedia = () => {
  // Dummy data for news and media
  const newsAndMediaData = [
    { title: 'News Article 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { title: 'News Article 2', description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem.' },
    { title: 'News Article 3', description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut.' },
    { title: 'News Article 4', description: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam.' },
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
