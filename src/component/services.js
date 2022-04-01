import Aos from 'aos';
import "aos/dist/aos.css";
import  { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import '../App.css';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Services() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    const navigate = useNavigate('');
    return (
        <div>


            <section className='servebg'>
                    <div className='w-10/12 mx-auto text-white pt-56' data-aos="fade-up">
                        <p className='text-3xl lg:text-3xl font-bold lg:w-2/4' data-aos="fade-right" data-aos-delay="100">It's your choice to choose<br/> what’s relevant to your <br/>business.</p>
                        <p className='lg:w-2/6 tracking-wide'>Delivering high-quality software development services and leading the way in digital transformation are our strengths. Our skilled staff have demonstrated their talents and are ready to assist you. </p>
                    </div>
            </section>
                <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648629512/codler/bubble1_2x_2_jthasr.png'} className='hidden lg:block absolute w-32 right-0 -mt-8'></img>
                <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648629514/codler/tbubble_uuck1c.png'} className='hidden lg:block absolute w-16 right-52 mt-16'></img>
            <section className='w-11/12 lg:w-10/12 mx-auto mt-20' data-aos="fade-up">
                <div className='s-bg1 rounded-lg' >
                    <div className='grid grid-cols-1 lg:grid-cols-2 relative'>
                        <div><img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648629513/codler/p1_ivmmeh.png'} className='lg:py-12'></img></div>
                        <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648629513/codler/Ellipses_62_lwwbms.png'} className='hidden lg:block absolute bottom-0 left-0 w-40 rounded-bl-lg'></img>
                        <div className=' lg:py-20 text-white relative'>
                            <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648629514/codler/shade1_ypr4ql.png'} className='absolute hidden lg:block right-0 top-0 w-72 rounded-tr-lg'></img>
                           <div className='relative p-4 lg:p-0'>
                            <p className='text-2xl lg:text-4xl font-bold lg:w-3/4'>Web design and development company</p>
                                <p className='text-sm lg:text-base lg:w-5/6'>Develop your goals with the best website development partner.CODLERR is a leading website design and web development company in India. In fact, we offer the finest web development services to worldwide organizations and startups. We create customized websites, web apps, web tools and more with a 100% project delivery rate. </p>
                                <a href='#'  onClick={() => navigate('/services/servicedetails')} className='flex no-underline text-white sbg1-btn w-36 rounded-full'><p className='my-2.5 lg:my-3 px-3'>Learn more</p><i class="fa-solid fa-arrow-right text-xl pt-2 lg:pt-3"></i></a>
                           </div>
                           
                        </div>
                    </div>
                </div>

                <div className='hidden lg:block w-10/12 mx-auto -mt-10 relative'>
                    <div className='flex justify-between serv-brand p-4 rounded-md'>
                        <a href='#'><img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648629841/codler/Group_2196_e6kcre.png'}></img></a>
                        <a href='#'><img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648629842/codler/Vector_1_ozfheo.png'}></img></a>
                        <a href='#'><img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648629841/codler/Group_1_fq78va.png'}></img></a>
                        <a href='#'><img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648629841/codler/Group_2197_vd55gm.png'}></img></a>
                        <a href='#'><img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648629841/codler/Group_2200_eyss1m.png'}></img></a>
                        <a href='#'><img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648629841/codler/Group_2267_s81h3u.png'}></img></a>
                        <a href='#'><img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648629842/codler/Group_2268_zwaz6j.png'}></img></a>
                        <a href='#'><img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648629842/codler/Group_2269_kwh14t.png'}></img></a>
                        <a href='#'><img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648629842/codler/Group_f171zl.png'}></img></a>
                        <a href='#'><img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648629841/codler/Group_2208_ivyoeu.png'}></img></a>
                    </div>
                </div>

            </section>

            <section className='w-11/12 lg:w-10/12 mx-auto mt-16'>
                <div className='s-bg2 rounded-lg' data-aos="fade-up">
                    <div className='grid grid-cols-1 lg:grid-cols-2 relative'>
                        
                        <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648629513/codler/Ellipse_62_paozir.png'} className='hidden lg:block absolute bottom-0 left-0 w-40 rounded-bl-lg'></img>
                        <div className='py-8 lg:py-20 text-white relative'>
                            
                           <div className='relative pl-4 pr-4 lg:pl-24'>
                            <p className='text-2xl lg:text-4xl font-bold lg:w-3/4'>Mobile App Developement.</p>
                                <p className='text-sm lg:text-base'>Codlerr's mobile app development service uses world-class technologies. We use React Native, Flutter and others to make your apps scalable and future-proof on both native and cross-platforms. Our backbone is our professional mobile developers, who will interact with you at every stage of the project.</p>
                                <a href='#' className='flex no-underline text-white sbg2-btn w-36 rounded-full'><p className='my-2.5 lg:my-3 px-3'>Learn more</p><i class="fa-solid fa-arrow-right text-xl pt-2 lg:pt-3"></i></a>
                           </div>
                           
                        </div>
                        <div className='relative'>
                            <span className='flex justify-center'><img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648629513/codler/p2_obqr2f.png'} className='lg:my-10 py-4  lg:absolute z-10 pl-8 lg:pl-0 lg:h-96 right-0'></img></span>
                            <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648629512/codler/Ellipse_60_1_aawdaq.png'} className='absolute  hidden lg:block right-0 top-0 w-72 rounded-tr-lg'></img>
                        </div>
                        
                    </div>
                </div>
            </section>

            <section className='w-11/12 lg:w-10/12 mx-auto mt-16'>
                <div className='s-bg3 rounded-lg' data-aos="fade-up">
                    <div className='grid grid-cols-1 lg:grid-cols-2 relative'>
                        <div className='flex justify-center lg:mt-16'><img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648629513/codler/p3_veavhn.png'} className='p-6 h-60 lg:h-80'></img></div>
                        <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648629513/codler/Ellipse_62_1_rgwqva.png'} className='hidden lg:block absolute bottom-0 left-0 w-40 rounded-bl-lg'></img>
                        <div className='lg:py-20 text-white relative'>
                            <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648629512/codler/Ellipse_60_1_aawdaq.png'} className='absolute hidden lg:block right-0 top-0 w-72 rounded-tr-lg'></img>
                           <div className='relative p-4 lg:p-0'>
                            <p className='text-2xl lg:text-4xl font-bold lg:w-3/4'>Digital marketing</p>
                                <p className='text-sm lg:text-base lg:w-5/6'>Develop your goals with the best website development partner.CODLERR is a leading website design and web development company in India. In fact, we offer the finest web development services to worldwide organizations and startups. We create customized websites, web apps, web tools and more with a 100% project delivery rate. </p>
                                <a href='#' className='flex no-underline text-white sbg3-btn w-36 rounded-full'><p className='my-2.5 lg:my-3 px-3'>Learn more</p><i class="fa-solid fa-arrow-right text-xl pt-2 lg:pt-3"></i></a>
                           </div>
                           
                        </div>
                    </div>
                </div>
            </section>
            <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648629513/codler/img4_2x_1_gbzd8l.png'} className='hidden lg:block absolute w-16 right-0 -mt-52'></img>

            <section className='w-11/12 lg:w-10/12 mx-auto mt-16'>
                <div className='s-bg4 rounded-lg' data-aos="fade-up">
                    <div className='grid grid-cols-1 lg:grid-cols-2 relative'>
                        
                        <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648629513/codler/Ellipse_62_2_lcipqb.png'} className='hidden lg:block absolute bottom-0 left-0 w-40 rounded-bl-lg'></img>
                        <div className='py-8 lg:py-20 text-white relative'>
                            
                           <div className='relative pl-4 pr-4 lg:pl-24'>
                            <p className='text-2xl lg:text-4xl font-bold lg:w-3/4'>Quality Assurance (QA) & Testing Services</p>
                                <p className='text-sm lg:text-base'>Clients around the world exclusively use Codlerr's quality assurance services. We are experts in software testing, and they test anything from websites and apps to software products. We help clients minimize risks and succeed. They test many important aspects of software, including functionality, behavior, performance, flexibility, and more. </p>
                                <a href='#' className='flex no-underline text-white sbg4-btn w-36 rounded-full'><p className='my-2.5 lg:my-3 px-3'>Learn more</p><i class="fa-solid fa-arrow-right text-xl pt-2 lg:pt-3"></i></a>
                           </div>
                           
                        </div>
                        <div className='relative'>
                            <span className='flex justify-center'><img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648629513/codler/p4_qk5q5y.png'} className='lg:my-20 py-4 relative z-10 h-60 lg:h-80'></img></span>
                            <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648629512/codler/Ellipse_60_2_rvq5on.png'} className='absolute  hidden lg:block right-0 top-0 w-72 rounded-tr-lg'></img>
                        </div>
                        
                    </div>
                </div>
            </section>


            <section className='w-11/12 lg:w-10/12 mx-auto mt-16 mb-20'>
                <div className='s-bg5 rounded-lg' data-aos="fade-up">
                    <div className='grid grid-cols-1 lg:grid-cols-2 relative'>
                        <div className='flex justify-center'><img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648629513/codler/p5_fslbfx.png'} className='lg:my-20 lg:py-0 py-2 h-60 lg:h-80'></img></div>
                        <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648629513/codler/Ellipse_62_3_r1xmfa.png'} className='hidden lg:block absolute bottom-0 left-0 w-40 rounded-bl-lg'></img>
                        <div className='lg:py-20 text-white relative'>
                            <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648629512/codler/Ellipse_60_3_eealyi.png'} className='absolute hidden lg:block right-0 top-0 w-72 rounded-tr-lg'></img>
                           <div className='relative p-4 lg:p-0'>
                            <p className='text-2xl lg:text-4xl font-bold lg:w-3/4'>Branding</p>
                                <p className='text-sm lg:text-base lg:w-5/6'>Clients around the world exclusively use Codlerr's quality assurance services. We are experts in software testing, and they test anything from websites and apps to software products. We help clients minimize risks and succeed. They test many important aspects of software, including functionality, behavior, performance, flexibility, and more. </p>
                                <a href='#' className='flex no-underline text-white sbg5-btn w-36 rounded-full'><p className='my-2.5 lg:my-3 px-3'>Learn more</p><i class="fa-solid fa-arrow-right text-xl pt-2 lg:pt-3"></i></a>
                           </div>
                           
                        </div>
                    </div>
                </div>
            </section>

            <section className='w-11/12 lg:w-10/12 mx-auto mt-16'>
                <div className='s-bg6 rounded-lg' data-aos="fade-up">
                    <div className='grid grid-cols-1 lg:grid-cols-2 relative'>
                        
                        <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648629514/codler/sss1_it1gpf.png'} className='hidden lg:block absolute bottom-0 left-0 w-40 rounded-bl-lg'></img>
                        <div className='py-8 lg:py-20 text-white relative'>
                            
                           <div className='relative pl-4 pr-4 lg:pl-24'>
                            <p className='text-2xl lg:text-4xl font-bold lg:w-3/4'>Search Engine Optimisation ( SEO )</p>
                                <p className='text-sm lg:text-base'>Clients around the world exclusively use Codlerr's quality assurance services. We are experts in software testing, and they test anything from websites and apps to software products. We help clients minimize risks and</p>
                                <a href='#' className='flex no-underline text-white sbg6-btn w-36 rounded-full'><p className='my-2.5 lg:my-3 px-3'>Learn more</p><i class="fa-solid fa-arrow-right text-xl pt-2 lg:pt-3"></i></a>
                           </div>
                           
                        </div>
                        <div className='relative'>
                            <span className='flex justify-center'><img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648629514/codler/p6_tlfxla.png'} className='lg:my-20 py-4 relative z-10 h-60 lg:h-80'></img></span>
                            <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648629514/codler/ss2_fhznjf.png'} className='absolute  hidden lg:block right-0 top-0 w-72 rounded-tr-lg'></img>
                        </div>
                        
                    </div>
                </div>
            </section>

            <section className='w-11/12 lg:w-10/12 mx-auto py-24'>
                <div className='w-10/12 mx-auto' data-aos="fade-up">
                    <p className='text-zinc-800 text-lg text-color lg:text-3xl hover:text-purple-500 font-bold'>Developing a top-notch product is the result of researching and defining the current market as well as the goals you have in mind.</p>
                </div>
            </section>


            <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648629512/codler/bubhalf_bufeg5.png'} className='hidden  lg:block absolute w-28 left-0 -mt-40'></img>
            <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648629514/codler/tbubble_uuck1c.png'} className='hidden lg:block absolute w-14 left-40 -mt-20'></img>

            <section className='w-10/12 mt-5 mx-auto bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 rounded-xl mb-20' data-aos="zoom-in">
                <div className='w-10/12 mx-auto py-14'>
                    <div>
                        <p className='text-white text-base font-bold'>We proudly work with<hr className='w-16 h-56 font-bold -mt-3 ml-56 h-24 textlgcolor'></hr></p>
                        <div className='grid grid-cols-2 lg:grid-flow-col gap-6 mt-2' >
                        <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648556429/codler/jsk_tjljta.png'} className='w-48 h-16 mt-12'></img>
                       <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648556430/codler/odikko_bzk7bo.png'} className='w-56 h-36'></img>
                       <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648556430/codler/ondace_yjiyg9.jpg'} className='w-32 h-28 md:mt-4 md:ml-10'></img>
                       <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648556430/codler/ugrab_fbpxud.png'} className='w-56 h-36 -mt-5'></img>
                        </div>
                    </div>
                </div>
            </section>


            <section className='bg-zinc-900 mb-20'>
                    <div className='w-11/12 lg:w-10/12 mx-auto'>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 '>
                            <div className='py-20'>
                                <div className='text-white pb-10' data-aos="fade-up">
                                    <p className='text-2xl lg:text-3xl lg:w-4/5 font-semibold'>See what our valuable clients says about us</p>
                                    <p className='text-zinc-200 lg:w-4/5 font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra quis bibendum adipiscing cum mauris, faucibus nulla. Sed adipiscing sollicitudin </p>
                                </div>

                                <div className='w-11/12 mx-auto lg:w-full grid grid-cols-1 lg:grid-cols-2 gap-4' data-aos="fade-up">
                                          <div>
                                              <div className='bg-zinc-800 z-10' data-aos="fade-up">
                                                    <div className='pl-6 pt-6 flex'>
                                                    <p className="text-xl pr-4 text-white font-semibold">5.0</p>
                                                            <FontAwesomeIcon icon={faStar} className="text-l mt-1 text-yellow-500 " />
                                                            <FontAwesomeIcon icon={faStar} className="text-l mt-1 text-yellow-500 " />
                                                            <FontAwesomeIcon icon={faStar} className="text-l mt-1 text-yellow-500 " />
                                                            <FontAwesomeIcon icon={faStar} className="text-l mt-1 text-yellow-500 " />
                                                            <FontAwesomeIcon icon={faStar} className="text-l mt-1 text-yellow-500" />
                                                        
                                                    </div>
                                                    <p className='text-zinc-400 px-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 1500s, when an Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                    <div className='flex'>
                                                            <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648629515/codler/user1_uss6f0.png'} className='w-10 h-10 m-4'></img>
                                                            <div className='text-zinc-200 leading-3 mt-3'>
                                                                <p>Arjun nabiyar</p>
                                                                <p>Director,lolipop desings</p>
                                                            </div>
                                                        </div>
                                                </div>
                                         </div>      
                                          <div>
                                                <div className='bg-zinc-800 z-10' data-aos="fade-up">
                                                    <div className='pl-6 pt-6 flex'>
                                                    <p className="text-xl pr-4 text-white font-semibold">5.0</p>
                                                            <FontAwesomeIcon icon={faStar} className="text-l mt-1 text-yellow-500 " />
                                                            <FontAwesomeIcon icon={faStar} className="text-l mt-1 text-yellow-500 " />
                                                            <FontAwesomeIcon icon={faStar} className="text-l mt-1 text-yellow-500 " />
                                                            <FontAwesomeIcon icon={faStar} className="text-l mt-1 text-yellow-500 " />
                                                            <FontAwesomeIcon icon={faStar} className="text-l mt-1 text-yellow-500 " />
                                                        
                                                    </div>
                                                    <p className='text-zinc-400 px-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 1500s, when an Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                    <div className='flex'>
                                                            <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648629515/codler/user1_uss6f0.png'} className='w-10 h-10 m-4'></img>
                                                            <div className='text-zinc-200 leading-3 mt-3'>
                                                                <p>Arjun nabiyar</p>
                                                                <p>Director,lolipop desings</p>
                                                            </div>
                                                        </div>
                                                </div>
                                            </div>   





                                </div>
                            </div>


                            {/* form */}
                           <div className='py-10' data-aos="fade-up">
                                        <div class="md:ml-20 border-2 border-zinc-600  rounded-md">
                                        <div class="p-4">
                                            <div class="text-white">
                                            <p class="text-2xl font-bold">Ready to start a Project?</p>
                                            <p class="tracking-wider text-zinc-300 md:text-sm">To start, use form below to tell us about you and the project</p>
                                            </div>

                                            <div class=" text-zinc-400">
                                                <p className='text-zinc-200'>Name</p>
                                                <input class="w-full border-b-2 border-zinc-600 outline-none bg-transparent  text-sm md:text-base" type="text"  placeholder="Enter your good name" required/>
                                            </div>

                                            <div class="pt-2 text-zinc-400">
                                                <p className='text-zinc-200'>Email</p>
                                                <input class="w-full border-b-2 border-zinc-600 outline-none bg-transparent   text-sm md:text-base" type="text" placeholder="Enter email ID"/>
                                            </div>

                                            <div class="pt-2 text-zinc-400 grid grid-cols-1 md:grid-cols-2 gap-8 ">
                                            <div>
                                                <p className='text-zinc-200'>Phone</p>
                                                
                                                <input class="w-full border-b-2 border-zinc-600 outline-none bg-transparent  text-sm md:text-base" type="text" placeholder="+91"/>
                                            
                                            </div>
                                            <div>
                                                <label class="" for="">
                                                    <p className='text-zinc-200'>How soon you want to start</p>
                                                    <select class="w-full border-b-2 border-zinc-600 outline-none bg-transparent" name="" id="">
                                                        <option class="" value="">Select</option>

                                                    </select>
                                                </label>
                                            </div>
                                            </div>

                                            <div class="pt-3 text-zinc-200">
                                            <p className='text-zinc-400'>Select a service</p>
                                                    <select class="w-full border-b-2 border-zinc-600 outline-none bg-transparent" name="" id="">
                                                        <option class="" value="">Select</option>

                                                    </select>
                                            </div>
                                           
                                            <div class="pt-3 text-zinc-200">
                                            <p className='text-zinc-400'>Requirement</p>
                                                    <select class="w-full border-b-2 border-zinc-600 outline-none bg-transparent" name="" id="">
                                                        <option class="" value="">Select</option>

                                                    </select>
                                            </div>

                                           
                                            
                                            <div class="pt-3 text-zinc-400">
                                                <p>Breif about your project</p>
                                                <input class="text-zinc-200 w-full border-b-2 border-zinc-600 outline-none bg-transparent  text-sm md:text-base" type="text"  placeholder="We are happy to hear" required/>

                                            </div>

                                            <div class="pt-4 text-white">
                                                <div class="overflow-hidden border-2 border-dashed border-zinc-200  rounded-md py-2">
                                                  
                                                        <p class="text-center">Have a file to share with us</p>
                                                       <input type="file" class=" block mx-2 lg:mx-40 w-full text-sm text-slate-500
                                                        file:mr-4 file:py-2 file:px-4
                                                        file:rounded-full file:border-0
                                                        file:text-sm file:font-semibold
                                                        file:bg-violet-50 file:text-violet-700
                                                        hover:file:bg-violet-100
                                                        "/>
                                                                                                    
                                                </div>
                                                
                                            </div>



                                            <div class="pt-4">
                                                <button class="bg-violet-800 text-white px-4 py-2 rounded-lg">Let's start</button>
                                            </div>
                                        </div>
                                    </div>
                           </div>
                            {/* form */}
                        </div>
                    </div>
            </section>


           
       </div>
        )
}
export default Services;