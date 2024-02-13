import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import JoditEditor from "jodit-react";
import { useEffect } from "react";
import { singleImageUpload } from "../../Hooks/ImageUpload";
import PostHooks from "../../Hooks/PostHooks";
import AuthUser from "../../Hooks/authUser";
import { server_url } from "../../Config/API";

const AddBlog = () => {
  const [user, setUser] = useState();
  const { userInfo } = AuthUser();
  const editor = useRef(null);
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState([]);
  //description content
  const [blogDescription, setBlogDescription] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // get User

  useEffect(() => {
    fetch(`${server_url}/user/${userInfo?._id}`)
      .then((res) => res.json())
      .then((data) => setUser(data?.data));
  }, [userInfo?._id]);
  // get category
  useEffect(() => {
    const url = ` https://renixserver.niroghealthplus.com/api/v1/blogsCategory`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCategory(data?.data);
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
    };

    // post api call
    PostHooks(
      " https://renixserver.niroghealthplus.com/api/v1/blogs/postBlog",
      blog,
      "Medicine successfully posted"
    );
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
              Doctor Photo
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
              ref={editor}
              value={blogDescription}
              onChange={(newContent) => setBlogDescription(newContent)}
            />
          </div>

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
