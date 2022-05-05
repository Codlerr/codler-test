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
*/}


            <section className='lg:mb-[40%] mb-[80%]'>
            <div id="carouselExampleCaptions" className="carousel slide relative " data-bs-ride="carousel">
  <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="0"
      class="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="2"
      aria-label="Slide 3"
    ></button>
  </div>
  <div className="carousel-inner relative w-full overflow-hidden h-[550px]">
    <div className="carousel-item active relative float-left ">
      <img
        src={require('../images/portfolio-images/port-inner/screenshot.png')}
        className="block w-full"
        alt="..."
      />
      <div className="carousel-caption hidden md:block absolute text-center " >
        <h5 className="text-xl">First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item relative float-left w-full">
      <img
        src={require('../images/portfolio-images/port-inner/screenshot2.png')}
        className="block w-full"
        alt="..."
      />
      <div className="carousel-caption hidden md:block absolute text-center">
        <h5 className="text-xl">Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item relative float-left w-full">
      <img
        src={require('../images/portfolio-images/port-inner/screenshot3.png')}
        className="block w-full"
        alt="..."
      />
      <div className="carousel-caption hidden md:block absolute text-center">
        <h5 className="text-xl">Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button
    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="prev"
  >
    <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="next"
  >
    <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
            </section> 


        </div>
    )
}
export default Portfolio2;
