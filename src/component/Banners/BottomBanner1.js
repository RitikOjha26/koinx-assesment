import React from 'react'

import Banner1 from '../../assets/images/Frame1.jpg'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const BottomBanner_Phone = () => {
    return (
        <div className='h-auto w-[90vw] bg-[#0052FE]  rounded-[25px] text-white relative '>
            
            <img className='align-center px-[105px] py-8 ' src={Banner1} alt="Banner"  />
            <div className='py-[1px] px-[16px] text-center'>
            
                <h1 className='text-[20px] font-bold mb-3 '>Track your portfolio & taxes</h1>

                <span className=' text-semibold'>With our range of features that you can equip for free,
                    KoinX allows you to be more educated and aware of your tax reports.</span>
                
                
            </div>
            <button
            id='SignUp' 
            className='items-center bg-white text-black font-medium my-3 ml-[55px] w-[60vw] h-[5vh] rounded-md'>
                    Sign up at KoinX for free

                    <FontAwesomeIcon icon={faArrowRight} className='ml-auto' />
                </button>

        </div>
    )
}

export default BottomBanner_Phone