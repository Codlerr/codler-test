import react,{useEffect} from 'react';
import { faArrowRight, faStar, faQuoteLeft} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Aos from 'aos';
import "aos/dist/aos.css";
import { services } from '../constants/constants';
import Imageslider from './slider';

function Home() {
 
        useEffect(() => {
            Aos.init({ duration: 2000 });
        }, [])
        const navigate = useNavigate('');

      function showCards(i){
          document.getElementById('heading').innerHTML=services[i].heading;
          document.getElementById('content1').innerHTML=services[i].fields1;
          document.getElementById('content3').innerHTML=services[i].fields2;
          document.getElementById('content4').innerHTML=services[i].fields3;
          document.getElementById('content5').innerHTML=services[i].fields4;

      }
     function mouseLeave(){
        document.getElementById('heading').innerHTML=services[0].heading;
        document.getElementById('content1').innerHTML=services[0].fields1;
        document.getElementById('content3').innerHTML=services[0].fields2;
        document.getElementById('content4').innerHTML=services[0].fields3;
        document.getElementById('content5').innerHTML=services[0].fields4;
      }
    return (
        <div>
        <section className=' mainbg sm:h-full md:h-full lg:h-screen'>
                <div className='w-10/12 lg:w-11/12 grid mx-auto grid-cols-1 lg:grid-cols-3 flex flex-col-reverse'>
                        <div className='lg:ml-8 pt-12 lg:pt-36' data-aos="fade-up">
                        <h1 className="text-white text-xl lg:text-2xl mt-24 md:mt-48 lg:mt-16 font-bold ">
                        <p className='text-white text-3xl md:text-4xl xl:text-5xl md:tracking-wide md:w-[500px] font-gilroybold' data-aos="fade-right">Your vision & <br/>our technology <br/></p><p className='text-white text-xl lg:text-3xl md:tracking-wide -mt-3 md:w-[500px]' data-aos="fade-right" data-aos-delay="200"></p><p className='text-white text-xl lg:text-3xl md:tracking-wide -mt-3' data-aos="fade-right" data-aos-delay="200"></p>
                        </h1>
                        <p className="text-white lg:text-l font-gilroylight  mt-8">If you want to build your brand, we can code it for you!</p>
                        <button class=" button_txt text-sm w-40 h-12  text-white border-nuetral rounded px-4" onClick={()=>navigate('/Contactus')} data-aos="fade-right">Let's Talk</button>
                            <div className=" sm:mb-0 mb-12">
                                <div className='pt-10 xl:pt-16'>
                                    <a href='#'><img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648557143/codler/arrw_jfawrk.png'} className='h-20 lg:mt-16'></img></a>
                                    <hr className=" w-72 text-gray-200 lg:mt-5"/>
                                    <div className='-mt-3'>
                                        <a href='#' className='no-underline'><p className='text-zinc-300 hover:text-white text-xs'>Now proudly work with<span>
                                            <div className='text-sm ml-32 pl-1 absolute -mt-[18px] md:font-bold animated-text'>
                                                <p className='line'>Ai Brilliance</p>
                                                <p className='line'>ugrab</p>
                                                <p className='line'>Ondace</p>
                                                <p className='line'>odikko</p>

                                            </div>
                                        </span></p></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='bg-gray-800 opacity-50 ml-96 relative w-56 h-screen hidden lg:block' style={{height:'850px'}}>
                        </div>
                        <div className='mt-8 md:-ml-48 flex hidden md:block justify-center'> 
                        <span className='' >     
                                <p data-aos="fade-up"  className=" hidden lg:block  font-extrabold text-2xl relative z-0 absolute lg:ml-56 lg:top-36 text-zinc-500" >CSS</p>
                                <p data-aos="fade-up"  className=" hidden lg:block  font-bold text-2xl relative z-0 absolute lg:mt-24 lg:pl-16  bold text-zinc-500" >Javascript</p>
                                <p data-aos="fade-up"  className=" hidden lg:block  font-bold  text-2xl relative z-0 absolute lg:mt-0 lg:ml-[80%]  bold text-gray-500" >UI/UX</p>
                                <p data-aos="fade-up"  className=" hidden lg:block  font-bold absolute text-2xl  z-0 lg:-ml-10  mt-50 bold text-zinc-500" >Web design</p>
                                <p data-aos="fade-up"  className=" hidden lg:block  font-bold  text-2xl  z-0   lg:mt-36 lg:ml-[82%]  bold text-zinc-500">HTML</p>
                                <p data-aos="fade-up"  className=" hidden lg:block  font-bold  z-0  relative text-2xl lg:ml-36 md:mt-24  text-zinc-500 ">Python</p>
                                <p data-aos="fade-up"  className=" hidden lg:block  font-bold text-2xl absolute z-0 relative lg:ml-0 md:-mt-24 text-2xl opacity-30 text-zinc-500">React js</p>   
                            <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1649675344/codler/Group_2531_keeobr.png'} alt="image1" className="image1 hidden lg:block absolute w-[42%] h-[350px] md:-mt-[350px] " data-aos="zoom-in"/>
                            </span> 
                           
                        </div>
                       
                </div>
        </section>
        
 

        <section className='w-10/12 mx-auto xs:mt-5 md:px-24 px-10 black-rgba  noise md:pt-24 lg:pt-24 lg:pb-24 '>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                    <div data-aos="fade-up" className="">
                        <p className='text-8xl lg:text-9xl  text-zinc-900 font-extrabold z-0 -ml-6'>01</p>
                        <p className='text-white text-2xl md:text-4xl font-semibold lg:font-bold -mt-20 lg:-mt-24 tracking-wide' data-aos="fade-right" data-aos-delay="200">A little about us</p>
                        <p className='text-zinc-300  xl:w-[500px] text-sm font-gilroythin '>Our team of innovative minds are handpicked to provide app, web and digital media solutions for your business to help you achieve your current and future goals. We transform visionaries into digital products with care and ease, allowing you to focus on what matters to your business and customers.</p>
                        <p className='textlbg testdecoration-none text-sm md:text-md tracking-wider leading-loose font-bold no-underline mt-2'>AN ASTONISHING WORKSPACE</p>
                    </div>
                    <div className="pt-8 md:py-10 lg:py-0 lg:pt-0 relative md:grid-cols-2" data-aos="zoom-in">
                    <img src='https://res.cloudinary.com/dbwyrrrqo/image/upload/v1649615719/codler/Ellipse_36_dv7pgn.png' alt='img' className='w-9 h-9 hidden lg:block z-300 ml-96 '/>
                    <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1653062145/codler/perfect-team-2021-09-02-03-15-29-utc_1_1_bshuyh.webp'} alt="img" className='md:-mt-24 lg:h-[400px] lg:w-[800px] ' data-aos="zoom-in"/>
                   </div>
                   
            </div>
        </section>
        <section>
        <div className="w-full z-0 -ml-6">
             <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1653300873/codler/img1_2x_1_1_lcgq5e.webp'} alt="mobile" style={{ width: '430px', height: '400px' }} className=" z-100 " />
           </div>
        </section>


        <section className='w-11/12 lg:w-10/12 mx-auto lg:h-[550px] z-200 opacity-90 md:mt-10 relative bg-zinc-800'>
            <div className='md:grid grid-cols-1 md:grid-cols-2 z-200 relative -mt-96'>
               <div className='xl:pl-24 p-10 pt-24'>
                <h4 className="text-sm md:text-lg leading-2  tracking-widest z-20  text-white font-gilroymedium" >OUR RECENT WORK</h4><hr className='w-10 md:w-16 h-24 text-[#CC8899] font-bold text-3xl -mt-[25px] ml-48 md:ml-56' style={{height:'3px'}}/>
                              <h1 className="lg:text-4xl text-2xl font-bold text-white tracking-wider" data-aos="fade-right">Car Rental App – CAR CHILLI</h1>
                              <p className="md:text-lg text-sm font-light  font-gilroylight mt-3 text-zinc-300 xl:pr-20 xl:w-[530px]">A Singapore based car rental mobile app where a user can rent a car from its owner quickly and easily. We were able to change the UI design from a basic structure to a better UI that interacts with the customers—researched how the app should be, and changed the logo to a better one. </p>
                              <div className='pt-4'>
                              <a href='#' className='flex no-underline '><p className='textlbg testdecoration-none text-lg no-underline -mt-1'>View All Projects</p><FontAwesomeIcon icon={faArrowRight} className="text-xl ml-4  mt-0.5 text-white cursor-pointer" /></a>
                             </div> 
                    </div>
                    <div className="w-full" data-aos="zoom-in">
                              <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1653048104/codler/Image_gl7vsx.png'} alt="mobile"  className="p-2 md:p-5 lg:p-16 md:p-0 opacity-70  md:w-[600px] md:h-[547px]"/>
                              <img src='https://res.cloudinary.com/dbwyrrrqo/image/upload/v1653300873/codler/img4_2x_1_5_yatmot.webp' alt='img' className='w-28 h-28 ml-[96%]  hidden xl:block'/>
                   </div>
            </div>
        </section>
        
        <section >
          <div className="w-full" data-aos="zoom-in">
                      <p className="w-full text-2xl md:text-8xl font-extrabold opacity-30 md:opacity-10 mt-5 text-white tracking-wider">
                          <marquee className='md:h-48'>We code your vision into reality! We code your vision into reality! We code your vision into reality!
                          </marquee>
                      </p>
          </div>
         </section>    

         <section className='bg-transparent '>
            <div className='grid grid-cols-3 bg-zinc-900 lg:grid-cols-4 md:-mt-8 '>
                <div className='md:-mt-10 -mt-20 lg:mb-10'>
                <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1653062626/codler/Ellipse_24_1_izmsua.webp'} alt="img" className='md:w-96 h-80 ml-2 md:ml-8'/>
                <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1653057084/codler/Group_2021_2_pbaifm.webp'} className='w-36 md:w-56 lg:w-80 z-100 md:h-64 -mt-56'/>
                </div>
            <div class="col-span-2 md:pt-14 bg-zinc-900 lg:ml-10 lg:mb-16 ">
            <p className="w-full font-bold mt-12 md:mt-6 md:mt-0 text-lg md:text-2xl md:-ml-20 lg:ml-0 -ml-3  text-center text-white lg:text-4xl font-gilroybold tracking-wider">Tell us about your ideas</p>
            <p className="w-full -mt-5 md:mt-5 lg:px-8 text-center font-gilroythin text-white lg:text-md md:w-96 lg:w-full overflow-hidden text-xs text-zinc-400 hidden md:block ">Share your visions and insights with us, and let's grow your business together. Let us create opportunities for you rather than wait for them to happen.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
            </div>
            </div>
        </section>

        <section className='w-full h-full  overflow-hidden'>
            <div className='grid grid-cols-1 lg:grid-cols-2 relative overflow-hidden'>
                <div className='z-20 lg:w-3/5 h-full ' style={{backgroundColor:'#000',height:'500px'}} data-aos="fade-up">
                <div className='grid grid-cols-2 w-96'>
                <hr className='text-white w-6 md:w-10 mt-24 ml-10 md:ml-24' style={{height:'3px'}}/> 
                <h1 className="text-white -ml-28 md:-ml-12 mt-[46%] text-sm tracking-widest font-gilroymedium" >BRANDS</h1>
                </div>
                <h2 className="text-white ml-10 md:ml-32 lg:ml-24 mt-3 text-2xl md:text-3xl tracking-wider" data-aos="fade-right">Our Happy Clients</h2>
                    <p className="text-zinc-300 px-10 md:px-0 md:p-0 text-xs md:text-sm lg:text-md leading-5 font-gilroythin tracking-wide lg:w-[700px] md:mr-12 lg:mr-0  md:ml-32 lg:ml-24 md:mt-3 md:pr-36 "
                     >Without our clients, we wouldn’t exist. We have a dedicated customer base happy with our strategic insights, innovative solutions, and product development. We are working with some of the leading companies across the globe and hope to add yours to our list. </p>
                    <div className='grid grid-cols-3 lg:grid-cols-3 w-[70%] -mt-5  md:-mt-12 gap-4 md:w-8/12 mx-auto  pb-10'>
                       <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1649703089/codler/Group_260_uxfom5.png'} className='md:w-12 h-10  w-12 h-10 mt-16 '></img>
                       <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1649703940/codler/Group_1682_godhzj.png'} className='md:w-10 mt-16 xs:ml-0 md:-ml-16  w-10 h-10 md:h-10'></img>
                       <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1651824106/codler/memories_4x_1_htycnr.png'} className='w-12 h-10 mt-16 xs:ml-0 md:-ml-32 md:w-12 md:h-10 '></img>
                    </div>
                    <div className='grid grid-cols-3 lg:grid-cols-3 w-[70%]  -mt-10 gap-4 md:w-8/12 mx-auto  pb-10'>
                       <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1649704176/codler/CEANOR_1_1_1_1_mebevp.png'} className=' w-24 h-8 mt-5 md:w-24 md:h-8  '></img>
                       <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1650141845/codler/Group_60570_otkpul.png'} className='  mt-12 w-28  md:-ml-7 h-6'></img>
                       <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1649704073/codler/U_GRAB_FINAL_PDF-01_1_1_lgfsu6.png'} className=' w-36 h-10  mt-10  md:w-36 md:h-12 md:-ml-16'></img>
                    </div>
                    <div className='grid grid-cols-4 lg:grid-cols-4 -mt-10 gap-2 w-8/12 mx-auto  pb-10'>
                       <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1650144752/codler/Path_15883_1_ckf6qb.png'} className=' w-10 h-8 mt-5  md:w-16 md:h-8'></img>
                       <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1650310414/codler/Group_2028_jlc1se.png'} className='w-28 md:w-24 h-9 md:mt-12 mt-12 ml-5 md:ml-0 lg:mt-12 '></img>
                    </div>
                </div><div>
                      <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1653060370/codler/business-agreement_1_bttbr5.webp'} className='lg:h-[520px] h-80 mt-20 lg:mt-0 md:ml-36 lg:ml-0' data-aos="fade-up"></img>
                </div>  
            </div>
        </section>

        <section className="lg:h-screen h-full  md:h-full">
              <div className="p-10 bg-black">
                  <div className="grid   sm:grid-cols-1 lg:grid-cols-2  gap-60">
                  <div className='text-white md:ml-24' data-aos="fade-up">
                <p className=" md:text-3xl text-white -ml-5 md:ml-0  mt-16 font-gilroybold text-3xl lg:mt-40 text-center lg:flex lg:justify-start" data-aos="fade-right" data-aos-delay="200">What we offer is</p>
                      <p className="sm:px-10  md:ml-0 md:px-0 lg:pr-20 text-xs md:text-lg  font-gilroythin text-zinc-300  lg:w-[500px]">Invest in the top-notch web and digital marketing company with your valuable and genuine ideas.Our team only uses cutting-edge tools to bring out innovative solutions to help with your product strategy, design, and development. We develop web apps that are smooth, attractive, secure, and user-friendly for your business.
                      </p>
                  </div>
                      <div className="w-1/2 ml-0 md:ml-48 lg:ml-0 lg:mt-60 relative md:mt-96 hidden xl:block" >
                          <div className="w-80  -mt-96 sectionbg3 lg:ml-8 xl:ml-48" data-aos="zoom-in-right" style={{height:'690px',width:'359px',marginTop:'-280px',zIndex:'100'}}></div>
                            <div className=" bg-zinc-900 colorbox relative -ml-36 w-96  rounded-xl drop-shadow-2xl  " style={{height:'500px',width:'600px',marginTop:'-600px',zIndex:'200'}}>
                                <div className="grid grid-cols-2  grid-flow-col h-80 gap-2 " style={{width:'600px'}}>
                                    <div data-aos="zoom-in-right ">
                                      <p className="lg:text-2xl blur-sm  ml-20 mt-10 font-semibold text-white cursor-pointer" onMouseEnter={()=>showCards(2)} onMouseLeave={mouseLeave}> 01 text editing</p>
                                      <p className="lg:text-2xl blur-sm lg:mt-5  ml-10 font-semibold text-white cursor-pointer" onMouseEnter={()=>showCards(1)} onMouseLeave={mouseLeave}>02 text editing</p>
                                      <p className="lg:text-2xl ml-5  font-bold text-white " id='heading' data-aos="zoom-in-right" data-aos-delay='1000' data-toggle="animation" data-animation-reset='true' data-animation='slide-right' data-animation-start='onLoad'>01 Web development</p>
                                      <span><hr className="w-5 ml-8 text-5xl h-56 mt-1 text-[#d500f9]" style={{height:'5px'}}/></span> <p className="text-md  ml-20 -mt-7 font-gilroythin text-white" id='content1' data-aos="zoom-in">E-commerce website</p>
                                      <span><hr className="w-5 ml-8 leading-10 text-purple-900" style={{height:'5px'}} /></span> <p className="text-md  ml-20 -mt-7 font-gilroythin text-white" id='content2' data-aos="zoom-in" data-aos-delay='1000'>Static website</p>
                                      <span><hr className="w-5 ml-8  text-purple-500" style={{height:'5px'}}/></span> <p className="text-md  ml-20 -mt-7 font-gilroythin text-white" id='content3' data-aos="zoom-in" data-aos-delay='1000'>WordPress website</p>
                                      <span><hr className="w-5 ml-8  text-purple-500" style={{height:'5px'}} /></span> <p className="text-md  ml-20 -mt-7 font-gilroythin text-white" id='content4' data-aos="zoom-in" data-aos-delay='1000'>Responsive websites</p>
                                      <p className="text-2xl blur-sm mt-2  ml-10 font-semibold text-white cursor-pointer" onMouseEnter={()=>showCards(3)} onMouseLeave={mouseLeave}>04 text editing</p>
                                      <p className="text-2xl blur-sm  ml-20 mt-2 font-semibold text-white cursor-pointer" onMouseEnter={()=>showCards(4)} onMouseLeave={mouseLeave}>05 text editing</p>
                              </div>
                            <div>
                                <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1653372979/codler/mobile-application-software-web-development-with-3d-shapes-bar-chart-infographic-3d-rendering_1_ivgp6q.webp'} className='w-56 h-48 mt-36' />
                            </div>
                        </div>
                     </div>
                   </div>
                      <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1653372979/codler/img1_2x_1_2_1_ujrd4e.webp'} className='w-96 h-64 ml-12 overflow-hidden colorbubble -mt-96 hidden xl:block'/>
                 </div>
              </div>
            </section>

        <section>
                <div className='md:-mt-28'>
                <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1653372979/codler/successful-professionals-2021-09-01-10-51-18-utc_copy_3_rawoez.webp'}   alt="" className="z-20 w-40 mt-10 hidden lg:block md:mt-0 h-32 lg:w-96 lg:h-96" data-aos="fade-right"/>
                </div>
        </section>

       <section className='w-10/12 xs:mx-3 sm:mx-5 md:mx-auto mt-28 lg:-mt-5 lg:pb-28 pl-10 md:pl-12'>
            <div className='grid grid-cols-1 lg:grid-cols-3'>
                <div className='' data-aos="fade-up">
                <h1 className="text-white text-8xl  font-extrabold opacity-20 absolute">04</h1>
                <div className='grid grid-cols-2'>
                <hr className='textlgcolor mt-12 sm:-ml-12 w-6' style={{height:'3px'}}/>
                <p className="text-white text-base -ml-36 md:-ml-64 lg:-ml-36 font-gilroythin tracking-wider mt-10 "> WHY YOU CHOOSE US</p>
                </div>
                    <p className="text-white text-2xl md:text-3xl font-bold " data-aos="fade-right" data-aos-delay="200">What makes<br /> Codler stand out ?</p>
                    <p className="text-white md:text-lg font-gilroythin tracking-wide mt-3 lg:pr-16">Our impeccable advanced technological solutions provide the most acceptable marketing approach and the most effective development plans for your brand.</p>
                </div>
                <div className='col-span-2 lg:ml-5 xl:ml-0'>
                    <div className='grid grid-cols-1 grid-rows-1 md:grid-cols-2 lg:grid-rows-2 '>
                        <div className='xl:p-10 pt-10 lg:pt-0 xl:w-[96]' data-aos="fade-up">
                        <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648556430/codler/startergy_kvcx48.png'} className='w-8'></img>
                        <h2 className="text-white mt-2 text-lg md:text-2xl font-semibold">Stratergy</h2>
                        <p className="text-white text-xs md:text-lg font-gilroythin tracking-wide md:pr-10 lg:pr-5  mt-3">The human-focused approach to building the best strategy. It’s an extensive plan that outlines the use of technology to meet business goals.</p>
                        </div>
                        <div className='xl:p-10 pt-10 lg:pt-0 xl:w-[400px]' data-aos="fade-up">
                        <img src={require('../images/design.png')} className='w-8'></img>
                        <h2 className="text-white mt-2 text-lg md:text-2xl font-semibold">Design</h2>
                        <p className="text-white text-xs lg:text-lg  lg:pr-20 font-gilroythin tracking-wide  mt-3"> With our meticulous research, we create innovative designs for that delight and engage users.</p>
                        </div>
                        <div className='xl:p-10 pt-10 lg:pt-0 xl:w-[400px]' data-aos="fade-up">
                        <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648556429/codler/marketing_wdpffh.png'} className='w-8'></img>
                        <h2 className="text-white mt-2 text-lg md:text-2xl font-semibold">Marketing</h2>
                        <p className="text-white text-xs lg:text-lg md:pr-20 font-gilroythin tracking-wide mt-3"> With our meticulous research, we create innovative designs for that delight and engage users.</p>
                        </div>
                        <div className='xl:p-10 pt-10 lg:pt-0 xl:w-[400px]' data-aos="fade-up">
                        <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648556743/codler/development_awauy4.png'} className='w-8'></img>
                        <h2 className="text-white mt-2 text-lg md:text-2xl font-semibold">Development</h2>
                        <p className="text-white text-xs lg:pr-20  lg:text-lg font-gilroythin tracking-wide mt-3 mb-20 lg:mb-0">Whether we have designed a new site or we’re looking to make updates to an existing web or print work.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
          
    
        <section className=' lg:h-screen  z-800 px-20 md:px-12 lg:px-0 relative noise bg-black-rgba -mt-12 md:mt-20 lg:-mt-28 p-12 md:mx-0 md:p-20'>
            <div className='grid grid-cols-1  md:grid-cols-2 lg:-ml-12 xl:ml-0 overflow-hidden '>
                <div data-aos="fade-down w-64 h-96">
                <FontAwesomeIcon icon={faQuoteLeft} className="text-2xl lg:text-7xl text-gray-800 z-0" />
                    <div className='z-10 lg:-mt-24'>
                      <hr className="w-5 h-12 textlgcolor ml-24 mt-12" style={{height:'3px'}}/> <span> <p className="text-l  lg:ml-32  tracking-widest -mt-7 font-normal text-white" data-aos="fade-right" data-aos-delay="200">OUR STRENGTH</p>
                        </span>
                        <p className="text-xl lg:text-3xl  lg:ml-24 mt-3 text-white font-bold tracking-wide" data-aos="fade-right" data-aos-delay="200">Get real world advice <br />from people<br />who have been there</p>
                        <p className="text-xs lg:text-lg w-64 lg:ml-24 lg:pr-5 font-gilroythin tracking-wide text-white lg:w-[400px] ">We work thoroughly with our clients to design, develop, and define transformative user experiences across all platforms and brand touchpoints.</p>
                    </div>
                </div>

                <div className="xl:-ml-8  lg:ml-7">
                    <div className='grid grid-cols-1 grid-rows-1 lg:grid-cols-2 lg:grid-rows-2 gap-3 '>
                    <div className="flex  flex-col overflow-hidden" data-aos="fade-left">
                            <div className="md:w-[280px]  w-56 text-xs xs:h-64 md:text-sm p-3 lg:ml   bg-violet-900 md:h-80 rounded hover:scale-105 box" >
                              <div className="grid grid-cols-2">
                                  <div>
                                  <p className="md:text-xl text-sm mt-3 md:mt-0  text-white font-semibold">5.0</p>
                                  </div>
                                  <div className='mt-[15px] md:mt-[19px] -ml-16 md:-ml-20'>
                                  <FontAwesomeIcon icon={faStar} className="text-l  text-white " />
                                  <FontAwesomeIcon icon={faStar} className="text-l text-white " />
                                  <FontAwesomeIcon icon={faStar} className="text-l text-white " />
                                  <FontAwesomeIcon icon={faStar} className="text-l text-white " />
                                  <FontAwesomeIcon icon={faStar} className="text-l text-white " />
                                  </div>
                                </div>
                              <p className="md:text-sm text-xs ml-6 md:ml-0 md:mt-3 font-gilroythin text-white">It was a great experience working with Codler. They understood our requirements with minimal explanation and delivered exactly what we wanted. Looking forward to work with them again</p>
                              <div className='flex'>
                                <img src={require('../images/services/user1.png')} className='md:w-8 md:h-8 w-4 h-4  md:ml-0 md:mt-3 '></img>
                                     <div className='text-white text-[10px] md:text-sm leading-3 md:mt-3 ml-3'>
                                     <p>Naseef<br/>
                                        Director,Caenor</p>
                                    </div>
                                </div>
                          </div>
                            <div className=" md:w-[265px] w-56 p-3 mt-3  rounded hover:scale-105 md:h-56- sectionbg">
                            <div className="grid grid-cols-2">
                                  <div>
                                  <p className="md:text-xl text-sm mt-3 md:mt-0  text-white font-semibold">5.0</p>
                                  </div>
                                  <div className='mt-[15px] md:mt-[19px] -ml-16 md:-ml-20'>
                                  <FontAwesomeIcon icon={faStar} className="text-l text-yellow-500  " />
                                  <FontAwesomeIcon icon={faStar} className="text-l text-yellow-500  " />
                                  <FontAwesomeIcon icon={faStar} className="text-l text-yellow-500  " />
                                  <FontAwesomeIcon icon={faStar} className="text-l text-yellow-500  " />
                                  <FontAwesomeIcon icon={faStar} className="text-l text-yellow-500  " />
                                  </div>
                                </div>
                              <p className="md:text-sm text-xs ml-6 md:ml-0 mt-1 md:mt-3 font-gilroythin text-white">It was a great experience working with Codler. They understood our requirements with minimal </p>
                              <div className='flex'>
                                <img src={require('../images/services/user1.png')} className='md:w-8 md:h-8 w-4 h-4 md:ml-0 md:mt-3 '></img>
                                     <div className='text-white text-[10px] md:text-sm leading-3 md:mt-3 ml-3'>
                                     <p>Arjun nabiyar<br/>
                                        Director,lolipop desings</p>
                                    </div>
                                </div>
                          </div>
                      </div>
                      <div className="flex flex-col md:h-96 lg:-ml-24 hidden lg:block" data-aos="fade-left">
                            <div className="w-2/3 md:w-[265px] ml-5 md:ml-12 p-3 h-[298px] rounded sectionbg hover:scale-105">
                            <div className="grid grid-cols-2">
                                  <div>
                                  <p className="md:text-xl text-sm mt-3 md:mt-0  text-white font-semibold">5.0</p>
                                  </div>
                                  <div className='mt-[19px] -ml-20'>
                                  <FontAwesomeIcon icon={faStar} className="text-l text-yellow-500" />
                                  <FontAwesomeIcon icon={faStar} className="text-l text-yellow-500 " />
                                  <FontAwesomeIcon icon={faStar} className="text-l text-yellow-500 " />
                                  <FontAwesomeIcon icon={faStar} className="text-l text-yellow-500 " />
                                  <FontAwesomeIcon icon={faStar} className="text-l text-yellow-500 " />
                                  </div>
                                </div>
                              <p className="md:text-sm text-xs ml-6 md:ml-0 mt-3 font-gilroythin text-white">It was a great experience working with Codler. They understood our requirements with minimal explanation and delivered exactly what we wanted. Looking forward to work with them again</p>
                              <div className='flex'>
                                <img src={require('../images/services/user1.png')} className='md:w-8 md:h-8 w-4 h-4 ml-2 md:ml-0 mt-3 '></img>
                                     <div className='text-white text-xs md:text-sm leading-3 md:mt-3 ml-3'>
                                     <p>Arjun nabiyar<br/>
                                        Director,lolipop desings</p>
                                    </div>
                                </div>
                          </div>
                            <div className="w-2/3 md:w-[265px]  p-3 mt-3 ml-5 h-64 md:ml-12 rounded sectionbg hover:scale-105">
                            <div className="grid grid-cols-2">
                                  <div>
                                  <p className="md:text-xl text-sm mt-3 md:mt-0  text-white font-semibold">5.0</p>
                                  </div>
                                  <div className='mt-[19px] -ml-20'>
                                  <FontAwesomeIcon icon={faStar} className="text-l text-yellow-500 " />
                                  <FontAwesomeIcon icon={faStar} className="text-l text-yellow-500  " />
                                  <FontAwesomeIcon icon={faStar} className="text-l text-yellow-500  " />
                                  <FontAwesomeIcon icon={faStar} className="text-l text-yellow-500  " />
                                  <FontAwesomeIcon icon={faStar} className="text-l text-yellow-500  " />
                                  </div>
                                </div>
                              <p className="md:text-sm text-xs ml-6 md:ml-0 mt-3 font-gilroythin text-white">It was a great experience working with Codler. They understood our requirements our requirements with minimal</p>
                              <div className='flex'>
                                <img src={require('../images/services/user1.png')} className='md:w-8 md:h-8 w-4 h-4 ml-2 md:ml-0 mt-3 '></img>
                                     <div className='text-white text-xs md:text-sm leading-3 md:mt-3 ml-3'>
                                     <p>Arjun nabiyar<br/>
                                        Director,lolipop desings</p>
                                    </div>
                                </div>
                          </div>
                      </div>
                    </div>
                 </div>
            </div>
            <div className="md:w-screen  -ml-36 w-screen h-96 lg:mt-[-99%] xl:mt-[-73%] ">
                        <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648586941/codler/lineshade_z7kfah.png'} alt="bg" className="w-screen blur-sm h-[100%] lg:h-[140%] -mt-96 " />
                  </div>
        </section>
        <section className='bg-[#191919] h-full w-full xs:px-0 sm:px-10 md:px-24 md:py-4  py-10 lg:my-20' >
            <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1653296935/codler/img4_2x_1_4_lavqsr.webp'} className='w-20 h-20 -ml-24 -mt-12'/>
            <div>
            <Imageslider/>
            </div>
        </section>
           
         <section className='w-10/12 lg:w-8/12 mx-auto mt-10 '>
                <div className='grid grid-cols-1 lg:grid-cols-2'>
                        <div data-aos="fade-down">
                        <div className='grid grid-cols-2'>
                        <hr className='textlgcolor w-8 h-24 mt-[55px] md:mt-[60px] md:mt-0 -ml-5 md:ml-5 absolute opacity-60' style={{height:'3px'}}/>
                        <h1 className="text-white text-5xl mt-7 md:mt-5 md:text-7xl -ml-3 lg:ml-8 font-bold opacity-50 absolute" data-aos="fade-right" data-aos-delay="200">06</h1>
                        </div>
                   <p className="text-white text-lg ml-6 lg:ml-14 mt-10 md:mt-12 font-gilroyregular tracking-widest " data-aos="fade-right" data-aos-delay="200"> CREATIVE</p>
                          <p className="text-white text-2xl md:text-3xl ml-10 mt-4 lg:mt-0 font-bold tracking-wide" data-aos="fade-right" data-aos-delay="200">Find us on social<br />media</p>
                          <p className='text-white text-sm ml-10 font-gilroythin tracking-widest -mt-2'>#CODLERR</p>
                        </div>

                        <div data-aos="fade-up">
                            <div className='pt-10'>
                                <p className='text-sm md:text-lg font-gilroythin  -mt-8 md:mt-0 text-white pl-10 lg:pl-0 lg:pr-10 leading-6'>You don't just have to pick up the phone to ring us - we are on Facebook, LinkedIn as well Instagram! See you there!</p>
                                    <div className='pt-2 pl-10 lg:pl-0'>
                                        <a href='https://www.instagram.com/accounts/login/' className='flex no-underline'> <p className='textlbg testdecoration-none text-sm text-lg font-semibold -mt-2'>Take me to Instagram</p>
                                     <FontAwesomeIcon icon={faArrowRight} className="text-base ml-2 text-white cursor-pointer" /></a>
                                    {/* <span>
                                        <FontAwesomeIcon icon={faArrowRight} className="text-base ml-2 text-white cursor-pointer" />
                                    </span> */}
                                    </div>
                            </div>
                        </div>
                </div>
        </section>   

        <section>
            <div className='flex justify-evenly'>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 my-20'>
                        
                                <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1653062983/codler/Rectangle_26_dj1b32.webp'} alt="img" className="w-52 h-52 lg:w-72 lg:h-60  cursor-pointer rounded  " data-aos="flip-left"/>
                                <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1653063028/codler/Rectangle_27_lq8nf2.webp'} alt="img" className="w-52 h-52  lg:w-72 lg:h-60 cursor-pointer rounded " data-aos="flip-left"/>
                                <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1653063066/codler/Rectangle_28_tfxchg.webp'} alt="img" className="w-52 h-52  lg:w-72 lg:h-60 cursor-pointer  rounded " data-aos="flip-left"/>

                                <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1653063124/codler/Rectangle_29_vqci6p.webp'} alt="img" className="w-52 h-52  lg:w-72 lg:h-60 cursor-pointer  rounded " data-aos="flip-left"/>
                                <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1653063136/codler/Rectangle_30_jnaoz4.webp'} alt="img" className="w-52 h-52  lg:w-72 lg:h-60 hidden md:block cursor-pointer  rounded " data-aos="flip-left" />
                                <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1653062851/codler/Rectangle_31_n0iuep.webp'} alt="img" className="w-52 h-52  lg:w-72 lg:h-60 hidden md:block cursor-pointer rounded " data-aos="flip-left"/>

                    </div>
                    </div>
                    <div className='w-full h-96 -mt-96 bg-zinc-900'>

                    </div>
            </section>


            
        <section className='w-10/12 mx-auto md:mb-24 py-20'>

           <div className='lg:ml-40 ml-10'>
                    <div className='lg:flex' data-aos="fade-right">
                    <p className='text-zinc-400 pr-8  text-sm font-gilroythin lg:pt-10'>December 14,2022</p>
                        <p className='text-white lg:text-2xl ' >Case study: Custom clothing<br></br>responsive website</p>
                    </div>
                    <hr className="text-gray-400 mr-40 md:opacity-20 text-2xl" />
                    <div className='lg:flex ' data-aos="fade-right">
                        <p className='text-zinc-400 pr-8 text-sm font-gilroythin lg:pt-10'>December 14,2022</p>
                        <p className='text-white lg:text-2xl '>Case study: Designing a landing page for a<br></br> creative arts convention by The Creative</p>
                    </div>
                    <hr className="text-gray-400 mr-40 md:opacity-20 text-2xl" />
                        <div className='pt-6'>
                            <a href='#' className='flex'><img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648557938/codler/View_all_qech0j.png'} className='w-16 h-4 cursor-pointer'></img><FontAwesomeIcon icon={faArrowRight} className="text-base ml-2 text-white cursor-pointer" /></a>
                        </div>
            </div>
           
        </section>






            </div>
        )
}
export default Home;
