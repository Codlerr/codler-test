import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import s1 from '../images/bloglist/Ellipse 48.png';
import b1 from '../images/bloglist/t1.jpg';

function Blogdetails() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <div>

            <section className='mx-6 lg:ml-32 lg:mr-20 pt-28 pb-20'>
                <div className='grid grid-cols-1 lg:grid-cols-4'>
                    <div className='col-span-3 text-white'>
                        <div className=''>
                            <div className='md:flex py-4' data-aos="fade-up">
                                <img src={s1} className='w-6 lg:w-12'></img>
                                <div className='flex'>
                                    <p className='text-xs lg:text-base text-zinc-400 pl-0 lg:pl-5 pt-2'>Hans van de Bruggen</p>
                                    <p className='text-xs lg:text-base text-zinc-400 pl-2.5 lg:pl-5 pt-2'>December 14,2020</p>
                                    <p className='text-xs lg:text-base text-zinc-400 pl-2.5 lg:pl-5 pt-2'>5 Mint read</p>
                                </div>
                            </div>
                            <img src={b1} className='lg:pr-20' data-aos="fade-up"></img>
                        </div>

                        <div className='pt-20' data-aos="fade-up">
                            <p className='lg:text-2xl font-semibold'>The Challenge</p>
                            <p className='lg:w-4/5 text-sm lg:text-base text-zinc-300'>To solve the pressing issue of security & surveillance at the museum, by designing a web-based application that would control all drone fleet operations.</p>
                        </div>

                        <div className='pt-10' data-aos="fade-up">
                            <p className='lg:text-2xl font-semibold'>Understanding the product</p>
                            <p className='lg:w-4/5 text-sm lg:text-base text-zinc-300'>Before starting, let us understand the product at hand. It is necessary to have a good understanding of the technology, how it works, problems with current products, etc. to provide a solution that works towards improving the user experience.Let us answer some basic questions first-</p>
                        </div>

                        <div className='pt-10' data-aos="fade-up">
                            <p className='lg:text-2xl font-semibold'>What is a Drone-in-a-box-systems (DiaB)?</p>
                            <p className='lg:w-4/5 text-sm lg:text-base text-zinc-300'>Drone in a box is an emerging form of autonomous unmanned aerial vehicle (UAV) technology that uses drones that deploy from and return to self-contained landing “boxes.”Traditional drones, or UAVs, consist of both a non-manned aircraft and some form of ground-based controller. Drone-in-a-box systems, on the other hand, deploy autonomously from a box that also functions as a landing pad and charging base. After carrying out a pre-programmed list of instructions, they return to their “base” to charge and/or upload information.</p>
                            <p className='lg:w-4/5 text-sm lg:text-base pt-2 text-zinc-300' > A stand-alone drone-in-a-box system has 3 main components:
                                    Ground Station — to charge and shelter the drone The Drone itself
                                    Computer management system — that allows the operator to interact with the system, including multiple drones.While DiaB systems hold immense potential, their adoption today is very limited owing to their complexity.</p>

                        </div>
                    </div>


                    <div className=''>
                    <div className='pl-2 pb-20' >
                            <div className='pt-10 relative' data-aos="fade-up">
                                <input className='rounded-full h-10 w-full bg-zinc-700 outline-none text-white pl-10 pr-36 ' type='text' placeholder='Search'></input>
                               <span className='absolute left-5 pt-2'><i class="fa-solid fa-magnifying-glass text-white"></i></span>

                            </div>

                            <div className='pt-20' data-aos="fade-up">
                                <p className='text-white lg:text-xl font-semibold'>Recommended Topics</p>
                                <div className='grid grid-cols-3 grid-rows-3 gap-x-4' >
                                    <div><a href='#' className='no-underline text-zinc-300 hover:text-white'><p className='bg-zinc-900 rounded-xl text-xs px-3 py-2'>Design</p></a></div>
                                    <div><a href='#' className='no-underline text-zinc-300 hover:text-white'><p className='bg-zinc-900 rounded-xl text-xs px-3 py-2'>Creativity</p></a></div>
                                    <div><a href='#' className='no-underline text-zinc-300 hover:text-white'><p className='bg-zinc-900 rounded-xl text-xs px-3 py-2'>Technology</p></a></div>
                                    <div><a href='#' className='no-underline text-zinc-300 hover:text-white'><p className='bg-zinc-900 rounded-xl text-xs px-3 py-2'>Productivity</p></a></div>
                                    <div><a href='#' className='no-underline text-zinc-300 hover:text-white'><p className='bg-zinc-900 rounded-xl text-xs px-3 py-2'>React</p></a></div>
                                    <div><a href='#' className='no-underline text-zinc-300 hover:text-white'><p className='bg-zinc-900 rounded-xl text-xs px-3 py-2'>UI Design</p></a></div>
                                    <div><a href='#' className='no-underline text-zinc-300 hover:text-white'><p className='bg-zinc-900 rounded-xl text-xs px-3 py-2'>Java script</p></a></div>
                                    <div><a href='#' className='no-underline text-zinc-300 hover:text-white'><p className='bg-zinc-900 rounded-xl text-xs px-10 py-2'>AI</p></a></div>
                                    <div><a href='#' className='no-underline text-zinc-300 hover:text-white'><p className='bg-zinc-900 rounded-xl text-xs px-10 py-2'>Art</p></a></div>
                                </div>
                            </div>
                            <div className='pt-10' data-aos="fade-up">
                                <p className='text-white lg:text-xl font-semibold' data-aos="fade-up">Recently added</p>    
                                <div className='flex'>
                                <img src={s1}></img>
                                <p className='text-zinc-300 pt-1 pl-2'>Hans van de Bruggen</p>
                                </div>
                                <p className='text-white text-xl font-semibold'>Case study: Custom clothing responsive website</p>
                                <div className='flex'>
                                    <p className='text-zinc-500 '>5 Mint read</p>
                                    <p className='text-zinc-500 pl-4'>December 14,2020</p>
                                </div>

                                <div className='flex pt-8'>
                                <img src={s1}></img>
                                <p className='text-zinc-300 pt-1 pl-2'>Hans van de Bruggen</p>
                                </div>
                                <p className='text-white text-xl font-semibold'>Case study: Custom clothing responsive website</p>
                                <div className='flex'>
                                    <p className='text-zinc-500 '>5 Mint read</p>
                                    <p className='text-zinc-500 pl-4'>December 14,2020</p>
                                </div>

                                <div className='flex pt-8'>
                                <img src={s1}></img>
                                <p className='text-zinc-300 pt-1 pl-2'>Hans van de Bruggen</p>
                                </div>
                                <p className='text-white text-xl font-semibold'>Case study: Custom clothing responsive website</p>
                                <div className='flex'>
                                    <p className='text-zinc-500 '>5 Mint read</p>
                                    <p className='text-zinc-500 pl-4'>December 14,2020</p>
                                </div>
                            </div>
                            </div>
                    </div>
                </div>
            </section>
           


        </div>
    )
}
export default Blogdetails;