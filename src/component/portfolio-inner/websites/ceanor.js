import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import shade from '../../../images/portfolio-images/port-inner/lineshade.png';
import bub from '../../../images/portfolio-images/port-inner/bubble.png';
import bubhalf from '../../../images/portfolio-images/port-inner/bubble1@2x 2 (1).png';
import drop from '../../../images/portfolio-images/port-inner/img4@2x 1.png';
import { useNavigate } from "react-router-dom";
import Slider2 from '../../slider2';
import Slider3 from '../../slider3';
import '../../../App.css'
import { Portfoliolist } from '../../../constants/constants';
function PortfolioCeanor() {
    function display(index){
        return(
            <div className='w-96 h-96 bg-white rounded-lg'>
               <a href='https://www.ugrab.in/' className='portfolio-image-main' style={{opacity:'1',transform:'matrix3d(1, 0.000174533, 0, 0, -0.000174533, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0.1, 1'}}>
               <div className='potfolio-image-box w-56 h-56 ml-12'>
               <div className='portfolio-image-outerbox ' style={{background:`url(${index.src})`}}>
               <div className='portfolio-image'>
                </div> 
               <div className='link-box w-96 h-10 '>
               <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1654709573/codler/link-icon_djrfm3.png'} className='-ml-4 mt-2' alt='img'/>
               <p className='link-text ml-2 -mt-4'>{index.website}</p>
             </div> 
        <div className='show-eye '>
              <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1654709545/codler/eye_kggmye.png'} className='mt-2 ml-1' alt=''/>
        </div>   
            <p className='text-white'></p> 
        </div>
        </div>
        </a>
            </div>
        )
    }
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    const navigate = useNavigate('');
   return (
        <div>
          <section>
            <img src={shade} className='pt-60 lg:pt-12 blur-xl  lg:blur-lg z-0 absolute' data-aos="zoom-in"></img>
                <div className='w-10/12 mx-auto xl:mx-20 grid grid-cols-1 lg:grid-cols-2 blur-0 lg:pb-32'>
                    <div className='pt-52 lg:pt-48' data-aos="fade-up">
                        <p className='text-white text-2xl md:mt-5 lg:text-4xl font-bold'>Ceanor</p>
                        <p className='text-white py-2' >Krijay is an IT company based in Hyderabad,led by a core team <br/>of qualified and experienced Chartered Accountants.<br/></p>
                        <a href='#' className='no-underline text-zinc-200 hover:text-white text-xs lg:text-sm bg-violet-800 hover:bg-violet-900 px-2.5 py-2.5 lg:px-3 lg:py-3 rounded-md no-underline' onClick={()=>navigate('/contactus')} style={{backgroundColor:'#800080'}}>Find Us More</a>
                    </div>
                    <div className='pt-20 flex justify-center' data-aos="fade-up">
                     <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1655147312/codler/WC-01_gifeay.png'} className='w-96 hidden lg:block'></img>
                    </div>
                </div>
            
            </section>

            <section className='port-sec2-bg'>
                    <div className='w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 py-16'>
                        <div className='text-white'>
                            <p className='text-2xl lg:text-4xl font-semibold'>About the client</p>
                            <div data-aos="fade-up">
                                <p className='lg:w-4/5 text-sm lg:text-base text-zinc-300'>Ceanor was born out of passion. They aim to break the idea that skincare is gender-restricted and for the privileged. Each of their products is uniquely formulated considering the socio-geographic factors of our region. </p>
                                <p className='lg:w-4/5 text-sm lg:text-base text-zinc-300'>Furthermore, they strive to make skincare accessible for all. Simply put, their aim is Good Skin for All. </p>
                            </div>
                        </div>

                        <div className=' flex justify-center lg:py-20' data-aos="fade-up">
                            <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1654242041/codler/CEANOR_xslfif.png'} className=''></img>
                        </div>
                    </div>
            </section>

            <section className='bg-center bg-cover h-[70vh] bg-[url(https://res.cloudinary.com/dbwyrrrqo/image/upload/v1655062721/codler/Web_Site_Image_Skin_Care_2_jse453.jpg)]'>

                <div className='w-10/12 mx-auto py-20 text-white' data-aos="fade-up">
                    <p className='text-3xl lg:text-4xl md:mt-36 lg:mt-0 font-semibold'>Our role</p>
                    <p className='lg:w-2/4 text-zinc-300'>Our part was to provide a simple yet professional website design to create a captivating impact. We created an interactive website design for the brand with in-house research and data validation, which is essential when creating a website that caters to various B2C audiences.</p>
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
                            <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1655147312/codler/WC-02_kafmcd.png'} className='w-96'></img>
                        </div>
                        <div className='lg:py-32 lg:px-10' data-aos="fade-up">
                            <p className='text-white text-3xl lg:text-4xl font-semibold'>The opportunity</p>
                            <p className='text-white text-sm lg:text-base pb-8'> We had the opportunity to do the website designing, website development, and user experience of the brand by combining our experience with the clients' preferences. </p>
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
                            <p className='text-white text-sm lg:text-base pb-8'>Ceanor was born with the aim of “Good skin for all” and they excellently followed this notion. So we envisioned of a subtle and classy website for the brand which we successfully delivered while savouring. We designed and developed the website all from scratch.</p>
                        </div>
                        <div className=' flex justify-center p-5' data-aos="fade-up">
                            <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1655147312/codler/WC-03_rm14y9.png'} className='w-96'></img>
                        </div>
                </div>
            </section>
          
     {/*    <section className='hidden mb-64 lg:block'>
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
             <div className="carousel-inner h-96">
             <div className="carousel-item active w-96 ml-12 ">
            <img className="d-block w-100" src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1654703957/codler/IMG-20211223-WA0066_hz6qf9.jpg'} alt="First slide"/>
            </div>
            <div className="carousel-item ">
            <img class="d-block w-100" src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1654703957/codler/IMG-20220115-WA0017_pvldws.jpg'} alt="Second slide"/>
            </div>
            <div class="carousel-item ">
            <img class="d-block w-100" src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1654703958/codler/IMG-20220111-WA0019_v0zfan.jpg'} alt="Third slide"/>
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
   </section> */}

            <section className='py-3  mb-12'>
            <Slider2/>
            </section>

            <section className='py-3 md:py-12 mb-12'>
            <div className='wavy ml-16'>
                <span style={{'--i':1}}>O</span>
                <span style={{'--i':2}}>U</span>
                <span style={{'--i':3}}>R</span>
                <span style={{'--i':4}} className='ml-3' >R</span>
                <span style={{'--i':5}}>e</span>
                <span style={{'--i':6}}>c</span>
                <span style={{'--i':7}}>e</span>
                <span style={{'--i':8}}>n</span>
                <span style={{'--i':9}}>t</span>
                <span style={{'--i':10}} className='ml-3'>W</span>
                <span style={{'--i':11}}>o</span>
                <span style={{'--i':12}}>r</span>
                <span style={{'--i':13}}>k</span>
                <span style={{'--i':14}}>s</span>

            </div>
    
            <Slider3/>
            </section>
        {/* <section className='mb-36'>
        <div className='grid grid-cols-4'>
        {Portfoliolist.map(display)}
        </div>
</section>*/}
        </div>
    )
}
export default PortfolioCeanor;