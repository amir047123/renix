import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { singleImageUpload } from "../../../Hooks/ImageUpload";
import UpdateHooks from "../../../Hooks/UpdateHooks";

const UpdateSlide = () => {
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const [image, setImage] = useState(null);

  const handleChangeUploadImage = async (event) => {
    const image = event.target.files[0];
    if (image) {
      const formData = new FormData();
      formData.append("image", image);
      singleImageUpload(formData, setImage);
    }
  };
  useEffect(() => {
    const getSlideDetails = async () => {
      let { data } = await axios.get(
        `https://server.renixlaboratories.com.bd/api/v1/slide/getSlideById/${id}`
      );

      setValue("title", data?.data?.title);
      setValue("subtitle", data?.data?.subtitle);
      setValue("buttonText", data?.data?.buttonText);
      setValue("link", data?.data?.link);
      setValue("img", data?.data?.img);
      setImage(data?.data?.img);
      setValue("description", data?.data?.description);
    };
    getSlideDetails();
  }, [id, setValue]);

  const onSubmit = async (formData) => {
    const slide = {
      title: formData.title,
      subtitle: formData.subtitle,
      description: formData.description,
      buttonText: formData?.buttonText,
      img: image ? image : formData.img,
      link: formData.link,
    };

    // Assuming _id is defined somewhere in the component
    await UpdateHooks(
      `https://server.renixlaboratories.com.bd/api/v1/slide/updateSlide/${id}`,
      slide,
      "successfully Update"
    );
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md w-full max-w-4xl mx-auto border border-blue-gray-100  mt-10">
      <h2 className="text-3xl font-semibold mb-6 text-center">
        Update New Slide
      </h2>
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

        <div className="flex items-center gap-5">
          <input
            type="file"
            onChange={handleChangeUploadImage}
            className="w-full p-2 border border-blue-gray-100 rounded"
          />

          <img className="w-20 rounded-lg" src={image} alt="img"></img>
        </div>
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
          Update Slide
        </button>
      </form>
    </div>
  );
};

export default UpdateSlide;
