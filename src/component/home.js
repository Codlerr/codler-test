import react,{useEffect} from 'react';
import { faArrowRight, faStar, faQuoteLeft} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Aos from 'aos';
import "aos/dist/aos.css";
import { services } from '../constants/constants';


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
        <section className=' mainbg'>
                <div className='w-10/12 lg:w-11/12  mx-auto md:grid grid-cols-1 md:grid-cols-2 flex flex-col-reverse'>
                        <div className='ml-0 lg:ml-16 pt-14 lg:pt-48' data-aos="fade-up">
                            
                        <h1 className="text-white text-xl lg:text-2xl lg:mt-10 font-bold ">
                        <p className='text-white text-xl lg:text-2xl' data-aos="fade-right">CREATING EXCEPTIONAL</p> <p class='text-white text-xl lg:text-2xl -mt-3 md:mt-0' data-aos="fade-right" data-aos-delay="1000">STRATEGIES THAT BRING LIFE TO YOUR</p> <p class='text-white text-xl lg:text-2xl -mt-3 md:mt-0' data-aos="fade-right" data-aos-delay="2000">BRANDS</p>
                            </h1>
                            <p className="text-white lg:text-l  mt-4" data-aos="fade-right">If you want to build your brand, we will be waiting for you !</p>
                            <button class="bg-gradient-to-tr from-zinc-600 to-zinc-900  text-sm w-40 h-12  text-white border-nuetral-800 rounded px-4" data-aos="fade-right">Let's Talk</button>
                            <div className=" sm:mb-0 mb-20">
                                <div className='pt-10 lg:pt-10'>
                                    <a href='#'><img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648557143/codler/arrw_jfawrk.png'} className='h-20'></img></a>
                                    <hr className=" mt-3 w-72 text-gray-200"/>
                                    <div className=''>
                                        <a href='#' className='no-underline'><p className='text-zinc-300 hover:text-white text-xs'>Now proudly work with<span>
                                            <div className='text-sm ml-32 pl-1 absolute -mt-4 font-bold animated-text'>
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
                        <div className='mt-20 flex justify-center'>
                        <span >     
                                <p data-aos="fade-up"  className=" hidden lg:block  font-semibold absolute  lg:right-52 lg:top-36 opacity-30  text-zinc-700" >Css</p>
                                <p data-aos="fade-up"  className=" hidden lg:block  font-semibold absolute  lg:top-56 lg:pl-16 opacity-30  bold text-zinc-700" >Javascript</p>
                                <p data-aos="fade-up"  className=" hidden lg:block  font-semibold absolute  lg:top-64 lg:ml-96 opacity-30 bold text-zinc-700" >UI/UX</p>
                                <p data-aos="fade-up"  className=" hidden lg:block  font-semibold absolute  lg:top-80 lg:pl-10 opacity-30 mt-50 bold text-zinc-700" >Webdesign</p>
                                <p data-aos="fade-up"  className=" hidden lg:block  font-semibold absolute  lg:top-80 lg:ml-96 opacity-30 bold text-zinc-700">HTML</p>
                                <p data-aos="fade-up"  className=" hidden lg:block  font-semibold absolute  lg:top-96 lg:pt-10 lg:right-48 opacity-30 bold text-zinc-700">Python</p>
                                <p data-aos="fade-up"  className=" hidden lg:block  font-semibold absolute  pt-24 lg:top-96 opacity-30 bold text-zinc-700">Reactjs</p>
                            <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648557239/codler/mainimages_xjzihu.png'} alt="image1" className="image1 hidden lg:block  w-64 sm:w-96 mt-20 lg:mt-10" data-aos="fade-up">
                            </img>
                            </span>   
                        </div>
                </div>
        </section>
        
 

        <section className='w-10/12 mx-auto -mt-16 md:mt-0 md:pt-32 lg:pt-10'>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                    <div data-aos="fade-up">
                        <p className='text-8xl lg:text-9xl  text-zinc-900 font-extrabold z-0 -ml-6'>01</p>
                        <p className='text-white text-4xl font-semibold lg:font-bold -mt-20 lg:-mt-24'>A little about us</p>
                        <p className='text-white text-sm md:text-sm lg:w-3/4'>We are a team of innovative minds handpicked to provide app, web and digital media solutions for your business that will help you achieve your current and future goals. We transform visionaries into digital products with care and ease, helping you focus on what matters to your business and customers. Codler is uniquely positioned to deliver strategic and results-driven services.</p>
                        <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648557288/codler/An_Astonishing_Workplace._ooboll.png'} className='w-60 pt-8'></img>
                    </div>

                    <div className="pt-8 relative" data-aos="fade-up">
                   
                              <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648557380/codler/blackgrp_ldcq2y.png'} alt="img" className='' data-aos="fade-up"/>
                   </div>
                   
            </div>
        </section>


        <section className='w-11/12 lg:w-10/12 mx-auto bg-zinc-900 mt-20'>
                     
                      <div className="w-full blur-sm -ml-40 z-0 absolute pt-52">
                          <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648557491/codler/drop2_nza6it.png'} alt="mobile" style={{ width: '430px', height: '400px' }} className=" opacity-50 mt-10 lg:mt-24 " />

                      </div>
            <div className='md:grid grid-cols-1 md:grid-cols-2 z-10'>

                <div className='lg:pl-24 p-10  lg:pt-24' data-aos="fade-up">
                <h4 className="text-sm  font-bold z-20 opacity-100 text-white">OUR SPECIAL WORK</h4>
                              <h1 className="md:text-2xl text-2xl font-bold text-white">Travel app<br></br> design for a tripexpo</h1>
                              <p className="md:text-sm text-sm  mt-6 text-zinc-300 lg:pr-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id a, integer phasellus nibh at fermentum. Nec, ultrices luctus nam nulla a ultrices vestibulum, vulputate. Non arcu sed viverra fringilla scelerisque felis, venenatis. Accumsan, in consequat et ultricies. Urna proin dignissim eu nisl ac sed et velit. Suscipit amet ac duis pretium elementum.</p>

                             <div className='pt-4'>
                                 <a href='#' className='flex'><img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648557938/codler/View_all_projects_e7s5bh.png'} className='w-32 lg:w-38'></img><FontAwesomeIcon icon={faArrowRight} className="text-xl ml-2 text-white cursor-pointer" /></a>
                             </div>
                    </div>
                    <div className="w-full" data-aos="fade-up">
                              <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648557521/codler/screenshot_gw2vyv.png'} alt="mobile"  className="p-16 md:p-0 md:w-full md:h-full"/>
                          </div>
            </div>
        </section>


          <section >
          <div className="w-full" data-aos="zoom-in">
                      <p className="w-full text-xl md:text-5xl font-extrabold opacity-20 mb-10 mt-8 md:mb-20 text-white tracking-wider">
                          <marquee>Future is here! Future is here!  Future is here! Future is here!</marquee>
                      </p>

                  </div>
         </section>    


         <section>
            <div className='grid grid-cols-3 lg:grid-cols-4 lg:-mt-16'>
            <div class="">
                <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648557034/codler/bulbb_gr1sci.png'} className='w-36 md:w-56 pt-0 lg:pt-10' data-aos="fade-up">
                </img>
            </div>
            <div class="col-span-2 md:pt-14 " data-aos="zoom-in">
            <p className="w-full font-bold mt-6 md:mt-2 text-lg md:text-2xl md:ml-0 -ml-3  text-center text-white lg:text-4xl tracking-wider">Tell us about your ideas</p>
            <p className="w-full -mt-5 md:mt-5 text-justify lg:text-center  text-sm overflow-hidden lg:text-sm text-zinc-400 hidden lg:block md:px-14">Share your visions and insights with us and let’s grow your business together</p>
            </div>
            </div>
            </section>

        <section className='w-full h-full lg:mt-5 '>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div className='bg-purple-700' data-aos="fade-up">
                <h1 className="text-white ml-16 md:ml-8   md:ml-16 mt-10 text-sm tracking-widest" data-aos="fade-up">- BRANDS</h1>
                    <h2 className="text-white ml-16 md:ml-8  md:ml-16 mt-3 text-xl md:text-3xl tracking-wider" data-aos="fade-up">Our happy clients</h2>
                    <p className="text-zinc-300 p-12 md:p-0 text-sm ml-8 md:ml-16 mr-5 md:mt-5 lg:pr-36" data-aos="fade-up">Without our clients, we wouldn’t exist. We have a dedicated customer base happy with our strategic insights, innovative solutions, and product development. We are working with some of the leading companies across the globe and hope to add yours to our list. </p>
                
                    <div className='grid grid-cols-2 lg:grid-cols-2 -mt-20 md:mt-0 gap-4 w-8/12 mx-auto pb-10' data-aos="fade-right">
                       <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648556429/codler/jsk_tjljta.png'} className='md:w-48 h-16 mt-12 w-24 '></img>
                       <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648556430/codler/odikko_bzk7bo.png'} className='md:w-56 mt-3 md:mt-0 w-36 h-28 md:h-36'></img>
                       <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648556430/codler/ondace_yjiyg9.jpg'} className='w-24 h-24 md:w-32 md:h-28 md:mt-4 md:ml-10'></img>
                       <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648556430/codler/ugrab_fbpxud.png'} className=' w-36 h-24 md:w-56 md:h-36 -mt-5'></img>

                    </div>
                </div>

            <div>
                    <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648557602/codler/businessagmnt_fciszm.jpg'} data-aos="fade-up"></img>
                </div>  
            </div>
        </section>


        
 

        <section className="lg:h-screen sm:h-4/5 w-full ">
              <div className=" w-full  md:mt-20 p-10 bg-black">
                  <div className="grid   sm:grid-cols-1 lg:grid-cols-2  gap-60">
                  <div className='text-white md:ml-24' data-aos="fade-up">
                <p className="  text-xl md:text-3xl text-white font-semibold mt-16 lg:mt-40 text-center lg:flex lg:justify-start">What we offer is</p>
                      <p className="px-5 md:-ml-12  md:text-lg font-semibold ">Invest in the top-notch web and digital marketing company with your valuable and genuine ideas</p>
                      <p className="px-10  md:ml-0 md:px-0 lg:pr-20 text-sm text-zinc-400 font-light ">Invest in the top-notch web and digital marketing company with your valuable and genuine ideas
                      Our team only uses cutting-edge tools to bring out innovative solutions to help with your product strategy, design, and development. We develop web apps that are smooth, attractive, secure, and user-friendly for your business.
