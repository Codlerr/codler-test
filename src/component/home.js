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
                <div className='w-10/12 lg:w-11/12 grid mx-auto grid-cols-1 md:grid-cols-3 flex flex-col-reverse'>
                        <div className='lg:ml-16 pt-12 lg:pt-48' data-aos="fade-up">
                            
                        <h1 className="text-white text-xl lg:text-2xl mt-24 md:mt-48 lg:mt-10 font-bold ">
                        <p className='text-white text-xl lg:text-3xl md:tracking-wide' data-aos="fade-right"> Creating Stratergies</p><p className='text-white text-xl lg:text-3xl md:tracking-wide -mt-3' data-aos="fade-right" data-aos-delay="200"> That Bring Life To</p><p className='text-white text-xl lg:text-3xl md:tracking-wide -mt-3' data-aos="fade-right" data-aos-delay="200">Your Brands</p>
                            </h1>
                            <p className="text-white lg:text-l  mt-4" data-aos="fade-right">If you want to build your brand, we will be waiting for you!</p>
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
                        <div className='bg-gray-800 opacity-50 ml-96 relative w-56 h-screen hidden lg:block' style={{height:'850px'}}>
                        </div>
                        <div className='mt-12 md:-ml-48 flex hidden lg:block justify-center'> 
                        <span className='' >     
                                <p data-aos="fade-up"  className=" hidden lg:block  font-bold text-xl relative z-0 absolute lg:ml-56 lg:top-36 text-zinc-700" >CSS</p>
                                <p data-aos="fade-up"  className=" hidden lg:block  font-bold text-xl relative z-0 absolute lg:mt-36 lg:pl-16  bold text-zinc-700" >Javascript</p>
                                <p data-aos="fade-up"  className=" hidden lg:block  font-bold  text-xl relative z-0 absolute lg:mt-0 lg:ml-[70%]  bold text-zinc-700" >UI/UX</p>
                                <p data-aos="fade-up"  className=" hidden lg:block  font-bold absolute text-xl  z-0 lg:-ml-10  mt-50 bold text-zinc-700" >Web design</p>
                                <p data-aos="fade-up"  className=" hidden lg:block  font-bold  text-xl  z-0   lg:mt-10 lg:ml-[70%]  bold text-zinc-700">HTML</p>
                                <p data-aos="fade-up"  className=" hidden lg:block  font-bold relative z-0  text-xl lg:ml-36 md:mt-24 bold text-zinc-700">Python</p>
                                <p data-aos="fade-up"  className=" hidden lg:block  font-bold text-xl absolute z-0 relative lg:-ml-12 md:-mt-12 opacity-30 text-zinc-700">React js</p>   
                            <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1649675344/codler/Group_2531_keeobr.png'} alt="image1" className="image1 hidden md:block absolute w-[35%] h-64 md:-mt-72 " data-aos="fade-up"/>
                            </span> 
                           
                        </div>
                       
                </div>
        </section>
        
 

        <section className='w-10/12 mx-auto xs:mt-5 sm:-mt-12 md:mt-0 md:pt-24 lg:pt-10 overflow-hidden'>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                    <div data-aos="fade-up" className="mt-5 md:mt-10">
                        <p className='text-8xl lg:text-9xl  text-zinc-900 font-extrabold z-0 -ml-6'>01</p>
                        <p className='text-white text-2xl md:text-4xl font-semibold lg:font-bold -mt-20 lg:-mt-24' data-aos="fade-right" data-aos-delay="200">A little about us</p>
                        <p className='text-white text-xs md:text-sm lg:w-3/4'>We are a team of innovative minds handpicked to provide app, web and digital media solutions for your business that will help you achieve your current and future goals. We transform visionaries into digital products with care and ease, helping you focus on what matters to your business and customers. Codlerr is uniquely positioned to deliver strategic and results-driven services.</p>
                        <p className='textlbg testdecoration-none text-sm font-bold no-underline mt-7'>AN ASTONISHING WORKSPACE</p>
                    </div>
                    <div className="pt-8 md:pt-0 relative md:grid-cols-2" data-aos="fade-up">
                    <img src='https://res.cloudinary.com/dbwyrrrqo/image/upload/v1649615719/codler/Ellipse_36_dv7pgn.png' alt='img' className='w-9 h-9 hidden lg:block z-300 ml-96 '/>
                             <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1649497031/codler/perfect-team-2021-09-02-03-15-29-utc_1_qdbcf6.png'} alt="img" className='md:-mt-12 ' data-aos="fade-up"/>
                   </div>
                   
            </div>
        </section>


        <section className='w-11/12 lg:w-10/12 mx-auto bg-zinc-900 mt-20'>
                     
                      <div className="w-full blur-sm -ml-40 z-0 absolute pt-52">
                          <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648557491/codler/drop2_nza6it.png'} alt="mobile" style={{ width: '430px', height: '400px' }} className=" opacity-50 mt-10 lg:mt-24 " />

                      </div>
            <div className='md:grid grid-cols-1 md:grid-cols-2 z-10'>

                <div className='lg:pl-24 p-10  lg:pt-24' data-aos="fade-up">
                <h4 className="text-sm  font-semibold z-20 opacity-100 text-white" data-aos="fade-right" data-aos-delay="200">OUR RECENT WORK</h4><hr className='w-12 h-24 text-pink-500 font-bold text-3xl -mt-5 ml-36'/>
                              <h1 className="md:text-3xl text-2xl font-bold text-white" data-aos="fade-right" data-aos-delay="200">Travel app<br></br> design for a tripexpo</h1>
                              <p className="md:text-sm text-sm  mt-3 text-zinc-300 lg:pr-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id a, integer phasellus nibh at fermentum. Nec, ultrices luctus nam nulla a ultrices vestibulum, vulputate. Non arcu sed viverra fringilla scelerisque felis, venenatis. Accumsan, in consequat et ultricies. Urna proin dignissim eu nisl ac sed et velit. Suscipit amet ac duis pretium elementum.</p>

                             <div className='pt-4'>
                                 <a href='#' className='flex no-underline '><p className='textlbg testdecoration-none text-lg no-underline -mt-1'>View All Projects</p><FontAwesomeIcon icon={faArrowRight} className="text-xl ml-4  mt-0.5 text-white cursor-pointer" /></a>
                             </div>
                    </div>
                    <div className="w-full" data-aos="fade-up">
                              <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648557521/codler/screenshot_gw2vyv.png'} alt="mobile"  className="p-16 md:p-0 md:w-full md:h-full"/>
                          </div>
            </div>
        </section>


          <section >
          <div className="w-full" data-aos="zoom-in">
                      <p className="w-full text-xl md:text-6xl font-extrabold opacity-10 mb-10 mt-8 md:mb-20 text-white tracking-wider">
                          <marquee>Future is here! Future is here!  Future is here! Future is here!</marquee>
                      </p>

                  </div>
         </section>    


         <section className='bg-transparent'>
            <div className='grid grid-cols-3 lg:grid-cols-4 lg:-mt-16'>
            <div class="">
                <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648557034/codler/bulbb_gr1sci.png'} className='w-36 md:w-56 pt-0 lg:pt-10' data-aos="fade-up">
                </img>
            </div>
            <div class="col-span-2 md:pt-14 md:-ml-10 lg:ml-0 " data-aos="zoom-in">
            <p className="w-full font-bold mt-6 md:mt-2 text-lg md:text-2xl lg:ml-0 -ml-3  text-center text-white lg:text-4xl tracking-wider" data-aos="fade-right" data-aos-delay="200">Tell us about your ideas</p>
            <p className="w-full -mt-5 md:mt-5 text-justify lg:text-center  text-sm overflow-hidden lg:text-sm text-zinc-400 hidden lg:block md:px-16 lg:ml-10">Share your visions and insights with us and let’s grow your business together</p>
            </div>
            </div>
            </section>

        <section className='w-full h-full lg:mt-5 overflow-hidden'>
            <div className='grid grid-cols-1 lg:grid-cols-2 relative overflow-hidden'>
                <div className='z-20 lg:w-3/5 ' style={{backgroundColor:'#000',height:'500px'}} data-aos="fade-up">
                <h1 className="text-white ml-16  mt-20  md:ml-24 mt-8 text-sm tracking-widest" data-aos="fade-up">- BRANDS</h1>
                    <h2 className="text-white ml-16 md:ml-24 mt-3 text-2xl md:text-3xl tracking-wider" data-aos="fade-up">Our Happy Clients</h2>
                    <p className="text-zinc-300 px-10 md:px-0 md:p-0 text-xs md:mr-12 lg:mr-0  md:ml-24 md:mt-3 lg:pr-36 leading-5"
                     data-aos="fade-up">Without our clients, we wouldn’t exist. We have a dedicated customer base happy with our strategic insights, innovative solutions, and product development. We are working with some of the leading companies across the globe and hope to add yours to our list. </p>
                    <div className='grid grid-cols-3 lg:grid-cols-3 w-[70%]  md:-mt-10 gap-4 md:w-8/12 mx-auto  pb-10' data-aos="fade-right">
                       <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1649703089/codler/Group_260_uxfom5.png'} className='md:w-[20] h-[20]  w-12 h-10 mt-16 '></img>
                       <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1649703335/codler/Group_10401_vgefy0.png'} className='md:w-24 mt-16 xs:ml-0 sm:-ml-8 md:-ml-24 w-36 h-10 md:h-10'></img>
                       <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1649703656/codler/Group_3990_1_gjtw1g.png'} className='w-96 h-10 mt-16 xs:ml-0 sm:-ml-8 md:-ml-32 md:w-[800px] md:h-10 '></img>
                    </div>
                    <div className='grid grid-cols-4 lg:grid-cols-4 -mt-10 gap-2 w-8/12 mx-auto  pb-10' data-aos="fade-right">
                       <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1649703940/codler/Group_1682_godhzj.png'} className=' w-12 h-10 mt-5  md:w-8 md:h-8'></img>
                       <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1649704073/codler/U_GRAB_FINAL_PDF-01_1_1_lgfsu6.png'} className=' w-36 h-10  mt-5 md:mt-0  md:w-24 md:h-10 md:-ml-16'></img>
                       <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1650310414/codler/Group_2028_jlc1se.png'} className='md:w-24 md:h-9 md:mt-12 mt-16 lg:mt-12 md:-ml-20 '></img>
                       <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1649704176/codler/CEANOR_1_1_1_1_mebevp.png'} className=' w-56 h-10 mt-5 md:w-24 md:h-10 md:-ml-24 '></img>
                    </div>
                </div>

            <div>
                    <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648557602/codler/businessagmnt_fciszm.jpg'} className='lg:h-[520px] h-80 mt-20 md:mt-0 md:ml-36 lg:ml-0' data-aos="fade-up"></img>
                </div>  
            </div>
        </section>


        
 

        <section className="lg:h-screen h-full  md:h-full">
              <div className="p-10 bg-black">
                  <div className="grid   sm:grid-cols-1 lg:grid-cols-2  gap-60">
                  <div className='text-white md:ml-24' data-aos="fade-up">
                <p className=" md:text-3xl text-white -ml-5 md:ml-0 font-semibold mt-16 text-3xl lg:mt-40 text-center lg:flex lg:justify-start" data-aos="fade-right" data-aos-delay="200">What we offer is</p>
                      <p className="sm:px-10  md:ml-0 md:px-0 lg:pr-20 text-sm text-zinc-400 font-light ">Invest in the top-notch web and digital marketing company with your valuable and genuine ideas
                      Our team only uses cutting-edge tools to bring out innovative solutions to help with your product strategy, design, and development. We develop web apps that are smooth, attractive, secure, and user-friendly for your business.
