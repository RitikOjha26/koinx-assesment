import React from "react";
import Logo from '../assets/images/logob.svg';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {NAVLINKS} from '../constants/index';

library.add(faBars);
export default function Navbar({ fixed }) {

    
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <>
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-white mb-3 shadow">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex items-center justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <a
                            className=" font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap  text-black"
                            href="/"
                        >
                            <img className='relative right-[12px] md:left-[10px] items-center' src={Logo} alt="LOGO" />
                        </a>
                        <button
                            id="dropdownbtn"
                            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <FontAwesomeIcon icon="fa-solid fa-bars" style={{ color: "#000000", }} />
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center pt-2 md:pt-0"  +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col pl-2 md:pl-0  lg:flex-row list-none lg:ml-auto items-start ">
                        {NAVLINKS.map((item, index) => (
                                <li key={item.id} className="nav-item">
                                    <a
                                        className={`relative right-5 md:px-5 py-2 flex items-center font-semibold leading-snug  hover:opacity-75 ${index === NAVLINKS.length - 1
                                                ? '  mt-3 cursor-pointer px-2   border-2  border-[#0052FE] text-[#0052FE] rounded-lg justify-center relative md:right-[0px] md:mt-0 '
                                                : ''
                                            }`}
                                        href="/"
                                    >
                                        <i className="fab fa-facebook-square text-lg leading-lg text-black opacity-75"></i>
                                        <span className="mx-1 text-[14px] ">{item.title}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    );
}