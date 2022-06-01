import Aos from 'aos';
import "aos/dist/aos.css";
import  { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import '../App.css';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Helmet} from 'react-helmet'
function Services() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    const navigate = useNavigate('');
    return (
        <div>
            <Helmet>
            <title>Services</title>
            <meta name="description" content="Have a look at services we offer" />
           </Helmet>
            <section className='servebg lg:h-[600px] '>
                    <div className=' mx-5 lg:pl-12 h-full text-white xs:pt-24 sm:pt-56 md:ml-24 lg:ml-0  md:pt-36 lg:pt-48' data-aos="fade-up">
                        <p className='text-xl md:text-2xl md:-mt-10 xl:mt-0 md:ml-12 lg:ml-0  lg:text-[44px] lg:leading-[3rem] font-gilroybold font-extrabold lg:w-2/4' data-aos="fade-right" data-aos-delay="100">It's your choice to choose<br/> what’s relevant to your <br/>business</p>
                        <p className='md:w-[37%] md:text-sm lg:text-lg font-medium md:ml-12 lg:ml-0  font-gilroylight '>Delivering high-quality software development services and leading the way in digital transformation are our strengths. Our skilled staff have demonstrated their talents and are ready to assist you. </p>
                    </div>
            </section>
            <section className='w-11/12 lg:w-10/12 mx-auto mt-20' data-aos="fade-up">
                <div className='s-bg1 rounded-lg md:h-96' >
                    <div className='grid grid-cols-1 md:grid-cols-2 relative'>
                        <div><img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648629513/codler/p1_ivmmeh.png'} className='md:w-10/12 md:mt-20 lg:mt-12 md:ml-12'></img></div>
                        <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648629513/codler/Ellipses_62_lwwbms.png'} className='hidden  absolute bottom-0 left-0 w-40 rounded-bl-lg'></img>
                        <div className=' lg:py-12 text-white relative'>
                            <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648629514/codler/shade1_ypr4ql.png'} className='absolute hidden lg:block right-0 top-0 w-72 rounded-tr-lg'></img>
                           <div className='relative lg:mr-10 ml-8 md:mt-5 lg:-mt-7 xl:mt-0  lg:ml-0 mb-5 lg:mb-0 lg:p-0'>
                            <p className='text-2xl xl:text-[32px] font-gilroyregular font-bold leading-[2.5rem] tracking-wide lg:w-full'>Web design and <br/> development company</p>
                                <p className='text-xs md:text-sm xs:pr-5 md:pr-0 font-gilroythin md:w-[90%]'>Take your brand online and lead your business with the help of one of the best teams in India. We will walk you through every nook and corner of the project. Our team will brainstorm, plan, research and organise data to meet your goals. Our accurate market understanding allows us to identify the market demands and integrate them into the design for a better user experience.</p>
                                <a href='#'  onClick={() => navigate('/services/servicedetails')} className='flex no-underline text-white sbg1-btn w-36 md:h-10 md:w-32  shadow-xl rounded-full'><p className='my-2.5 lg:my-3 pl-4 pr-2 text-xs'>Learn more</p><i class="fa-solid fa-arrow-right text-xl pt-2 lg:pt-3"></i></a>
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
                    <div className='grid grid-cols-1 md:grid-cols-2 relative md:h-96'>
                        
                        <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648629513/codler/Ellipse_62_paozir.png'} className='hidden lg:block absolute bottom-0 left-0 w-40 rounded-bl-lg '></img>
                        <div className='py-8 lg:py-16 text-white relative'>
                            
                           <div className='relative pl-10 pr-4md:mb-3 lg:mb-0 md:mt-5 lg:mt-0 lg:pl-24'>
                            <p className='text-2xl xl:text-[32px] font-gilroyregular font-semibold leading-[2rem] tracking-wide lg:w-3/4'>Mobile app developement</p>
                                <p className='text-xs md:text-sm xs:pr-5 md:pr-0 font-gilroythin font-light'>Our creative team values your brand and makes the best user experience possible to increase the emotions between your brand and customers. We are experts at building intuitive apps using android native, flutter and react native. Our developers work closely with you from the initial design of your app to ongoing maintenance.</p>
                  {/*                                <a href='#' className='flex no-underline text-white  sbg2-btn w-36 rounded-full md:h-10 md:w-32 shadow-lg'><p className='my-2.5 lg:my-3 pl-4 pr-2 text-xs'>Learn more</p><i class="fa-solid fa-arrow-right text-xl pt-2 lg:pt-3"></i></a>
 */}                           </div>
                        </div>
                        <div className='relative'>
                            <span className='flex justify-center'><img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648629513/codler/p2_obqr2f.png'} className='lg:my-10 py-4  lg:absolute z-10 pl-8 right-0 md:w-10/12 md:mt-12 md:ml-12'></img></span>
                            <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648629512/codler/Ellipse_60_1_aawdaq.png'} className='absolute  hidden lg:block right-0 top-0 w-72 rounded-tr-lg'></img>
                        </div>
                        
                    </div>
                </div>
            </section>

            <section className='w-11/12 lg:w-10/12 mx-auto mt-16'>
                <div className='s-bg3 rounded-lg' data-aos="fade-up">
                    <div className='grid grid-cols-1 md:grid-cols-2  relative md:h-96'>
                        <div className='flex justify-center lg:mt-16'><img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648629513/codler/p3_veavhn.png'} className='p-6 h-60 md:h-72 md:mt-16 lg:mt-0 md:w-96 md:ml-12'></img></div>
                        <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648629513/codler/Ellipse_62_1_rgwqva.png'} className='hidden lg:block absolute bottom-0 left-0 w-40 rounded-bl-lg'></img>
                        <div className='lg:py-16 text-white relative'>
                            <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648629512/codler/Ellipse_60_1_aawdaq.png'} className='absolute hidden lg:block right-0 top-0 w-72 rounded-tr-lg'></img>
                           <div className='relative lg:p-4 ml-8 lg:ml-0 mb-3 lg:mb-0 md:mt-12 lg:-mt-5 xl:mt-0 mr-5 lg:p-0'>
                            <p className='text-2xl xl:text-[32px] font-gilroyregular font-bold leading-[2rem] tracking-wide lg:w-full'>Digital marketing</p>
                                <p className='text-xs md:text-sm xs:pr-5 md:pr-0  font-light font-gilroythin lg:w-full'>With a strong digital DNA, Codler steps into your marketing world and works as a partner in your growth. We help you plan your marketing ideas effectively and provide an optimal brand roadmap for your journey across the digital landscape. Our tailor-made digital marketing services help you build your brand across every social media platform. Our creative heads transform your ideas into eye-catchy designs.</p>
                             {/*                               <a href='#' className='flex no-underline text-white sbg3-btn w-36 rounded-full  md:h-10 md:w-32 shadow-lg'><p className='my-2.5 lg:my-3 pl-4 pr-2 text-xs'>Learn more</p><i class="fa-solid fa-arrow-right text-xl pt-2 lg:pt-3"></i></a>
                            */}
                           </div>
                           
                        </div>
                    </div>
                </div>
            </section>
            <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648629513/codler/img4_2x_1_gbzd8l.png'} className='hidden lg:block absolute w-16 right-0 -mt-52'></img>

            <section className='w-11/12 lg:w-10/12 mx-auto mt-16'>
                <div className='s-bg4 rounded-lg' data-aos="fade-up">
                    <div className='grid grid-cols-1 md:grid-cols-2 relative md:h-96'>
                        
                        <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648629513/codler/Ellipse_62_2_lcipqb.png'} className='hidden lg:block absolute bottom-0 left-0 w-40 rounded-bl-lg'></img>
                        <div className='py-8 lg:py-16 text-white relative'>
                            
                           <div className='relative pl-10 pr-4 md:mt-5 lg:-mt-5 xl:mt-0 lg:pl-24'>
                            <p className='text-2xl xl:text-[32px] font-gilroyregular font-semibold leading-[2rem] tracking-wide lg:w-full'>Quality Assurance (QA) & Testing Services</p>
                                <p className='text-xs md:text-sm xs:pr-5 md:pr-0 font-gilroythin font-light'>Clients around the world exclusively use Codlerr's quality assurance services. We are experts in software testing, and they test anything from websites and apps to software products. We help clients minimize risks and succeed. They test many important aspects of software, including functionality, behavior, performance, flexibility, and more. </p>
                        {/*                                <a href='#' className='flex no-underline text-white sbg4-btn w-36 rounded-full md:h-10 md:w-32 shadow-lg'><p className='my-2.5 lg:my-3 pl-4 pr-2 text-xs'>Learn more</p><i class="fa-solid fa-arrow-right text-xl pt-2 lg:pt-3"></i></a>
                        */}
                       </div>
                           
                        </div>
                        <div className='relative'>
                            <span className='flex justify-center'><img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648629513/codler/p4_qk5q5y.png'} className=' py-4 relative z-10 h-60 md:mt-12 md:w-64 md:h-72 md:ml-12'></img></span>
                            <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648629512/codler/Ellipse_60_2_rvq5on.png'} className='absolute  hidden lg:block right-0 top-0 w-72 rounded-tr-lg'></img>
                        </div>
                        
                    </div>
                </div>
            </section>


            <section className='w-11/12 lg:w-10/12 mx-auto mt-16 mb-20'>
                <div className='s-bg5 rounded-lg' data-aos="fade-up">
                    <div className='grid grid-cols-1 md:grid-cols-2 relative md:h-96'>
                        <div className='flex justify-center'><img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648629513/codler/p5_fslbfx.png'} className=' lg:py-0 py-2 h-60 md:h-72 md:w-[60%] md:mt-12 md:ml-12'></img></div>
                        <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648629513/codler/Ellipse_62_3_r1xmfa.png'} className='hidden lg:block absolute bottom-0 left-0 w-40 rounded-bl-lg'></img>
                        <div className='lg:py-16 text-white relative'>
                            <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648629512/codler/Ellipse_60_3_eealyi.png'} className='absolute hidden lg:block right-0 top-0 w-72 rounded-tr-lg'></img>
                           <div className='relative p-4 mr-8 md:mt-5 lg:-mt-5 xl:mt-0 lg:p-0'>
                            <p className='text-2xl xl:text-[32px] font-gilroyregular font-semibold leading-[2rem] tracking-wide lg:w-full'>Branding</p>
                                <p className='text-xs md:text-sm lg:text-sm xs:pr-5 md:pr-0  font-light font-gilroythin lg:w-full lg:mb-6'>Our creative heads are continually questioning and eternally curious, be it examining the technical details of the product or getting inside the minds of consumers. We bravely combine creativity with identity to create brands that live in the hearts of many. We craft stories that let you tell your story in a way that connects the gap between you and your spectators.  </p>
                            {/*                                <a href='#' className='flex no-underline text-white sbg5-btn w-36 rounded-full md:h-10 md:w-32 shadow-lg'><p className='my-2.5 lg:my-3 pl-4 pr-2 text-xs'>Learn more</p><i class="fa-solid fa-arrow-right text-xl pt-2 lg:pt-3"></i></a>
 */}
                           </div>
                           
                        </div>
                    </div>
                </div>
            </section>

            <section className='w-11/12 lg:w-10/12 mx-auto mt-16'>
                <div className='s-bg6 rounded-lg' data-aos="fade-up">
                    <div className='grid grid-cols-1 md:grid-cols-2 relative md:h-96'>
                        
                        <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648629514/codler/sss1_it1gpf.png'} className='hidden lg:block absolute bottom-0 left-0 w-40 rounded-bl-lg'></img>
                        <div className='py-8 lg:py-16 text-white relative'>
                            
                           <div className='relative pl-10 md:mt-5 lg:-mt-5 xl:mt-0 pr-4 lg:pl-24'>
                            <p className='text-2xl xl:text-[32px] font-gilroyregular font-semibold leading-[2rem] tracking-wide lg:w-3/4'>Search Engine Optimisation ( SEO )</p>
                                <p className='text-xs md:text-sm xs:pr-5 md:pr-0 font-gilroythin font-light'>Codler uses strategies to get your business in the top searches and earn more revenue. We tailor SEO strategies according to your business model, making it easier to increase the business's credibility and boost your business growth.</p>
                           {/*                                <a href='#' className='flex  no-underline text-white sbg6-btn w-36 rounded-full md:h-10 md:w-32 shadow-lg'><p className='my-2.5 lg:my-3 pl-4 pr-2 text-xs'>Learn more</p><i class="fa-solid fa-arrow-right text-xl pt-2 lg:pt-3"></i></a>
 */}                           </div>
                           
                        </div>
                        <div className='relative'>
                            <span className='flex justify-center'><img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648629514/codler/p6_tlfxla.png'} className=' py-4 relative z-10 h-60 md:h-72 md:w-[65%] md:mt-12 md:ml-0'></img></span>
                            <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648629514/codler/ss2_fhznjf.png'} className='absolute  hidden lg:block right-0 top-0 w-72 rounded-tr-lg'></img>
                        </div>
                        
                    </div>
                </div>
            </section>

            <section className='w-11/12 lg:w-10/12 mx-auto py-24'>
                <div className='w-10/12 mx-auto' data-aos="fade-up">
                    <p className='text-zinc-800 text-lg text-color leading-[4rem] font-gilroybold font-bold cursor-pointer md:text-[30px] lg:text-[50px] hover:text-purple-500 font-bold'>Developing a top-notch product is the result of researching and defining the current market as well as the goals you have in mind.</p>
                </div>
            </section>


            <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648629512/codler/bubhalf_bufeg5.png'} className='hidden  lg:block absolute w-28 left-0 -mt-40'></img>
            <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648629514/codler/tbubble_uuck1c.png'} className='hidden lg:block absolute w-14 left-40 -mt-20'></img>

            <section className='w-10/12 lg:mt-0 mx-auto bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 rounded-xl mb-20' data-aos="zoom-in">
                <div className='w-10/12 mx-auto py-14'>
                    <div>
                        <p className='text-white text-lg font-semibold font-gilroythin leading-7'>We proudly work with<hr className='w-16 h-56 font-bold -mt-3 ml-48 md:ml-48 h-24 textlgcolor'></hr></p>
                        <div className='grid grid-cols-2 lg:grid-flow-col gap-6 mt-2' >
                        <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1650141845/codler/U_GRAB_FINAL_PDF-01_1_2_nrltee.png'} className='w-56 h-20 mt-7'></img>
                       <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1649703335/codler/Group_10401_vgefy0.png'} className='lg:w-36 lg:h-16 mt-10 xs:mt-12 lg:mt-9'></img>
                       <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1650141845/codler/Group_60570_otkpul.png'} className='w-64 h-12 xl:-ml-12 mt-12 '></img>
                       <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1650141845/codler/CEANOR_1_1_1_2_x89qjw.png'} className='w-48 mt-10 h-16'></img>
                        </div>
                    </div>
                </div>
            </section>


            <section className='bg-zinc-900 mb-20'>
                    <div className='w-11/12 lg:w-10/12 mx-auto'>
                            <div className='pt-20 pb-5 lg:ml-28 xl:ml-64 text-center'>
                                <div className='text-white pb-10 ' data-aos="fade-up">
                                    <p className='text-2xl lg:text-3xl lg:w-4/5 font-gilroyregular font-semibold'>See what our valuable clients says about us</p>
                                    <p className='text-zinc-200 lg:w-4/5 text-xs font-gilroythin text-left '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra quis bibendum adipiscing cum mauris, faucibus nulla. Sed adipiscing sollicitudin </p>
                                </div>

                              {/*  <div className='w-11/12 mx-auto lg:w-full grid grid-cols-1 lg:grid-cols-2 gap-4' data-aos="fade-up">
                                          <div>
                                              <div className='bg-zinc-800 z-10 h-72 lg:h-64' data-aos="fade-up">
                                                    <div className='pl-6 pt-6 flex'>
                                                    <p className="text-xl pr-4 text-white font-semibold">5.0</p>
                                                            <FontAwesomeIcon icon={faStar} className="text-l mt-1 text-yellow-500 " />
                                                            <FontAwesomeIcon icon={faStar} className="text-l mt-1 text-yellow-500 " />
                                                            <FontAwesomeIcon icon={faStar} className="text-l mt-1 text-yellow-500 " />
                                                            <FontAwesomeIcon icon={faStar} className="text-l mt-1 text-yellow-500 " />
                                                            <FontAwesomeIcon icon={faStar} className="text-l mt-1 text-yellow-500" />
                                                        
                                                    </div>
                                                    <p className='text-white leading-5 text-xs font-light font-gilroythin px-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 1500s, when an Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                    <div className='flex'>
                                                            <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648629515/codler/user1_uss6f0.png'} className='w-7 h-7 mx-6 mt-1'></img>
                                                            <div className='text-zinc-200 text-xs  font-semibold font-gilroythin -ml-3 mt-[3px]'>
                                                                <p>Arjun nabiyar</p>
                                                                <p className='-mt-4 text-xs font-normal font-gilroythin'>Director,lolipop desings</p>
                                                            </div>
                                                        </div>
                                                </div>
                                         </div>      
                                          <div>
                                                <div className='bg-zinc-800 z-10 h-72 lg:h-64 ' data-aos="fade-up">
                                                    <div className='pl-6 pt-6 flex'>
                                                    <p className="text-xl pr-4 text-white font-semibold">5.0</p>
                                                            <FontAwesomeIcon icon={faStar} className="text-l mt-1 text-yellow-500 " />
                                                            <FontAwesomeIcon icon={faStar} className="text-l mt-1 text-yellow-500 " />
                                                            <FontAwesomeIcon icon={faStar} className="text-l mt-1 text-yellow-500 " />
                                                            <FontAwesomeIcon icon={faStar} className="text-l mt-1 text-yellow-500 " />
                                                            <FontAwesomeIcon icon={faStar} className="text-l mt-1 text-yellow-500 " />
                                                        
                                                    </div>
                                                    <p className='text-white leading-5 text-xs font-light font-gilroythin px-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 1500s, when an Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                    <div className='flex'>
                                                            <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648629515/codler/user1_uss6f0.png'} className='w-7 h-7 mx-6 mt-1'></img>
                                                            <div className='text-zinc-200 text-xs  font-semibold font-gilroythin -ml-3 mt-[3px]'>
                                                                <p>Arjun nabiyar</p>
                                                                <p className='-mt-4  text-xs font-normal font-gilroythin'>Director,lolipop desings</p>
                                                            </div>
                                                        </div>
                                                </div>
                                            </div>   





                                </div>*/}
                            </div>


                            {/* form */}
                           <div className='pb-5 lg:ml-0 ' data-aos="fade-up">
                                        <div class="lg:ml-20 border-2 border-zinc-600 lg:w-[90%] rounded-md">
                                        <div class="lg:px-8 px-3 py-2">
                                            <div class="text-white">
                                            <p class="text-2xl font-semibold">Ready to start a Project?</p>
                                            <p class="tracking-wider text-zinc-300 -mt-3 md:text-sm">To start, use form below to tell us about you and the project</p>
                                            </div>

                                            <div class=" text-zinc-400">
                                                <p className='text-zinc-200 opacity-50 mb-1 text-xs'>Name*</p>
                                                <input class="w-full border-b-2 border-zinc-600 opacity-50 outline-none bg-transparent  text-sm -mt-20" type="text"  placeholder="Enter your good name" required/>
                                            </div>

                                            <div class="pt-2 text-zinc-400">
                                                <p className='text-zinc-200 opacity-50 mt-2 mb-1 text-xs'>Email*</p>
                                                <input class="w-full border-b-2 border-zinc-600 outline-none bg-transparent opacity-50 text-sm " type="text" placeholder="Enter email ID"/>
                                            </div>

                                            <div class="pt-2 text-zinc-400 grid grid-cols-1 md:grid-cols-2 gap-8 ">
                                            <div>
                                                <p className='text-zinc-200 opacity-50 text-xs mt-3'>Phone*</p>
                                                
                                                <input class="w-full border-b-2 border-zinc-600 outline-none bg-transparent  text-sm md:text-base" type="text" placeholder="+91"/>
                                            
                                            </div>
                                            <div>
                                                <label class="" for="">
                                                    <p className='text-zinc-200 opacity-50 text-xs mt-3'>How soon you want to start</p>
                                                    <select class="w-full border-b-2 border-zinc-600 outline-none bg-transparent" name="" id="">
                                                        <option class="" value="">Select</option>

                                                    </select>
                                                </label>
                                            </div>
                                            </div>

                                            <div class="pt-3 text-zinc-200">
                                            <p className='text-zinc-400 opacity-50 mb-2 text-xs'>Select a service</p>
                                                    <select class="w-full border-b-2 border-zinc-600 outline-none bg-transparent" name="" id="">
                                                        <option class="" value="">Select</option>

                                                    </select>
                                            </div>
                                           
                                            <div class="pt-3 text-zinc-200">
                                            <p className='text-zinc-400 opacity-50 text-xs mt-2 mb-1'>Requirement</p>
                                                    <select class="w-full border-b-2 border-zinc-600 outline-none bg-transparent" name="" id="">
                                                        <option class="" value="">Select</option>

                                                    </select>
                                            </div>

                                           
                                            
                                            <div class="pt-3 text-zinc-400 opacity-50 text-xs">
                                                <p>Breif about your project</p>
                                                <input class="text-zinc-200 w-full border-b-2 border-zinc-600 outline-none bg-transparent  text-sm md:text-base" type="text"  placeholder="We are happy to hear" required/>

                                            </div>

                                            <div class="pt-4 text-white">
                                                <div class="overflow-hidden border-2 h-12 border-dashed border-zinc-200  rounded-md py-2">
                                                  
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



                                            <div class="mt-2">
                                                <button class="bg-violet-800 h-10 w-28 text-white text-xs px-2 py-2 rounded-lg">Let's start</button>
                                            </div>
                                        </div>
                                    </div>
                           </div>
                            {/* form */}
                    
                    </div>
            </section>


           
       </div>
        )
}
export default Services;