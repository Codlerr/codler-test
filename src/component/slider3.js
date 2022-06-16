import React, {useRef} from "react";
import Slider from "react-slick";
import ArrowCircleRightSharpIcon from '@mui/icons-material/ArrowCircleRightSharp';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { images } from "../constants/constants";
function Slider3() {
    const sliderRef=useRef(null);
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed:5000,
        autoplaySpeed: 5000,
        cssEase: "linear"
      };
    return (
      <div>
        <div className='p-5 mt-3 md:mb-12 '>
        <Slider ref={sliderRef} {...settings} className='w-full h-[400px]  mt-5'>
    
          <div className='px-3'>
            <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1654703958/codler/IMG-20220111-WA0019_v0zfan.jpg'} className='md:w-[150%] w-36 h-[400px]'/>
          </div>
          <div className='px-3'>
          <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1654703957/codler/IMG-20220115-WA0017_pvldws.jpg'} className='md:w-[120%] w-36 h-[400px]'/>
          </div>
          <div className='px-3'>
          <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1654703957/codler/IMG-20211223-WA0066_hz6qf9.jpg'} className='md:w-[120%] w-36 h-[400px]'/>
          </div>
          <div className='px-3'>
          <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1654281802/codler/c6f59564-3781-4afe-b608-94402f1ef6b4_m61akc.jpg'} className='md:w-[120%] w-36 h-[400px]'/>
          </div>
          <div className='px-3'>
          <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1654281802/codler/c6f59564-3781-4afe-b608-94402f1ef6b4_m61akc.jpg'} className='md:w-[120%] w-36 h-[400px]'/>
          </div>
          <div className='px-3'>
          <img src={'https://res.cloudinary.com/dbwyrrrqo/image/upload/v1654281802/codler/c6f59564-3781-4afe-b608-94402f1ef6b4_m61akc.jpg'} className='md:w-[120%] w-36 h-[400px]'/>
          </div>
        </Slider>
        </div>
      </div>
    );
}
export default Slider3;