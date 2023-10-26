import React from 'react';
import { QNA } from '../constants';

const Faq = () => {
    return (
        <div className='px-5 pt-10 text-left leading-7'>
            <div className=" font-bold pb-10 text-2xl text-gray-700 ">
                
                    Frequently Asked Questions
                
            </div>
            {QNA.map((item) => (
                <div key={item.id}>
                    <p className='font-semibold flex text-[20px] text-[#0b1426] text-opacity-90 pb-[10px]'><span className='hidden sm:block'>{item.id}.</span>{item.Question}</p>
                    <p className='text-[16px]'>{item.Answer}</p>
                    <hr className='bg-black my-[15px]  '/>             
                </div>
                
            ))}
        </div>
    );
};

export default Faq;
