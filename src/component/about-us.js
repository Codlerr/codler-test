import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../App.css';
import { faArrowRight, faStar, faInstagram, faQuoteLeft, faSearchDollar, faDraftingCompass, faCog, faLightbulb } from '@fortawesome/free-solid-svg-icons'
import Aos from 'aos';
import { Helmet } from 'react-helmet';
import "aos/dist/aos.css";
import { useEffect } from 'react';
function Aboutus() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    return (
        <div>
            <Helmet>
            <title>About Codler</title>
            <meta name="description" content="want to know who we are?" />
           </Helmet>
            <section className='main-content'>
                <div className='w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-2 pt-28 sm:pt-48 lg:pt-36' data-aos="fade-up">
                    <div>
                    <p className="text-white text-3xl lg:text-[45px] leading-tight font-gilroyregular md:pt-16 font-bold" data-aos="fade-right" data-aos-delay="200" >Want to know more<br></br> about<span className='pl-2 textlbg'>codler</span></p>
                        <p className="lg:text-lg tracking-wider  font-medium font-gilroylight text-xs tracking-tight lg:w-2/3  text-zinc-200">We are the perfect professional team of designers and developers for you. Codler is a top website and mobile app development
                   company. In addition to empower our client sincerely by developinfg full customized mobile and web-based digital solution is our mission.</p>
                    
                        <div className='hidden lg:block'>
                        <a href='#'><img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648585515/codler/arrw_aof6aj.png'} className='h-20 my-10 lg:my-0 lg:mt-20'></img></a>
                        </div>
                    </div>

                    <div>
                        <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648585635/codler/officework_bbpbsv.jpg'} className='rounded-xl pt-16 md:pt-0 md:mt-16 lg:mt-20 relative z-200 lg:pt-0 lg:h-80 lg:w-[460px] lg:ml-14'></img>
                        <img src='https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648585628/codler/bubble2_nkoawf.png' alt='img' className='w-28 h-28 ml-[86%] relative z-200 -mt-10 hidden xl:block'/>
                        <div className='bg-zinc-800 opacity-30 md:ml-24 xl:ml-64 w-80 h-[580px] hidden mt-[-600px] 
                        .'>
                        </div>
                    </div>
                        <div>
                        </div>
                </div>
            </section>

            <section className='noise'>
                    <div className='w-10/12 lg:w-8/12 mx-auto'>
                        <div className='grid grid-cols-1 lg:grid-cols-2 mt-20'>
                                <div className='md:ml-20'  data-aos="fade-right">
                            <p className="text-4xl text-white font-gilroyregular font-bold leading-20">WE are experts with</p>
                                    <ul className="font-gilroythin">
                                        <li className="text-3xl list-disc text-pink-800  mt-3"><div className="text-zinc-300 font-semibold text-base">An innovative emphasis.</div></li>
                                        <li className="text-3xl list-disc text-pink-800 "><div className="text-zinc-300 font-semibold text-base">Exceptional customer oriented attitude.</div></li>
                                        <li className="text-3xl list-disc text-pink-800 "><div className="text-zinc-300 font-semibold text-base">Domain expertise in an highly skilled team.</div></li>
                                        <li className="text-3xl list-disc text-pink-800"><div className="text-zinc-300 font-semibold text-base">Assounding focus on work</div></li>
                                    </ul>
                            </div>

                            <div>
                                <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1649503993/codler/creative-business-team-discussing-over-the-laptop-2021-08-28-18-10-11-utc_1_v46o3a.png'} className='absolute h-96 w-full xl:ml-24 lg:-mt-36 xl:-mt-40 hidden lg:block'  data-aos="fade-up" style={{width:'500px'}}></img>
                            </div>
                        </div>
                    </div>

                    <div className='  md:mx-64 pb-20 mt-5' data-aos="fade-up">
                        <p className='text-2xl lg:text-6xl text-center text-zinc-800 font-extrabold'>We convert  your ideas into a simple web solution.</p>
                    </div>
            </section>

            <section className='w-10/12 mx-auto bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 rounded-xl' data-aos="zoom-in">
                <div className='w-10/12 mx-auto py-16'>
                    <div>
                        <p className='text-white text-lg font-semibold font-gilroythin leading-7'>We proudly work with</p>
                        <div className='grid grid-cols-2 lg:grid-flow-col gap-6 mt-2' >
                        <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1654242052/codler/ugrabin_1_uqvlzt.png'} className='w-56 h-20 mt-7'></img>
                       <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1654512828/codler/car_chilly_au9rkh.png'} className='lg:w-36 lg:h-16 mt-10 xs:mt-12 lg:mt-9'></img>
                       <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1654242041/codler/CEANOR_xslfif.png'} className='w-64 h-20 xl:-ml-12 mt-4 '></img>
                       <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1654242046/codler/ondaceimg_1_qg7zrj.png'} className='w-56 mt-4 h-16'></img>
                        </div>
                    </div>
                </div>
            </section>

            <section className='w-10/12 mx-auto mt-10 py-12 md:py-28'>
                <div className='grid grid-cols-1 lg:grid-cols-3'>
                    <div data-aos="fade-right">
                        <h4 className='text-zinc-900 text-8xl font-extrabold absolute'>03</h4>
                        <div className='grid grid-cols-2 '>
                        <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648586675/codler/Line_6_biat0b.png'} className='h-0.5 w-10 mt-12 relative z-200 pr-2'></img>
                        <p className='text-white relative text-sm font-semibold font-gilroythin tracking-[0.2rem] xs:-ml-20 sm:-ml-28 md:-ml-64 lg:-ml-36 mt-10'>OUR STRENGTH</p>
                        </div>
                        <p className='text-white relative text-2xl -mt-2 md:text-4xl font-semibold '>Our core value</p>
                    </div>
                    <div className='col-span-2'>
                        <div className='grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 gap-y-8 lg:gap-y-14' >
                            <div data-aos="fade-up">
                                <div className='flex pt-10 lg:pt-0'>
                                    <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648585975/codler/Union_h18vh6.png'} className='h-8 md:h-12 '></img>
                                    <p className='text-white pl-4 text-2xl font-semibold'>Client satisfaction<br></br> at its highest level</p>
                                </div>
                                <p  className='text-zinc-300 pl-14 text-sm lg:px-16  font-normal font-light  tracking-normal font-gilroythin'>Specifically having satisfied clients accounts for our success. It is a core part of our strategy. This kind of praise is pure bliss to us, so that we'd like to hear it more often. It's a never-ending desire in us - it's built-in to our DNA.</p>
                            </div>
                            <div data-aos="fade-up">
                                <div className='flex'>
                                    <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648585993/codler/Vectors16_ssimsk.png'} className='h-12 mt-1'></img>
                                    <p className='text-white pl-4 text-2xl font-semibold'>Approach with<br></br> a Vision</p>
                                </div>
                                <p className='text-zinc-300 pl-16 lg:px-16 text-sm  font-gilroythin font-light  tracking-normal'>Our performance is dependent on our vision and how we make it a reality. We follow our ideals throughout the whole process, from recruiting to exceptional outputs. We realize the necessity of meeting client expectations in order to provide high-quality products.</p>
                            </div>
                            <div data-aos="fade-up">
                                <div className='flex'>
                                    <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648586005/codler/Vectors17_dzs170.png'} className='h-12'></img>
                                    <p className='text-white pl-4 text-2xl font-semibold'>Genuity</p>
                                </div>
                                <p className='text-zinc-300 pl-16 md:pl-10 text-sm lg:px-16 font-gilroythin font-light  tracking-normal'>Integrity is at the heart of everything we do, and it is the foundation of our work. It's about keeping our promises, being honest and fair in business and everyday life in particular.</p>
                            </div>
                            <div data-aos="fade-up">
                                <div className='flex'>
                                    <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648586016/codler/Vectors13_b7gsxi.png'} className='h-12'></img>
                                    <p className='text-white pl-3 text-2xl font-semibold'>Amazing Environment</p>
                                </div>
                                <p className='text-zinc-300 pl-16  text-sm lg:px-16 font-light  font-gilroythin tracking-normal'>All that Codlerr has to offer includes promises, global recognitions, and testaments. Besides, we value the variety of opinions, cultures, and people with the utmost respect. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


                     
            <section className='w-11/12 lg:w-10/12 mx-auto bg-zinc-900 rounded-xl lg:mb-36'>
              
                <div className="py-10 md:py-20   overflow-hidden">
                    <div className="">
                        
                        <div className="w-full blur-2xl lg:ml-40  z-0 " data-aos="fade-left">
                            <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648586725/codler/blurimage1_nwjuem.png'} alt="mobile"  className="hidden lg:block lg:w-3/4 opacity-50 mt-12" data-aos="zoom-in"/>
                        </div>
                      
                    </div>
                    {/* style={{ width: '60%', height: '200px' }} */}
                    <div className='lg:-mt-64 xl:-mt-80' data-aos="fade-up">
                        <div className='flex justify-center xs:-ml-5 md:ml-0 '>
                            <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648586675/codler/Line_6_biat0b.png'} className='h-0.5 w-10 mt-1.5 pr-2'></img>
                            <p className='text-white text-base leading-3 tracking-widest'>PROCESS WE FOLLOW</p>
                        </div>
                        <div className='flex justify-center'>
                        <p className='text-white text-center md:-mt-2 text-xl lg:text-4xl font-semibold '>Inbuilt Ux Provides<br></br> a HigherCustomer Experience<br></br> & a Greter Impact</p>

                        </div>
                        <div className='flex justify-center'>
                        <p className='text-zinc-200 text-center font-gilroythin leading-5 text-xs md:block hidden lg:text-base tracking-wide'> Codlerr helps your business's portal installation of secure digital access to<br/> improve customer engagement and, as a result, business growth.</p>

                        </div>
                    </div>
                                    {/* process we follow grid*/}
                                <div className='w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-2 pt-16 gap-x-10' data-aos="fade-up">
                                        <div className='bg-gradient-to-r from-zinc-600 to-zinc-800 rounded-2xl'>
                                            <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648586179/codler/Group_2142_u2dlcf.png'} className='absolute -ml-8 lg:-ml-10 -mt-10 h-20 w-20'></img>
                                            <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648586198/codler/vector11_ruduxt.png'} className='absolute -ml-2 lg:-ml-4 -mt-4 h-8 w-8'></img>
                                            <div className='py-6 px-6 lg:px-16'>
                                            <p className='text-white text-lg font-semibold font-gilroythin tracking-wider'>Gathering of data</p>
                                            <p className='text-white -mt-2 font-gilroythin sm:text-sm'>Codlerr helps your business's portal installation of secure digital access to improve customer engagement and, as a result, business growth.</p>
                                            </div>
                                        </div>
                                        <div>
                                            <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648586455/codler/Vector_2_ejgwzu.png'} className='absolute pt-24 -ml-8 w-80 hidden lg:block'></img>
                                        </div>
                                </div>

                                <div className='w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-10 pt-6 lg:pt-0 md:-mt-3' data-aos="fade-up">
                                    <div>
                                    <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648586549/codler/Vector_3_yqb88u.png'} className='pt-24 mt-3 ml-56 w-64 absolute hidden lg:block'></img>
                                    </div>
                                    <div className='bg-gradient-to-r from-zinc-600 to-zinc-800 rounded-2xl mt-10'>
                                            <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648586179/codler/Group_2142_u2dlcf.png'} className='absolute -ml-8 lg:-ml-10 -mt-10 h-20 w-20'></img>
                                            <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648586208/codler/Vector12_m5fafp.png'} className='absolute -ml-2 lg:-ml-4 -mt-4 h-8 w-8'></img>
                                            <div className='py-6 px-6 lg:px-16'>
                                            <p className='text-white text-xl font-semibold font-gilroythin tracking-wider'>Project framework</p>
                                            <p className='text-white -mt-2 font-gilroythin sm:text-sm'>We will provide an appropriate framework model and price for project requirements accordingly.</p>
                                            </div>
                                    </div>
                                </div>

                                <div className='w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-10 pt-16 lg:pt-2 md:-mt-5' data-aos="fade-up">
                                        <div className='bg-gradient-to-r from-zinc-600 to-zinc-800 rounded-2xl'>
                                            <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648586179/codler/Group_2142_u2dlcf.png'} className='absolute -ml-8 lg:-ml-10 -mt-10 h-20 w-20'></img>
                                            <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648586236/codler/vector13_jgyrqf.png'} className='absolute -ml-2 lg:-ml-4 -mt-4 h-8 w-8'></img>
                                            <div className='py-6 px-6 lg:px-16'>
                                            <p className='text-white text-xl font-semibold font-gilroythin tracking-wider'>The Project's Main Focus</p>
                                            <p className='text-white -mt-2 font-gilroythin sm:text-sm'>Your project is assigned to a skilled team based on the framework model. </p>
                                            </div>
                                        </div>
                                </div>
                                {/* process we follow grid end*/}

                             
                </div>
                    
            </section>
                   
            <section className='w-10/12 mx-auto mt-10 lg:mt-0 md:mt-12 '>
                    <div data-aos="fade-up">
                        <p className='text-white sm:text-4xl tracking-wide font-gilroybold text-center'>Industries we serve</p>
             
                            <div className='w-10/12 lg:w-full mx-auto grid grid-cols-2 lg:flex lg:justify-evenly md:pt-8' >
                                <div className='flex cursor-pointer'><img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648586784/codler/Ellipse_36_uaivz5.png'} className='h-3 mt-0.5 lg:mt-2 pr-2'></img><p className='text-white pr-4 text-xs lg:text-xl'>Real estate</p></div>
                                <div className='flex cursor-pointer'><img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648586784/codler/Ellipse_36_uaivz5.png'} className='h-3 mt-0.5 lg:mt-2 pr-2'></img><p className='text-white pr-4 text-xs lg:text-xl'>Food & Restaurant</p></div>
                                <div className='flex cursor-pointer'><img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648586784/codler/Ellipse_36_uaivz5.png'} className='h-3 mt-0.5 lg:mt-2 pr-2'></img><p className='text-white pr-4 text-xs lg:text-xl'>Banking & Finance</p></div>
                                <div className='flex cursor-pointer'><img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648586784/codler/Ellipse_36_uaivz5.png'} className='h-3 mt-0.5 lg:mt-2 pr-2'></img><p className='text-white pr-4 text-xs lg:text-xl'>Education & Training</p></div>
                                <div className='flex cursor-pointer'><img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648586784/codler/Ellipse_36_uaivz5.png'} className='h-3 mt-0.5 lg:mt-2 pr-2'></img><p className='text-white pr-4 text-xs lg:text-xl'>E-Commerce</p></div>
                                <div className='flex cursor-pointer'><img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648586784/codler/Ellipse_36_uaivz5.png'} className='h-3 mt-0.5 lg:mt-2 pr-2'></img><p className='text-white pr-4 text-xs lg:text-xl'>Media</p></div>

                            </div>                        
                            <div className='w-10/12 lg:w-11/12 mx-auto grid grid-cols-2 lg:flex lg:justify-evenly' >
                                <div className='flex cursor-pointer'><img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648586784/codler/Ellipse_36_uaivz5.png'} className='h-3 mt-0.5 lg:mt-2 pr-2'></img><p className='text-white text-xs lg:text-xl'>Travel</p></div>
                                <div className='flex cursor-pointer'><img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648586784/codler/Ellipse_36_uaivz5.png'} className='h-3 mt-0.5 lg:mt-2 pr-2'></img><p className='text-white text-xs lg:text-xl'>Hospitality</p></div>
                                <div className='flex cursor-pointer'><img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648586784/codler/Ellipse_36_uaivz5.png'} className='h-3 mt-0.5 lg:mt-2 pr-2'></img><p className='text-white text-xs lg:text-xl'>Healthcare</p></div>
                                <div className='flex cursor-pointer'><img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648586784/codler/Ellipse_36_uaivz5.png'} className='h-3 mt-0.5 lg:mt-2 pr-2'></img><p className='text-white text-xs lg:text-xl'>Fitness</p></div>
                                <div className='flex cursor-pointer'><img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648586784/codler/Ellipse_36_uaivz5.png'} className='h-3 mt-0.5 lg:mt-2 pr-2'></img><p className='text-white text-xs lg:text-xl'>Entertainment</p></div>
                                <div className='flex cursor-pointer'><img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648586784/codler/Ellipse_36_uaivz5.png'} className='h-3 mt-0.5 lg:mt-2 pr-2'></img><p className='text-white text-xs lg:text-xl'>Logistics Real</p></div>

                            </div>
                            
                    </div>
                    <p className='pt-20  mx-24 text-zinc-300  text-center text-xs lg:text-lg font-gilroythin md:mt-12' data-aos="fade-up">The Codlerr team of top experts can assist you with any industrial project you select, regardless of its scale or complexity. It is important for us to keep up with the latest developments in the industry in which we work.Our inventive professionals provide you with highly competent and customer-centric solutions. From small companies to multinationals, our top-notch mobile app, web development and designing services are available to businesses of all sizes.</p>
            </section>

            <section className='lg:py-0 md:-mt-24 lg:-mt-10 xl:-ml-24 md:mb-24'>
                        <div className="blur-xl z-0 ">
                            <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1648586941/codler/lineshade_z7kfah.png'} alt="mobile"  className="" data-aos="zoom-in" />
                            
                        </div>
                        <div>
                        <p className='text-white text-center sm:text-xl lg:text-4xl -mt-20 lg:-mt-60 pb-40 blur-none font-bold' data-aos="fade-up">Here, your ideas are<br></br> developed for a quality drive.</p>
                        </div>
            </section>
            
           
            </div>
        )
}
export default Aboutus;