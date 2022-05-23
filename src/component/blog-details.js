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

            <section className='mx-6 lg:ml-20 lg:mr-20 pt-28 pb-20'>
                <div className='grid grid-cols-1 lg:grid-cols-4'>
                    <div className='col-span-3 text-white'>
                        <div className=''>
                            <div className='md:flex py-4' data-aos="fade-up">
                                <img src={s1} className='w-8 h-8 mr-3'></img>
                                <div className='flex'>
                                    <p className='text-xs lg:text-xs font-light text-zinc-400 pl-0 lg:pl-5 pt-2'>Hans van de Bruggen</p>
                                    <p className='text-xs lg:text-xs font-light text-zinc-400 pl-2.5 lg:pl-5 pt-2'>December 14,2020</p>
                                    <p className='text-xs lg:text-xs font-light text-zinc-400 pl-2.5 lg:pl-5 pt-2'>5 Mint read</p>
                                </div>
                            </div>
                            <p className='text-2xl lg:text-4xl font-bold text-white '>Designing for a drone automation system</p>
                            <p className='text-xs lg:text-xs text-white font-gilroythin'>This is a design assignment I did while looking for an internship.I had to finish and submit the assignment within 48 hours with <br/>all the requirements.Everything below is exactly how i submitted the assignment.</p>

                            <img src={b1} className='lg:pr-20 h-80' data-aos="fade-up"></img>
                        </div>

                        <div className='pt-5' data-aos="fade-up">
                            <p className='lg:text-2xl font-semibold'>The Challenge</p>
                            <p className='lg:w-4/5 text-sm lg:text-sm font-italic text-zinc-200'>To solve the pressing issue of security & surveillance at the museum, by designing a web-based application that would control all drone fleet operations.</p>
                        </div>

                        <div className='pt-5' data-aos="fade-up">
                            <p className='lg:text-2xl font-semibold'>Understanding the product</p>
                            <p className='lg:w-4/5 text-sm lg:text-sm font-light text-zinc-200'>Before starting, let us understand the product at hand. It is necessary to have a good understanding of the technology, how it works, problems with current products, etc. to provide a solution that works towards improving the user experience.Let us answer some basic questions first-</p>
                        </div>

                        <div className='pt-5' data-aos="fade-up">
                            <p className='lg:text-2xl font-semibold'>What is a Drone-in-a-box-systems (DiaB)?</p>
                            <p className='lg:w-4/5 text-sm lg:text-sm font-light text-zinc-300'>Drone in a box is an emerging form of autonomous unmanned aerial vehicle (UAV) technology that uses drones that deploy from and return to self-contained landing “boxes.”Traditional drones, or UAVs, consist of both a non-manned aircraft and some form of ground-based controller. Drone-in-a-box systems, on the other hand, deploy autonomously from a box that also functions as a landing pad and charging base. After carrying out a pre-programmed list of instructions, they return to their “base” to charge and/or upload information.</p>
                            <p className='lg:w-4/5 text-sm lg:text-sm font-light pt-2 text-zinc-200' > A stand-alone drone-in-a-box system has 3 main components:
                                    Ground Station — to charge and shelter the drone The Drone itself
                                    Computer management system — that allows the operator to interact with the system, including multiple drones.While DiaB systems hold immense potential, their adoption today is very limited owing to their complexity.</p>

                        </div>
                    </div>


                    <div className=''>
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
                                <img src={s1} className='h-6 w-6'></img>
                                <p className='text-zinc-300 text-xs font-light pt-1 pl-2'>Hans van de Bruggen</p>
                                </div>
                                <p className='text-white text-lg font-semibold'>Case study: Custom clothing responsive website</p>
                                <div className='flex text-gilroythin'>
                                    <p className='text-zinc-500 text-xs font-light '>5 Mint read</p>
                                    <p className='text-zinc-500 text-xs font-light pl-4'>December 14,2020</p>
                                </div>

                                <div className='flex'>
                                <img src={s1} className='h-6 w-6'></img>
                                <p className='text-zinc-300 pt-1 text-xs font-light pl-2'>Hans van de Bruggen</p>
                                </div>
                                <p className='text-white text-lg font-semibold'>Case study: Custom clothing responsive website</p>
                                <div className='flex'>
                                    <p className='text-zinc-500 text-xs font-light '>5 Mint read</p>
                                    <p className='text-zinc-500 pl-4 text-xs font-light'>December 14,2020</p>
                                </div>

                                <div className='flex'>
                                <img src={s1} className='h-6 w-6'></img>
                                <p className='text-zinc-300 pt-1 pl-2 text-xs font-light'>Hans van de Bruggen</p>
                                </div>
                                <p className='text-white text-lg font-semibold'>Case study: Custom clothing responsive website</p>
                                <div className='flex'>
                                    <p className='text-zinc-500 text-xs font-light '>5 Mint read</p>
                                    <p className='text-zinc-500 pl-4 text-xs font-light'>December 14,2020</p>
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