import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import tbubble1 from '../images/tbubble.jpg';
import bgman from '../images/bgman.png';
import '../App.css';
import {useNavigate} from "react-router-dom";


function Footer() {
    const navigate = useNavigate('');
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
           <div>
                <section>
                        <div className='lg:w-10/12 md:p-0 w-screen md:mx-auto md:pb-32'>
                            <div className='flex relative z-400'>
                            <img src={tbubble1} className=' lg:block w-16 mt-16 lg:w-24 lg:h-24 ml-2 bubble'></img>
                            <img src={tbubble1} className=' lg:block w-8 h-8 mt-56 lg:w-16  lg:h-16 ml-2 lg:ml-4 bubble2'></img>
                            <img src={tbubble1} className='lg:block w-4 h-4 mt-80 lg:w-8 lg:h-8  ml-2 lg:ml-4  bubble3'></img>
                            </div>
                            <div className='footerbg -mt-10 xs:h-[20%] lg:h-48 lg:rounded-lg'>
                                <div className=' mx-auto grid grid-cols-2 lg:grid-cols-2 gap-4'>
                                    <div className='p-[15%] xl:p-12  lg:ml-24'>
                                        <p className='text-white text-xs lg:-mt-8 font-gilroybold xl:mt-0 lg:text-xl xl:text-2xl xl:-mt-4 xs:text-[10px]'  data-aos="fade-right">We believe in changing the <br></br>world digitally</p>
                                        <a href='#'><button class="man-btn border-slate-100 sm:-mt-12 md:mt-0 md:mb-0 xs:text-[7px] m:h-16 hover:bg-slate-800 text-xs xs:w-20 lg:text-sm w-32 h-[30%] lg:h-10 lg:w-44 lg:h-18 text-white border-nuetral-800 rounded lg:px-4 ">Discuss your project</button></a>
                                    </div>
                                    <div>
                                        
                                        {/* <img src={bgbk} className='absolute right-10 lg:right-80 lg:w-44 w-40 h-52 lg:h-60 -mt-2 lg:-mt-10'></img> */}
                                        <img src={bgman} className='absolute right-8 lg:right-80 -ml-48 md:ml-0 lg:w-44 w-24 h-36 md:mt-5 lg:h-60 -mt-2 lg:-mt-10' data-aos="zoom-in-down"></img>
                                    <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1649701951/codler/Group_2098_abwmrr.png'} alt='img' className='hidden lg:block lg:w-28 lg:h-16 lg:ml-28 mt-16 relative z-200'/>
                                    </div>
                                </div>

                            </div>
                        </div>
                 </section>
                 <footer className='w-10/12 md:mx-auto p-10 md:p-0 md:pb-24 pb-10'>
                     <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                            <div  className=''>
                                <p className='text-white lg:text-base font-semibold'>Quick links</p>
                                <div>
                                    <a href='#' onClick={() => navigate('/Aboutus')} className='text-zinc-600 lg:text-sm hover:text-zinc-400 duration-500 font-semibold tracking-wide no-underline'><p className=''>About us</p></a>
                                    <a href='#' onClick={() => navigate('/services')} className='text-zinc-600 lg:text-sm hover:text-zinc-400 duration-500 font-semibold tracking-wide no-underline'><p className='-mt-2 md:mt-0'>Services</p></a>
                                    <a href='#' onClick={() => navigate('/portfolio')} className='text-zinc-600 lg:text-sm hover:text-zinc-400 duration-500 font-semibold tracking-wide no-underline'><p className='-mt-2 md:mt-0'>Portfolio</p></a>
                                    <a href='#' onClick={() => navigate('/Contactus')} className='text-zinc-600 lg:text-sm hover:text-zinc-400 duration-500 font-semibold tracking-wide no-underline'><p className='-mt-2 md:mt-0'>Contact us</p></a>
                                </div>
                            </div>
                            <div  className=''>
                                <p className='text-white lg:text-base  font-semibold'>Social media</p>
                                <div>
                                    <a href='#' className='text-zinc-600 lg:text-sm hover:text-zinc-400 duration-500 tracking-wide no-underline font-semibold'><p className=''><span className='pr-4'><i class="fa-brands fa-instagram"></i></span>Instagram</p></a>
                                    <a href='#' className='text-zinc-600 lg:text-sm hover:text-zinc-400 duration-500 tracking-wide no-underline font-semibold -mt-2 md:mt-0'><p className=''><span className='pr-4'><i class="fa-brands fa-facebook-square"></i></span>Facebook</p></a>
                                    <a href='#' className='text-zinc-600 lg:text-sm hover:text-zinc-400 duration-500 tracking-wide no-underline font-semibold -mt-2 md:mt-0'><p className=''><span className='pr-4'><i class="fa-brands fa-youtube"></i></span>Youtube</p></a>
                                    <a href='#' className='text-zinc-600 lg:text-sm hover:text-zinc-400 duration-500 tracking-wide no-underline font-semibold -mt-2 md:mt-0'><p className=''><span className='pr-4'><i class="fa-brands fa-twitter"></i></span>Twitter</p></a>
                                </div>
                            </div>
                            <div className='lg:-ml-10'>
                                <p className='text-white text-sm lg:text-base  font-semibold'>Registered Office Address</p>
                                <p className='text-zinc-600 lg:text-sm hover:text-zinc-400 tracking-wide duration-500 no-underline font-semibold'>Codler Solution Private Limited,<br></br>
                                    Electronic City<br></br>
                                    Bengaluru, 560100,<br></br>
                                    Karnataka, India</p>
                            </div>
                            <div className=''>
                                <p className='text-white lg:text-base  font-semibold'>Signup for newsletters</p>
                                <p className='text-zinc-200 text-xs'>Email</p>
                                <div className=''>
                                    <form action="" className="max-w-full">
                                    <input className="bg-transparent text-white font-semibold opacity-50  border-b-2 h-10 w-48 text-sm font-light border-0 outline-none" type="text" placeholder="Samplemail@.com"/><a href="#"><i class="fas fa-arrow-circle-right text-pink-500  text-3xl" ></i></a>
                                    <hr className="text-gray-200 opacity-20 text-2xl w-60 -mt-0" />
                                    </form>
                                    

                                </div>
                            </div>
                     </div>
                 </footer>
                 <section className=' bg-zinc-900'>
                     <div className='w-10/12 mx-auto h-14 py-2 flex'>
                         <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1649676291/codler/White_jgawtg.png'} className='w-16 h-7 lg:mt-[3px] lg:w-24 xl:h-8'></img>
                         <a href='#' className='no-underline text-zinc-500 hover:text-zinc-400 py-2.5  pl-2 text-xs lg:text-xs '><p>2021 codlerr Inc. all rights reserved</p></a>
                     </div>
                 </section>
           </div>
        )
}
export default Footer;