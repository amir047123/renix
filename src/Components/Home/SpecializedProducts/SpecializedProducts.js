import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import img from "../../../Assets/images/neemo-pimple.svg";

const ProductCard = ({ name, image }) => (
  <div className="relative group cursor-pointer bg-white rounded-2xl overflow-hidden">
    <div className=" rounded-2xl p-6 aspect-[4/3] transform transition-transform duration-300 hover:scale-[1.02] ">
      <div className="flex justify-between">
        <img src={image} alt={name} className="w-[170px] mx-auto " />
        <div className="md:bg-gradient-to-t md:from-accent md:via-transparent md:to-transparent absolute top-0 left-0 w-full h-full bg-gradient-to-t from-accent via-accent/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6">
          <h3 className="text-[#FFF2BE] text-lg font-medium">{name}</h3>
          <p className="text-[#ECF2F8] text-sm">
            Renix Unani Laboratories Ltd.
          </p>
        </div>

        <BsArrowUpRight className="text-white/60 w-5 h-5" />
      </div>
    </div>
  </div>
);

const SpecializedProducts = () => {
  const products = [
    { id: 1, name: "Gastrogel", image: img },
    { id: 2, name: "Renix Ginseng", image: img },
    { id: 3, name: "R-Dysman", image: img },
    { id: 4, name: "Aptixelix", image: img },
    { id: 5, name: "R-Dysman", image: img },
    { id: 6, name: "Aptixelix", image: img },
    { id: 7, name: "Gastrogel", image: img },
    { id: 8, name: "Renix Ginseng", image: img },
  ];

  return (
    <div className="bg-gradient-to-b from-indigo-900 to-emerald-900  p-8 md:p-12">
      <div className="container mx-auto mt-10">
        <h2 className="text-3xl md:text-4xl font-medium text-white mb-8">
          Specialized Products on{" "}
          <span className="text-yellow-400">Renix Unani Laboratories Ltd.</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              image={product.image}
              isFeatured={product.isFeatured}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecializedProducts;
