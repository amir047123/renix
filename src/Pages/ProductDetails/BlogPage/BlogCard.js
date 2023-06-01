import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineCategory } from "react-icons/md";

const BlogCard = ({ blog }) => {
  console.log(blog);
  const { category, img, author, authorImg, description, title, _id } = blog;
  const des = description?.replace(/<\/?p>/g, "").slice(0, 250);
  return (
    <div className="border border-blue-gray-50 shadow-lg p-4 rounded-lg">
      <div className="h-52 overflow-hidden rounded-3xl">
        <img
          className="w-full h-full rounded-3xl hover:scale-110 duration-300"
          src={img}
          alt="newest blog img"
        />
      </div>
      <div className="mt-7 mb-5 flex items-center justify-start gap-8">
        <div className="flex gap-2 items-center justify-start">
          <MdOutlineCategory className="text-primary" />
          <p className="text-lightGreen">{category}</p>
        </div>
        <div className="flex justify-end gap-2 items-center">
          <img
            className="w-5 rounded-full bg-primary"
            src={`${
              authorImg
                ? authorImg
                : "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
            }`}
            alt="author img"
          />
          <p className="text-lightGreen">{author}</p>
        </div>
      </div>
      <h2 className="text-lg my-3">{title.slice(0, 52)} .....</h2>
      <p
        dangerouslySetInnerHTML={{ __html: des }}
        className="text-lightGreen text-xs text-left mb-5"
      ></p>
      <Link
        to={`/blogDetails/${_id}`}
        className="px-10 py-2 border border-primary rounded-md bg-gradient-to-r from-primary/5 to-secondary/5 hover:bg-primary hover:text-dark  duration-150 text-sm font-medium cursor-pointer"
      >
        See Details
      </Link>
    </div>
  );
};

export default BlogCard;
