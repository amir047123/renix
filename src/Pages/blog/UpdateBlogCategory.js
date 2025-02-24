import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { singleImageUpload } from "../../Hooks/ImageUpload";
import UpdateHooks from "../../Hooks/UpdateHooks";

const UpdateBlogCategory = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState();

  const [refresh, setRefresh] = useState(false);
  const [metaImage, setMetaImage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    canonicalUrl: "",
    metaTitle: "",
    metaDescription: "",
    slug: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    setLoading(true);
    const url = `https://server.renixlaboratories.com.bd/api/v1/blogsCategory/getBlogCategoryById/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        console.log(data, 33);
        setFormData({
          name: data?.data?.name || "",
          canonicalUrl: data?.data?.canonicalUrl || "",
          metaTitle: data?.data?.metaTitle || "",
          metaDescription: data?.data?.metaDescription || "",
          slug: data?.data?.slug || "",
        });
      });
  }, [refresh, id]);
  const handleChangeMetaImage = async (event) => {
    const image = event.target.files[0];
    const formData = new FormData();
    formData.append("image", image);
    singleImageUpload(formData, setMetaImage);
  };
  const data = {
    ...formData,

    metaImage,
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    const updateUrl = `https://server.renixlaboratories.com.bd/api/v1/blogsCategory/updateBlogsCategory/${id}`;
    await UpdateHooks(
      updateUrl,
      data,
      "Medicine category successfully updated"
    );

    // clear input

    setFormData({
      name: "",
      canonicalUrl: "",
      metaTitle: "",
      metaDescription: "",
      slug: "",
    });
  };
  return (
    <section className="py-10 md:py-14">
      <div className="container px-6 md:max-w-6xl w-full ">
        <div className="md:max-w-xl mx-auto">
          <h2 className="text-xl font-medium py-6 text-center">
            Update Your Blog category
          </h2>

          <form
            onSubmit={handelSubmit}
            className="shadow-lg shadow-gray-300 p-8 rounded"
          >
            <div className="mb-6">
              <label
                for="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Blog category
              </label>
              <input
                value={formData?.name}
                onChange={handleChange}
                type="text"
                name="name"
                id="name"
                className="bg-[#F0FDF4] shadow-md shadow-gray-100  border border-gray-100 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 "
                placeholder="Medicine Category"
                required
              />
            </div>
            {/* Seo meta tags started */}
            <div>
              <h2 className="border-b border-solid border-gray-300 mb-5 pb-3">
                Search Engine Optimization
              </h2>
              <div className="mb-5">
                <label
                  className="block mb-2 text-[13px] font-normal text-gray-900 "
                  htmlFor=""
                >
                  Meta Title
                </label>
                <input
                  name="metaTitle"
                  value={formData?.metaTitle}
                  onChange={handleChange}
                  className="bg-[#F0FDF4] text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5    focus:border-blue-500"
                  type="text"
                  placeholder="Meta title"
                />
              </div>
              <div className="mb-5 w-full mr-0 md:mr-2">
                <label className="block mb-2 text-[13px] font-normal text-gray-900">
                  Slug (unique)
                </label>
                <input
                  type="text"
                  name="slug"
                  value={formData?.slug}
                  onChange={handleChange}
                  className="bg-[#F0FDF4] text-gray-900 text-sm rounded-lg focus:outline-none block w-full p-2.5 focus:border-none"
                  placeholder="Enter a slug"
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  className="block mb-2 text-[13px] font-normal text-gray-900 "
                  htmlFor=""
                >
                  Meta Description
                </label>
                <textarea
                  name="metaDescription"
                  value={formData?.metaDescription}
                  onChange={handleChange}
                  rows={7}
                  className="bg-[#F0FDF4] text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 focus:border-blue-500"
                  type="text"
                  placeholder="Meta description"
                />
              </div>
              <div className="mb-5">
                <label
                  className="block mb-2 text-[13px] font-normal text-gray-900 "
                  htmlFor=""
                >
                  Meta Image
                </label>
                <input
                  onChange={handleChangeMetaImage}
                  className="bg-[#F0FDF4] text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 focus:border-blue-500"
                  type="file"
                  placeholder="Meta description"
                />
              </div>

              <div className="mb-5">
                {/* Canonical  */}

                <label
                  htmlFor="canonical-url"
                  className="block mb-2 text-[13px] font-normal text-gray-900"
                >
                  Canonical URL
                </label>
                <input
                  type="text"
                  id="canonical-url"
                  name="canonicalUrl"
                  value={formData.canonicalUrl}
                  onChange={handleChange}
                  className="bg-[#F0FDF4] text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 focus:border-blue-500"
                  placeholder="Enter Canonical URL"
                />
              </div>
            </div>

            {/* Seo meta tags ended */}
            <button
              type="submit"
              className="text-white bg-primary hover:bg-lightPrimary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            >
              Update Category
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default UpdateBlogCategory;