</p>
                </div>
                      <div className="w-1/2 sm:ml-10 lg:mt-60 hidden lg:block" >
                          <div className="w-80  -mt-40  z-0 sectionbg3 lg:ml-48" data-aos="zoom-in-right" style={{height:'600px'}}></div>
                            <div className=" bg-gray-900 colorbox -ml-36 w-96 z-10 rounded drop-shadow-2xl  " style={{height:'500px',width:'500px',marginTop:'-550px'}}>
                                <div className="grid grid-cols-2  grid-flow-col h-80 gap-2 " style={{width:'600px'}}>
                                    <div data-aos="zoom-in-right ">
                                      <p className="lg:text-2xl blur-sm  ml-20 mt-10 font-semibold text-white cursor-pointer" onMouseEnter={()=>showCards(2)} onMouseLeave={mouseLeave}> 01 text editing</p>
                                      <p className="lg:text-2xl blur-sm lg:mt-5  ml-10 font-semibold text-white cursor-pointer" onMouseEnter={()=>showCards(1)} onMouseLeave={mouseLeave}>02 text editing</p>
                                      <p className="lg:text-2xl ml-5  font-bold text-white " id='heading' data-aos="zoom-in-right" data-aos-delay='1000' data-toggle="animation" data-animation-reset='true' data-animation='slide-right' data-animation-start='onLoad'>01 Web development</p>
                                      <span><hr className="w-5 ml-8 text-5xl h-56 text-purple-500" /></span> <p className="text-sm  ml-20 -mt-6 font-semibold text-white" id='content1' data-aos="fade-right" data-aos-delay='1000'> E-commerce</p>
                                      <span><hr className="w-5 ml-8  text-purple-500" /></span> <p className="text-sm  ml-20 -mt-6 font-semibold text-white" id='content2' data-aos="fade-right" data-aos-delay='1000'> Content Management System</p>
                                      <span><hr className="w-5 ml-8  text-purple-500" /></span> <p className="text-sm  ml-20 -mt-6 font-semibold text-white" id='content3' data-aos="fade-right" data-aos-delay='1000'> API & Back-end development</p>
                                      <span><hr className="w-5 ml-8  text-purple-500" /></span> <p className="text-sm  ml-20 -mt-6 font-semibold text-white" id='content4' data-aos="fade-right" data-aos-delay='1000'> Customized web develepment</p>

                                      <p className="text-2xl blur-sm mt-2  ml-10 font-semibold text-white cursor-pointer" onMouseEnter={()=>showCards(3)} onMouseLeave={mouseLeave}>04 text editing</p>
                                      <p className="text-2xl blur-sm  ml-20 mt-2 font-semibold text-white cursor-pointer" onMouseEnter={()=>showCards(4)} onMouseLeave={mouseLeave}>05 text editing</p>
                                  </div>
                                  <div>
                                  <img src={require('../images/mobiless.png')} className='w-48 -ml-5 h-48 mt-36' />

                                  </div>
                                  
                                 
                      </div>
                      </div>
                      </div>
                  </div>
              </div>
            
          </section>


            <section>
                <div className=''>
                <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648557769/codler/tableper_fjzbav.png'}   alt="" className="z-20 w-40 mt-10 md:mt-0 h-32 lg:w-72 lg:h-60" data-aos="fade-right"/>
                </div>
            </section>


        <section className='w-10/12 mx-auto mt-10 lg:pb-28 pl-10 md:pl-24'>
            <div className='grid grid-cols-1 lg:grid-cols-3'>
                <div className='' data-aos="fade-up">
                <h1 className="text-white text-8xl  font-extrabold opacity-20 absolute">04</h1>
                          <p className="text-white text-base font-medium mt-10 pl-2">--- WHY U CHOOSE US</p>
                          <p className="text-white text-3xl  mt-5 font-bold ">What makes<br /> Codler stand out ?</p>
                          <p className="text-zinc-300 text-base mt-3 lg:pr-40">Our impeccable advanced technological solutions. We give you the finest design approach and the most powerful development plans for your brand. </p>
                </div>
                <div className='col-span-2'>
                    <div className='grid grid-cols-1 grid-rows-1 lg:grid-cols-2 lg:grid-rows-2 '>
                        <div className='lg:p-10 pt-10 lg:pt-0' data-aos="fade-up">
                        <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648556430/codler/startergy_kvcx48.png'} className='w-10'></img>
                        <h2 className="text-white mt-2 text-lg md:text-xl font-semibold">Stratergy</h2>
                        <p className="text-white text-xs lg:pr-20  mt-3">Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing.Lorem Ipsum is simply dummy text of the printing .</p>
                        </div>
                        <div className='lg:p-10 pt-10 lg:pt-0' data-aos="fade-up">
                        <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648556431/codler/Vectors1_h013p4.png'} className='w-10'></img>
                        <h2 className="text-white mt-2 text-lg md:text-xl font-semibold">Design</h2>
                        <p className="text-white text-xs lg:pr-20  mt-3">Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing.Lorem Ipsum is simply dummy text of the printing .</p>
                        </div>
                        <div className='lg:p-10 pt-10 lg:pt-0' data-aos="fade-up">
                        <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648556429/codler/marketing_wdpffh.png'} className='w-10'></img>
                        <h2 className="text-white mt-2 text-lg md:text-xl font-semibold">Marketing</h2>
                        <p className="text-white text-xs lg:pr-20  mt-3">Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing.Lorem Ipsum is simply dummy text of the printing .</p>
                        </div>
                        <div className='lg:p-10 pt-10 lg:pt-0' data-aos="fade-up">
                        <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648556743/codler/development_awauy4.png'} className='w-10'></img>
                        <h2 className="text-white mt-2 text-lg md:text-xl font-semibold">Development</h2>
                        <p className="text-white text-xs lg:pr-20  mt-3 mb-20 lg:mb-0">Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing.Lorem Ipsum is simply dummy text of the printing .</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
          
    
        <section className=' md:h-screen md:mt-20 lg:-mt-20 p-12 md:mx-0 md:p-20 overflow-hidden'>
            <div className='grid grid-cols-1 lg:grid-cols-2 '>
                <div data-aos="fade-down h-96">
                <FontAwesomeIcon icon={faQuoteLeft} className="text-2xl lg:text-7xl text-gray-800 z-0" />
                    <div className='z-10 lg:-mt-24'>
                        
                       <hr className="w-5 h-12 text-purple-500 ml-24 mt-12"/> <span> <p className="text-l  lg:ml-32  -mt-7 font-normal text-white">OUR STRENGTH</p>
                        </span>
                        <p className="text-xl lg:text-2xl  lg:ml-24 mt-3 text-white font-bold tracking-wider">Get real world advice <br />from people<br />who have been there</p>
                        <p className="text-xs w-64 lg:ml-24 lg:pr-5 text-zinc-300 ">We work closely with our clients to define, design, and develop transformative user experiences across all platforms and brand touchpoints. We break boundaries to create extraordinary digital products for our clients and have satisfied clients’ accounts for our success. Positive and constructive feedback from our clients is pure bliss for us and keeps us going; we'd like to hear it more often. </p>
                    </div>
                </div>

                <div className="md:-ml-8">
                    <div className='grid grid-cols-1 grid-rows-1 lg:grid-cols-2 lg:grid-rows-2 gap-3 '>
                    <div className="flex  flex-col" data-aos="fade-left">
                            <div className="md:w-80 w-56 text-xs md:text-sm md:p-3 ml-5 md:h-72 rounded hover:scale-105 box bg-purple-800" >
                              <div className="inline-block ml-5 md:ml-0">
                                  <p className="md:text-xl text-sm mt-3 md:mt-0  text-white font-semibold">5.0</p>
                                  <FontAwesomeIcon icon={faStar} className="text-l text-yellow-500 " />
                                  <FontAwesomeIcon icon={faStar} className="text-l text-yellow-500 " />
                                  <FontAwesomeIcon icon={faStar} className="text-l text-yellow-500 " />
                                  <FontAwesomeIcon icon={faStar} className="text-l text-yellow-500 " />

                                  <FontAwesomeIcon icon={faStar} className="text-l text-yellow-500 " />

                              </div>
                              <p className="md:text-sm text-xs ml-5 md:ml-0 mt-3 text-white">Lorem Ipsum is simply dummy text of the<br /> printing and typesetting industry. <br />Lorem Ipsum has been the industry's <br />standard dummy text ever since the 1500s,</p>
                              <div className='flex'>
                                <img src={require('../images/services/user1.png')} className='md:w-8 md:h-8 w-4 h-4 ml-2 md:ml-0 mt-3 '></img>
                                     <div className='text-white text-xs md:text-sm leading-3 mt-3 ml-3'>
                                     <p>Arjun nabiyar<br/><br/>
                                        Director,lolipop desings</p>
                                    </div>
                                </div>
                          </div>
                            <div className="w-2/3 md:w-80 ml-5 mt-3 lg:p-3 rounded hover:scale-105 md:h-64 sectionbg">
                              <div className="inline-block ml-5 md:ml-0">
                                  <p className="md:text-xl text-sm mt-3 md:mt-0  text-white font-semibold">5.0</p>
                                  <FontAwesomeIcon icon={faStar} className="text-l text-yellow-500 " />
                                  <FontAwesomeIcon icon={faStar} className="text-l text-yellow-500 " />
                                  <FontAwesomeIcon icon={faStar} className="text-l text-yellow-500 " />
                                  <FontAwesomeIcon icon={faStar} className="text-l text-yellow-500 " />

                                  <FontAwesomeIcon icon={faStar} className="text-l text-yellow-500 " />

                              </div>
                              <p className="text-sm mt-2 text-white ml-5 md:ml-0">Lorem Ipsum is simply dummy text of the<br /> printing and typesetting industry. <br />Lorem Ipsum has been the industry's </p>
                               <div className='flex'>
                                <img src={require('../images/services/user1.png')} className='md:w-8 md:h-8 h-4 w-4 mt-3 ml-2 md:ml-0'></img>
                                     <div className='text-white text-sm leading-3 mt-3 ml-3'>
                                     <p>Arjun nabiyar<br/><br/>
                                        Director,lolipop desings</p>
                                    </div>
                                </div>
                          </div>
                      </div>
                      <div className="flex flex-col lg:-ml-2" data-aos="fade-left">
                            <div className="w-2/3 md:w-80 ml-5 md:ml-12 p-3  rounded sectionbg hover:scale-105">
                              <div className="inline-block ml-2 md:ml-0">
                                  <p className="text-xl  text-white font-semibold">5.0</p>
                                  <FontAwesomeIcon icon={faStar} className="text-l text-yellow-500 " />
                                  <FontAwesomeIcon icon={faStar} className="text-l text-yellow-500 " />
                                  <FontAwesomeIcon icon={faStar} className="text-l text-yellow-500 " />
                                  <FontAwesomeIcon icon={faStar} className="text-l text-yellow-500 " />

                                  <FontAwesomeIcon icon={faStar} className="text-l text-yellow-500 " />

                              </div>
                              <p className="text-sm mt-2 text-white ml-2 md:ml-0">Lorem Ipsum is simply dummy text of the<br /> printing and typesetting industry. <br />Lorem Ipsum has been the industry's <br />standard dummy text ever since the 1500s,</p>
                              <div className='flex'>
                                <img src={require('../images/services/user1.png')} className='w-4 h-4 md:w-8 md:h-8 mt-3 ml-2 md:ml-0'></img>
                                     <div className='text-white text-sm leading-3 mt-3 ml-3'>
                                     <p>Arjun nabiyar<br/><br/>
                                        Director,lolipop desings</p>
                                    </div>
                                </div>
                          </div>
                            <div className="w-2/3 md:w-80  p-3 mt-3 ml-5 md:ml-12 rounded sectionbg hover:scale-105">
                              <div className="inline-block">
                                  <p className="text-xl  text-white font-semibold">5.0</p>
                                  <FontAwesomeIcon icon={faStar} className="text-l text-yellow-500 " />
                                  <FontAwesomeIcon icon={faStar} className="text-l text-yellow-500 " />
                                  <FontAwesomeIcon icon={faStar} className="text-l text-yellow-500 " />
                                  <FontAwesomeIcon icon={faStar} className="text-l text-yellow-500 " />

                                  <FontAwesomeIcon icon={faStar} className="text-l text-yellow-500 " />

                              </div>
                              <p className="text-sm mt-2 text-white">Lorem Ipsum is simply dummy text of the<br /> printing and typesetting industry. <br />Lorem Ipsum has been the industry's <br />standard dummy text ever since the 1500s,</p>
                              <div className='flex'>
                                <img src={require('../images/services/user1.png')} className='md:w-8 md:h-8 w-4 h-4 mt-3 '></img>
                                     <div className='text-white text-sm leading-3 mt-3 ml-3'>
                                     <p>Arjun nabiyar<br/><br/>
                                        Director,lolipop desings</p>
                                    </div>
                                </div>
                          </div>
                      </div>
                    </div>
                 </div>
                 <div className="md:w-screen ml-24 -mt-56">
                        <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648557856/codler/backgroundshaded_tc8vrv.png'} alt="bg" className=" h-80 z-0 blur-sm -mt-96 " />
                  </div>
            </div>
        </section>
        
           


         <section className='w-10/12 lg:w-8/12 mx-auto mt-10'>
                <div className='grid grid-cols-1 lg:grid-cols-2'>
                        <div data-aos="fade-down">
                        <h1 className="text-white text-5xl md:text-8xl lg:ml-10 font-extrabold opacity-20 absolute">06</h1>
                          <p className="text-white text-lg ml-6 lg:ml-14 mt-10 font-bold ">--- CREATIVE</p>
                          <p className="text-white text-2xl md:text-4xl ml-10 mt-4 lg:mt-0 font-bold tracking-wider">Find us on social<br />media</p>
                          <p className="text-zinc-500 text-lg ml-10  font-normal">#CODLERR</p>
                        </div>

                        <div data-aos="fade-up">
                            <div className='pt-10'>
                                <p className='text-sm text-white pl-10 md:pl-0 lg:pr-10 leading-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                                    <div className='pt-2 pl-10 md:pl-0'>
                                        <a href='#' className='flex'><img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648557950/codler/Take_me_to_instagram_xs3ee9.png'}></img><FontAwesomeIcon icon={faArrowRight} className="text-base ml-2 text-white cursor-pointer" /></a>
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
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 my-20'>
                        
                                <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648555824/codler/sm1_kq25yh.jpg'} alt="img" className="w-52 h-52 lg:w-72 lg:h-60  cursor-pointer rounded  " data-aos="flip-left"/>
                                <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648556182/codler/sm2_plgzmb.jpg'} alt="img" className="w-52 h-52  lg:w-72 lg:h-60 cursor-pointer rounded " data-aos="flip-left"/>
                                <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648556199/codler/sm3_oy9agb.jpg'} alt="img" className="w-52 h-52  lg:w-72 lg:h-60 cursor-pointer  rounded " data-aos="flip-left"/>

                                <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648556219/codler/sm4_nusowu.jpg'} alt="img" className="w-52 h-52  lg:w-72 lg:h-60 cursor-pointer  rounded " data-aos="flip-left"/>
                                <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648556249/codler/sm5_wyzmj9.jpg'} alt="img" className="w-52 h-52  lg:w-72 lg:h-60 hidden lg:block cursor-pointer  rounded " data-aos="flip-left" />
                                <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648556249/codler/sm6_sijxoz.jpg'} alt="img" className="w-52 h-52  lg:w-72 lg:h-60 hidden lg:block cursor-pointer rounded " data-aos="flip-left"/>

                    </div>
                    </div>
                    <div className='w-full h-96 -mt-96 bg-zinc-900'>

                    </div>
            </section>


            
        <section className='w-10/12 mx-auto py-20'>

           <div className='lg:ml-40 ml-10'>
                    <div className='lg:flex' data-aos="fade-right">
                    <p className='text-zinc-400 pr-8  lg:pt-5'>December 14,2022</p>
                        <p className='text-white lg:text-xl ' >Case study: Custom clothing<br></br>responsive website</p>
                    </div>
                    <hr className="text-gray-400 mr-40 opacity-20 text-2xl" />
                    <div className='lg:flex ' data-aos="fade-right">
                        <p className='text-zinc-400 pr-8 lg:pt-5'>December 14,2022</p>
                        <p className='text-white lg:text-xl '>Case study: Designing a landing page for a<br></br> creative arts convention by The Creative</p>
                    </div>
                    <hr className="text-gray-400 mr-40 opacity-20 text-2xl" />
                        <div className='pt-6'>
                            <a href='#' className='flex'><img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648557938/codler/View_all_qech0j.png'} className='w-16 h-4 cursor-pointer'></img><FontAwesomeIcon icon={faArrowRight} className="text-base ml-2 text-white cursor-pointer" /></a>
                        </div>
            </div>
           
        </section>






            </div>
        )
}
export default Home;
