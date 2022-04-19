import React, { Component,useRef } from "react";
import Slider from "react-slick";
import {images } from '../constants/constants';
import ArrowCircleRightSharpIcon from '@mui/icons-material/ArrowCircleRightSharp';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import '../App.css'
export default function Imageslider() {
    const sliderRef=useRef(null);
    let settings = {
  
        responsive: [{
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll:1,
            initialSlide: 2
          }
        }]
      };
    return (
        <div className="py-10 md:py-0">
        <p className='text-lg md:text-xl text-white font-bold underline decoration-pink-700 decoration-[6px] '>It's all about<br/> the people</p>
        <div className='grid  grid-cols-1 md:grid-cols-2 '>
        <p className='text-xs tracking-wider text-white w-80'>We are goodones.and so are your clients.We wouuldn’t have it any other way. Meet the team</p>
        <div className='grid grid-cols-2 w-20 ml-28 mt-3 md:mt-0 md:ml-[85%]'>
        <div>
        <ArrowCircleLeftIcon style={{fontSize:'35px'}} className='cursor-pointer hover:text-gray-400' onClick={()=>sliderRef.current.slickPrev()} />
        </div>
        <div className="">
        <ArrowCircleRightSharpIcon style={{fontSize:'35px'}} className='cursor-pointer hover:text-gray-400' onClick={()=>sliderRef.current.slickNext()}/>
        </div>
        </div>
        </div>
        
      <div className="w-[100%] mt-5 lg:mt-5 ml-[25px] md:ml-0">
        <Slider ref={sliderRef} arrows={false} slidesToShow={4} {...settings}>
          <div>
            <img src={images[0].url} alt='image' className='w-[227px] h-[228px] rounded-sm'/>
            <p className="text-white font-semibold text-sm ml-16 mt-1">Mirza Sadique</p>
            <p className="textlbg font-semibold text-xs ml-16 -mt-4"> UI Designer</p>
          </div>
          <div>
          <img src={images[1].url} alt='image' className='w-[227px] h-[228px] ml-2 rounded-sm'/>
          <p className="text-white font-semibold text-sm ml-20 mt-1">Rashid PK</p>
          <p className="textlbg font-semibold text-xs ml-20 -mt-4">Web Developer</p>
          </div>
          <div>
          <img src={images[2].url} alt='image' className='w-[227px] h-[228px] ml-3rounded-sm'/>
          <p className="text-white font-semibold text-sm ml-10 mt-1">Haniyya Hessa Sharfu</p>
          <p className="textlbg font-semibold text-xs ml-20 -mt-4">UI Designer</p>
          </div>
          <div>
          <img src={images[3].url} alt='image' className='w-[227px] h-[228px] ml-4 rounded-sm'/>
          <p className="text-white font-semibold text-sm ml-24 mt-1">N Manasa</p>
          <p className="textlbg font-semibold text-xs ml-24 -mt-4">UI Designer</p>
          </div>
          <div>
          <img src={images[4].url} alt='image' className='w-[227px] h-[228px] ml-4 rounded-sm'/>
          <p className="text-white font-semibold text-sm ml-20 mt-1">Noora Latheef</p>
          <p className="textlbg font-semibold text-xs ml-20 -mt-4">Web Developer</p>
          </div>
        </Slider>
      </div>
        </div>
    );

}