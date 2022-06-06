import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import drop1 from '../images/contact/img4@2x 1.png';
import drop2 from '../images/contact/img1@2x 1.png';
import {Helmet} from 'react-helmet';
import '../App.css';
function Contact() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <div>
            <Helmet>
            <title>Contact Us</title>
            <meta name="description" content="get in touch with us" />
           </Helmet>
            <section className='bg-zinc-900 mb-28'>
                <div className='w-10/12 lg:w-8/12 mx-auto pt-40 pb-20' >
                    <div className=''>
                        <div data-aos="fade-up">
                            <p className='text-white text-2xl font-gilroysemibold lg:text-4xl font-semibold'>Let's focus on making<br></br>amazing things digitally.</p>
                            <p className='text-zinc-200 font-gilroyregular text-lg'>give some details to get back to you</p>
                        </div>
                        <div> 
                            <div class="lg:pt-6 md:pt-8 text-white" data-aos="fade-up">
                                <input class="w-full text-zinc-800 font-gilroyregular w-full border-b-2 border-zinc-700 outline-none bg-transparent py-4 md:py-8 text-sm md:text-sm " type="text" placeholder="Your good name"/>
                            </div>

                            <div class="pt-6 md:pt-8 text-white" data-aos="fade-up">
                                <input class="w-full border-b-2 border-zinc-700 outline-none font-gilroyregular text-zinc-800 bg-transparent py-4 md:py-8 text-sm md:text-sm " type="text" placeholder="Email address"/>
                            </div>

                            <div class="pt-6 md:pt-8 text-white" data-aos="fade-up">
                                <input class="w-full border-b-2 border-zinc-700 outline-none bg-transparent font-gilroyregular text-zinc-800 py-4 md:py-8 text-sm md:text-sm " type="text" placeholder="Phone number"/>
                            </div>

                            <div class="pt-6 md:pt-8 text-white" data-aos="fade-up">
                                <input class="w-full border-b-2 border-zinc-700 outline-none bg-transparent font-gilroyregular text-zinc-500 py-4 md:py-8 text-sm md:text-sm " type="text" placeholder="Brief about the project"/>
                            </div>
                            <div class="pt-8 grid w-80 grid-cols-2" data-aos="fade-up">
                                <a href='#' className=''><button class="contact-btn  hover:bg-zinc-800 w-28 md:w-36 py-3 font-gilroyregular  text-xs rounded-xl text-white" type="submit">SEND</button></a>
                                <a href='https://wa.me/917012696630' className=''><button class="contact-btn hover:bg-zinc-800 w-28 md:w-36 py-3 text-xs font-gilroyregular rounded-xl text-white" type="submit">CONTACT US</button></a>

                            </div>
                        </div>
                    </div>
                </div>

                <div className='contact-shade bg-blue-500' data-aos="fade-up">
                        <img src={drop1} className='absolute hidden lg:block right-20 -mt-10 w-28'></img>
                    <div className='w-10/12 lg:w-8/12 mx-auto lg:pl-4 py-8 text-white '>
                        <p className='text-2xl lg:text-4xl font-bold'>You can always find us on</p>
                            <div className='grid grid-cols-1 lg:grid-cols-3 gap-y-6 gap-x-16 pt-3 mb-6 '>
                                <div>
                                    <p className='text-lg lg:text-lg font-semibold'>Codler Solutions Pvt Limited</p>
                                    <p className='text-sm md:text-sm -mt-2'>Kannur,Kerala<br/>Banglore,Karnataka</p>
                                </div>
                                <div>
                                    <p className='text-xl lg:text-lg font-semibold'>Info@codlerr.com</p>
                                    <p className='text-sm md:text-sm -mt-2'>Mail us directly if any queries, we are here to help you</p>
                                </div>
                                <div>
                                    <p className='text-lg lg:text-lg font-semibold'>+91 7012696630</p>
                                    <p className='text-sm md:text-sm -mt-2'>Give us a ring if you want to talk to us</p>
                                </div>
                            </div>
                    </div>
                        <img src={drop2} className='absolute hidden lg:block left-0 -mt-44 w-64'></img>
                        
                </div>
                        <div className='py-10 text-center text-[18px] hidden lg:block bg-black'>
                            <a href='#' className='pr-10 no-underline font-semibold font-gilroyregular text-white'>Behance </a>
                            <a href='https://www.instagram.com/codlerr/?igshid=YmMyMTA2M2Y%3D' className='pr-10 no-underline font-semibold  font-gilroyregular text-white'>Instagram</a>
                            <a href='https://www.linkedin.com/authwall?trk=bf&trkInfo=AQEay4B-9DMJxwAAAYE4lPiAcE3Lhem4Ls0R8WR51Q60MkFAh7OVeUzxKP-88ub-o1uB3S85S-1g8eGoDIJ5nQT4HIOkpf4Qb6PL93lsUMAI3ykEnx75N2n1uSJ3KKs9Z__njBA=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fcodlerr%2F' className='pr-10 no-underline font-semibold font-gilroyregular text-white'>Linkedin</a>
                            <a href='#' className=' no-underline font-semibold font-gilroyregular text-white'>Facebook</a>
                        </div> 
            </section>

           
       </div>
    )
}
export default Contact;