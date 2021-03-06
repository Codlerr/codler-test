import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import shade from '../images/portfolio-images/port-inner/lineshade.png';
import bg1 from '../images/portfolio-images/port-inner/Layer 1 copy 2.png';
import bg2 from '../images/portfolio-images/port-inner/Group 2293.jpg';
import bg3 from '../images/portfolio-images/port-inner/Group.png';
import v1 from '../images/portfolio-images/port-inner/Layer 0.png';
import v2 from '../images/portfolio-images/port-inner/Pose10 1.png';
import bub from '../images/portfolio-images/port-inner/bubble.png';
import bubhalf from '../images/portfolio-images/port-inner/bubble1@2x 2 (1).png';
import drop from '../images/portfolio-images/port-inner/img4@2x 1.png';
import Slider2 from './slider2';


function Portfolio2() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

   

    
    return (
        <div>
          <section>
            <img src={shade} className='pt-60 lg:pt-12 blur-xl  lg:blur-lg z-0 absolute' data-aos="zoom-in"></img>
                <div className='w-10/12 mx-auto xl:mx-20 grid grid-cols-1 lg:grid-cols-2 blur-0 lg:pb-32'>
                    <div className='pt-52 lg:pt-48' data-aos="fade-up">
                        <p className='text-white text-2xl md:mt-5 lg:text-4xl font-bold'>AI Brilliance(Education)</p>
                        <p className='text-white py-2'>A stylish website that we have made proudly,<br></br>we realy enjoyed the projuct, want to see you  scroll down</p>
                        <a href='#' className='no-underline text-zinc-200 hover:text-white text-xs lg:text-sm bg-violet-800 hover:bg-violet-900 px-2.5 py-2.5 lg:px-3 lg:py-3 rounded-md' style={{backgroundColor:'#800080'}}>View website</a>
                    </div>
                    <div className='pt-20 flex justify-center' data-aos="fade-up">
                        <img src={bg1} className='w-96 hidden lg:block'></img>
                    </div>
                </div>
            
            </section>

            <section className='port-sec2-bg'>
                    <div className='w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 py-16'>
                        <div className='text-white'>
                            <p className='text-2xl lg:text-4xl font-semibold'>About the client</p>
                            <div data-aos="fade-up">
                                <p className='lg:w-4/5 text-sm lg:text-base text-zinc-300'>AI brilliance is an E-learning platform. Learners across the world can study advanced skills in data science, machine learning, and AI careers. The number of students enrolled in AI Brilliance courses such as Advanced Manufacturing Process Analysis far exceeds 30,000.</p>
                                <p className='lg:w-4/5 text-sm lg:text-base text-zinc-300'>They emphasise live recording, reporting, online assessments, and results as the options that make them unique. Students pursue more coding via their excellent educational app. </p>
                            </div>
                        </div>

                        <div className=' flex justify-center lg:py-20' data-aos="fade-up">
                            <img src={bg3} className='w-80 h-14'></img>
                        </div>
                    </div>
            </section>

            <section className='port-sec3-bg'>

                <div className='w-10/12 mx-auto py-20 text-white' data-aos="fade-up">
                    <p className='text-3xl lg:text-4xl md:mt-36 lg:mt-0 font-semibold'>The opportunity</p>
                    <p className='lg:w-2/4 text-zinc-300'> AI Brilliance is a startup based on e-learning, who claims to take their business to new heights and accordingly we were able to fulfill their requirements by building a website for them to establish an online presence. Firstly they researched the industry and collaborated with Coddler to build an advanced and efficient portal within four months time  in order to create a visual centerpiece to welcome users.</p>
                </div>
                   
               
                   
            </section>
            <section>
            <div className='hidden lg:block port-sec4-bg lg:-mt-32 lg:mb-20'>
                    <p className='mx-auto lg:py-8 text-gray-700  text-2xl md:text-5xl font-bold lg:w-4/5' data-aos="zoom-in">Delivering a high-quality<br></br> user-experience.</p>
                </div>
                <img src={drop} className='hidden lg:block absolute left-0 -mt-28 w-20'></img>
            </section>
            
            <section className='w-10/12 mx-auto pt-32 lg:pt-0'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                        <div className=' flex justify-center p-5' data-aos="fade-up">
                            <img src={v1} className='w-96'></img>
                        </div>
                        <div className='lg:py-32 lg:px-10' data-aos="fade-up">
                            <p className='text-white text-3xl lg:text-4xl font-semibold'>Our role</p>
                            <p className='text-white text-sm lg:text-base pb-8'>E-learning Web Application Development , UX/UI Design, Visual Design 3D Animation, Motion Graphics, SEO, Ongoing Maintenance</p>
                            <a className='role-btn no-underline text-white text-sm lg:text-base  px-2.5 py-3 lg:px-3 rounded-full' href='#'>Explore Services</a>
                        </div>
                </div>
            </section>
                <div className='hidden lg:block'>
                    <img src={bub} className='absolute right-12 animate-bounce w-8'></img>
                    <img src={bub} className='absolute right-24 animate-bounce w-16'></img>
                    <img src={bubhalf} className='absolute -mt-40 right-0 w-20'></img>
                </div>
            <section className='w-10/12 mx-auto pt-24 lg:pt-0 lg:-mt-14 pb-10'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                        <div className='lg:py-32 lg:px-10' data-aos="fade-up">
                            <p className='text-white text-3xl lg:text-4xl font-semibold'>What we delivered</p>
                            <p className='text-white text-sm lg:text-base pb-8'>We provided a website that is well-coded, well-documented, and has a responsive layout which has been thoroughly tested. Coddler paves the way to succeed digitally by managing their e-learning platform and securing their position in the digital world with a responsive web design.</p>
                        </div>
                        <div className=' flex justify-center p-5' data-aos="fade-up">
                            <img src={v2} className='w-96'></img>
                        </div>
                </div>
            </section>
        {/* <section className='hidden mb-64 lg:block'>
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
             <div className="carousel-inner h-96">
             <div className="carousel-item active w-96 ml-12 ">
            <img className="d-block w-100" src={require('../images/portfolio-images/port-inner/screenshot.png')} alt="First slide"/>
            </div>
            <div className="carousel-item ">
            <img class="d-block w-100" src={require('../images/portfolio-images/port-inner/screenshot2.png')} alt="Second slide"/>
            </div>
            <div class="carousel-item ">
            <img class="d-block w-100" src={require('../images/portfolio-images/port-inner/screenshot3.png')} alt="Third slide"/>
            </div>
          </div>
                   <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                 </a>
                   <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
              </div>
            </section>

            <section className='py-3 md:py-12 mb-12'>
            <Slider2/>
            </section>

    <section className='mb-36'>
        <div className='flex flex-row'>
        <a href='https://www.ugrab.in/' className='portfolio-image-main' style={{opacity:'1',transform:'matrix3d(1, 0.000174533, 0, 0, -0.000174533, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0.1, 1'}}>
        <div className='potfolio-image-box w-56 h-56 ml-12'>
        <div className='portfolio-image-outerbox '>
        <div className='portfolio-image'>
        </div> 
        <div className='link-box w-96 h-10 '>
        <img src={require('../images/link-icon.png')} className='-ml-4 mt-2' alt='img'/ >
        <p className='link-text ml-2 -mt-4'>www.ugrab.in</p>
        
        </div> 
        <div className='show-eye '>
            <img src={require('../images/eye.png')} className='mt-2 ml-1' alt=''/>
            </div>   
            <p className='text-white'></p> 
        </div>
        </div>
        </a>
        <a href='https://www.ugrab.in/' className='portfolio-image-main' style={{opacity:'1',transform:'matrix3d(1, 0.000174533, 0, 0, -0.000174533, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0.1, 1'}}>
        <div className='potfolio-image-box w-56 h-56 ml-12'>
        <div className='portfolio-image-outerbox '>
        <div className='portfolio-image'>
        </div> 
        <div className='link-box w-96 h-10 '>
        <img src={require('../images/link-icon.png')} className='-ml-4 mt-2' alt='img'/ >
        <p className='link-text ml-2 -mt-4'>www.ugrab.in</p>
        
        </div> 
        <div className='show-eye '>
            <img src={require('../images/eye.png')} className='mt-2 ml-1' alt=''/>
            </div>   
            <p className='text-white'></p> 
        </div>
        </div>
        </a>
        </div>
    </section>*/}
        </div>
    )
}
export default Portfolio2;
