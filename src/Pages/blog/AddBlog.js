import JoditEditor from "jodit-react";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { server_url } from "../../Config/API";
import { singleImageUpload } from "../../Hooks/ImageUpload";
import PostHooks from "../../Hooks/PostHooks";
import AuthUser from "../../Hooks/authUser";

const AddBlog = () => {
  const [user, setUser] = useState();
  const { userInfo } = AuthUser();
  const editor = useRef(null);
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState([]);
  //description content
  const [blogDescription, setBlogDescription] = useState("");
  const [metaImage, setMetaImage] = useState("");
  const handleChangeMetaImage = async (event) => {
    const image = event.target.files[0];
    const formData = new FormData();
    formData.append("image", image);
    singleImageUpload(formData, setMetaImage);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  // get User

  useEffect(() => {
    fetch(`${server_url}/user/${userInfo?._id}`)
      .then((res) => res.json())
      .then((data) => setUser(data?.data));
  }, [userInfo?._id]);
  // get category
  useEffect(() => {
    const url = `${server_url}/blogsCategory`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCategory(data?.data?.result);
      });
  }, []);
  const handleChangeUploadImage = async (event) => {
    const image = event.target.files[0];
    const formData = new FormData();
    formData.append("image", image);
    singleImageUpload(formData, setImage);
  };

  //handle add medicine
  const handleAddBlog = (data) => {
    const blog = {
      date: new Date().getDate(),
      month: new Date().getDate(),
      year: new Date().getFullYear(),
      title: data.title,
      img: image,
      category: data.category,
      description: blogDescription,
      authorImg: user?.img,
      author: user?.fullName,
      // seo meta tag
      canonicalUrl: data.canonicalUrl,
      metaTitle: data.metaTitle,
      metaDescription: data.metaDescription,
      slug: data.slug,
      metaImage,
    };

    // post api call
    PostHooks(
      `${server_url}/blogs/postBlog`,
      blog,
      "Medicine successfully posted"
    );
    reset();
    setBlogDescription("");
  };

  const config = {
    sanitize: true,
    allowHTML: true,
    removeScript: true,
    removeOnPaste: false,
  };

  return (
    <section className="py-10 md:py-14">
      <div className=" form_wrapper bg-white px-10  w-full mx-auto md:max-w-4xl lg:max-w-4xl rounded">
        <h2 className="text-3xl font-semibold text-dark  mb-10 text-center">
          Add Blog
        </h2>

        <form
          onSubmit={handleSubmit(handleAddBlog)}
          className="shadow-lg shadow-gray-300 px-8 py-10 rounded flex flex-col gap-4 text-left"
        >
          {/* News title */}

          <div className="mb-1 ">
            <label
              for="repeat-password"
              className="block mb-2 text-[13px] font-normal text-gray-900 dark:text-white"
            >
              Blog Title
            </label>
            <input
              type="text"
              className="bg-[#F0FDF4] text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500"
              placeholder="Blog Title"
              {...register("title", {
                required: "Blog Title is required",
              })}
            />
            {errors.title && (
              <p className="text-red-500 mt-1">{errors.title.message}</p>
            )}
          </div>
          {/* blog Category */}
          <div className="mb-1  w-full ">
            <label
              for="repeat-password"
              className="block mb-2 text-[13px] font-normal text-gray-900 dark:text-white"
            >
              Blog category
            </label>
            <select
              id="condition"
              className="bg-[#F0FDF4] text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500"
              {...register("category", {
                required: "Blog category is required",
              })}
            >
              {category?.map((cat) => (
                <option key={cat?._id} cat={cat} value={cat?.name}>
                  {cat?.name}
                </option>
              ))}
            </select>
            {errors.category && (
              <p className="text-red-500 mt-1">{errors.category.message}</p>
            )}
          </div>
          {/* blog Image image */}

          <div className="mb-1">
            <label
              for="repeat-password"
              className="block mb-2 text-[13px] font-normal text-gray-900 dark:text-white"
            >
              {" "}
              Blog Cover Photo
            </label>
            <input
              onChange={handleChangeUploadImage}
              className="block w-full text-sm text-gray-900  rounded-lg cursor-pointer bg-[#F0FDF4] dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 p-2"
              id="image_doctor"
              type="file"
            />
            {errors.img && (
              <p className="text-red-500 mt-1">{errors.img.message}</p>
            )}
          </div>

          {/*news description */}
          <div className="mb-1">
            <label
              for="repeat-password"
              className="block mb-2 text-[13px] font-normal text-gray-900 dark:text-white"
            >
              Description
            </label>
            <JoditEditor
              config={config}
              ref={editor}
              value={blogDescription}
              onBlur={(newContent) => setBlogDescription(newContent)}
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
              className="bg-primary hover:bg-lightPrimary text-white  py-2 rounded-lg text-lg w-fit px-8"
              type="submit"
            >
              Add Blog
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddBlog;
