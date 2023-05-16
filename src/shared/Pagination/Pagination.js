import React from "react";

const Pagination = ({ quantity, size, setSize, page, setPage }) => {
  const newQuantity = Math.ceil(quantity / +size);
  console.log(quantity, size, page, newQuantity);
  return (
    <div className="flex items-center w-fit mx-auto">
      <span className="text-primary">{"<----"}</span>
      {newQuantity &&
        [...Array(newQuantity).keys()].map((number) => (
          <button
            key={number}
            onClick={() => setPage(number)}
            className={
              page === number
                ? "bg-primary border border-primary text-white px-2 mx-1 shadow-md my-14"
                : "bg-gray-100 border border-primary px-2 mx-1 shadow-md my-14"
            }
          >
            {number + 1}
          </button>
        ))}
      <select
        className="bg-gray-100 border border-primary shadow-md"
        onChange={(e) => setSize(e.target.value)}
        name="size"
        id="size"
      >
        <option value="6">6</option>
        <option value="8">8</option>
        <option value="10">10</option>
        <option value="12">12</option>
        <option value="14">14</option>
      </select>
      <span className="text-primary">{"---->"}</span>
    </div>
  );
};

export default Pagination;
