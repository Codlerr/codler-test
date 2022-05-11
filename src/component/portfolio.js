import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import bg1 from '../images/portfolio-images/bg2.jpg';
import v1 from '../images/portfolio-images/screenshot.png';
import v2 from '../images/portfolio-images/Screenshot 4.jpg';
import v3 from '../images/portfolio-images/5.jpg';
import v4 from '../images/portfolio-images/6.jpg';
import v5 from '../images/portfolio-images/7.png';
import v6 from '../images/portfolio-images/8.png';
import v7 from '../images/portfolio-images/9.jpg';
import line from '../images/portfolio-images/Line 6.png';
import {Helmet} from 'react-helmet';
import { useNavigate } from "react-router-dom";
function Portfolio() {
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
              <section className='probg'>
                     <div className='w-10/12 lg:w-full mx-auto grid grid-cols-1 lg:grid-cols-2'>
                      <div className='pt-48 lg:pl-10 xl:pl-20' data-aos="fade-up">
                            <p className='text-white text-3xl  xl:text-4xl font-bold'>Explore our portfolio</p>
                            <p className='text-white text-sm xl:text-lg xl:w-3/4 lg:pt-1'> We are passionate about what we do! Our portfolio is the pure essence of success over our hard work. We have years of industry experience, collaboration, expertise, and quality results.</p>
                        </div>
                        <div className='pt-14 hidden md:block xl:w-[800px] xl:-ml-48'>
                            <img src={bg1} className='port-bg ' data-aos="fade-up"></img>
                        </div>
                  </div>
              </section>
              <section className='hidden md:block w-11/12 lg:w-10/12 mx-auto md:mx-20 py-8' data-aos="fade-up">
                  <div className='flex justify-between lg:justify-start'>
                        <a href='#' className='no-underline'         ><p className='text-zinc-300 hover:text-white text-xs lg:text-lg font-semibold'>ALL</p></a>
                        <a href='#' className='no-underline lg:pl-20'><p className='text-zinc-300 hover:text-white text-xs lg:text-lg font-semibold'>BRANDING</p></a>
                        <a href='#' className='no-underline lg:pl-20'><p className='text-zinc-300 hover:text-white text-xs lg:text-lg font-semibold'>WEBSITE</p></a>
                        <a href='#' className='no-underline lg:pl-20'><p className='text-zinc-300 hover:text-white text-xs lg:text-lg font-semibold'>APP DESING</p></a>
                        <a href='#' className='no-underline lg:pl-20'><p className='text-zinc-300 hover:text-white text-xs lg:text-lg font-semibold'>DIGITAL MARKETING</p></a>
                  </div>
              </section>

              <section className='w-10/12 lg:w-10/12 mt-10 md:mt-0 mx-auto overflow-hidden' data-aos="fade-up">
                  <div className='port-bg' style={{backgroundColor:'#800080'}}>
                    <div className='w-11/12 lg:w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-2' onClick={()=>navigate('./portfoliodetails')}>
                            <div>
                                <div className='mt-8 lg:my-24'>
                                    <span className='flex'><p className='text-white font-semibold text-xs lg:text-base' >OUR RECENT WORK</p><img src={line} className='h-0.5 mt-2.5 pl-2'></img></span>
                                    <p className='text-white font-bold text-2xl lg:text-3xl ' data-aos="fade-right" data-aos-delay="700">Car Rental App – <br/>CAR CHILLI</p>
                                    <p className='text-zinc-300 pt-2 text-sm lg:text-base leading-5 font-light lg:leading-7 lg:w-4/5'>A Singapore based car rental mobile app where a user can rent a car from its owner quickly and easily. We were able to change the UI design from a basic structure to a better UI that interacts with the customers—researched how the app should be, and changed the logo to a better one.</p>
                                </div>
                                
                            </div>
                            <div className=''>
                                  
                                    <img src={v1} className='lg:h-fit'></img>
                            </div>
                    </div>
                    
                  </div>
              </section>

              <section className='w-10/12 lg:w-10/12 mx-auto py-4 '>
             
                  <div className='grid grid-cols-1 lg:grid-cols-2 grid-rows-1 lg:grid-rows-3 gap-6 pb-20 lg:pb-0 lg:-mb-40'>
                        <div class="rounded-lg back1-bg h-fit" data-aos="fade-up">
                            <div className='w-9/12 mx-auto text-center pt-6'>
                                    <p className='text-black font-bold'>AI Brilliance Landing page</p>
                                    <p className='text-black text-xs lg:mx-10'>AI brilliance is an E-learning platform. Learners across the world can study advanced skills in data science, machine learning, and AI careers. The number of students enrolled in AI Brilliance courses such as Advanced Manufacturing Process Analysis far exceeds 30,00</p>
                                    <img src={v2} className='lg:h-72 rounded-lg'></img>
                            </div>
                        </div>

                        <div class="rounded-lg back2-bg h-fit" data-aos="fade-up">
                                <div className='w-9/12 mx-auto text-center pt-8 lg:pt-24'>
                                    <p className='text-black font-bold'>AI Brilliance Landing page</p>
                                    <p className='text-black text-xs lg:mx-10'>AI brilliance is an E-learning platform. Learners across the world can study advanced skills in data science, machine learning, and AI careers. The number of students enrolled in AI Brilliance courses such as Advanced Manufacturing Process Analysis far exceeds 30,00</p>
                                    <img src={v3} className='lg:h-72 rounded-lg'></img>
                                </div>
                        </div>

                        <div class="rounded-lg back3-bg h-fit" data-aos="fade-up">
                                <div className='w-9/12 mx-auto text-center pt-8 lg:pt-24'>
                                    <p className='text-white font-bold'>AI Brilliance Landing page</p>
                                    <p className='text-white text-xs lg:mx-10'>AI brilliance is an E-learning platform. Learners across the world can study advanced skills in data science, machine learning, and AI careers. The number of students enrolled in AI Brilliance courses such as Advanced Manufacturing Process Analysis far exceeds 30,00</p>
                                    <img src={v4} className='lg:h-72 rounded-lg'></img>
                                </div>
                        </div>

                        <div class="rounded-lg back4-bg h-fit" data-aos="fade-up">
                                <div className='w-9/12 mx-auto text-center pt-6'>
                                    <p className='text-black font-bold'>AI Brilliance Landing page</p>
                                    <p className='text-black text-xs lg:mx-10'>AI brilliance is an E-learning platform. Learners across the world can study advanced skills in data science, machine learning, and AI careers. The number of students enrolled in AI Brilliance courses such as Advanced Manufacturing Process Analysis far exceeds 30,00</p>
                                    <img src={v5} className='lg:h-72 rounded-lg'></img>
                                </div>
                        </div>

                        <div> 
                            <div className='lg:-mt-16' data-aos="fade-up">
                                    <img src={v6} className='lg:w-full lg:h-80 rounded-lg'></img>
                            </div>
                        </div>
                        <div> 
                            <div className='bg-black lg:-mt-16 rounded-lg' data-aos="fade-up">
                                    <img src={v7} className='lg:w-8/12 mx-auto lg:h-80 lg:py-8 '></img>
                                    
                            </div>
                        </div>

                  </div>

              </section>
      
        </div>
        
        
        )
}
export default Portfolio;