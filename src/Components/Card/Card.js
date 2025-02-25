import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa"; // ✅ Import Star Icons
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  const rating = item?.rating || 5;

  return (
    <>
      <div className="w-full bg-white shadow-lg rounded-lg overflow-hidden border  border-primary">
        {/* ✅ Product Image */}
        <Link to={`/product/${item?.slug}`}>
          <div className="relative p-3 flex justify-center">
            <img
              src={item.img}
              alt={item.name}
              className="w-40 h-40 object-contain"
            />

            {/* ✅ Discount Badge */}
            {item?.discount && (
              <span className="absolute top-2 left-2 bg-red-500 text-white px-3 py-1 text-xs font-bold rounded-full">
                {item?.discount}% OFF
              </span>
            )}
          </div>
        </Link>

        {/* ✅ Product Details */}
        <div className="px-4 pb-4">
          <h3 className="text-md font-semibold text-gray-900 truncate">
            {item.name}
          </h3>
          <p className="text-gray-500 text-xs">{item?.strength}</p>
          <p className="text-gray-500 text-xs">{item?.supplierName}</p>

          {/* ✅ Price & CTA Button */}
          <div className="mt-3 flex justify-between items-center">
            {/* ✅ Star Ratings */}
            <div className="flex items-center">
              {[...Array(5)].map((_, index) => (
                <span key={index}>
                  {index < rating ? (
                    <FaStar className="text-yellow-500 text-md" />
                  ) : (
                    <FaRegStar className="text-gray-300 text-md" />
                  )}
                </span>
              ))}
            </div>

            {/* ✅ Buy Now Button */}
            <a
              href="https://renixcare.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-4 py-1.5 text-sm rounded-full font-medium whitespace-nowrap"
            >
              Buy Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
