import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect, useState } from 'react';
import {Helmet} from 'react-helmet';
import { useNavigate } from "react-router-dom";
import DisplayPictures from './portfolio/digital-marketing';
import DisplayPicturesWebsite from './portfolio/website';
import DisplayPicturesBranding from './portfolio/branding';
import DisplayVideos from './portfolio/videos';
import DisplayPicturesAll from './portfolio/all';
function Portfolio() {
    const[action,setAction]=useState('first');
    const navigate = useNavigate('');
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <div>
               <Helmet>
               <title>Portfolio</title>
               <meta name="description" content="want to know who we are?" />
              </Helmet>
              <section className='portfoliobg'>
                     <div className='w-10/12 lg:w-full mx-auto grid grid-cols-1 lg:grid-cols-2'>
                      <div className='pt-48 lg:pl-10 xl:pl-20' data-aos="fade-up">
                            <p className='text-white text-3xl xs:mt-32 md:mt-0 xl:text-[40px] tracking-wide leading-none font-semibold font-gilroybold'>Explore our portfolio</p>
                            <p className='text-white text-sm xl:text-lg font-gilroyregular xl:w-3/4 lg:pt-1'> We are passionate about what we do! Our portfolio is the pure essence of success over our hard work. We have years of industry experience, collaboration, expertise, and quality results.</p>
                        </div>
                        <div className='pt-2 hidden md:block xl:w-[900px] xl:-ml-56'>
                            <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1654928690/codler/unsplash_txshbe.png'} className='' data-aos="fade-up"></img>
                        </div>
                  </div>
              </section>
              <section className='sm:mx-7 lg:mt-2 md:mx-36'>
                  <div className='flex justify-between lg:justify-start'>
                        <button  className='no-underline'   onClick={()=>setAction('first')}      ><p className='text-zinc-300 hover:text-white sm:text-xs decoration-purple-900 decoration-4 lg:text-lg hover:underline font-semibold'> ALL</p></button>
                        <button href='#' onClick={()=>setAction('second')} className='no-underline lg:pl-20'><p className='text-zinc-300 hover:text-white decoration-purple-900 decoration-4 text-xs hover:underline lg:text-lg font-semibold'>WEBSITE</p></button>
                        <button href='#' onClick={()=>setAction('fifth')} className='no-underline lg:pl-20'><p className='text-zinc-300 hover:text-white decoration-purple-900 decoration-4 text-xs hover:underline lg:text-lg  font-semibold'>DIGITAL MARKETING</p></button>
                        <button href='#' onClick={()=>setAction('fourth')} className='no-underline lg:pl-20'><p className='text-zinc-300 hover:text-white decoration-purple-900 decoration-4 text-xs hover:underline lg:text-lg font-semibold'>BRANDING</p></button>
                        <button href='#' onClick={()=>setAction('third')} className='no-underline lg:pl-20'><p className='text-zinc-300 hover:text-white decoration-purple-900 decoration-4 text-xs hover:underline lg:text-lg font-semibold'>VIDEOS</p></button>

                  </div>
                 <div className='h-full mb-56'>
                     {action ==='first' && <DisplayPicturesAll/>}
                     {action ==='fifth' && <DisplayPictures/>}
                     {action ==='second' && <DisplayPicturesWebsite/>}
                     {action ==='third' && <DisplayVideos/>}
                     {action ==='fourth' && <DisplayPicturesBranding/>}
                 </div>
              </section>

          {/*    <section className='w-10/12 lg:w-10/12 mt-10 md:mt-0 mx-auto overflow-hidden' data-aos="fade-up">
                  <div className='port-bg mt-5 bg-blue-500' >
                    <div className='w-11/12 lg:w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-2' onClick={()=>navigate('./portfoliodetails')}>
                            <div>
                                <div className='mt-8 lg:my-24'>
                                    <span className='flex'><p className='text-white font-semibold tracking-wide text-xs lg:text-base' >OUR RECENT WORK</p><img src={line} className='h-0.5 mt-2.5 pl-2'></img></span>
                                    <p className='text-white font-bold text-2xl lg:text-3xl ' data-aos="fade-right" data-aos-delay="700">Car Rental App ??? <br/>CAR CHILLI</p>
                                    <p className='text-zinc-200 pt-2 text-sm lg:text-base leading-5 font-light font-gilroythinlg:leading-7 lg:w-4/5'>A Singapore based car rental mobile app where a user can rent a car from its owner quickly and easily. We were able to change the UI design from a basic structure to a better UI that interacts with the customers???researched how the app should be, and changed the logo to a better one.</p>
                                </div>
                                
                            </div>
                            <div className=''>
                                  
                                    <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1653048104/codler/Image_gl7vsx.png'} className='lg:h-fit'></img>
                            </div>
                    </div>
                    
                  </div>
              </section>

              <section className='w-10/12 lg:w-10/12 mx-auto py-4 '>
             
                  <div className='grid grid-cols-1 lg:grid-cols-2 grid-rows-1 lg:grid-rows-3 gap-6 pb-20 lg:pb-0 lg:-mb-40'>
                        <div class="rounded-lg back1-bg h-fit" data-aos="fade-up">
                            <div className='w-9/12 mx-auto text-center pt-6'>
                                    <p className='text-black font-bold'>AI Brilliance Landing page</p>
                                    <p className='text-black text-xs font-gilroythin lg:mx-10'>AI brilliance is an E-learning platform. Learners across the world can study advanced skills in data science, machine learning, and AI careers. The number of students enrolled in AI Brilliance courses such as Advanced Manufacturing Process Analysis far exceeds 30,00</p>
                                    <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1653329614/codler/Screenshot_4_kysfqm.jpg'} className='lg:h-72 rounded-lg'></img>
                            </div>
                        </div>

                        <div class="rounded-lg back2-bg h-fit" data-aos="fade-up">
                                <div className='w-9/12 mx-auto text-center pt-8 lg:pt-24'>
                                    <p className='text-black font-bold'>AI Brilliance Landing page</p>
                                    <p className='text-black text-xs font-gilroythin lg:mx-10'>AI brilliance is an E-learning platform. Learners across the world can study advanced skills in data science, machine learning, and AI careers. The number of students enrolled in AI Brilliance courses such as Advanced Manufacturing Process Analysis far exceeds 30,00</p>
                                    <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1653329715/codler/5_odgq9c.jpg'} className='lg:h-72 rounded-lg'></img>
                                </div>
                        </div>

                        <div class="rounded-lg back3-bg h-fit" data-aos="fade-up">
                                <div className='w-9/12 mx-auto text-center pt-8 lg:pt-24'>
                                    <p className='text-white font-bold'>AI Brilliance Landing page</p>
                                    <p className='text-white text-xs font-gilroythin lg:mx-10'>AI brilliance is an E-learning platform. Learners across the world can study advanced skills in data science, machine learning, and AI careers. The number of students enrolled in AI Brilliance courses such as Advanced Manufacturing Process Analysis far exceeds 30,00</p>
                                    <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1653320131/codler/6_vtum3j.jpg'} className='lg:h-72 rounded-lg'></img>
                                </div>
                        </div>

                        <div class="rounded-lg back4-bg h-fit" data-aos="fade-up">
                                <div className='w-9/12 mx-auto text-center pt-6'>
                                    <p className='text-black font-bold'>AI Brilliance Landing page</p>
                                    <p className='text-black text-xs font-gilroythin lg:mx-10'>AI brilliance is an E-learning platform. Learners across the world can study advanced skills in data science, machine learning, and AI careers. The number of students enrolled in AI Brilliance courses such as Advanced Manufacturing Process Analysis far exceeds 30,00</p>
                                    <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1653320220/codler/7_uezops.png'} className='lg:h-72 rounded-lg'></img>
                                </div>
                        </div>

                        <div> 
                            <div className='lg:-mt-16' data-aos="fade-up">
                                    <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1653320161/codler/8_x9wkiv.png'} className='lg:w-full lg:h-80 rounded-lg'></img>
                            </div>
                        </div>
                        <div> 
                            <div className='bg-black lg:-mt-16 rounded-lg' data-aos="fade-up">
                                    <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1653320118/codler/9_whlozb.jpg'} className='lg:w-8/12 mx-auto lg:h-80 lg:py-8 '></img>
                                    
                            </div>
                        </div>

                  </div>

    </section>*/}
      
        </div>
        
        
        )
}
export default Portfolio;