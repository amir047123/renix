import React from 'react';
import img1 from ".././Assets/images/Products/01. Syrup Cold Free.webp";
const Services = () => {
    return (
        <section className='lg:w-[90%] mx-auto'>
            <div className='w-full md:p-14 p-5 grid grid-cols-1 lg:grid-cols-2 gap-5'>
            
            <div className=''>
               <h3 className='uppercase py-8 font-semibold underline underline-offset-8 decoration-2'>Verify Medicine Security Code</h3>
               <form action="">
                <div>
                    <h5 className='py-2 font-semibold'>Security Code <span className='text-red-500'>*</span></h5>
                    <input
                  type="text"
                  name=""
                  className="mt-2 px-3 py-3 border-2 bg-whiteSmoke shadow-sm focus:outline border-whiteSmoke bg-transparent placeholder-slate-400  block w-auto  sm:text-sm rounded-md"
                  required
                  placeholder="Security code"
                ></input>
                </div>
                <div className='py-8'>
                <button type="submit" className="bg-primary p-2 rounded-md text-white lg:w-[120px]  uppercase block">
                  Verify
                </button>
              </div>
               </form>
            </div>
            <div>
               <h3 className='uppercase py-8 font-semibold underline underline-offset-8 decoration-2'>Security check Information</h3>
               <div className='shadow w-1/2 rounded-lg ring-2 ring-primary ' >
              <img src={img1} className='w-full' ></img>
                 
                 <div className='pl-3 pb-3 pt-1'>
                  <h3 className='font-light' > <span className='font-bold' >Name:</span> Cold-Free</h3>
                  <h3 className='font-light' ><span className='font-bold' >Generic Name:</span> Sharbat Tulsi  </h3>
                  <p className='font-bold' >250 <span className='font-light' >BDT</span></p>

                 </div>
 
               </div>
            </div>
        </div>
        </section>
    );
};

export default Services;