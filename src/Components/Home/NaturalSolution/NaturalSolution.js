import React from 'react'
import img1 from '../../../Assets/images/tree.svg'
import img2 from '../../../Assets/images/medicine.svg'
const NaturalSolution = () => {
    return (
        <div className='lg:flex md:flex py-14'>
            <div className='md:w-1/3 '>
                <img src={img1} alt='tree image' />
            </div>
            <div className='md:w-2/3 text-center sm:px-3 md:px-0'>
                <h1 className='font-bold uppercase text-3xl text-secondary'><span className='text-primary'>Renix </span> unani laboratories limited</h1>
                <p className='textColor mt-2'>Healthy Living Natural Solution</p>
                <p className='sm:mt-4 lg:mt-20  text-textColor text-justify'>Renix Unani Laboratories Limited is a company dedicated to producing high-quality, natural medicines for healthy living. They specialize in the Unani treatment system, which has been used for over 5000 years and has been proven to be successful and effective without harmful side effects.
                 Renix Laboratories is committed to promoting the benefits of natural medicine and contributing to the healthcare industry through the production of complete medicines made from all natural herbs.




                </p>
            </div>
            <div className='md:w-1/3 '> <img src={img2} alt='medicine image' /></div>
        </div>
    )
}

export default NaturalSolution