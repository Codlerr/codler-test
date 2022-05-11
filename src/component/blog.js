import Aos from 'aos';
import "aos/dist/aos.css";
import { Router, Switch, Route, useNavigate, Routes } from "react-router-dom";
import { useEffect } from 'react';
import p1 from '../images/bloglist/Rectanglea 311.jpg';
import p2 from '../images/bloglist/Rectangle 311.jpg';
import p3 from '../images/bloglist/Rectangle 311 (2).jpg';
import p4 from '../images/bloglist/Rectangle 311 (3).jpg';
import s1 from '../images/bloglist/Ellipse 48.png';
import bub from '../images/bloglist/tbubble.jpg';
import bubr from '../images/bloglist/bubble1@2x 2 (1).png';
import bubl from '../images/bloglist/bubble1@2x 2.png';
import line from '../images/bloglist/Line 6.png';
import {Helmet} from 'react-helmet';
function Blog() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    const navigate = useNavigate('');
    return (
        <div>
          <Helmet>
            <title>Blog</title>
            <meta name="description" content="Read our blogs" />
           </Helmet>           
            <section>
                <div className='blogbg'>
                    <img src={bub}  className='hidden lg:block pt-96 absolute w-8 right-14'></img>
                    <img src={bub}  className='hidden lg:block pt-96 absolute w-16 right-28'></img>
                    <img src={bubr} className='hidden lg:block pt-40 absolute w-32 right-0'></img>
                   <div className='text-white text-center pt-64' data-aos="fade-up">
                    <p className='font-semibold md:mt-10 lg:mt-0' >OUR BLOG</p>
                    <p className='text-3xl lg:text-4xl font-bold -mt-4 md:mt-20 lg:-mt-4' data-aos="fade-up-right" data-aos-delay="400">This is where we tell stories</p>
                   </div>
                   <img src={bub}  className='hidden lg:block -mt-40 absolute w-8 left-20'></img>
                    <img src={bub}  className='hidden lg:block -mt-40 absolute w-16 left-32'></img>
                    <img src={bubl} className='hidden lg:block -mt-40 absolute w-28 left-0'></img>
                </div>
            </section>


            
            <section className='md:mb-16'>
                <div className='w-11/12 mx-auto'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pb-20'>
                        {/* left start */}
                            <div className='lg:col-span-3'>
                                <div className='grid grid-cols-1 lg:grid-cols-2 py-10' data-aos="fade-up">
                                    <div><img src={p1} onClick={() => navigate('/blog/blogdetails')} className='cursor-pointer'></img></div>
                                    <div className='lg:pl-8 pt-4 '>
                                        <span className='flex'><img src={line} className='h-0.5 mt-2.5 pr-2'></img><p className='text-white font-semibold'>UI/ UX DESIGN</p></span>
                                        <p className='cursor-pointer text-white text-xl font-semibold' onClick={() => navigate('blog/blogdetails')}>10 Non-Trivial Design Challenge<br/> Generators for Practice UX/UI Design</p>
                                        <p className='cursor-pointer text-zinc-300 pr-10 text-xs'>How I found myself in a battle of ideas with Elon Musk — (For folks who prefer to listen instead of read, you can watch a video version of this article...</p>
                                        <div className='md:flex  pt-6'>
                                            <img src={s1} className='cursor-pointer w-10 pr-2 h-8'></img>
                                           <div className='flex'>
                                                <p className='pl-0 lg:pl-10 pt-2 text-xs cursor-pointer text-zinc-400'>Hans van de Bruggen</p>
                                                <p className='pl-2.5 lg:pl-3 pt-2 text-xs cursor-pointer text-zinc-400'>5 Mint read</p>
                                                <p className='pl-2.5 lg:pl-3 pt-2 text-xs cursor-pointer text-zinc-400'>December 14,2020</p>
                                           </div>
                                        </div>
                                    </div>
                                </div>
                                {/* center */}
                                <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                                    <div data-aos="fade-up">
                                        <img src={p2} onClick={() => navigate('/blog/blogdetails')}  className='cursor-pointer w-96'></img>
                                        <p className='text-white font-semibold pt-4'>Case study: Custom clothing responsive website</p>
                                        <p className='text-white text-xs'>How I found myself in a battle of ideas with Elon Musk — (For folks who prefer to listen...</p>
                                        <div className='flex'>
                                            <img src={s1}></img>
                                            <p className='text-zinc-600 ml-2 text-xs'>Hans van de Bruggen</p>
                                            
                                               
                                        </div>
                                        <div className='flex ml-10 -mt-4 text-zinc-600 text-xs'>
                                                <p>December 14,2020</p>
                                                <p>5 Mint read</p>
                                            </div>
                                    </div>
                                    <div data-aos="fade-up">
                                        <img src={p3} onClick={() => navigate('/blog/blogdetails')}  className='cursor-pointer w-96'></img>
                                        <p className='text-white font-semibold pt-4'>10 Non-Trivial Design Challenge Generators for Practice UX/UI Design</p>
                                        <p  className='text-white text-xs'>How I found myself in a battle of ideas with Elon Musk — (For folks who prefer to listen...</p>
                                            <div className='flex'>
                                            <img src={s1}></img>
                                            <p className='text-zinc-600 ml-2 text-xs'>Hans van de Bruggen</p>
                                            
                                               
                                        </div>
                                        <div className='flex ml-10 -mt-4 text-zinc-600 text-xs'>
                                                <p>December 14,2020</p>
                                                <p>5 Mint read</p>
                                            </div>
                                    </div>
                                    <div data-aos="fade-up">
                                        <img src={p4} onClick={() => navigate('/blog/blogdetails')}  className='cursor-pointer w-96'></img>
                                        <p className='text-white font-semibold pt-4'>Case study: Custom clothing responsive website</p>
                                        <p  className='text-white text-xs'>How I found myself in a battle of ideas with Elon Musk — (For folks who prefer to listen...</p>
                                            <div className='flex'>
                                            <img src={s1}></img>
                                            <p className='text-zinc-600 ml-2 text-xs'>Hans van de Bruggen</p>
                                            
                                               
                                        </div>
                                        <div className='flex ml-10 -mt-4 text-zinc-600 text-xs'>
                                                <p>December 14,2020</p>
                                                <p>5 Mint read</p>
                                            </div>
                                    </div>

                                    <div data-aos="fade-up">
                                        <img src={p2} onClick={() => navigate('/blog/blogdetails')}  className='cursor-pointer w-96'></img>
                                        <p className='text-white font-semibold pt-4'>Case study: Custom clothing responsive website</p>
                                        <p  className='text-white text-xs'>How I found myself in a battle of ideas with Elon Musk — (For folks who prefer to listen...</p>
                                            <div className='flex'>
                                            <img src={s1}></img>
                                            <p className='text-zinc-600 ml-2 text-xs'>Hans van de Bruggen</p>
                                            
                                               
                                        </div>
                                        <div className='flex ml-10 -mt-4 text-zinc-600 text-xs'>
                                                <p>December 14,2020</p>
                                                <p>5 Mint read</p>
                                            </div>
                                    </div>

                                    <div data-aos="fade-up">
                                        <img src={p3} onClick={() => navigate('/blog/blogdetails')} className='cursor-pointer w-96'></img>
                                        <p className='text-white font-semibold pt-4'>Case study: Custom clothing responsive website</p>
                                        <p className='text-white text-xs'>How I found myself in a battle of ideas with Elon Musk — (For folks who prefer to listen...</p>
                                            <div className='flex'>
                                            <img src={s1}></img>
                                            <p className='text-zinc-600 ml-2 text-xs'>Hans van de Bruggen</p>
                                            
                                               
                                        </div>
                                        <div className='flex ml-10 -mt-4 text-zinc-600 text-xs'>
                                                <p>December 14,2020</p>
                                                <p>5 Mint read</p>
                                            </div>
                                    </div>

                                    <div data-aos="fade-up">
                                        <img src={p4} onClick={() => navigate('/blog/blogdetails')} className='cursor-pointer w-96'></img>
                                        <p className='text-white font-semibold pt-4'>Case study: Custom clothing responsive website</p>
                                        <p className='text-white text-xs'>How I found myself in a battle of ideas with Elon Musk — (For folks who prefer to listen...</p>
                                            <div className='flex'>
                                            <img src={s1}></img>
                                            <p className='text-zinc-600 ml-2 text-xs'>Hans van de Bruggen</p>
                                            
                                               
                                        </div>
                                        <div className='flex ml-10 -mt-4 text-zinc-600 text-xs'>
                                                <p>December 14,2020</p>
                                                <p>5 Mint read</p>
                                            </div>
                                    </div>
                                </div>
                            </div>

                        {/* left end */}
                        {/* right */}
                            <div className='pl-2 ' >
                            <div className='pt-10 relative' data-aos="fade-up">
                                <input className='rounded-full h-10 w-full bg-zinc-700 outline-none text-white pl-10 pr-36 ' type='text' placeholder='Search'></input>
                               <span className='absolute left-5 pt-2'><i class="fa-solid fa-magnifying-glass text-white"></i></span>

                            </div>

                            <div className='pt-3' data-aos="fade-up">
                                <p className='text-white lg:text-lg font-semibold'>Recommended Topics</p>
                                <div className='grid grid-cols-3 grid-rows-3 gap-x-2' >
                                    <div><a href='#' className='no-underline text-zinc-300 hover:text-white'><p className='bg-zinc-900 rounded-xl text-xs w-16 h-7 pt-1 text-center'>Design</p></a></div>
                                    <div><a href='#' className='no-underline text-zinc-300 hover:text-white'><p className='bg-zinc-900 rounded-xl text-xs w-16 h-7 -ml-5 pt-1 text-center'>Creativity</p></a></div>
                                    <div><a href='#' className='no-underline text-zinc-300 hover:text-white'><p className='bg-zinc-900 rounded-xl text-xs w-20 -ml-10 h-7 pt-1 text-center'>Technology</p></a></div>
                                    <div><a href='#' className='no-underline text-zinc-300 hover:text-white'><p className='bg-zinc-900 rounded-xl text-xs w-20 h-7 pt-1 text-center'>Productivity</p></a></div>
                                    <div><a href='#' className='no-underline text-zinc-300 hover:text-white'><p className='bg-zinc-900 rounded-xl text-xs w-16 h-7 pt-1 -ml-3 text-center'>React</p></a></div>
                                    <div><a href='#' className='no-underline text-zinc-300 hover:text-white'><p className='bg-zinc-900 rounded-xl text-xs w-16 h-7 pt-1 -ml-8 text-center'>UI Design</p></a></div>
                                    <div><a href='#' className='no-underline text-zinc-300 hover:text-white'><p className='bg-zinc-900 rounded-xl text-xs w-16 h-7 pt-1 text-center'>Java script</p></a></div>
                                    <div><a href='#' className='no-underline text-zinc-300 hover:text-white'><p className='bg-zinc-900 rounded-xl text-xs w-28 -ml-6 h-7 pt-1 text-center'>Artificial Intelligence</p></a></div>
                                    <div><a href='#' className='no-underline text-zinc-300 hover:text-white'><p className='bg-zinc-900 rounded-xl text-xs w-12  h-7 pt-1 text-center'>Art</p></a></div>
                                </div>
                            </div>
                            <div className='pt-2' data-aos="fade-up">
                                <p className='text-white lg:text-lg font-semibold' data-aos="fade-up">Recently added</p>    
                                <div className='flex'>
                                <img src={s1} className='w-8 h-8'></img>
                                <p className='text-zinc-300 text-xs font-light pt-1 pl-2'>Hans van de Bruggen</p>
                                </div>
                                <p className='text-white text-lg font-semibold'>Case study: Custom clothing responsive website</p>
                                <div className='flex'>
                                    <p className='text-zinc-500 text-xs font-light '>5 Mint read</p>
                                    <p className='text-zinc-500 text-xs font-light pl-4'>December 14,2020</p>
                                </div>

                                <div className='flex'>
                                <img src={s1} className='w-8 h-8'></img>
                                <p className='text-zinc-300 pt-1 text-xs font-light pl-2'>Hans van de Bruggen</p>
                                </div>
                                <p className='text-white text-lg font-semibold'>Case study: Custom clothing responsive website</p>
                                <div className='flex'>
                                    <p className='text-zinc-500 text-xs font-light '>5 Mint read</p>
                                    <p className='text-zinc-500 pl-4 text-xs font-light'>December 14,2020</p>
                                </div>

                                <div className='flex'>
                                <img src={s1} className='w-8 h-8'></img>
                                <p className='text-zinc-300 pt-1 pl-2 text-xs font-light'>Hans van de Bruggen</p>
                                </div>
                                <p className='text-white text-lg font-semibold'>Case study: Custom clothing responsive website</p>
                                <div className='flex'>
                                    <p className='text-zinc-500 text-xs font-light '>5 Mint read</p>
                                    <p className='text-zinc-500 pl-4 text-xs font-light'>December 14,2020</p>
                                </div>
                            </div>
                            </div>
                            {/* right end */}
                    </div>
                </div>
            </section>

           
        </div>
    )
}
export default Blog;