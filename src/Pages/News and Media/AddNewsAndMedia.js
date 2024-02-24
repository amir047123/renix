import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import JoditEditor from 'jodit-react';
import { singleImageUpload } from "../../Hooks/ImageUpload";
import PostHooks from '../../Hooks/PostHooks';

const AddNewsAndMedia = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const editor = useRef(null);
    const [newsDescription, setNewsDescription] = useState('');
    const [image, setImage] = useState(null);

    const handleChangeUploadImage = async (event) => {
        const image = event.target.files[0];
        const formData = new FormData();
        formData.append("image", image);
    
        singleImageUpload(formData, setImage);
    };
    
    
    const handleAddNews = async (formData) => {
        const news = {
            newsTitle:formData.newsTitle,
            newsCategory:formData.newsCategory,
            newsImage:image,
            newsDescription:newsDescription

         
        };
    
        // post api call
        await PostHooks(
          "http://localhost:5000/api/v1/newsAndMedia/addNewsAndMedia",
          news,
          "Medicine successfully posted"
        );
       
      };
    return (
        <section className="py-10 md:py-14">
            <div className='form_wrapper bg-white px-10 w-full mx-auto md:max-w-4xl lg:max-w-4xl rounded'>
                <h2 className="text-3xl font-semibold text-dark mb-10 text-center">Add News</h2>
                <form onSubmit={handleSubmit(handleAddNews)} className="shadow-lg shadow-gray-300 px-8 py-10 rounded flex flex-col gap-4 text-left">
                    <div className="mb-1">
                        <label htmlFor="name" className="block mb-2 text-[13px] font-normal text-gray-900 dark:text-white">News Title</label>
                        <input
                            type="text"
                            id="name"
                            className="bg-[#F0FDF4] text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500"
                            placeholder="News Title"
                            {...register("newsTitle", {
                                required: "News Title is required",
                            })}
                        />
                        {errors.newsTitle && <p className='text-red-500 mt-1'>{errors.newsTitle.message}</p>}
                    </div>
                    <div className="mb-1 w-full">
                        <label htmlFor="condition" className="block mb-2 text-[13px] font-normal text-gray-900 dark:text-white">News category</label>
                        <select
                            id="condition"
                            className="bg-[#F0FDF4] text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500"
                            {...register("newsCategory", {
                                required: "News category is required",
                            })}
                        >
                            <option value="" disabled selected>Choose a Category</option>
                            <option value="News">News</option>
                            <option value="Media">Media</option>
                        </select>
                        {errors.newsCategory && <p className='text-red-500 mt-1'>{errors.newsCategory.message}</p>}
                    </div>
                    <div className="mb-1">
                        <label htmlFor="file_input" className="block mb-2 text-[13px] font-normal text-gray-900 dark:text-white">Doctor Photo</label>
                        <input
                            className="block w-full text-sm text-gray-900 rounded-lg cursor-pointer bg-[#F0FDF4] dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 p-2"
                            id="file_input"
                            type="file"
                            onChange={handleChangeUploadImage}
                        />
                        {errors.newsImage && <p className='text-red-500 mt-1'>{errors.newsImage.message}</p>}
                    </div>
                    <div className="mb-1">
                        <label htmlFor="description" className="block mb-2 text-[13px] font-normal text-gray-900 dark:text-white">Description</label>
                        <JoditEditor
                            ref={editor}
                            value={newsDescription}
                            onChange={newContent => setNewsDescription(newContent)}
                        />
                    </div>
                    <div className="text-center pt-3">
                        <button className='bg-primary hover:bg-lightPrimary text-white py-2 rounded-lg text-lg w-fit px-8' type="submit">
                            Add News
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default AddNewsAndMedia;
