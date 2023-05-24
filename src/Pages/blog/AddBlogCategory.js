import React from "react";

const AddBlogCategory = () => {
  return (
    <section className="py-10 md:py-14">
      <div className="container px-6 md:max-w-6xl w-full ">
        <div className="md:max-w-xl mx-auto">
          <h2 className="text-xl font-medium py-6 text-center">
            Add Blog Category
          </h2>
          <form className="shadow-lg shadow-gray-300 p-8 rounded">
            <div className="mb-6">
              <label
                for="repeat-password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Blog Category
              </label>
              <input
                type="password"
                id="repeat-password"
                className="bg-[#F0FDF4] shadow-md shadow-gray-100  border border-gray-100 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Blog Category"
                required
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="text-white bg-primary hover:bg-lightPrimary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              >
                Add Blog
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddBlogCategory;
