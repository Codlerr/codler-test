import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import drop1 from '../images/contact/img4@2x 1.png';
import drop2 from '../images/contact/img1@2x 1.png';



function Contact() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <div>
            <section className='bg-zinc-900 mb-28'>
                <div className='w-10/12 lg:w-8/12 mx-auto pt-40 pb-20' >
                    <div className='lg:pl-4'>
                        <div data-aos="fade-up">
                            <p className='text-white text-2xl lg:text-4xl font-semibold'>Let's focus on making<br></br>amazing things digitally.</p>
                            <p className='text-zinc-200 text-sm'>give some details to get back to you</p>
                        </div>
                        <div>
                            <div class="lg:pt-6 md:pt-8 text-white" data-aos="fade-up">
                                <input class="w-full border-b-2 border-zinc-700 outline-none bg-transparent py-4 md:py-8 text-sm md:text-xl " type="text" placeholder="Your good name"/>
                            </div>

                            <div class="pt-6 md:pt-8 text-white" data-aos="fade-up">
                                <input class="w-full border-b-2 border-zinc-700 outline-none bg-transparent py-4 md:py-8 text-sm md:text-xl " type="text" placeholder="Email address"/>
                            </div>

                            <div class="pt-6 md:pt-8 text-white" data-aos="fade-up">
                                <input class="w-full border-b-2 border-zinc-700 outline-none bg-transparent py-4 md:py-8 text-sm md:text-xl " type="text" placeholder="Phone number"/>
                            </div>

                            <div class="pt-6 md:pt-8 text-white" data-aos="fade-up">
                                <input class="w-full border-b-2 border-zinc-700 outline-none bg-transparent py-4 md:py-8 text-sm md:text-xl " type="text" placeholder="Brief about the project"/>
                            </div>
                            <div class="pt-8" data-aos="fade-up">
                                <a href='#' className=''><button class="contact-btn hover:bg-zinc-800 w-28 md:w-36 py-2.5 rounded-xl text-white" type="submit">Send</button></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='contact-shade' data-aos="fade-up">
                        <img src={drop1} className='absolute hidden lg:block right-20 -mt-10 w-28'></img>
                    <div className='w-10/12 lg:w-8/12 mx-auto lg:pl-4 py-8 text-white'>
                        <p className='text-2xl lg:text-4xl font-semibold'>You can always find us on</p>
                            <div className='grid grid-cols-1 lg:grid-cols-3 gap-y-6 gap-x-16 pt-4'>
                                <div>
                                    <p className='text-xl lg:text-2xl font-semibold'>Bengaluru</p>
                                    <p>Buildings Alyssa, Begonia & Clove Embassy Tech Village,Outer Ring Road, Devarabeesanahalli Village, Bengaluru, 560103</p>
                                </div>
                                <div>
                                    <p className='text-xl lg:text-2xl font-semibold'>Info@codler.com</p>
                                    <p>Mail us directly if any queries, we are here to help you</p>
                                </div>
                                <div>
                                    <p className='text-xl lg:text-2xl font-semibold'>+91 7012696630</p>
                                    <p>Give us a ring if you want to talk to us</p>
                                </div>
                            </div>
                    </div>
                        <img src={drop2} className='absolute hidden lg:block left-0 -mt-44 w-72'></img>
                        
                </div>
                        {/* <div className='py-10 text-center'>
                            <a href='#' className='pr-10 no-underline text-white'>Behance</a>
                            <a href='#' className='pr-10 no-underline text-white'>Instagram</a>
                            <a href='#' className='pr-10 no-underline text-white'>Linkedin</a>
                            <a href='#' className=' no-underline text-white'>Facebook</a>
                        </div> */}
            </section>

           
       </div>
    )
}
export default Contact;