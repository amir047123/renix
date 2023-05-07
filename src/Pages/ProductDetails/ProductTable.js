import React from "react";

const ProductTable = () => {
  return (
    <table class="w-full my-4 uppercase border-collapse border border-slate-500  text-sm text-left text-gray-500 dark:text-gray-400">
      <tbody>
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <td class="px-6 py-4 border border-gray">name</td>
          <td class="px-6 py-4 border border-gray">MIRAPRO</td>
        </tr>
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <td class="px-6 py-4 border border-gray">Generic Name</td>
          <td class="px-6 py-4 border border-gray">
            {" "}
            SQUARE PHARMACEUTICALS LIMITED
          </td>
        </tr>
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <td class="px-6 py-4 border border-gray">Strength</td>
          <td class="px-6 py-4 border border-gray">15 MG</td>
        </tr>
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <td class="px-6 py-4 border border-gray">Category</td>
          <td class="px-6 py-4 border border-gray">Tab</td>
        </tr>
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <td class="px-6 py-4 border border-gray">Price</td>
          <td class="px-6 py-4 border border-gray">9 Bdt</td>
        </tr>
      </tbody>
    </table>
  );
};

export default ProductTable;
