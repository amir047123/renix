import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import JoditEditor from "jodit-react";
import { Markup } from "interweave";
import { singleImageUpload } from "../../Hooks/ImageUpload";
import PostHooks from "../../Hooks/PostHooks";
import { useEffect } from "react";
import UpdateHooks from "../../Hooks/UpdateHooks";
import { useParams } from "react-router-dom";

const UpdateMedicine = () => {
    const { id } = useParams();
    const [image, setImage] = useState(null);
    const [category, setCategory] = useState([]);
    const [medicine, setMedicine] = useState([]);
    const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
      setValue,
    } = useForm();
    const editor = useRef(null);
    const [content, setContent] = useState("");
  
    useEffect(() => {
      const url = `http://localhost:5000/api/v1/category`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setCategory(data?.data);
        });
    }, []);
  
    useEffect(() => {
      const url = `http://localhost:5000/api/v1/medicine/medicineDetails/${id}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setMedicine(data?.data);
  
          setValue("name", data?.data?.name || "");
          setValue("genericName", data?.data?.genericName || "");
          setValue("medicineCategory", data?.data?.medicineCategory || "");
          setValue("price", data?.data?.price || "");
          setValue("strength", data?.data?.strength || "");
          setValue("supplierName", data?.data?.supplierName || "");
          setValue("securityCode", data?.data?.securityCode || "");
          setValue("stock", data?.data?.stock || "");
          setValue("medicineType", data?.data?.medicineType || "");
          setValue("medicineStatus", data?.data?.medicineStatus || "");
          setValue("img", data?.data?.img || "");
          setImage(data?.data?.img);
          setContent(data?.data?.description || "");
          
        });
    }, [id, setValue]);
  
    const handleChangeUploadImage = async (event) => {
        const image = event.target.files[0];
        const formData = new FormData();
        formData.append("image", image);
    
        singleImageUpload(formData, setImage);
      };
    const handleUpdateMedicine = async (data) => {
        const medicineData = {
          date: new Date().getDate(),
          month: new Date().getDate(),
          year: new Date().getFullYear(),
          name: data.name,
          genericName: data.genericName,
          medicineCategory: data.medicineCategory,
          img: image,
          supplierName: data.supplierName,
          price: data.price,
          description: content,
          strength: data.strength,
          securityCode: data.securityCode,
          stock: data.stock,
          medicineType: data.medicineType,
          medicineStatus: data.medicineStatus,
        };
    
        const updateUrl = `http://localhost:5000/api/v1/medicine/updateMedicine/${id}`;
    
        await UpdateHooks(updateUrl, medicineData, "Medicine successfully updated");
      };

  return (
    <section className="py-10 md:py-14">
      <div className=" form_wrapper bg-white px-10  w-full mx-auto md:max-w-4xl lg:max-w-4xl rounded">
        <h2 className="text-3xl font-semibold text-dark  mb-10 text-center">
          Update Medicine
        </h2>

        <form
          onSubmit={handleSubmit(handleUpdateMedicine)}
          className="shadow-lg shadow-gray-300 px-8 py-10 rounded flex flex-col gap-4 text-left"
          // autocomplete="off"
        >
          <div className="md:flex items-center">
            {/* medicine name */}

            <div className="mb-1  w-full md:w-[50%] mr-0 md:mr-2">
              <label
                for="repeat-password"
                class="block mb-2 text-[13px] font-normal text-gray-900 dark:text-white"
              >
                Medicine Name
              </label>
              <input
                type="text"
                id="name"
                className="bg-[#F0FDF4] text-gray-900 text-sm rounded-lg focus:outline-none  block w-full p-2.5 focus:border-none"
                placeholder="Medicine Name"
                {...register("name", {
                  required: "Medicine brand Name is required",
                })}
              />
              {errors.name && (
                <p className="text-red-500 mt-1">{errors.name.message}</p>
              )}
            </div>
            {/* medicine generic name */}
            <div className="mb-1 w-full md:w-[50%] ml-0 md:ml-2">
              <label
                for="repeat-password"
                class="block mb-2 text-[13px] font-normal text-gray-900 dark:text-white"
              >
                Medicine Generic Name
              </label>
              <input
                type="text"
                className="bg-[#F0FDF4] text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500"
                placeholder="Medicine generic Name"
                {...register("genericName", {
                  required: "Medicine generic Name is required",
                })}
              />
              {errors.genericName && (
                <p className="text-red-500 mt-1">
                  {errors.genericName.message}
                </p>
              )}
            </div>
          </div>

          {/* medicine category */}

          <div className="mb-1">
            <label
              for="repeat-password"
              class="block mb-2 text-[13px] font-normal text-gray-900 dark:text-white"
            >
              Medicine Category
            </label>
            <select
              className="bg-[#F0FDF4] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              {...register("medicineCategory", {
                required: "category is required",
              })}
            >
              <option value="" disabled selected>
                Choose a category
              </option>
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
          {/* medicine image */}
         
          <div className="mb-1">
            <label
              for="repeat-password"
              class="block mb-2 text-[13px] font-normal text-gray-900 dark:text-white"
            >
              {" "}
              Image
            </label>
            <div className="flex items-center gap-3">
            <input
              onChange={handleChangeUploadImage}
              className="block w-full text-sm text-gray-900  rounded-lg cursor-pointer bg-[#F0FDF4] dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 p-2"
              id="file_input"
              type="file"
            />
            <img className="w-12 rounded-md" src={image} alt="img"></img>
            </div>
            {errors.img && (
              <p className="text-red-500 mt-1">{errors.img.message}</p>
            )}
          </div>
          {/* medicine price */}
          <div className="mb-1">
            <label
              for="repeat-password"
              class="block mb-2 text-[13px] font-normal text-gray-900 dark:text-white"
            >
              {" "}
              Price
            </label>
            <input
              type="text"
              className="bg-[#F0FDF4] text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500"
              placeholder="Medicine Price"
              {...register("price", {
                required: "Medicine Price is required",
              })}
            />
            {errors.price && (
              <p className="text-red-500 mt-1">{errors.price.message}</p>
            )}
          </div>
          {/* medicine description */}
          <div className="mb-1">
            <label
              for="repeat-password"
              class="block mb-2 text-[13px] font-normal text-gray-900 dark:text-white"
            >
              Medicine description
            </label>
           
            <JoditEditor
              ref={editor}
              value={content}
            
              onBlur={(newContent) => setContent(newContent)} 
              onChange={(newContent) => setContent(newContent)} 
             
            />
         
          </div>
          {/* medicine strength */}
          <div className="mb-1">
            <label
              for="repeat-password"
              class="block mb-2 text-[13px] font-normal text-gray-900 dark:text-white"
            >
              {" "}
              Strength
            </label>
            <input
              type="text"
              className="bg-[#F0FDF4] text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500"
              placeholder="Medicine strength"
              {...register("strength", {
                required: "Medicine Strength is required",
              })}
            />
            {errors.strength && (
              <p className="text-red-500 mt-1">{errors.strength.message}</p>
            )}
          </div>
          {/* supplier name */}
          <div className="mb-1">
            <label
              for="supplier name"
              class="block mb-2 text-[13px] font-normal text-gray-900 dark:text-white"
            >
              {" "}
              Supplier name
            </label>
            <input
              type="text"
              className="bg-[#F0FDF4] text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500"
              placeholder="supplier name"
              {...register("supplierName", {
                required: "supplier name is required",
              })}
            />
            {errors.supplierName && (
              <p className="text-red-500 mt-1">{errors.supplierName.message}</p>
            )}
          </div>
          {/* medicine security code */}
          <div className="mb-1">
            <label
              for="repeat-password"
              class="block mb-2 text-[13px] font-normal text-gray-900 dark:text-white"
            >
              {" "}
              Security Code
            </label>
            <input
              type="text"
              className="bg-[#F0FDF4] text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500"
              placeholder="Medicine Security Code"
              {...register("securityCode", {
                required: "Medicine Security Code is required",
              })}
            />
            {errors.securityCode && (
              <p className="text-red-500 mt-1">{errors.securityCode.message}</p>
            )}
          </div>
          {/* medicine stock */}
          <div className="mb-1">
            <label
              for="repeat-password"
              class="block mb-2 text-[13px] font-normal text-gray-900 dark:text-white"
            >
              {" "}
              Stock
            </label>
            <input
              type="text"
              className="bg-[#F0FDF4] text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500"
              placeholder="Medicine Stock"
              {...register("stock", {
                required: "Medicine Stock is required",
              })}
            />
            {errors.stock && (
              <p className="text-red-500 mt-1">{errors.stock.message}</p>
            )}
          </div>

          <div className="md:flex items-center">
            {/* medicine type */}
            <div className="mb-1  w-full md:w-[50%] mr-0 md:mr-2">
              <label
                for="repeat-password"
                class="block mb-2 text-[13px] font-normal text-gray-900 dark:text-white"
              >
                Medicine Type
              </label>
              <select
                id="condition"
                className="bg-[#F0FDF4] text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500"
                {...register("medicineType", {
                  required: "Medicine type is required",
                })}
              >
                <option value="" disabled selected>
                  Choose a Medicine type
                </option>
                <option value="Darmal">Darmal</option>
                <option value="Nasal">Nasal</option>
                <option value="Optharmal">Optharmal</option>
                <option value="otologic">otologic</option>
                <option value="Urogenital">Urogenital</option>
              </select>
              {errors.type && (
                <p className="text-red-500 mt-1">{errors.type.message}</p>
              )}
            </div>
            {/* medicine status */}
            <div className="mb-1  w-full md:w-[50%] mr-0 md:ml-2">
              <label
                for="repeat-password"
                class="block mb-2 text-[13px] font-normal text-gray-900 dark:text-white"
              >
                {" "}
                Status
              </label>
              <select
                id="condition"
                className="bg-[#F0FDF4] text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500"
                {...register("medicineStatus", {
                  required: "Medicine status is required",
                })}
              >
                <option value="" disabled selected>
                  Choose a Status
                </option>
                <option value="Sale">Sale</option>
                <option value="sold-out">Sold out</option>
              </select>
              {errors.status && (
                <p className="text-red-500 mt-1">{errors.status.message}</p>
              )}
            </div>
          </div>

          <div className="text-center pt-3">
            <button
              className="bg-primary hover:bg-lightPrimary text-white  py-2 rounded-lg text-lg w-fit px-8"
              type="submit"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default UpdateMedicine;
