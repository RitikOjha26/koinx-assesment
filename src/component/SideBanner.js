import React from 'react'

import Banner1 from '../assets/images/Frame1.jpg'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SideBanner = () => {
    return (
        <div className='h-[70vh] bg-[#0052FE] rounded-[25px] text-white '>
            
            <div className='py-[55px] px-[16px] text-center'>
                <h1 className='text-[26px] font-bold mb-5 '>Get Started with KoinX for FREE</h1>

                <span className=' text-semibold'>With our range of features that you can equip for free,
                    KoinX allows you to be more educated and aware of your tax reports.</span>
                    <img className='px-[85px] py-5 ' src={Banner1} alt="Banner" />
                    <button className='bg-white text-black font-medium w-[18vw] h-[5vh] rounded-md'>
                        Get Started for FREE
                        <FontAwesomeIcon icon={faArrowRight} className='ml-2' />
                    </button>
            </div>

            
        </div>
    )
}

export default SideBanner