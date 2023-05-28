import React from "react";

const ProductInfo = ({ description }) => {
  return (
    <div
      className="text-base py-2 text-justify"
      dangerouslySetInnerHTML={{ __html: description }}
    ></div>
  );
};

export default ProductInfo;
