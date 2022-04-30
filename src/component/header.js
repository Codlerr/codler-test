import react from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";




function Header() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    const navigate = useNavigate('');
    const [isOpen, setIsOpen] = useState(false);


    return (

        
        <div>
                

                   <div className='navbar-main'>
                   <input type="checkbox" id="active"/>
                            
                        <img onClick={() => navigate('/')} src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1649676291/codler/White_jgawtg.png'} className='z-50 absolute w-24 h-10 md:w-32 md:h-16 lg:w-40 lg:h-[60px] sm:ml-6 ml-7 lg:ml-16 mt-7 lg:mt-6 cursor-pointer'></img>
                        <label for="active" className="menu-btn md:mr-0"><i className="fas fa-bars"></i></label>
                        <div class="wrapper">
                            <ul>
                                <li><a href=" " onClick={() => navigate('/')}>Home</a></li>
                                <li><a href=" " onClick={() => navigate('/Aboutus')}>About us</a></li>
                                <li><a href=" " onClick={() => navigate('/services')}>Services</a></li>
                                <li><a href=" " onClick={() => navigate('/technology')}>Technology</a></li>
                                <li><a href=" " onClick={() => navigate('/portfolio')}>Portfolio</a></li>
                                <li><a href=" " onClick={() => navigate('/blog')}>Blog</a></li>
                                <li><a href=" " onClick={() => navigate('/teams')}>Our Team</a></li>
                                <li><a href=" " onClick={() => navigate('/faq')}>Faq</a></li>
                                <li><a href=" " onClick={() => navigate('/Contactus')}>Contact us</a></li>
                            </ul>
                        </div>
                        
                   </div>
                                

     



            {/* <nav className="bg-gradient-to-r from-black via-zinc-900 to-black ">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <img
                                    className="w-32 h-10 sm:h-10 -ml-2 sm:w-48 sm:-ml-16 cursor-pointer"
                                    src={logo}
                                    alt="Workflow"
                                />
                            </div>
                            <div className="lg:hidden md:ml-36">
                                <div className="ml-20 flex items-baseline space-x-4">
                                    <a
                                        onClick={() => navigate('/')}
                                        href=""
                                        className=" hover:bg-gray-700 text-white px-3 py-2 no-underline rounded-md text-xl font-bold"
                                    >
                                        HOME
                                    </a>

                                    <a
                                        onClick={() => navigate('/Aboutus')}
                                       
                                        href="#"
                                        className="text-gray-300 w-36 hover:bg-gray-700 no-underline hover:text-white px-3 py-2 rounded-md text-lg font-bold"
                                    >
                                        ABOUT US
                                    </a>

                                    <a
                                        onClick={() => navigate('/portfolio')}
                                        href="#"
                                        className="text-gray-300 hover:bg-gray-700 no-underline hover:text-white px-3 py-2 rounded-md text-lg font-medium"
                                    >
                                        PORTFOLIO
                                    </a>

                                    <a
                                        onClick={() => navigate('/services')}
                                        href="#"
                                        className="text-gray-300 hover:bg-gray-700 no-underline hover:text-white px-3 py-2 rounded-md text-lg font-bold"
                                    >
                                        SERVICES
                                    </a>

                                    <a
                                        onClick={() => navigate('/technology')}
                                        href="#"
                                        className="text-gray-300 hover:bg-gray-700 no-underline hover:text-white px-3 py-2 rounded-md text-lg font-bold"
                                    >
                                        TECHNOLOGY
                                    </a>
                                    <a
                                        onClick={() => navigate('/blog')}
                                        href="#"
                                        className="text-gray-300 hover:bg-gray-700 no-underline hover:text-white px-3 py-2 rounded-md text-lg font-bold"
                                    >
                                        BLOG
                                    </a>
                                    <a
                                        onClick={() => navigate('/Contactus')}
                                        href="#"
                                        className="text-gray-300 w-36 hover:bg-gray-700 no-underline hover:text-white px-3 py-2 rounded-md text-lg font-bold"
                                    >
                                       CONTACT US
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="-mr-2 flex">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {(ref) => (
                        <div className=" bg-yellow-400 w-full h-screen" id="mobile-menu">
                            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                <a
                                    href="#"
                                    className="hover:bg-gray-700 text-white flex justify-center px-3 py-2 rounded-md text-base font-medium"
                                >
                                    HOME
                                </a>

                                <a
                                    href="#"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white flex justify-center px-3 py-2 rounded-md text-base font-medium"
                                >
                                    ABOUT US
                                </a>

                                <a
                                    href="#"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white flex justify-center px-3 py-2 rounded-md text-base font-medium"
                                >
                                    PORTFOLIO
                                </a>

                                <a
                                    href="#"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white flex justify-center px-3 py-2 rounded-md text-base font-medium"
                                >
                                     SERVICES
                                </a>

                                <a
                                    href="#"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white flex justify-center px-3 py-2 rounded-md text-base font-medium"
                                >
                                   TECHNOLOGY
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white flex justify-center px-3 py-2 rounded-md text-base font-medium"
                                >
                                    BLOG
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white flex justify-center px-3 py-2 rounded-md text-base font-medium"
                                >
                                   CONTACT US
                                </a>
                            </div>
                        </div>
                    )}
                </Transition>
            </nav>  */}

            
       
        </div>
        )
}
export default Header;