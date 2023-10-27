import React from 'react'
import Logo from '../assets/images/logow.svg'

import { faAngellist, faLinkedinIn, faFacebookF, faInstagram , faXTwitter , faYoutubeSquare} from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faAngellist);

const Footer = () => {
  return (
    <footer
      className="w-screen mt-11 bg-[#02042B] text-center text-blue-500   lg:text-left md:px-28">
      <div
        className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between">
        <div className="mr-12 hidden lg:block">
          <img src={Logo} alt="Logo" className='' />
        </div>
        {/* <!-- Social network icons container --> */}
        <div className="flex justify-center">
          <a  className="mr-6 text-blue-500 cursor-pointer ">
            <FontAwesomeIcon icon={faAngellist} />
          </a>
          <a  className="mr-6 text-blue-500 h-4 w-4 cursor-pointer">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a  className="mr-6 text-blue-500 h-4 w-4 cursor-pointer">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a  className="mr-6 text-blue-500 h-4 w-4 cursor-pointer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a  className="mr-6 text-blue-500 h-4 w-4 cursor-pointer">
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
          <a  className="mr-6 text-blue-500 h-4 w-4 cursor-pointer">
            <FontAwesomeIcon icon={faYoutubeSquare} />
          </a>

        </div>
      </div>

      {/* <!-- Main container div: holds the entire content of the footer, including four sections (Tailwind Elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. --> */}
      <div className="mx-6 py-8 text-center md:text-left">
        <div className="grid sm:hidden">
          {/* Footer For Mobile */}

          <div className="">
            <h6
              className="text-white mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Product
            </h6>
            <p className="  mb-4">
              <a  className="text-blue-500 hover:underline "
              >Features</a>
            </p>
            <p className="mb-4">
              <a  className="text-blue-500 hover:underline "
              >How it works</a>
            </p>


          </div>

          <div className="">

            <h6
              className="text-white mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Company
            </h6>
            <p className="mb-4">
              <a  className="text-blue-500 hover:underline  "
              >Backed by</a>
            </p>
            <p className="mb-4">
              <a  className="text-blue-500 hover:underline "
              >Terms of use</a>
            </p>
            <p className="mb-4">
              <a  className="text-blue-500 hover:underline "
              >Privacy Policy</a>
            </p>
          </div>
          <div className="">
            <h6
              className="text-white mb-4 flex justify-center font-semibold uppercase md:justify-start">
              PR and Media enquiries
            </h6>
            <p className="mb-4">
              <a  className="text-blue-500 hover:underline "
              >communications@koinx.com</a>
            </p>

          </div>
        </div>

        <div className="grid-2 sm:grid gap-9 hidden  md:grid-cols-5">
          {/* <!-- Tailwind Elements section --> */}
          <div className="">
            <h6
              className="text-white mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Crypto Taxes for
            </h6>
            <p className="mb-4">
              <a  className="text-white text-opacity-60 cursor-pointer hover:underline "
              >Individual and Investor</a>
            </p>
            <p className="mb-4">
              <a  className="text-white text-opacity-60 cursor-pointer hover:underline "
              >Tax Professional and Accountants</a>
            </p>
            <p className="mb-4">
              <a  className="text-white text-opacity-60 cursor-pointer hover:underline "
              >Exchanges and Web3 projects</a>
            </p>

          </div>
          {/* Free Tools Section */}
          <div className="">
            <h6
              className="text-white mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Free Tools
            </h6>
            <p className="mb-4">
              <a  className="text-white text-opacity-60 cursor-pointer hover:underline "
              >Crypto Price Live</a>
            </p>
            <p className="mb-4">
              <a  className="text-white text-opacity-60 cursor-pointer hover:underline "
              >Crypto Tax Calculator</a>
            </p>
            <p className="mb-4">
              <a  className="text-white text-opacity-60 cursor-pointer hover:underline "
              >Crypto Tax Saving Speculator</a>
            </p>
            <p className="mb-4">
              <a  className="text-white text-opacity-60 cursor-pointer hover:underline "
              >Crypto Profit Calculator</a>
            </p>
            <p className="mb-4">
              <a  className="text-white text-opacity-60 cursor-pointer hover:underline "
              >Crypto Converter</a>
            </p>
            <p className="mb-4">
              <a  className="text-white text-opacity-60 cursor-pointer hover:underline "
              >Crypto Staking ROI Calculator</a>
            </p>
          </div>
          {/* Resource Centre */}
          <div className="">
            <h6
              className="text-white mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Resource Centre
            </h6>
            <p className="mb-4">
              <a  className="text-white text-opacity-60 cursor-pointer hover:underline "
              >Crypto Tax Guides</a>
            </p>
            <p className="mb-4">
              <a  className="text-white text-opacity-60 cursor-pointer hover:underline "
              >Dumb Ways To Lose Money</a>
            </p>
            <p className="mb-4">
              <a  className="text-white text-opacity-60 cursor-pointer hover:underline "
              >Crypto Tax Saving Guide</a>
            </p>
            <p className="mb-4">
              <a  className="text-white text-opacity-60 cursor-pointer hover:underline "
              >Blogs</a>
            </p>
            <p className="mb-4">
              <a  className="text-white text-opacity-60 cursor-pointer hover:underline "
              >Crypto Buying Guides</a>
            </p>
            <p className="mb-4">
              <a  className="text-white text-opacity-60 cursor-pointer hover:underline "
              >Crypto Staking Guides</a>
            </p>
            <p className="mb-4">
              <a  className="text-white text-opacity-60 cursor-pointer hover:underline "
              >Crypto Mining Guides</a>
            </p>
            <p className="mb-4">
              <a  className="text-white text-opacity-60 cursor-pointer hover:underline "
              >Crypto Price Predictions</a>
            </p>
          </div>
          {/* <!-- Products section --> */}
          <div className="">
            <h6
              className="text-white mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Help And Support
            </h6>
            <p className="mb-4">
              <a  className="text-white text-opacity-60 cursor-pointer hover:underline "
              >Product Guides</a>
            </p>
            <p className="mb-4">
              <a  className="text-white text-opacity-60 cursor-pointer hover:underline"
              >How to Guides</a>
            </p>
            <p className="mb-4">
              <a  className="text-white text-opacity-60 cursor-pointer hover:underline "
              >Templates</a>
            </p>
            <p>
              <a  className="text-white text-opacity-60 cursor-pointer hover:underline "
              >Contact us</a>
            </p>
          </div>
          {/* <!-- Useful links section --> */}
          <div className="">
            <h6
              className="text-white mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Company
            </h6>
            <p className="mb-4">
              <a  className="text-white text-opacity-60 cursor-pointer hover:underline "
              >About Us</a>
            </p>
            <p className="mb-4">
              <a  className="text-white text-opacity-60 cursor-pointer hover:underline "
              >Backed by</a>
            </p>
            <p className="mb-4">
              <a  className="text-white text-opacity-60 cursor-pointer hover:underline "
              >Media and Press</a>
            </p>
            <p className='mb-4'>
              <a  className="text-white text-opacity-60 cursor-pointer "
              >Careers <button className='bg-blue-600 text-white hover:underline rounded-sm'>Were're Hiring</button></a>
            </p>
            <p className="mb-4">
              <a  className="text-white text-opacity-60 cursor-pointer hover:underline "
              >Refund Policy</a>
            </p>
            <p className="mb-4">
              <a  className="text-white text-opacity-60 cursor-pointer hover:underline "
              >Brand Assets</a>
            </p>
            <p className="mb-4">
              <a  className="text-white text-opacity-60 cursor-pointer hover:underline "
              >Terms of Use</a>
            </p>
            <p className="mb-4">
              <a  className="text-white text-opacity-60 cursor-pointer hover:underline "
              >Privacy Policy</a>
            </p>
          </div>
          {/* <!-- Contact section --> */}

        </div>
      </div>

      {/* <!--Copyright section--> */}
      <div className="text-white text-opacity-60  p-6 text-center ">
        <span>© All rights reserved by Simplify Infotech Pvt. Ltd.</span>

      </div>
    </footer>
  )
}

export default Footer