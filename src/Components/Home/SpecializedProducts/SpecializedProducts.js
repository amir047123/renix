import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { server_url } from "../../../Config/API";

const ProductCard = ({ name, image, slug }) => (
  <Link
    to={`/product/${slug}`}
    className="relative group cursor-pointer rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-[1.03]"
  >
    <div className="rounded-2xl p-6 aspect-[4/3] border-2 border-primary bg-white transform transition-transform duration-300 hover:scale-[1.02]">
      <div className="flex justify-between">
        <img
          src={image}
          alt={name}
          className="w-[170px] sm:w-full mx-auto transition-transform duration-300 group-hover:scale-105 mb-5"
        />
        <div className="absolute bottom-0 left-0 p-4 sm:p-6 w-full">
          <h3 className="text-primary text-sm sm:text-base md:text-lg font-semibold">
            {name}
          </h3>
          <p className="text-secondary text-xs sm:text-sm md:text-base overflow-hidden text-ellipsis whitespace-normal w-full">
            Renix Unani Laboratories Ltd.
          </p>
        </div>

        <BsArrowUpRight className="absolute top-4 ring-1 ring-primary right-4 text-primary w-6 h-6 opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
    </div>
  </Link>
);

const fetchMedicines = async () => {
  try {
    console.log("Fetching specialized products...");
    const { data } = await axios.get(
      `${server_url}/medicine?size=6&isSpecial=yes`
    );
    // console.log("Fetched Data:", data);
    return data;
  } catch (error) {
    console.error("Error fetching medicines:", error);
    throw error;
  }
};

const SpecializedProducts = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["medicine", 6],
    queryFn: fetchMedicines,
    keepPreviousData: true,
  });

  const products = data?.data || [];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    initialSlide: 0,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 992, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div className="bg-opacity-30  p-8 md:p-12" id="specializedProducts">
      <div className="mb-10">
        {/* <h3 className="bg-thirdLightPrimary w-44 mx-auto text-sm font-semibold text-gray-700 py-1 uppercase rounded-md text-center">
          🌿 Specialized
        </h3> */}
        <h2 className="text-secondary text-center font-bold text-3xl mt-3 uppercase">
          Discover Innovation
        </h2>
      </div>

      <div className="container mx-auto mt-10">
        <h2 className="text-3xl md:text-4xl font-medium mb-8 text-secondary">
          Specialized Products
        </h2>

        {isLoading ? (
          <div className="flex justify-center items-center h-40 mt-10">
            <div className="w-12 h-12 border-4 border-gray border-t-primary rounded-full animate-spin"></div>
          </div>
        ) : products.length === 0 ? (
          <h4 className="text-2xl font-medium text-center mt-20 text-darkGray">
            No Specialized Products Found!
          </h4>
        ) : (
          <div className="mt-10">
            <Slider {...settings}>
              {products.map((product) => (
                <div key={product._id} className="px-3">
                  <ProductCard
                    name={product.name}
                    image={product.img}
                    slug={product.slug}
                  />
                </div>
              ))}
            </Slider>
          </div>
        )}
      </div>
    </div>
  );
};

export default SpecializedProducts;
