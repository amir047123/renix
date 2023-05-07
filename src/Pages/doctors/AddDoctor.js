import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { singleImageUpload } from '../../Hooks/imageUploadHook';
import { Navigate } from 'react-router-dom';

const AddDoctor = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [singleImg, setSingleImg] = useState([]);

    const handleChangeUploadImage = async (event) => {
        const image = event.target.files[0];
        const formData = new FormData();
        formData.append("image", image);
        singleImageUpload(formData, setSingleImg);
      };

    const handleAddDoctor = (data) => {
       const fullName = data.name;
        const email =data.email;
        const phone = data.phone;
        const address = data.address;
        const expertise = data.expertise;
        const image = singleImg;
        const description = data.description;
        const facebook = data.facebook;
        const linkedin = data.linkedin;
        const twitter = data.twitter;
        const youtube = data.youtube;

        const info = {
            fullName,
            email,
            phone,
            address,
            expertise,
            description,
            facebook,
            linkedin,
            twitter,
            youtube,
            image,
            status: false
        }

        fetch(`http://localhost:8080/api/v1/doctors/`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(info),
          })
            .then((res) => res.json())
            .then((data) => {
               window.location.reload()
            })
    }
    return (

        <section className="py-10 md:py-14">
            <div className=' form_wrapper bg-white px-10  w-full mx-auto md:max-w-4xl lg:max-w-4xl rounded'>

                <h2 className="text-3xl font-semibold text-dark  mb-10 text-center">Add Doctor</h2>

                <form onSubmit={handleSubmit(handleAddDoctor)} className="shadow-lg shadow-gray-300 px-8 py-10 rounded flex flex-col gap-4 text-left">
                    <div className="md:flex items-center">
                        {/* doctor name */}

                        <div className="mb-1  w-full md:w-[50%] mr-0 md:mr-2">
                            <label for="repeat-password" className="block mb-2 text-[13px] font-normal text-gray-900 dark:text-white">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                name='fullName'
                                className="bg-[#F0FDF4] text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500"
                                placeholder="Full Name"
                                {...register("name", {
                                    required: "Full Name is required",


                                })}
                            />
                            {errors.name && <p className='text-red-500 mt-1'>{errors.name.message}</p>}
                        </div>
                        {/* doctor email */}
                        <div className="mb-1 w-full md:w-[50%] ml-0 md:ml-2">
                            <label for="repeat-password" className="block mb-2 text-[13px] font-normal text-gray-900 dark:text-white">Email</label>
                            <input
                                type="text"

                                className="bg-[#F0FDF4] text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500"
                                placeholder="Email"
                                {...register("email", {
                                    required: "Email is required",


                                })}
                            />
                            {errors.email && <p className='text-red-500 mt-1'>{errors.email.message}</p>}
                        </div>
                    </div>

                    {/* phone number*/}
                    <div className="mb-1">
                        <label for="repeat-password" className="block mb-2 text-[13px] font-normal text-gray-900 dark:text-white"> Phone Number</label>
                        <input
                            type="text"
                            className="bg-[#F0FDF4] text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500"
                            placeholder="Phone Number"
                            {...register("phone", {
                                required: "Phone Number is required",


                            })}
                        />
                        {errors.phone && <p className='text-red-500 mt-1'>{errors.phone.message}</p>}
                    </div>
                    {/* address*/}
                    <div className="mb-1">
                        <label for="repeat-password" className="block mb-2 text-[13px] font-normal text-gray-900 dark:text-white"> Address</label>
                        <input
                            type="text"
name='address'
                            className="bg-[#F0FDF4] text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500"
                            placeholder="Address"
                            {...register("address", {
                                required: "Address is required",


                            })}
                        />
                        {errors.address && <p className='text-red-500 mt-1'>{errors.address.message}</p>}
                    </div>

                    {/* doctor image */}

                    <div className="mb-1">
                        <label for="repeat-password" className="block mb-2 text-[13px] font-normal text-gray-900 dark:text-white"> Doctor Photo</label>
                        <input  type="file"
                name="image" className="block w-full text-sm text-gray-900  rounded-lg cursor-pointer bg-[#F0FDF4] dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 p-2" id="file_input" 
                            {...register("image", {
                                required: "Doctor photo is required",


                            })}
                            onChange={handleChangeUploadImage}
                        />
                        {errors.image && <p className='text-red-500 mt-1'>{errors.image.message}</p>}
                    </div>

                    {/* expertise */}
                    <div className="mb-1  w-full ">
                        <label for="repeat-password" className="block mb-2 text-[13px] font-normal text-gray-900 dark:text-white">Expertise</label>
                        <select name='expertise' id="condition"
                            className="bg-[#F0FDF4] text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500"
                            {...register("expertise", {
                                required: "Expertise is required",


                            })}
                        >
                            <option value="" disabled selected>Choose a expertise</option>
                            <option value="Excellent">Anesthesiologist</option>
                            <option value="Good">Cardiologist</option>
                            <option value="Fair">Dermatologist</option>

                        </select>
                        {errors.expertise && <p className='text-red-500 mt-1'>{errors.expertise.message}</p>}
                    </div>
                    {/* description */}
                    <div className="mb-1">
                        <label for="repeat-password" className="block mb-2 text-[13px] font-normal text-gray-900 dark:text-white">Description</label>
                        <textarea
                            rows="5"
                            name='description'
                            className="bg-[#F0FDF4] text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500"

                            placeholder="Description here..."
                            {...register("description", {
                                required: "Description is required",


                            })}
                        ></textarea>
                        {errors.description && <p className='text-red-500 mt-1'>{errors.description.message}</p>}
                    </div>

                    {/* social icon */}



                    <div className="md:flex items-center">


                        {/* facebook*/}
                        <div className="mb-1 w-full md:w-[50%] mr-0 md:mr-2">
                            <label for="repeat-password" className="block mb-2 text-[13px] font-normal text-gray-900 dark:text-white"> Facebook Url</label>
                            <input
                                type="text"
name='facebook'
                                className="bg-[#F0FDF4] text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500"
                                placeholder="Facebook Url"
                                {...register("facebook", {
                                    required: "Facebook Url is required",


                                })}
                            />
                            {errors.facebook && <p className='text-red-500 mt-1'>{errors.facebook.message}</p>}
                        </div>

                        {/* linkedin*/}
                        <div className="mb-1 w-full md:w-[50%] mr-0 md:ml-2">
                            <label for="repeat-password" className="block mb-2 text-[13px] font-normal text-gray-900 dark:text-white"> Linkedin Url</label>
                            <input
                                type="text"
name='linkedin'
                                className="bg-[#F0FDF4] text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500"
                                placeholder="Linkedin Url"
                                {...register("linkedin", {
                                    required: "Linkedin Url is required",


                                })}
                            />
                            {errors.linkedin && <p className='text-red-500 mt-1'>{errors.linkedin.message}</p>}
                        </div>


                    </div>
                    <div className="md:flex items-center">


                        {/* twitter*/}
                        <div className="mb-1 w-full md:w-[50%] mr-0 md:mr-2">
                            <label for="repeat-password" className="block mb-2 text-[13px] font-normal text-gray-900 dark:text-white"> Twitter Url</label>
                            <input
                                type="text"
name='twitter'
                                className="bg-[#F0FDF4] text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500"
                                placeholder="Twitter Url"
                                {...register("twitter", {
                                    required: "Twitter Url is required",


                                })}
                            />
                            {errors.twitter && <p className='text-red-500 mt-1'>{errors.twitter.message}</p>}
                        </div>

                        {/* youtube*/}
                        <div className="mb-1 w-full md:w-[50%] mr-0 md:ml-2">
                            <label for="repeat-password" className="block mb-2 text-[13px] font-normal text-gray-900 dark:text-white"> Youtube Url</label>
                            <input
                                type="text"
name='youtube'
                                className="bg-[#F0FDF4] text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500"
                                placeholder="Youtube Url"
                                {...register("youtube", {
                                    required: "Youtube Url is required",


                                })}
                            />
                            {errors.youtube && <p className='text-red-500 mt-1'>{errors.youtube.message}</p>}
                        </div>


                    </div>



                    <div className="text-center pt-3">
                        <button className='bg-primary hover:bg-lightPrimary text-white  py-2 rounded-lg text-lg w-fit px-8' type="submit" >
                            Add Doctor
                        </button>
                    </div>
                </form>

            </div>
        </section>
    )
}

export default AddDoctor