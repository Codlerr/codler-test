import Aos from 'aos';
import "aos/dist/aos.css";
import  { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import '../App.css';
import { faArrowRight, faStar, faQuoteLeft} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import b1 from '../images/serviceinner/p2.png';
import b2 from '../images/serviceinner/t1.png';
import b3 from '../images/serviceinner/t2.jpg';
import b4 from '../images/serviceinner/t3.jpg';
import b5 from '../images/serviceinner/t4.jpg';
import v1 from '../images/serviceinner/Vector.png';
import v2 from '../images/serviceinner/Vector1.png';
import v3 from '../images/serviceinner/Group 2527.png';
import drop from '../images/serviceinner/img4@2x 1.png';




function Servicedetails() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    const navigate = useNavigate('');
    return (
        <div>



            <section className="s-inner-bg">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="w-10/12 mx-auto  lg:w-full text-white md:py-96 pt-80 lg:pt-64 lg:pl-32">
                        <h1 className='font-bold text-3xl  md:text-4xl lg:w-3/4'data-aos="fade-right" data-aos-delay="1000">Mobile application development company</h1>
                        <p className='text-sm md:text-lg mt-3 font-light tracking-wider lg:w-3/4' data-aos="fade-right" data-aos-delay="2000">Codlerr's mobile app development service uses world-class technologies.</p>
                    </div>
                    <div className='hidden lg:block'>
                        <img src={b1} className='lg:pt-40 absolute right-0'></img>
                    </div>
                </div>
            </section>

            <section className='bg-black'>
                <div className='w-10/12 lg:w-8/12 mx-auto pt-20'>
                    <img src={drop} className='hidden lg:block absolute right-0 h-32 mt-96'></img>
                    <div className='text-white text-center'>
                        <h1 className='font-bold' data-aos="fade-right" data-aos-delay="200">We Think Mobile First.</h1>
                        <p className='text-sm lg:text-base font-light lg:w-3/4 mx-auto'>Codlerr's mobile app development service uses world-class technologies. We use React Native, Flutter and others to make your apps scalable and future-proof on both native and cross-platforms. Our backbone is our professional mobile developers, who will interact with you at every stage of the project.</p>
                    </div>
                    <div>
                        <img src={b2}></img>
                    </div>
                </div>
                
            </section>

            <section className='bg-black'>
                <div className='w-10/12 mx-auto pb-20'>
                <div>
                    <h1 className='text-white text-2xl lg:text-4xl text-center font-bold pt-8 lg:pt-0' data-aos="fade-right" data-aos-delay="200">We help you create Apps for</h1>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 text-white pt-10 lg:pt-16'>
                    <div className='bg-gradient-to-r from-zinc-700 to-zinc-800 rounded-xl py-8 px-4'>
                        <img src={v1} className='h-10'></img>
                        <h4 className='pt-3'>Enterprise</h4>
                        <p className='text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id a, integer phasellus nibh at fermentum. Nec, ultrices luctus nam nulla a ultrices vestibulum, vulputate. Non arcu sed viverra fringilla scelerisque felis, venenatis. Accumsan, in consequat et </p>
                    </div>
                    <div className='bg-gradient-to-r from-zinc-700 to-zinc-800 rounded-xl py-8 px-4'>
                        <img src={v2} className='h-10'></img>
                        <h4 className='pt-3'>Business</h4>
                        <p className='text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id a, integer phasellus nibh at fermentum. Nec, ultrices luctus nam nulla a ultrices vestibulum, vulputate. Non arcu sed viverra fringilla scelerisque felis, venenatis. Accumsan, in consequat et </p>
                    </div>
                    <div className='bg-gradient-to-r from-zinc-700 to-zinc-800 rounded-xl py-8 px-4'>
                        <img src={v3} className='h-10'></img>
                        <h4 className='pt-3'>Consumers</h4>
                        <p className='text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id a, integer phasellus nibh at fermentum. Nec, ultrices luctus nam nulla a ultrices vestibulum, vulputate. Non arcu sed viverra fringilla scelerisque felis, venenatis. Accumsan, in consequat et </p>
                    </div>
                </div>
                </div>
            </section>

            <section className='bg-black'>
                <div className='grid grid-cols-1 lg:grid-cols-2 py-10 lg:pt-0'>
                    <div className='text-white mx-10 lg:py-40 lg:px-20'>
                        <h2 className='lg:w-3/4' data-aos="fade-right" data-aos-delay="200">Native Mobile App Development</h2>
                        <p className='text-sm lg:text-base pt-4  lg:pt-8'>Codlerr, a top-notch native mobile app development company, builds customer-centric, indefectible, innovative, and high quality native mobile apps as a result for any of their software of iOS and Android.Our top-notch mobile app developers provide secure and adaptable mobility solutions for your business.</p>
                    </div>
                    <div>
                        <img src={b3}></img>
                    </div>
                </div>
            </section>

            <section className='bg-black'>
                <div className='grid grid-cols-1 lg:grid-cols-2 pt-10 lg:pt-0'>
                    <div>
                        <img src={b4}></img>
                    </div>
                    <div className='text-white mx-10 lg:py-40 lg:px-20'>
                        <h2 className='pt-8 lg:pt-0' data-aos="fade-right" data-aos-delay="200">iOS Mobile App development</h2>
                        <p className='text-sm lg:text-base pt-4  lg:pt-8'>Codlerr, a top-notch native mobile app development company, builds customer-centric, indefectible, innovative, and high quality native mobile apps as a result for any of their software of iOS and Android.Our top-notch mobile app developers provide secure and adaptable mobility solutions for your business.</p>
                    </div>
                </div>
            </section>

            <section className='bg-black'>
                <div className='w-10/12 lg:w-8/12 mx-auto'>
                    <p className='text-zinc-800 lg:text-3xl text-color font-bold py-12'>Get our skilled iOS developers to create full-featured, robust, and responsive iOS mobile apps.</p>
                </div>
            </section>

            <section className='bg-black mb-12 md:mb-16'>
                <div className='grid grid-cols-1 lg:grid-cols-2 lg:-mt-4'>
                    <div className='text-white mx-10 lg:pt-6 lg:px-20'>
                        <h2 className=' font-bold mt-5' data-aos="fade-right" data-aos-delay="200">Cross-platform/Hybrid mobile app development. 
                        (PWA) Development:</h2>
                        <p className='text-sm lg:text-base pt-4  lg:pt-8'>Codlerr is the premier cross-platform/hybrid mobile app development company, providing businesses with a variety of benefits while also allowing them to reach a larger audience via devices running different operating systems. Our cross-platform developers have a track record of creating feature-rich, cross-platform compatible hybrid apps using cross-platform and technologies like React Native and Flutter, as well as HTML5 and JavaScript.
                        </p>
                        <p className='text-lg font-bold sectionbg4'>Features</p>
                        <div className='lg:flex' data-aos="fade-right">
                    <p className='text-zinc-400 pr-8 text-3xl opacity-30 font-bold'>01</p>
                        <p className='text-white lg:text-sm ' >Whereas web and mobile apps have the same code base in the case of hybrid apps.</p>
                    </div>
                    <hr className="textlgcolor ml-16 text-6xl" style={{height:'3px'}}/>
                    <div className='lg:flex ' data-aos="fade-right">
                        <p className='text-zinc-400 pr-8 text-3xl opacity-30 font-bold'>02</p>
                        <p className='text-white lg:text-sm '>In brief, we are using various plugins, you may control numerous hardware and software capabilities.
                    </p></div>
                    <hr className="textlgcolor  ml-16 w-46  text-6xl"style={{height:'3px'}} />
                    <div className='lg:flex ' data-aos="fade-right">
                        <p className='text-white lg:text-xl '>
                    <div className='lg:flex ' data-aos="fade-right">
                        <p className='text-zinc-400  text-3xl pr-8 opacity-30 font-bold'>03</p>
                        <p className='text-white lg:text-sm '>A simple and quick approach to creating mobile applications with different types of features and functions.
</p>
                    </div></p>
                    </div>

                    </div>
                    <div>
                        <img src={b5} className="mt-28"></img>
                    </div>
                </div>
            </section>

            <section className='bg-black'>
                <div className='grid grid-cols-1 lg:grid-cols-2 pt-10 lg:pt-0'>
                    <div>
                        <img src={require('../images/services/img3.png')}></img>
                    </div>
                    <div className='text-white mx-10 lg:py-28 lg:px-20'>
                        <h2 className='pt-8 lg:pt-0' data-aos="fade-right" data-aos-delay="200">Progressive Web Apps 
                        (PWA) Development:</h2>
                        <p className='text-sm lg:text-base pt-4  lg:pt-8'>Our outstanding Progressive Web Applications (PWA) development services construct apps with the same smooth performance as any native mobile apps. CODLERR produces progressive web apps that run quickly across all devices with minimal effort in order to maximise user engagement. We include unique features in web apps, such as offline browsing, push alerts, data analysis, and simple distribution methods.
                        </p>
                    </div>
                </div>
            </section>
            <section className='bg-black'>
                <div className='grid grid-cols-1 lg:grid-cols-2 py-10 lg:pt-0'>
                    <div className='text-white mx-10 lg:py-24 lg:px-20'>
                        <h2 className='lg:w-3/4' data-aos="fade-right" data-aos-delay="200">Android  Mobile App development.</h2>
                        <p className='text-sm lg:text-base pt-4  lg:pt-8'>Codlerr is a leading Android app development business. When our cutting-edge technology is blended with the expertise of our developers, we create an unrivalled unique Android mobile app solution for all sorts of businesses. Creating Android apps for Android devices and across the entire Android platform is what we do.
                        Hire the finest Android app developers from Codlerr. Who has expertise in developing bespoke Android apps with 100% client satisfaction is what we ensured about.
                        </p>
                    </div>
                    <div>
                        <img src={require('../images/services/img4.png')}></img>
                    </div>
                </div>
            </section>
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
        
            <section className='bg-zinc-900 mb-24'>
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
                                        <div class="lg:ml-20 border-2 border-zinc-600  rounded-md">
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



             {/* <div class="md:grid flex flex-col-reverse grid-cols-1 md:grid-cols-2">
                <div class="text-white md:pt-48 pb-32 md:pb-60 md:pl-32 pl-10 pt-8">
                    <p class="text-3xl md:text-5xl font-bold">Mobile application<br />
                        development company</p>
                    <p class="pt-4 md:pt-6 text-sm md:text-lg md:tracking-wider font-thin">Codlerr's mobile app development service uses<br /> world-class technologies.</p>
                </div>
                <div>
                </div>
            </div> */}
            {/*<div class="w-10/12 mx-auto">
                <div>
                    <div class="text-white pt-20 text-center">
                        <p class="text-3xl font-bold">We Think Mobile First.</p>
                        <p class="pt-4 text-sm md:text-base font-thin md:text-center">Codlerr's mobile app development service uses world-class technologies. We use React Native, Flutter and others<br /> to make your apps scalable and future-proof on both native and cross-platforms. Our backbone is our<br /> professional mobile developers, who will interact with you at every stage of the project.

                        </p>
                    </div>
                    <div class="md:w-10/12 mx-auto pt-8 md:pt-0">
                        <img src={require("../images/serviceinner/ba88943445b70c7e3244f327b14e6468 1.png")} alt="" />
                    </div>
                    <p class="text-white text-center text-xl md:text-3xl font-bold pb-16">We help you create Apps for</p>
                </div>
            </div>
            <div class="w-10/12 mx-auto pb-10">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
                    <div class="bg-gradient-to-r from-zinc-700 to-zinc-600 rounded-xl px-6 pt-7 pb-10">
                        <img src={require("../images/serviceinner/Vector.png")} alt="" />
                        <p class="py-4 text-2xl font-bold">Enterprise</p>
                        <p class="font-thin">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id a, integer phasellus nibh at fermentum. Nec, ultrices luctus nam nulla a ultrices vestibulum, vulputate. Non arcu sed viverra fringilla scelerisque felis, venenatis. Accumsan, in consequat et </p>
                    </div>
                    <div class="bg-gradient-to-r from-zinc-700 to-zinc-600 rounded-xl px-6 pt-7 pb-10">
                        <img src={require("../images/serviceinner/Vector1.png")} alt="" />
                        <p class="py-4 text-2xl font-bold">Business</p>
                        <p class="font-thin">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id a, integer phasellus nibh at fermentum. Nec, ultrices luctus nam nulla a ultrices vestibulum, vulputate. Non arcu sed viverra fringilla scelerisque felis, venenatis. Accumsan, in consequat et </p>
                    </div>
                    <div class="bg-gradient-to-r from-zinc-700 to-zinc-600 rounded-xl px-6 pt-7 pb-10">
                        <img src={require("../images/serviceinner/Group 2527.png")} alt="" />
                        <p class="py-4 text-2xl font-bold">Consumers</p>
                        <p class="font-thin">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id a, integer phasellus nibh at fermentum. Nec, ultrices luctus nam nulla a ultrices vestibulum, vulputate. Non arcu sed viverra fringilla scelerisque felis, venenatis. Accumsan, in consequat et </p>
                    </div>
                </div>
            </div>
            <div>
                <div class="grid grid-cols-1 md:grid-cols-2 py-10 md:gap-6">
                    <div class="text-white md:pt-40 md:pl-28">
                        <p class="text-4xl font-bold tracking-wider md:text-left text-center">Native Mobile App<br /> Development</p>
                        <p class="font-thin pt-8 md:pr-20 md:text-left text-center md:px-0 px-8 text-sm md:text-base pb-8">Codlerr, a top-notch native mobile app development company, builds customer-centric, indefectible, innovative, and high quality native mobile apps as a result for any of their software of iOS and Android.Our top-notch mobile app developers provide secure and adaptable mobility solutions for your business.
                        </p>
                    </div>
                    <div class="pb-6">
                        <img src={require("../images/serviceinner/8253d8f6221207c673ea0278e91522e2 1.png")} alt="" />
                    </div>


                </div>
                <div class="flex flex-col-reverse md:grid grid-cols-1 md:grid-cols-2 md:gap-6 pt-20 md:pt-0">

                    <div>
                        <img src={require("../images/serviceinner/8253d8f6221207c673ea0278e91522e2 2.png")} alt="" />
                    </div>
                    <div class="text-white md:pt-40 md:pl-28">
                        <p class="text-4xl font-bold tracking-wider md:text-left text-center">iOS Mobile App development</p>
                        <p class="font-thin pt-8 md:pr-20 md:text-left text-center md:px-0 px-8 text-sm md:text-base pb-8">Codlerr, a top-notch native mobile app development company, builds customer-centric, indefectible, innovative, and high quality native mobile apps as a result for any of their software of iOS and Android.Our top-notch mobile app developers provide secure and adaptable mobility solutions for your business.
                        </p>
                    </div>



                </div>

            </div>

            <div class="w-8/12 mx-auto py-20 text-zinc-700">
                <div>
                    <p class="text-xl md:text-5xl font-bold">Get our skilled iOS developers to create full-featured, robust, and responsive iOS mobile apps.
                    </p>
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 py-10 md:gap-6">
                <div class="text-white md:pt-6 md:pl-28">
                    <p class="text-3xl font-bold tracking-wide md:text-left text-center">Cross-platform/Hybrid<br /> mobile app development.</p>
                    <p class="font-thin pt-8 md:pr-20 md:text-left text-center md:px-0 px-8 text-sm md:text-base pb-8">Codlerr is the premier cross-platform/hybrid mobile app development company, providing businesses with a variety of benefits while also allowing them to reach a larger audience via devices running different operating systems. Our cross-platform developers have a track record of creating feature-rich, cross-platform compatible hybrid apps using cross-platform and technologies like React Native and Flutter, as well as HTML5 and JavaScript. </p>
                    <img class="pl-6" src={require("../images/serviceinner/Features.png")} alt="" />
                    <div class="flex pt-6 mx-6">
                        <div><img class="pr-8" src={require("../images/serviceinner/01.png")} alt="" /></div>
                        <div>
                            <p class="font-thin">Whereas web and mobile apps have the same code base in the<br /> case of hybrid apps.</p>
                            <img class="w-full h-0.5 mt-4" src={require("../images/serviceinner/Line 6.png")} alt="" />
                        </div>
                    </div>
                    <div class="flex pt-6 mx-6">
                        <div><img class="pr-4" src={require("../images/serviceinner/02.png")} alt="" /></div>
                        <div>
                            <p class="font-thin">Whereas web and mobile apps have the same code base in the<br /> case of hybrid apps.</p>
                            <img class="w-full h-0.5 mt-4" src={require("../images/serviceinner/Line 6.png")} alt="" />
                        </div>
                    </div>
                    <div class="flex pt-6 mx-6">
                        <div><img class="pr-4" src={require("../images/serviceinner/03.png")} alt="" /></div>
                        <div>
                            <p class="font-thin">Whereas web and mobile apps have the same code base in the<br /> case of hybrid apps.</p>

                        </div>
                    </div>

                </div>
                <div class="pb-6 pt-8 md:pt-0">
                    <img src={require("../images/serviceinner/8253d8f6221207c673ea0278e91522e2 3.png")} alt="" />
                </div>

                <div class="flex flex-col-reverse md:grid grid-cols-1 md:grid-cols-2 md:gap-6 pt-20 md:pt-10">

                    <div>
                        <img src={require("../images/serviceinner/8253d8f6221207c673ea0278e91522e2 4.png")} alt="" />
                    </div>
                    <div class="text-white md:pt-20 md:pl-28">
                        <p class="text-4xl font-bold tracking-wider md:text-left text-center">Progressive Web Apps<br />
                            (PWA) Development:</p>
                        <p class="font-thin pt-8 md:pr-24 md:text-left text-center md:px-0 px-8 text-sm md:text-base pb-8">Our outstanding Progressive Web Applications (PWA) development services construct apps with the same smooth performance as any native mobile apps. CODLERR produces progressive web apps that run quickly across all devices with minimal effort in order to maximise user engagement. We include unique features in web apps, such as offline browsing, push alerts, data analysis, and simple distribution methods.
                        </p>
                    </div>



                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 pt-40 md:pt-20 md:gap-6">
                    <div class="text-white md:pt-40 md:pl-28">
                        <p class="text-4xl font-bold tracking-wider md:text-left text-center">Android  Mobile App<br /> development.</p>
                        <p class="font-thin pt-8 md:pr-28 md:text-left text-center md:px-0 px-8 text-sm md:text-base pb-8">Codlerr is a leading Android app development business. When our cutting-edge technology is blended with the expertise of our developers, we create an unrivalled unique Android mobile app solution for all sorts of businesses. Creating Android apps for Android devices and across the entire Android platform is what we do.
                            Hire the finest Android app developers from Codlerr. Who has expertise in developing bespoke Android apps with 100% client satisfaction is what we ensured about.</p>
                    </div>
                    <div class="pb-6">
                        <img src={require("../images/serviceinner/8253d8f6221207c673ea0278e91522e2 5.png")} alt="" />
                    </div>



                </div>

                <img class="absolute h-40 md:h-56" src={require("../images/serviceinner/bubble1@2x 2.png")} alt="" />
                <img class="absolute left-32 h-16 md:left-44" src={require("../images/serviceinner/bubble3@2x 1.png")} alt="" />
                <img class="absolute left-20 h-8 md:left-28 md:w-10" src={require("../images/serviceinner/bubble3@2x 1.png")} alt="" />
                <div>
                    <div class="w-10/12 mx-auto rounded-xl bg-zinc-700 mt-40">
                        <div class="flex text-white py-10">
                            <p class="text-2xl font-bold pl-10">We proudly work with</p>
                            <img class="h-0.5 pl-2 mt-6" src={require("../images/serviceinner/Line 6.png")} alt="" />
                        </div>
                        <div class="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4 px-16 pb-16 mb-20">
                            <img src={require("../images/serviceinner/Vector2.png")} alt="" />
                            <img src={require("../images/serviceinner/Group 2165.png")} alt="" />
                            <img src={require("../images/serviceinner/Group 2163.png")} alt="" />
                            <img src={require("../images/serviceinner/Vector3.png")} alt="" />
                            <img src={require("../images/serviceinner/Group 2164.png")} alt="" />
                        </div>
                    </div>
                </div>
                <div class="bg-zinc-800 mt-8">
                    <div class="w-10/12 mx-auto ">
                        <div>

                            <div class="grid grid-cols-1 md:grid-cols-2 md:py-14 pb-10 md:pb-16">

                                <div class="grid grid-rows-1 md:grid-rows-2">
                                    <p class="text-white text-2xl md:text-5xl font-bold tracking-wider pt-8 md:pt-16">See what our valuable<br />
                                        clients says about us</p>
                                    <p class="text-white font-thin tracking-wide md:text-base text-xs pt-5 md:pt-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra quis<br /> bibendum adipiscing cum mauris, faucibus nulla. Sed adipiscing sollicitudin </p>

                                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4  md:py-16 py-20 px-10 md:px-0">
                                        <div class="bg-zinc-700 rounded-md">
                                            <div class="flex text-white pl-6 pt-4">
                                                <p class="text-2xl">4.0</p>
                                                <img class="pl-4 h-7" src={require("../images/services/Veactor.png")} alt="" />
                                                <img class="pl-4 h-7" src={require("../images/services/Veactor.png")} alt="" />
                                                <img class="pl-4 h-7" src={require("../images/services/Veactor.png")} alt="" />
                                                <img class="pl-4 h-7" src={require("../images/services/Veactor.png")} alt="" />
                                            </div>
                                            <p class="text-white p-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam aspernatur consectetur, praesentium quibusdam optio ipsam autem reprehenderit facere molestias expedita consequuntur dolores beatae laudantium qui at quidem iste, vel nihil quo dolorum a repellat </p>

                                        </div>
                                        <div class="bg-zinc-700 rounded-md">
                                            <div class="flex text-white pl-6 pt-4">
                                                <p class="text-2xl">4.0</p>
                                                <img class="pl-4 h-7" src={require("../images/services/Veactor.png")} alt="" />
                                                <img class="pl-4 h-7" src={require("../images/services/Veactor.png")} alt="" />
                                                <img class="pl-4 h-7" src={require("../images/services/Veactor.png")} alt="" />
                                                <img class="pl-4 h-7" src={require("../images/services/Veactor.png")} alt="" />
                                            </div>
                                            <p class="text-white p-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam aspernatur consectetur, praesentium quibusdam optio ipsam autem reprehenderit facere molestias expedita consequuntur dolores beatae laudantium qui at quidem iste, vel nihil quo dolorum a repellat </p>
                                        </div>

                                    </div>
                                </div>


                                <div class="md:ml-20 border-2 border-zinc-600  rounded-md">
                                    <div class="p-10">
                                        <div class="text-white">
                                            <p class="text-2xl font-bold">Ready to start a Project?</p>
                                            <p class="tracking-wider text-zinc-300 md:text-lg">To start, use form below to tell us about you and the project</p>
                                        </div>

                                        <div class="pt-6 md:pt-7 text-zinc-400">
                                            <p>Name</p>
                                            <input class="w-full border-b-2 border-zinc-600 outline-none bg-transparent  md:py-2 text-sm md:text-lg" type="text" placeholder="Your good name" />
                                        </div>

                                        <div class="pt-6 md:pt-7 text-zinc-400">
                                            <p>Email</p>
                                            <input class="w-full border-b-2 border-zinc-600 outline-none bg-transparent  md:py-2 text-sm md:text-lg" type="text" placeholder="Your good name" />
                                        </div>

                                        <div class="pt-6 md:pt-7 text-zinc-400 grid grid-cols-1 md:grid-cols-2 gap-8 ">
                                            <div>
                                                <p>Phone</p>

                                                <input class="w-full border-b-2 border-zinc-600 outline-none bg-transparent  md:py-2 text-sm md:text-lg" type="text" placeholder="+91" />

                                            </div>
                                            <div>
                                                <label class="" for="">
                                                    <p>How soon you want to start</p>
                                                    <select class="w-full md:pt-5 border-b-2 border-zinc-600 outline-none bg-transparent" name="" id="">
                                                        <option class="" value="">Select</option>

                                                    </select>
                                                </label>
                                            </div>
                                        </div>

                                        <div class="pt-6 md:pt-7 text-zinc-400">
                                            <label class="" for="">
                                                <p>Select a services</p>
                                                <select class="w-full md:pt-5 border-b-2 border-zinc-600 outline-none bg-transparent" name="" id="">
                                                    <option class="" value="">Ui Designing</option>

                                                </select>
                                            </label>
                                        </div>

                                        <div class="pt-6 md:pt-7 text-zinc-400">
                                            <label class="" for="">
                                                <p class="">Requirementst</p>
                                                <select class="w-full md:pt-5 border-b-2 border-zinc-600 outline-none bg-transparent" name="" id="">
                                                    <option class="" value="">New project</option>

                                                </select>
                                            </label>
                                        </div>

                                        <div class="pt-6 md:pt-7 text-zinc-400">
                                            <p>Breif about your project</p>
                                            <input class="w-full border-b-2 border-zinc-600 outline-none bg-transparent  md:py-2 text-sm md:text-lg" type="text" placeholder="Your good name" />
                                        </div>

                                        <div class="pt-6 md:pt-7 text-white">
                                            <div class="border-2 border-zinc-600  rounded-md">
                                                <p class="text-center py-4">Have a file to share with us</p>
                                            </div>

                                        </div>
                                        <div class="pt-4">
                                            <button class="bg-violet-800 text-white px-4 py-2 rounded-lg">Let's start</button>
                                        </div>
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>

                </div>
            </div> */}

        </div>
    )

}
export default Servicedetails;