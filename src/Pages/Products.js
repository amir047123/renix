import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../Components/Card/Card";
import DynamicMetaTitle from "../Components/DynamicMetaTitle";
import CategoryItems from "../Components/Products/CategoryItems";
import useGetSeo from "../Hooks/useGetSeo";
import Loading from "../shared/Loading";
import Pagination from "../shared/Pagination";

const Products = () => {
  const { id } = useParams();
  const metaData = useGetSeo("our_product_page");
  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [page, setPage] = useState(0);
  const pageSize = 6; // Number of products per page
  const [loading, setLoading] = useState(false);
  const [categorys, setCategorys] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      let url = `https://server.renixlaboratories.com.bd/api/v1/medicine?size=${pageSize}&page=${page}`;

      // If a category ID is provided, fetch products for that category
      if (id) {
        url = `https://server.renixlaboratories.com.bd/api/v1/medicine/specific?fieldName=medicineCategory&fieldValue=${id}&size=${pageSize}&page=${page}`;
      }

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
  }, [id, page, pageSize]);

  useEffect(() => {
    const fetchCategory = async () => {
      const { data } = await axios.get(
        "https://server.renixlaboratories.com.bd/api/v1/category"
      );
      setCategorys(data?.data);
    };
    fetchCategory();
  }, []);

  const totalPages = Math.ceil(quantity / pageSize);

  const handlePageChange = (pageNumber) => {
    setPage(pageNumber - 1); // Pagination component starts from page 1
  };

  console.log("products", products);
  return (
    <div className="m-5">
      <DynamicMetaTitle
        title={metaData?.metaTitle}
        metaImage={metaData?.metaImage}
        description={metaData?.metaDescription}
        canonicalUrl={metaData?.canonicalUrl}
      />
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
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-full md:col-span-4 lg:col-span-3  order-2 md:order-1">
              {/* Product Category */}
              <div className="bg-white shadow-md max-h-[600px] h-auto md:h-[70%] xl:h-full overflow-y-auto">
                <h2 className="border-l-2  text-[#292929] border-solid border-l-primary py-[15px] px-5 font-medium uppercase font-oswald text-xl border-b border-b-[#eaeaea] ">
                  PRODUCT CATEGORIES
                </h2>
                {categorys?.length && (
                  <>
                    {categorys?.map((category) => (
                      <CategoryItems
                        key={category._id}
                        category={category?.name}
                      />
                    ))}
                  </>
                )}
              </div>
            </div>
            <div className="col-span-full md:col-span-8 lg:col-span-9 order-1 md:order-2">
              <div className="shadow-md p-5 grid lg:grid-cols-3 md:grid-cols-2 lg:gap-5 w-full ">
                {products.map((item) => (
                  <Card key={item?._id} item={item} />
                ))}
              </div>
              <Pagination
                currentPage={page + 1} // Pagination component starts from page 1
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Products;
