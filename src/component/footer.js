import react from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import tbubble1 from '../images/tbubble.jpg';
import log from '../images/White.png';
import bgman from '../images/bgman.png';
import '../App.css';
import { Link, useNavigate } from "react-router-dom";


function Footer() {
    const navigate = useNavigate('');
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
           <div>
                <section>
                        <div className='md:w-10/12  p-10 md:p-0 w-screen mx-auto md:pb-32 '>
                            <div className='flex '>
                            <img src={tbubble1} className=' lg:block w-16 mt-16 lg:w-24 lg:h-24 ml-2 bubble'></img>
                            <img src={tbubble1} className=' lg:block w-8 h-8 mt-56 lg:w-16  lg:h-16 ml-2 lg:ml-4 bubble2'></img>
                            <img src={tbubble1} className='lg:block w-4 h-4 mt-80 lg:w-8 lg:h-8  ml-2 lg:ml-4  bubble3'></img>
                            </div>
                            <div className='footerbg -mt-10 md:h-48 lg:h-56 lg:rounded-lg'>
                                <div className='w-11/12 lg:w-8/12 mx-auto grid grid-cols-2 lg:grid-cols-2 gap-4'>
                                    <div className='p-3'>
                                        <p className='text-white text-xs mt-2 lg:text-3xl md:pt-8'  data-aos="fade-right">Let's focus on making<br></br>amazing things digitally.</p>
                                        <a href='#'><button class="man-btn border-slate-100  hover:bg-slate-800 text-xs lg:text-sm w-32   lg:w-44 lg:h-18 text-white border-nuetral-800 rounded lg:px-4 py-2">Discuss your project</button></a>
                                    </div>
                                    <div>
                                        
                                        {/* <img src={bgbk} className='absolute right-10 lg:right-80 lg:w-44 w-40 h-52 lg:h-60 -mt-2 lg:-mt-10'></img> */}
                                        <img src={bgman} className='absolute right-8 lg:right-80 lg:w-44 w-32 h-40 lg:h-60 -mt-2 lg:-mt-10' data-aos="zoom-in-down"></img>
                                    </div>
                                </div>

                            </div>
                        </div>
                 </section>
                 <footer className='w-10/12 md:mx-auto p-10 md:p-0 md:pb-24 pb-10'>
                     <div className='grid grid-cols-1 lg:grid-cols-4 gap-4'>
                            <div  className=''>
                                <p className='text-white lg:text-base font-semibold'>Quick links</p>
                                <div>
                                    <a href='#' onClick={() => navigate('/Aboutus')} className='text-zinc-600 lg:text-sm hover:text-zinc-400 duration-500 tracking-wide no-underline'><p className=''>About us</p></a>
                                    <a href='#' onClick={() => navigate('/services')} className='text-zinc-600 lg:text-sm hover:text-zinc-400 duration-500 tracking-wide no-underline'><p className='-mt-2 md:mt-0'>Services</p></a>
                                    <a href='#' onClick={() => navigate('/portfolio')} className='text-zinc-600 lg:text-sm hover:text-zinc-400 duration-500 tracking-wide no-underline'><p className='-mt-2 md:mt-0'>Portfolio</p></a>
                                    <a href='#' onClick={() => navigate('/Contactus')} className='text-zinc-600 lg:text-sm hover:text-zinc-400 duration-500 tracking-wide no-underline'><p className='-mt-2 md:mt-0'>Contact us</p></a>
                                </div>
                            </div>
                            <div  className=''>
                                <p className='text-white lg:text-base  font-semibold'>Social media</p>
                                <div>
                                    <a href='#' className='text-zinc-600 lg:text-sm hover:text-zinc-400 duration-500 tracking-wide no-underline '><p className=''><span className='pr-4'><i class="fa-brands fa-instagram"></i></span>Instagram</p></a>
                                    <a href='#' className='text-zinc-600 lg:text-sm hover:text-zinc-400 duration-500 tracking-wide no-underline -mt-2 md:mt-0'><p className=''><span className='pr-4'><i class="fa-brands fa-facebook-square"></i></span>Facebook</p></a>
                                    <a href='#' className='text-zinc-600 lg:text-sm hover:text-zinc-400 duration-500 tracking-wide no-underline -mt-2 md:mt-0'><p className=''><span className='pr-4'><i class="fa-brands fa-youtube"></i></span>Youtube</p></a>
                                    <a href='#' className='text-zinc-600 lg:text-sm hover:text-zinc-400 duration-500 tracking-wide no-underline -mt-2 md:mt-0'><p className=''><span className='pr-4'><i class="fa-brands fa-twitter"></i></span>Twitter</p></a>
                                </div>
                            </div>
                            <div className=''>
                                <p className='text-white text-sm lg:text-base  font-semibold'>Registered Office Address</p>
                                <p className='text-zinc-600 lg:text-sm hover:text-zinc-400 tracking-wide duration-500 no-underline'>codlerr Private Limited,<br></br>
                                    Buildings Alyssa, Begonia &<br></br>
                                    Clove Embassy Tech Village,<br></br>
                                    Outer Ring Road, Devarabeesanahalli<br></br> Village, Bengaluru, 560103,<br></br>
                                    Karnataka, India</p>
                            </div>
                            <div className=''>
                                <p className='text-white lg:text-base  font-semibold'>Signup for newsletters</p>
                                <p className='text-zinc-200'>Email</p>
                                <div className=''>
                                    <form action="" className="max-w-full">
                                    <input className="bg-transparent text-white border-b-2 h-10 w-48 text-sm border-0 outline-none" type="text" placeholder="Samplemail@.com"/><a href="#"><i class="fas fa-arrow-circle-right text-pink-500  text-3xl" ></i></a>
                                    <hr className="text-gray-200 opacity-20 text-2xl w-60 -mt-0" />
                                    </form>
                                    

                                </div>
                            </div>
                     </div>
                 </footer>
                 <section className=' bg-zinc-900'>
                     <div className='w-10/12 mx-auto h-14 py-2 flex'>
                         <img src={log} className='w-20 h-7 lg:w-28 lg:h-8'></img>
                         <a href='#' className='no-underline text-zinc-500 hover:text-zinc-400 py-1.5  pl-2 text-xs lg:text-base '><p>2021 codlerr Inc. all rights reserved</p></a>
                     </div>
                 </section>
           </div>
        )
}
export default Footer;