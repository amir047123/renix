import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../shared/Loading";
import Card from "../Components/Card/Card";
import Pagination from "../shared/Pagination";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [page, setPage] = useState(0);
  const pageSize = 6; // Number of products per page
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const url = `http://localhost:5000/api/v1/medicine?size=${pageSize}&page=${page}`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        setProducts(data?.data);
        setQuantity(data?.total);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [page]);

  const totalPages = Math.ceil(quantity / pageSize);

  const handlePageChange = (pageNumber) => {
    setPage(pageNumber - 1); // Pagination component starts from page 1
  };

  return (
    <div className="m-5">
      <header className="bg-gray-50 mb-5">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="text-center sm:text-left">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-2xl uppercase">
              Our Unani Product
            </h1>
            <p className="mt-1.5 text-sm text-gray-500">
              Let's Explore our Latest product! 🎉
            </p>
          </div>
        </div>
      </header>

      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="shadow-md p-5 grid lg:grid-cols-4 md:grid-cols-2 gap-5 w-full">
            {products.map((item) => (
              <Card key={item?._id} item={item} />
            ))}
          </div>
          <Pagination
        
            currentPage={page + 1} // Pagination component starts from page 1
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
};

export default Products;
