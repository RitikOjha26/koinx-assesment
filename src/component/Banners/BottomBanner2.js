import React from 'react'
import Banner1 from '../../assets/images/Frame2.jpg';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BottomBanner2 = () => {
    return (

        <div class="w-screen h-[70vh] flex  justify-center items-center bg-white mt-24">

            {/* <!-- Parent div with 100vw width and margin bg-[#0052FE]--> */}
            <div class="w-[85vw] h-[45vh]  rounded-3xl bg-[#0052FE]   z-10 flex flex-row ">
                <div className="flex m-auto p-[2rem] items-center justify-center gap-[3rem] w-auto h-auto ">

                    <img src={Banner1} alt="Banner2" className='h-[200px] w-[200px] relative   ' />
                    <div className="  w-auto flex flex-col justify-between content-center    ">

                        <h1 className=' text-[1.4rem] flex  font-bold text-white pb-4 '>Stay up to date with latest crypto news and events. Subscribe to our newsletter</h1>
                        <div className="flex flex-row">
                            <input
                                type="email"
                                className="block h-[7vh] w-[16rem] px-4  mr-2 rounded leading-tight bg-gray-200 text-gray-700 border focus:outline-none focus:bg-white focus:border-gray-500"
                                placeholder="Enter your Email Address"

                            />
                            <button className='bg-[#FFB800] text-black font-medium  h-[7vh] w-[12rem] rounded-md'>
                                <span className=' text-xl'>Suscribe</span>
                                <FontAwesomeIcon icon={faArrowRight} className='ml-auto' />
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>


    )
}

export default BottomBanner2