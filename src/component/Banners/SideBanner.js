import React from 'react'

import Banner1 from '../../assets/images/Frame1.jpg'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SideBanner = () => {
    return (
        <div className='md:h-auto bg-[#0052FE] rounded-[25px] text-white  '>
            
            <div className=' md:p-[55px]  text-center items-center'>
                <h1 className='text-[1.5rem] font-bold mb-5 '>Get Started with KoinX for FREE</h1>

                <span className=' text-[0.9rem] text-center text-semibold'>With our range of features that you can equip for free,
                    KoinX allows you to be more educated and aware of your tax reports.</span>
                    <img className=' lg:block m-auto py-5 item-centre mx-auto' src={Banner1} alt="Banner"  />
                    <button 
                    id='introkoinx'
                    className='bg-white text-black font-medium w-[18vw] h-[7vh] rounded-md'>
                        Get Started for FREE
                        <FontAwesomeIcon icon={faArrowRight} className='ml-auto' />
                    </button>
            </div>

            
        </div>
    )
}

export default SideBanner