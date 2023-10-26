import React from 'react'
import Banner1 from '../../assets/images/Frame2.jpg';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BottomBanner2 = () => {
    return (

        <div class="w-screen h-[70vh] flex justify-center items-center bg-white mt-24">

            {/* <!-- Parent div with 100vw width and margin bg-[#0052FE]--> */}
            <div class="w-[85vw] h-[45vh]  rounded-3xl bg-green-600   z-10 flex  ">
                <div className="flex h-auto bg-yellow-600">
                    

                    <div className=" flex flex-row w-[50%]  pt-8">
                        <img src={Banner1} alt="Banner2" className='h-[200px] w-[200px] relative   ' />
                        <h1 className=' text-[20px] font-bold pb-4 '>Stay up to date with latest crypto news and events. Subscribe to our newsletter</h1>
                        <div className="flex flex-row">
                            <input
                                type="email"
                                className="block h-[7vh] w-2/3 px-4  mr-2 rounded leading-tight bg-gray-200 text-gray-700 border focus:outline-none focus:bg-white focus:border-gray-500"
                                placeholder="Enter your Email Address"

                            />
                            <button className='bg-[#FFB800] text-black font-medium w-1/3 h-[7vh] rounded-md'>
                                <span className=' text-xl'>Suscribe</span>
                                <FontAwesomeIcon icon={faArrowRight} className='ml-2' />
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>


    )
}

export default BottomBanner2