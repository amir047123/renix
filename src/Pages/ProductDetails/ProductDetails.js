import React, { useState } from "react";
import img1 from "../../Assets/images/Products/Bottle (1).png";

const ProductDetails = () => {
  const [addToCart, setAddToCart] = useState(false);
  const handlePlus = () => {
    console.log("ok");
  };
  return (
    <div className="w-3/5 mx-auto">
      <div className="grid grid-cols-2 gap-6">
        <div className=" border flex justify-center items-center  border-gray-300">
          <img src={img1} className=" w-72 h-50 p-4" alt="" />
        </div>
        <div className="">
          <div className="shadow-lg p-7">
            <h1 className="text-3xl font-semibold uppercase tracking-widest">
              Mirapro 15mg tab
            </h1>{" "}
            <p>
              <span className="font-medium text-lg">Generic Name : </span>
              MIRTAZAPINE
            </p>
            <p>
              <span className="font-medium text-lg">Supplier Name : </span>
              SQUARE PHARMACEUTICALS LIMITED
            </p>
            <div className="flex items-center self-start gap-4 mt-3 ">
              {" "}
              <span className="py-4 text-3xl font-medium">BDT - 9</span>
            </div>
            {addToCart ? (
              <div>
                <div className=" border border-primary p-1  flex justify-evenly items-center">
                  <span
                    onClick={handlePlus()}
                    className="text-4xl font-medium cursor-pointer"
                  >
                    -
                  </span>
                  <aside>
                    <input
                      className="px-8 py-2 text-center text-xl font-semibold border-none outline-primary bg-primary text-white"
                      type="text"
                      value={1}
                    />
                  </aside>
                  <span className="text-4xl font-medium cursor-pointer">+</span>
                </div>
              </div>
            ) : (
              <button
                onClick={() => setAddToCart(true)}
                className="border-2 w-full border-primary p-3 rounded-md text-primary text-md hover:text-white hover:bg-primary"
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>
      </div>

      <div class="relative overflow-x-auto mt-8">
        <h1 className="text-xl font-medium mt-4">Product Details</h1>
        <table class="w-full my-4 border-collapse border border-slate-500  text-sm text-left text-gray-500 dark:text-gray-400">
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td class="px-6 py-4 border border-slate-600">name</td>
              <td class="px-6 py-4 border border-slate-600">MIRAPRO</td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td class="px-6 py-4 border border-slate-600">Generic Name</td>
              <td class="px-6 py-4 border border-slate-600">
                {" "}
                SQUARE PHARMACEUTICALS LIMITED
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td class="px-6 py-4 border border-slate-600">Strength</td>
              <td class="px-6 py-4 border border-slate-600">15 MG</td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td class="px-6 py-4 border border-slate-600">Category</td>
              <td class="px-6 py-4 border border-slate-600">Tab</td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td class="px-6 py-4 border border-slate-600">Price</td>
              <td class="px-6 py-4 border border-slate-600">9 Bdt</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductDetails;
