import axios from "axios";
import JoditEditor from "jodit-react";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { server_url } from "../../Config/API";
import { singleImageUpload } from "../../Hooks/ImageUpload";
import UpdateHooks from "../../Hooks/UpdateHooks";

const UpdateNewsAndMedias = () => {
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const editor = useRef(null);
  const [newsDescription, setNewsDescription] = useState("");
  const [image, setImage] = useState(null);
  const [metaImage, setMetaImage] = useState("");
  const handleChangeMetaImage = async (event) => {
    const image = event.target.files[0];
    const formData = new FormData();
    formData.append("image", image);
    singleImageUpload(formData, setMetaImage);
  };
  const handleChangeUploadImage = async (event) => {
    const image = event.target.files[0];
    if (image) {
      const formData = new FormData();
      formData.append("image", image);
      singleImageUpload(formData, setImage);
    }
  };
  useEffect(() => {
    const getNewsDetails = async () => {
      let { data } = await axios.get(
        `${server_url}/newsAndMedia/getNewsAndMediaById/${id}`
      );
      setValue("newsTitle", data?.data?.newsTitle);
      setValue("newsCategory", data?.data?.newsCategory);
      setValue("youtubeLink", data?.data?.youtubeLink);
      setValue("canonicalUrl", data?.data?.canonicalUrl);
      setValue("metaTitle", data?.data?.metaTitle);
      setValue("metaDescription", data?.data?.metaDescription);
      setValue("slug", data?.data?.slug);
    };
    getNewsDetails();
  }, [id, setValue]);

  const handleUpdateNews = async (formData) => {
    const news = {
      newsTitle: formData.newsTitle,
      newsCategory: formData.newsCategory,
      newsImage: image,
      newsDescription: newsDescription,
      youtubeLink: formData.youtubeLink, // New field for YouTube link
      // seo meta tag
      canonicalUrl: formData.canonicalUrl,
      metaTitle: formData.metaTitle,
      metaDescription: formData.metaDescription,
      slug: formData.slug,
      metaImage,
    };

    // Assuming _id is defined somewhere in the component
    await UpdateHooks(
      `${server_url}/newsAndMedia/updateNewsAndMedia/${id}`,
      news,
      "successfully Update"
    );
  };

  return (
    <section className="py-10 md:py-14">
      <div className="form_wrapper bg-white px-10 w-full mx-auto md:max-w-4xl lg:max-w-4xl rounded">
        <h2 className="text-3xl font-semibold text-dark mb-10 text-center">
          Add News
        </h2>
        <form
          onSubmit={handleSubmit(handleUpdateNews)}
          className="shadow-lg shadow-gray-300 px-8 py-10 rounded flex flex-col gap-4 text-left"
        >
          <div className="mb-1">
            <label
              htmlFor="name"
              className="block mb-2 text-[13px] font-normal text-gray-900 dark:text-white"
            >
              News Title
            </label>
            <input
              type="text"
              id="name"
              className="bg-[#F0FDF4] text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500"
              placeholder="News Title"
              {...register("newsTitle", {})}
            />
            {errors.newsTitle && (
              <p className="text-red-500 mt-1">{errors.newsTitle.message}</p>
            )}
          </div>
          <div className="mb-1 w-full">
            <label
              htmlFor="condition"
              className="block mb-2 text-[13px] font-normal text-gray-900 dark:text-white"
            >
              News category
            </label>
            <select
              id="condition"
              className="bg-[#F0FDF4] text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500"
              {...register("newsCategory", {})}
            >
              <option value="" disabled defaultValue>
                Choose a Category
              </option>
              <option value="News">News</option>
              <option value="Media">Media</option>
              <option value="Shasthokotha">Shasthokotha</option>
              <option value="Shosthotarbarta">Shosthotar barta</option>
            </select>
            {errors.newsCategory && (
              <p className="text-red-500 mt-1">{errors.newsCategory.message}</p>
            )}
          </div>
          <div className="mb-1">
            <label
              htmlFor="file_input"
              className="block mb-2 text-[13px] font-normal text-gray-900 dark:text-white"
            >
              News Image
            </label>
            <input
              className="block w-full text-sm text-gray-900 rounded-lg cursor-pointer bg-[#F0FDF4] dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 p-2"
              id="file_input"
              type="file"
              onChange={handleChangeUploadImage}
            />
            {errors.newsImage && (
              <p className="text-red-500 mt-1">{errors.newsImage.message}</p>
            )}
          </div>
          <div className="mb-1">
            <label
              htmlFor="youtube_link"
              className="block mb-2 text-[13px] font-normal text-gray-900 dark:text-white"
            >
              YouTube Link
            </label>
            <input
              type="text"
              id="youtube_link"
              className="bg-[#F0FDF4] text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500"
              placeholder="YouTube Link"
              {...register("youtubeLink")} // Register the YouTube link input
            />
            {errors.youtubeLink && (
              <p className="text-red-500 mt-1">{errors.youtubeLink.message}</p>
            )}
          </div>
          <div className="mb-1">
            <label
              htmlFor="description"
              className="block mb-2 text-[13px] font-normal text-gray-900 dark:text-white"
            >
              Description
            </label>
            <JoditEditor
              ref={editor}
              value={newsDescription}
              onBlur={(newContent) => setNewsDescription(newContent)}
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
                {...register("metaTitle", {
                  required: "Meta Title is required",
                })}
                name="metaTitle"
                className="bg-[#F0FDF4] text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5    focus:border-blue-500"
                type="text"
                placeholder="Meta title"
              />
              {errors.metaTitle && (
                <p className="text-red-500 mt-1">{errors.metaTitle.message}</p>
              )}
            </div>
            <div className="mb-5 w-full mr-0 md:mr-2">
              <label className="block mb-2 text-[13px] font-normal text-gray-900">
                Slug (unique)
              </label>
              <input
                type="text"
                name="slug"
                {...register("slug", {
                  required: "Slug is required",
                })}
                className="bg-[#F0FDF4] text-gray-900 text-sm rounded-lg focus:outline-none block w-full p-2.5 focus:border-none"
                placeholder="Enter a slug"
                required
              />
              {errors.slug && (
                <p className="text-red-500 mt-1">{errors.slug.message}</p>
              )}
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
                {...register("metaDescription", {
                  required: "Meta Description is required",
                })}
                rows={7}
                className="bg-[#F0FDF4] text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 focus:border-blue-500"
                type="text"
                placeholder="Meta description"
              />
              {errors.metaDescription && (
                <p className="text-red-500 mt-1">
                  {errors.metaDescription.message}
                </p>
              )}
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
                {...register("canonicalUrl", {
                  required: "Canonical Url is required",
                })}
                className="bg-[#F0FDF4] text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 focus:border-blue-500"
                placeholder="Enter Canonical URL"
              />
              {errors.canonicalUrl && (
                <p className="text-red-500 mt-1">
                  {errors.canonicalUrl.message}
                </p>
              )}
            </div>
          </div>

          {/* Seo meta tags ended */}
          <div className="text-center pt-3">
            <button
              className="bg-primary hover:bg-lightPrimary text-white py-2 rounded-lg text-lg w-fit px-8"
              type="submit"
            >
              Update News
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default UpdateNewsAndMedias;
