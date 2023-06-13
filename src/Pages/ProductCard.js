import React from "react";

const ProductCard = ({ product }) => {
  const { name, image, genericName, strength, price, stock, sale, soldOut } =
    product;

  return (
    <div className="card">
      <div className="card-image ">
        <img src={image} alt={name} />
      </div>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          <span>{genericName}</span>
          <span>{strength}</span>
        </p>
        <p className="card-text">{`Price: BDT ${price}`}</p>
        {soldOut ? (
          <p className="card-text out-of-stock">Sold Out</p>
        ) : (
          <>
            {sale ? (
              <p className="card-text on-sale">On Sale</p>
            ) : (
              <p className="card-text in-stock">{`In Stock: ${stock}`}</p>
            )}
            <button className="btn btn-primary ">Add to Cart</button>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
