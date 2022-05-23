import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import shade from '../images/technology/lineshade.png';
import {Helmet} from 'react-helmet';
import '../App.css';
function Technology() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    const navigate = useNavigate('');
    return (
        <div>
            <Helmet>
            <title>Technologies</title>
            <meta name="description" content="we develop both mobile and web application.we use React js,Node JS,React native." />
           </Helmet>
            <section className=' w-10/12 sm:ml-4 md:ml-20 pb-20'>
                <div className='grid grid-cols-1 lg:grid-cols-2'>
                    <div className='pt-40' data-aos="fade-up">
                        <p className='text-2xl lg:text-[32px] leading-10 font-semibold font-gilroyregular text-white lg:w-2/3'data-aos="fade-up" data-aos-delay="100">It's your dream and we've got digital technology</p>
                        <p className='lg:text-lg text-sm text-zinc-300  tracking-tight font-gilroyregular lg:text-left lg:w-[400px]'>A variety of software development tools and technologies are used to develop resilient solutions customised to our customers' businesses.</p>
                    </div>
                    <div className=' hidden xl:block'>
                        <img src='https://res.cloudinary.com/dbwyrrrqo/image/upload/v1652779631/codler/Group_790_gnmokn.png' alt='img' className='w-36 h-36 mt-36 ml-36 z-200 relativehidden lg:block'/>
                        <img data-aos="fade-up" src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1653318345/codler/circlelogo_rsbt3x.png'} className='h-64 w-64 relative -z-200 ml-[78%] -mt-48 right-60'></img>
                        <p data-aos="fade-up"  className="text-l hidden lg:block  absolute xl:right-48  -mt-10 hidden xl:block  font-bold opacity-30 text-lg text-zinc-700" >Backend</p>
                        <p data-aos="fade-up"  className="text-l hidden lg:block  absolute xl:right-96 -mt-10 hidden xl:block pr-24  font-bold opacity-30 text-lg text-zinc-700" >Database</p>
                        <p data-aos="fade-up"  className="text-l hidden lg:block  absolute xl:right-56 top-28 hidden xl:block  font-bold opacity-30  text-lg text-zinc-700" >CMS</p>
                        <p data-aos="fade-up"  className="text-l hidden lg:block  absolute xl:right-96 top-28 pr-24 hidden xl:block  font-bold opacity-30  text-lg  text-zinc-700" >Mobile</p>
                        <p data-aos="fade-up"  className="text-l hidden lg:block  absolute xl:right-36 top-48 font-bold opacity-30 hidden xl:block text-lg text-zinc-700" >Database</p>
                        <p data-aos="fade-up"  className="text-l hidden lg:block  absolute right-96 top-48 pr-36  font-bold hidden xl:block opacity-30 text-lg text-zinc-700" >Infra & devops</p>
                        <img src='https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648585628/codler/bubble2_nkoawf.png' alt='img' className='w-12 h-12 ml-[68%] z-200 relative -mt-10 hidden lg:block'/>
                      </div>
                </div>
            </section>

            <section className=' z-200 relative bg-zinc-800 ' >
                <div className='py-12 bg-zinc-800'>
                    <div className=' w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 gap-x-6 gap-y-8'>
                        <div data-aos="fade-up" className='bg-gradient-to-r from-purple-500 to-fuchsia-700 rounded-md px-10 lg:pl-10 cursor-pointer' onClick={() => navigate('/technology/onclickmobile')}>
                            <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1653318340/codler/s0_wpdqp6.png'} className='h-16 -mt-3'></img>
                            <p className='text-white lg:text-xl font-semibold pt-3'>Mobile</p>
                            <p className='text-zinc-300 pb-2 lg:w-4/5 text-sm font-gilroymedium lg:text-base'>Resources with average experience of 5 years and tech expertise across the domains of native iOS, Android, cross platform, and hybrid apps.</p>
                        </div>
                        <div data-aos="fade-up" className='bg-zinc-700 rounded-md px-10 lg:pl-10 cursor-pointer'  onClick={() => navigate('/technology/onclickmobile')}>
                            <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1653318345/codler/s4_rkvfxe.png'} className='h-16 -mt-3'></img>
                            <p className='text-white lg:text-xl font-semibold pt-3'>Front end</p>
                            <p className='text-zinc-400 pb-2 lg:w-4/5 text-sm font-gilroymedium lg:text-base'>Delivering visually appealing, interactive, smooth, user-friendly, and high performing front ends with our 22+ years of industry experience.</p>
                        </div>
                        <div data-aos="fade-up" className='bg-zinc-700 rounded-md px-10 lg:pl-10 cursor-pointer' onClick={() => navigate('/technology/onclickmobile')}>
                            <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1653318339/codler/s1_pj9ckn.png'} className='h-16 -mt-3'></img>
                            <p className='text-white lg:text-xl font-semibold pt-3'>Backend</p>
                            <p className='text-zinc-400 pb-2 lg:w-4/5 text-sm font-gilroymedium lg:text-base'>Great importance to backend is essential for a successful software and our expertise in Java, NodeJS, .NET, PHP, Python, etc. help you achieve it.</p>
                        </div>
                        <div data-aos="fade-up" className='bg-zinc-700 rounded-md px-10 lg:pl-10 cursor-pointer' onClick={() => navigate('/technology/onclickmobile')}>
                            <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1653318343/codler/s2_ngsrbh.png'} className='h-16 -mt-3'></img>
                            <p className='text-white lg:text-xl font-semibold pt-3'>Database</p>
                            <p className='text-zinc-400 pb-2 lg:w-4/5 text-sm font-gilroymedium lg:text-base'>Our expertise in multiple database technologies helps you to find the perfect fit for your project based on the requirements and user base.</p>
                        </div>
                        <div data-aos="fade-up" className='bg-zinc-700 rounded-md px-10 lg:pl-10 cursor-pointer' onClick={() => navigate('/technology/onclickmobile')}>
                            <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1653318348/codler/s5_lixe4i.png'} className='h-16 -mt-3'></img>
                            <p className='text-white lg:text-xl font-semibold pt-3'>Infra and DevOps</p>
                            <p className='text-zinc-400 pb-2 lg:w-4/5 text-sm lg:text-base font-gilroymedium cursor-pointer'>We help you transform your business with automating infrastructure, software development and deployment processes using various DevOps tools.</p>
                        </div>
                        <div data-aos="fade-up" className='bg-zinc-700 rounded-md px-10 lg:pl-10 cursor-pointer' onClick={() => navigate('/technology/onclickmobile')}>
                            <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1653318347/codler/s3_vnrccy.png'} className='h-16 -mt-3'></img>
                            <p className='text-white lg:text-xl font-semibold pt-3'>CMS</p>
                            <p className='text-zinc-400 pb-2 lg:w-4/5 text-sm font-gilroymedium lg:text-base'>Our hands-on experience with popular CMS tools helps enterprises to create and manage their digital content with greater flexibility and ease.</p>
                        </div>
                    </div>
                    </div>
            </section>

            <section className='md:mb-10 lg:mb-36'>
            <div className="blur-lg z-0">
                            <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1653318354/codler/lineshade_fa66hs.png'} alt="mobile"  className="" data-aos="zoom-in" />
                            
                        </div>
                        <div>
                        <p className='text-white text-color text-center lg:py-12 text-sm lg:text-4xl -mt-20 lg:-mt-80 pb-20 blur-none font-bold' data-aos="fade-up">    To achieve great results for you, We combine<br></br> a variety of innovative technologies.</p>
                        </div>
            </section>
           
        </div>
        )
}
export default Technology;
