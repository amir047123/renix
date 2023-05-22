import React from 'react';
import { AiFillCaretRight } from 'react-icons/ai';

const BlogCard = ({ title, description, image }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg h-full  ">
      <img className="w-full" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base pb-3 ">{description}</p>
        <button className="text-right pt-1 pb-1  rounded-lg pl-3 pr-3 p-2 bg-primary " >  More </button>

      </div>
    </div>
  );
};

export default BlogCard;