</p>
                </div>
                      <div className="w-1/2 ml-0 md:ml-48 lg:ml-0 lg:mt-60 relative md:mt-96 hidden lg:block" >
                          <div className="w-80  -mt-96 sectionbg3 lg:ml-8 xl:ml-48" data-aos="zoom-in-right" style={{height:'690px',width:'359px',marginTop:'-280px',zIndex:'100'}}></div>
                            <div className=" bg-gray-900 colorbox relative -ml-36 w-96  rounded drop-shadow-2xl  " style={{height:'500px',width:'500px',marginTop:'-600px',zIndex:'200'}}>
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
                      <img src={require('../images/about-us-images/img3.png')} className='w-96 h-64 ml-12 overflow-hidden colorbubble -mt-96 hidden xl:block'/>

</div>
              </div>
            
          </section>


            <section>
                <div className='md:-mt-28'>
                <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648557769/codler/tableper_fjzbav.png'}   alt="" className="z-20 w-40 mt-10 md:mt-0 h-32 lg:w-72 lg:h-60" data-aos="fade-right"/>
                </div>
            </section>


        <section className='w-10/12 mx-auto mt-10 lg:pb-28 pl-10 md:pl-24'>
            <div className='grid grid-cols-1 lg:grid-cols-3'>
                <div className='' data-aos="fade-up">
                <h1 className="text-white text-8xl  font-extrabold opacity-20 absolute">04</h1>
                          <p className="text-white text-base font-medium mt-10 pl-2">--- WHY CHOOSE US</p>
                          <p className="text-white text-2xl md:text-3xl  mt-5 font-bold " data-aos="fade-right" data-aos-delay="200">What makes<br /> Codler stand out ?</p>
                          <p className="text-zinc-300 text-sm mt-3 lg:pr-16">Our impeccable advanced technological solutions. We give you the finest design approach and the most powerful development plans for your brand. </p>
                </div>
                <div className='col-span-2'>
                    <div className='grid grid-cols-1 grid-rows-1 lg:grid-cols-2 lg:grid-rows-2 '>
                        <div className='xl:p-10 pt-10 lg:pt-0' data-aos="fade-up">
                        <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648556430/codler/startergy_kvcx48.png'} className='w-8'></img>
                        <h2 className="text-white mt-2 text-lg md:text-xl font-semibold">Stratergy</h2>
                        <p className="text-white text-xs lg:pr-20  mt-3">Human focused approach to build the best strategy. Our team works collectively to develop strategies that bridge the gap between you and your audience.</p>
                        </div>
                        <div className='xl:p-10 pt-10 lg:pt-0' data-aos="fade-up">
                        <img src={require('../images/design.png')} className='w-8'></img>
                        <h2 className="text-white mt-2 text-lg md:text-xl font-semibold">Design</h2>
                        <p className="text-white text-xs lg:pr-20  mt-3"> With our meticulous research, we create innovative designs for that delight and engage users. Whether a logo, website, print collateral, or other branding, the results of the design process will be responsible for creating your brand’s first impression</p>
                        </div>
                        <div className='xl:p-10 pt-10 lg:pt-0' data-aos="fade-up">
                        <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648556429/codler/marketing_wdpffh.png'} className='w-8'></img>
                        <h2 className="text-white mt-2 text-lg md:text-xl font-semibold">Marketing</h2>
                        <p className="text-white text-xs lg:pr-20  mt-3">Creating a defined awareness between you and your customer, for a lasting impression.
                        We don’t create mere identities. We craft stories that help you tell your story in a way that makes it stand out.</p>
                        </div>
                        <div className='xl:p-10 pt-10 lg:pt-0' data-aos="fade-up">
                        <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648556743/codler/development_awauy4.png'} className='w-8'></img>
                        <h2 className="text-white mt-2 text-lg md:text-xl font-semibold">Development</h2>
                        <p className="text-white text-xs lg:pr-20  mt-3 mb-20 lg:mb-0">Whether we have designed a new site or we’re looking to make updates to an existing web or print work, the development stage is where we get into the nuts and bolts of the project. We know what we’re there to do, and we’re ready to do it.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
          
    
        <section className=' lg:h-screen -mt-12 md:mt-20 lg:-mt-28 p-12 md:mx-0 md:p-20'>
            <div className='grid grid-cols-1  md:grid-cols-2 overflow-hidden '>
                <div data-aos="fade-down h-96">
                <FontAwesomeIcon icon={faQuoteLeft} className="text-2xl lg:text-7xl text-gray-800 z-0" />
                    <div className='z-10 lg:-mt-24'>
                        
                       <hr className="w-5 h-12 text-purple-500 ml-24 mt-12"/> <span> <p className="text-l  lg:ml-32  -mt-7 font-normal text-white" data-aos="fade-right" data-aos-delay="200">OUR STRENGTH</p>
                        </span>
                        <p className="text-xl lg:text-2xl  lg:ml-24 mt-3 text-white font-bold tracking-wide" data-aos="fade-right" data-aos-delay="200">Get real world advice <br />from people<br />who have been there</p>
                        <p className="text-xs w-64 lg:ml-24 lg:pr-5 text-zinc-300 ">We work closely with our clients to define, design, and develop transformative user experiences across all platforms and brand touchpoints. We break boundaries to create extraordinary digital products for our clients and have satisfied clients’ accounts for our success. Positive and constructive feedback from our clients is pure bliss for us and keeps us going; we'd like to hear it more often. </p>
                    </div>
                </div>

                <div className="lg:-ml-8">
                    <div className='grid grid-cols-1 grid-rows-1 lg:grid-cols-2 lg:grid-rows-2 gap-3 '>
                    <div className="flex  flex-col overflow-hidden" data-aos="fade-left">
                            <div className="md:w-80 w-68 text-xs md:text-sm  lg:ml-0 md:p-2 ml-2  md:h-68 rounded hover:scale-105 box" style={{backgroundColor:'#8B008B'}}>
                              <div className="inline-block ml-3 ">
                                  <p className="md:text-xl text-sm mt-3 md:mt-0  text-white font-semibold">5.0</p>
                                  <FontAwesomeIcon icon={faStar} className="text-l  text-yellow-500 " />
                                  <FontAwesomeIcon icon={faStar} className="text-l text-yellow-500 " />
                                  <FontAwesomeIcon icon={faStar} className="text-l text-yellow-500 " />
                                  <FontAwesomeIcon icon={faStar} className="text-l text-yellow-500 " />

                                  <FontAwesomeIcon icon={faStar} className="text-l text-yellow-500 " />

                              </div>
                              <p className="md:text-sm text-xs ml-3 md:ml-0 mt-3 text-white">Lorem Ipsum is simply dummy text of the<br /> printing and typesetting industry. <br />Lorem Ipsum has been the industry's <br />standard dummy text ever since the 1500s,</p>
                              <div className='flex'>
                                <img src={require('../images/services/user1.png')} className='md:w-8 md:h-8 w-4 h-4 ml-2 md:ml-0 mt-3 '></img>
                                     <div className='text-white text-xs md:text-sm leading-3 md:mt-3 ml-3'>
                                     <p>Arjun nabiyar<br/>
                                        Director,lolipop desings</p>
                                    </div>
                                </div>
                          </div>
                            <div className=" md:w-80 ml-2  mt-3  rounded hover:scale-105 md:h-64 sectionbg">
                              <div className="inline-block  ml-3">
                                  <p className="md:text-xl text-sm mt-3 md:mt-0   text-white font-semibold">5.0</p>
                                  <FontAwesomeIcon icon={faStar} className="text-l text-yellow-500 " />
                                  <FontAwesomeIcon icon={faStar} className="text-l text-yellow-500 " />
                                  <FontAwesomeIcon icon={faStar} className="text-l text-yellow-500 " />
                                  <FontAwesomeIcon icon={faStar} className="text-l text-yellow-500 " />

                                  <FontAwesomeIcon icon={faStar} className="text-l text-yellow-500 " />

                              </div>
                              <p className="text-sm mt-2 text-white  ml-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />Lorem Ipsum has been the industry's </p>
                               <div className='flex'>
                                <img src={require('../images/services/user1.png')} className='md:w-8 md:h-8 h-4 w-4 mt-3 ml-2 md:ml-0'></img>
                                     <div className='text-white text-sm leading-3 mt-3 ml-3'>
                                     <p>Arjun nabiyar<br/><br/>
                                        Director,lolipop desings</p>
                                    </div>
                                </div>
                          </div>
                      </div>
                      <div className="flex flex-col md:h-64 lg:-ml-12 hidden lg:block" data-aos="fade-left">
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
                            <div className="w-2/3 md:w-80 md:h-[259px] p-3 mt-3 ml-5 md:ml-12 rounded sectionbg hover:scale-105">
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
            </div>
            <div className="md:w-screen  -ml-24 w-screen h-96  mt-[-65%] ">
                        <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648586941/codler/lineshade_z7kfah.png'} alt="bg" className="w-screen h-80  -mt-96 " />
                  </div>
        </section>
        <section className='bg-[#191919] h-full w-full xs:px-0 sm:px-10 md:px-24 md:py-4  py-10 lg:my-20' >
            <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1650310414/codler/img4_2x_1_3_qfxnu0.png'} className='w-20 h-20 -ml-24 -mt-12'/>
            <div>
            <Imageslider/>
            </div>
        </section>
           


         <section className='w-10/12 lg:w-8/12 mx-auto mt-10 '>
                <div className='grid grid-cols-1 lg:grid-cols-2'>
                        <div data-aos="fade-down">
                        <hr className='textlgcolor w-8 h-24 hidden lg:block -ml-5 md:ml-5 absolute opacity-60' style={{height:'3px',marginTop:'62px'}}/>
                        <h1 className="text-white text-5xl mt-7 md:mt-5 md:text-7xl -ml-3 lg:ml-8 font-bold opacity-50 absolute" data-aos="fade-right" data-aos-delay="200">06</h1>
                          <p className="text-white text-lg ml-6 lg:ml-14 mt-10 md:mt-12 font-semibold tracking-wide " data-aos="fade-right" data-aos-delay="200"> CREATIVE</p>
                          <p className="text-white text-2xl md:text-4xl ml-10 mt-4 lg:mt-0 font-bold tracking-wide" data-aos="fade-right" data-aos-delay="200">Find us on social<br />media</p>
                          <p className='text-white text-sm ml-10 -mt-2'>#CODLERR</p>
                        </div>

                        <div data-aos="fade-up">
                            <div className='pt-10'>
                                <p className='text-sm -mt-8 md:mt-0 text-white pl-10 md:pl-0 lg:pr-10 leading-6'>You don't just have to pick up the phone to ring us - we are on Facebook, LinkedIn as well Instagram! See you there!</p>
                                    <div className='pt-2 pl-10 md:pl-0'>
                                        <a href='#' className='flex no-underline'> <p className='textlbg testdecoration-none text-sm text-lg font-semibold -mt-2'>Take me to Instagram</p>
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
