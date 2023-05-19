import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const BlogSinglePage = () => {
  // Dummy data for the blog content
  const blog = {
    title: 'Example Blog Title',
   src:"https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
    description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',

    author: 'John Doe',
    publisher: 'Example Publisher',
    date: 'May 19, 2023',
  };

  // Dummy data for recent blogs in the sidebar
  const recentBlogs = [
    { id: 1, title: 'Recent Blog 1' },
    { id: 2, title: 'Recent Blog 2' },
    { id: 3, title: 'Recent Blog 3' },
  ];

  const shareOnSocialMedia = () => {
    // Implement the logic to share the blog on social media
    // You can use external libraries or APIs to handle the sharing functionality
    console.log('Sharing on social media...');
  };

  return (
    <div className="flex">
      <div className="w-3/4 p-6">
        <img src={blog.src} alt={blog.title} className="mb-4 w-full h-auto" />
        <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
        <p className="text-gray-500 text-sm mb-2">
          By {blog.author} - {blog.publisher} - {blog.date}
        </p>
        <p className="text-gray-600 mb-4">{blog.description}</p>
        <div className="flex justify-end items-center">
          
          <button
            className="mr-2 text-blue-500 hover:text-blue-700"
            onClick={() => shareOnSocialMedia('Facebook')}
          >
            <FaFacebook size={24} />
          </button>
          <button
            className="mr-2 text-blue-400 hover:text-blue-600"
            onClick={() => shareOnSocialMedia('Twitter')}
          >
            <FaTwitter size={24} />
          </button>
          <button
            className="text-blue-800 hover:text-blue-900"
            onClick={() => shareOnSocialMedia('LinkedIn')}
          >
            <FaLinkedin size={24} />
          </button>
        </div>
      </div>
      <div className="w-1/4 p-6">
        <h2 className="text-lg font-bold mb-4">Recent Blogs</h2>
        <ul>
          {recentBlogs.map((recentBlog) => (
            <li key={recentBlog.id} className="mb-2">
              <a href={`/blogs/${recentBlog.id}`}>{recentBlog.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BlogSinglePage;
