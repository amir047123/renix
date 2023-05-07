import React from 'react'
import img1 from '../../../Assets/images/Products/Bottle (1).png'
import img2 from '../../../Assets/images/Products/Bottle (2).png'
import img3 from '../../../Assets/images/Products/Bottle.png'
import img4 from '../../../Assets/images/Products/Box (1).png'
import img5 from '../../../Assets/images/Products/Box.png'
import img6 from '../../../Assets/images/Products/Syrup-Bottle-Mockup.png'
import './FeatureProducts.css'
const FeatureProducts = () => {

    const products=[
        {
            _id:1,
            productName:"Nature Hazmina Plus",
            price:"800",
            image:`${img1}`
        },
        {
            _id:2,
            productName:"Nature Hazmina Plus",
            price:"600",
            image:`${img2}`
        },
        {
            _id:3,
            productName:"Karkuma Superfood",
            price:"500",
            image:`${img3}`
        },
        {
            _id:4,
            productName:"Nature Hazmina Plus",
            price:"700",
            image:`${img4}`
        },
        {
            _id:5,
            productName:"Nature Hazmina Plus",
            price:"600",
            image:`${img5}`
        },
        {
            _id:6,
            productName:"Nature Hazmina Plus",
            price:"600",
            image:`${img6}`
        }
    ]
  return (
    <div className='lg:w-[90%] w-full mx-auto my-10 text-center '>
        <h3 className='bg-thirdLightPrimary w-36 mx-auto font '>F e a t u r e</h3>
        <h1 className='text-secondary font-semibold text-3xl mt-3'>Feature Products</h1>
        <div className=' flex gap-6 flex-wrap mx-auto justify-center  mt-24'>
      {
        products.map((product)=>(
          
                <div className='w-72' key={product._id}>
            <div className='w-72 h-80 p-4 px-8 rounded-xl border-2 border-whiteSmoke '>
             <h2 className='bg-primary w-10 text-xs rounded-sm ml-44 text-white mt-3'>Sale!</h2>
                 <img src={product.image} alt='' className='w-44 mx-auto  h-52 mt-7'/>
             </div>
             <div>
                 <h1 className='text-secondary text-sm mt-2'>{product.productName}</h1>
                 <p className='text-lightPrimary text-sm mt-2'>Tk {product.price}</p>
             </div>
             </div>
           
        ))
      }
      </div>
    </div>
  )
}

export default FeatureProducts