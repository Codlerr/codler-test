import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import shade from '../images/onclick/lineshade.png';
import bub from '../images/onclick/bubble1@2x 2.png';
import bubhalf from '../images/onclick/bubble12x 2.png';
import drop from '../images/onclick/img4@2x 1.png';
import s1 from '../images/onclick/Vector.png';
import s2 from '../images/onclick/Vector (1).png';
import s3 from '../images/onclick/Vector (2).png';
import s4 from '../images/onclick/Vector (3).png';
import s5 from '../images/onclick/g12.png';
import s6 from '../images/onclick/Vector (4).png';
import line from '../images/onclick/Line 6.png';


function OnClickMobile() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <div>
            
                                                                       
                <section>
                    <div className=''>
                    <img src={shade} className='blur-lg z-0 absolute pt-40 lg:pt-16' data-aos="zoom-in"></img>
                        <div className='text-white text-center blur-none py-40' data-aos="fade-up">
                            <p className='text-3xl lg:text-4xl font-bold'>Building Native & Cross<br></br> Platform Mobile Apps</p>
                            <p className='text-sm lg:text-lg mx-10 lg:mx-80'>Codlerr helps to conceptualize, design, develop, and implement mobile app solutions for enterprises and startups</p>
                        </div>
                        
                    </div>
                        <div className='hidden lg:block'>
                            <img src={bubhalf} className='absolute w-20 lg:-mt-40'></img>
                            <img src={bub} className='absolute w-14 lg:-mt-40 left-24'></img>
                            <img src={bub} className='absolute w-4 lg:-mt-40 left-16'></img>
                            <img src={drop} className='absolute right-0 w-24 lg:-mt-24'></img>
                        </div>
                </section>

                <section className='bg-zinc-900 -mt-12 md:mt-0'>
                        <div className='text-center py-10' data-aos="fade-up">
                            <p className='text-zinc-800 text-7xl lg:text-8xl font-extrabold'>01</p>
                            <p className='text-white -mt-16 font-semibold'><span className=' text-violet-500 pr-2'>--</span>LEARN MORE ON</p>
                            <p className='text-white -mt-2 text-xl lg:text-3xl font-semibold tracking-widest' data-aos="fade-right" data-aos-delay="500">Mobile Technologies We Use</p>
                        </div>

                        <div className='w-10/12 mx-auto pb-14 mb-20'>
                            <div className='grid grid-cols-1 grid-rows-1 lg:grid-cols-2 lg:grid-rows-3 gap-4'>
                                <div className='bg-gradient-to-r from-zinc-800 to-zinc-700 rounded-lg text-white py-6 px-8' data-aos="fade-up">
                                    <img src={s1}></img>
                                    <p className='pt-4 font-semibold'>iOS Apps Development</p>
                                    <p className='text-zinc-400 text-sm'>Crafting apps for iPhone, iPad, Apple Watch, Apple TV, etc. with AI & ML integration and more, keeping users at the core.</p>
                                </div>
                                <div className='bg-gradient-to-r from-zinc-800 to-zinc-700 rounded-lg text-white py-6 px-8' data-aos="fade-up">
                                    <img src={s2} className='w-10'></img>
                                    <p className='pt-4 font-semibold'>Android Apps Development</p>
                                    <p className='text-zinc-400 text-sm'>Our dev team helps you craft native Android apps for Smartphones, Tablets, Android Wear, and Android TV from the scratch.</p>
                                </div>
                                <div className='bg-gradient-to-r from-zinc-800 to-zinc-700 rounded-lg text-white py-6 px-8' data-aos="fade-up">
                                    <img src={s3}></img>
                                    <p className='pt-4 font-semibold'>React Native Apps Development</p>
                                    <p className='text-zinc-400 text-sm'>Delivering affordable yet fast, powerful, and high performing cross-platform apps with native look and feel.</p>
                                </div>
                                <div className='bg-gradient-to-r from-zinc-800 to-zinc-700 rounded-lg text-white py-6 px-8' data-aos="fade-up">
                                    <img src={s4}></img>
                                    <p className='pt-4 font-semibold'>Flutter Apps Development</p>
                                    <p className='text-zinc-400 text-sm'>Ever since its existence, we have been crafting native and cross-platform apps using this open source mobile SDK.</p>
                                </div>
                                <div className='bg-gradient-to-r from-zinc-800 to-zinc-700 rounded-lg text-white py-6 px-8' data-aos="fade-up">
                                    <img src={s5}></img>
                                    <p className='pt-4 font-semibold'>Ionic Apps Development</p>
                                    <p className='text-zinc-400 text-sm'>Crafting fast and interactive hybrid applications that work perfectly on web, mobile and desktop devices using Ionic.</p>
                                </div>
                                <div className='bg-gradient-to-r from-zinc-800 to-zinc-700 rounded-lg text-white py-6 px-8' data-aos="fade-up">
                                    <img src={s6}></img>
                                    <p className='pt-4 font-semibold'>CMS</p>
                                    <p className='text-zinc-400 text-sm'>Our hands-on experience with popular CMS tools helps enterprises to create and manage their digital content with greater flexibility and ease.</p>
                                </div>
                            </div>
                        </div>
                </section>
                                                                        
    

        </div>
        )
}
export default OnClickMobile;