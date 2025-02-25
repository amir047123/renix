import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";

import { singleImageUpload } from "../../../Hooks/ImageUpload";
import PostHooks from "../../../Hooks/PostHooks";

const SliderPost = ({ addSlide }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const editor = useRef(null);
  const [image, setImage] = useState("");

  const handleChangeUploadImage = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    singleImageUpload(formData, setImage);
  };

  const onSubmit = async (formData) => {
    const slide = {
      title: formData.title,
      subtitle: formData.subtitle,
      description: formData.description,
      buttonText: formData.buttonText,
      img: image,
      link: formData.link,
    };
    await PostHooks(
      "https://server.renixlaboratories.com.bd/api/v1/slide/addSlide",
      slide,
      "Slide successfully posted"
    );
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md w-full max-w-4xl mx-auto border border-blue-gray-100  mt-10">
      <h2 className="text-3xl font-semibold mb-6 text-center">Add New Slide</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          type="text"
          placeholder="Slide Title"
          {...register("title", { required: "Title is required" })}
          className="w-full p-2 border border-blue-gray-100 rounded"
        />
        {errors.title && <p className="text-red-500">{errors.title.message}</p>}

        <input
          type="text"
          placeholder="Slide Subtitle"
          {...register("subtitle", { required: "Subtitle is required" })}
          className="w-full p-2 border border-blue-gray-100 rounded"
        />
        {errors.subtitle && (
          <p className="text-red-500">{errors.subtitle.message}</p>
        )}

        <input
          type="text"
          placeholder="Description"
          {...register("description", { required: "description is required" })}
          className="w-full p-2 border border-blue-gray-100 rounded"
        />
        {errors.description && (
          <p className="text-red-500">{errors.description.message}</p>
        )}

        <input
          type="text"
          placeholder="Button Text"
          {...register("buttonText")}
          className="w-full p-2 border border-blue-gray-100 rounded"
        />

        <input
          type="file"
          onChange={handleChangeUploadImage}
          className="w-full p-2 border border-blue-gray-100 rounded"
        />
        {errors.img && <p className="text-red-500">{errors.img.message}</p>}

        <input
          type="text"
          placeholder="YouTube Link"
          {...register("link")}
          className="w-full p-2 border border-blue-gray-100 rounded"
        />

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500 w-full"
        >
          Add Slide
        </button>
      </form>
    </div>
  );
};

export default SliderPost;
