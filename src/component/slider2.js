import React, {useRef} from "react";
import Slider from "react-slick";
import ArrowCircleRightSharpIcon from '@mui/icons-material/ArrowCircleRightSharp';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { images } from "../constants/constants";
function Slider2() {
    const sliderRef=useRef(null);
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "0px",
      slidesToShow: 3,
      speed: 500
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
        <Slider ref={sliderRef} {...settings}>
          <div className=''>
            <img src={require('../images/portfolio-images/port-inner/screenshot2.png')} className='md:w-[120%] w-36 h-28 md:h-96'/>
          </div>
          <div>
          <img src={require('../images/portfolio-images/port-inner/screenshot3.png')} className='md:w-[120%] w-36 h-28  md:h-96'/>
          </div>
          <div>
          <img src={require('../images/portfolio-images/port-inner/screenshot.png')} className='md:w-[120%] w-36 h-28 md:h-96'/>
          </div>
        </Slider>
      </div>
    );
}
export default Slider2;