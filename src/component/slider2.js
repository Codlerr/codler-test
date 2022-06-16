import React, {useRef} from "react";
import Slider from "react-slick";
import ArrowCircleRightSharpIcon from '@mui/icons-material/ArrowCircleRightSharp';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { images } from "../constants/constants";
import "../App.css"
{/*function Slider2() {
    const sliderRef=useRef(null);
    const settings = {
      className: "center",
      centerMode: true,
      centerPadding: "5px",
      slidesToShow: 3,
      speed: 700
    };
    return (
      <div>
        <div className='grid grid-cols-2  ml-28 mt-3 md:mb-12 '>
        <div className='hidden md:block'>
        <ArrowCircleLeftIcon style={{fontSize:'35px'}} className='cursor-pointer hover:text-gray-400 md:ml-36 lg:ml-56 xl:ml-80 hidden md:block' onClick={()=>sliderRef.current.slickPrev()} />
        </div>
        <div className="hidden md:block">
        <ArrowCircleRightSharpIcon style={{fontSize:'35px'}} className='cursor-pointer hover:text-gray-400 md:ml-12 lg:ml-24 xl:ml-36 hidden md:block' onClick={()=>sliderRef.current.slickNext()}/>
        </div>
        </div>
        <Slider ref={sliderRef} {...settings} className='w-full mb-12 mt-5 px-12'>
          <div className='px-3'>
            <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1654703958/codler/IMG-20220111-WA0019_v0zfan.jpg'} className='md:w-[150%] w-36 h-28 md:h-96'/>
          </div>
          <div className='px-3'>
          <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1654703957/codler/IMG-20220115-WA0017_pvldws.jpg'} className='md:w-[120%] w-36 h-28  md:h-96'/>
          </div>
          <div className='px-3'>
          <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1654703957/codler/IMG-20211223-WA0066_hz6qf9.jpg'} className='md:w-[120%] w-36 h-28 md:h-96'/>
          </div>
          <div className='px-3'>
          <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1654281802/codler/c6f59564-3781-4afe-b608-94402f1ef6b4_m61akc.jpg'} className='md:w-[120%] w-36 h-28 md:h-96'/>
          </div>
          <div className='px-3'>
          <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1654281802/codler/c6f59564-3781-4afe-b608-94402f1ef6b4_m61akc.jpg'} className='md:w-[120%] w-36 h-28 md:h-96'/>
          </div>
          <div className='px-3'>
          <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1654281802/codler/c6f59564-3781-4afe-b608-94402f1ef6b4_m61akc.jpg'} className='md:w-[120%] w-36 h-28 md:h-96'/>
          </div>
        </Slider>
      </div>
    );
}*/}
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Navigation
} from "swiper/core";

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

export default function Slider2() {
  return (
    <div className="container2 my-20 ">
      <div className="title_wrapper">
        <div className="reactLogo">
        </div>
        <div className="title_">
        </div>
      </div>
      <Swiper
        navigation={true}
        effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        }}
        pagination={{
          clickable: true
        }}
        className="mySwiper"
      >
        
        <SwiperSlide>
               <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1654703958/codler/IMG-20220111-WA0019_v0zfan.jpg'} className=''/>
            </SwiperSlide>
            <SwiperSlide>
               <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1654281802/codler/c6f59564-3781-4afe-b608-94402f1ef6b4_m61akc.jpg'} className=''/>
              </SwiperSlide>
            <SwiperSlide>
            <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1654281802/codler/c6f59564-3781-4afe-b608-94402f1ef6b4_m61akc.jpg'} className=''/>
            </SwiperSlide>
            <SwiperSlide>
            <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1654281802/codler/c6f59564-3781-4afe-b608-94402f1ef6b4_m61akc.jpg'} className=''/>
            </SwiperSlide>
      </Swiper>
    </div>
  );
}
