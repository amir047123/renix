import JoditEditor from "jodit-react";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { server_url } from "../../Config/API";
import { singleImageUpload } from "../../Hooks/ImageUpload";
import PostHooks from "../../Hooks/PostHooks";

const AddMedicine = () => {
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const editor = useRef(null);
  //description content
  const [content, setContent] = useState("");
  const [metaImage, setMetaImage] = useState("");
  const handleChangeMetaImage = async (event) => {
    const image = event.target.files[0];
    const formData = new FormData();
    formData.append("image", image);
    singleImageUpload(formData, setMetaImage);
  };
  // get category
  useEffect(() => {
    const url = `${server_url}/category`;
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
  const handleAddMedicine = async (data) => {
    const medicine = {
      date: new Date().getDate(),
      month: new Date().getDate(),
      year: new Date().getFullYear(),
      name: data.name,
      genericName: data.genericName,
      medicineCategory: data.medicineCategory,
      img: image,
      supplierName: data.supplierName,
      price: data.price,
      description: data.description,
      fullDescription: content,
      strength: data.strength,
      securityCode: data.securityCode,
      stock: data.stock,
      discount: data?.discount,
      medicineType: data.medicineType,
      medicineStatus: data.medicineStatus,
      // seo meta tag
      canonicalUrl: data.canonicalUrl,
      metaTitle: data.metaTitle,
      metaDescription: data.metaDescription,
      slug: data.slug,
      metaImage,
      isSpecial: data?.isSpecial,
      orderUrl: data?.orderUrl,
    };

    // post api call
    const result = await PostHooks(
      `${server_url}/medicine/postMedicine`,
      medicine,
      "Medicine successfully posted"
    );

    if (result) {
      reset();
      setContent("");
      setImage(null);
      setMetaImage("");
    }
  };

  const config = {
    sanitize: true,
    allowHTML: true,
    removeScript: true,
    removeOnPaste: false,
  };

  return (
    <section className="py-10 md:py-14">
      <div className=" form_wrapper  px-10  w-full mx-auto md:max-w-4xl lg:max-w-4xl rounded">
        <h2 className="text-3xl font-semibold text-dark  mb-10 text-center">
          Add Medicine
        </h2>

        <form
          onSubmit={handleSubmit(handleAddMedicine)}
          className="shadow-lg shadow-gray-300 px-8 py-10 rounded flex flex-col gap-4 text-left bg-white"
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
          <div className="grid grid-cols-2 gap-4">
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

            <div className="mb-1">
              <label
                for="isSpecial"
                class="block mb-2 text-[13px] font-normal text-gray-900 dark:text-white"
              >
                Is Special
              </label>
              <select
                className="bg-[#F0FDF4] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                {...register("isSpecial", {
                  required: "Is Special is required",
                })}
              >
                <option value="" disabled selected>
                  Select Special True or False
                </option>

                <option key={true} value={true}>
                  True
                </option>
                <option key={false} value={false}>
                  False
                </option>
              </select>
              {errors.isSpecial && (
                <p className="text-red-500 mt-1">{errors.isSpecial.message}</p>
              )}
            </div>
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
              {image && (
                <img className="w-12 rounded-md" src={image} alt="img"></img>
              )}
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
              type="number"
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

          <div className="mb-1">
            <label
              for="description"
              class="block mb-2 text-[13px] font-normal text-gray-900 dark:text-white"
            >
              Short Description
            </label>
            <input
              type="text"
              className="bg-[#F0FDF4] text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500"
              placeholder="Short Description"
              {...register("description", {
                required: "Short Description is required",
              })}
              maxLength={100}
            />
            {errors.description && (
              <p className="text-red-500 mt-1">{errors.description.message}</p>
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
            {/* <textarea
                            rows="5"
                            className="bg-[#F0FDF4] text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500"

                            placeholder="Medicine description here..."
                            {...register("description", {
                                required: "Medicine description is required",


                            })}
                        ></textarea> */}
            <JoditEditor
              ref={editor}
              value={content}
              config={config}
              // tabIndex={1} // tabIndex of textarea
              onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
              // {...register("description", {
              //     required: "Medicine description is required",

              // })}
              //tabIndex={1} // tabIndex of textarea
              // onChange={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
              // onChange={newContent => { }}
              // config={{
              //   cleanHTML: false, // Disable auto-paragraph feature
              //   // Other configuration options...
              // }}
            />
            {/* {errors.description && <p className='text-red-500 mt-1'>{errors.description.message}</p>} */}
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
                // required: "Medicine Security Code is required",
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
          <div className="mb-1">
            <label class="block mb-2 text-[13px] font-normal text-gray-900 dark:text-white">
              {" "}
              Discount (%)
            </label>
            <input
              type="number"
              className="bg-[#F0FDF4] text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500"
              placeholder="medicine discount"
              {...register("discount")}
            />
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
                <option value="Tib-e-Niswan">Tib-e-Niswan</option>
                <option value="Muqawwi-e-Azam">Muqawwi-e-Azam</option>
                <option value="Munzij Mushil">Munzij Mushil</option>
                <option value="Hammal Jirah">Hammal Jirah</option>
                <option value="Munaffis Balgham">Munaffis Balgham</option>
                <option value="Muqawwi-e-Metabolism">
                  Muqawwi-e-Metabolism
                </option>

                <option value="Tib-e-Sehhat">Tib-e-Sehhat </option>
                <option value="Mushil-e-Jild">Mushil-e-Jild </option>
                <option value="Muqawwi-e-Bah">Muqawwi-e-Bah </option>
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

          <div className="mb-1">
            <label
              for="orderUrl"
              class="block mb-2 text-[13px] font-normal text-gray-900 dark:text-white"
            >
              Order URL
            </label>
            <input
              type="text"
              className="bg-[#F0FDF4] text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500"
              placeholder="Order URL"
              {...register("orderUrl", {
                required: "Order URL is required",
              })}
            />
            {errors.orderUrl && (
              <p className="text-red-500 mt-1">{errors.orderUrl.message}</p>
            )}
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
                  // required: "Meta Description is required",
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
              <div className="flex items-center gap-3">
                <input
                  onChange={handleChangeMetaImage}
                  className="bg-[#F0FDF4] text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 focus:border-blue-500"
                  type="file"
                  placeholder="Meta description"
                />
                {metaImage && (
                  <img
                    className="w-12 rounded-md"
                    src={metaImage}
                    alt="img"
                  ></img>
                )}
              </div>
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
                  // required: "Canonical Url is required",
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
              Add Product
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddMedicine;
