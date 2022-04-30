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
        <p className='text-lg md:text-xl text-white xs:px-2 sm:px-0 font-bold underline decoration-pink-700 decoration-[6px] '>It's all about<br/> the people</p>
        <div className='grid  grid-cols-1 md:grid-cols-2 '>
        <p className='text-xs md:text-sm font-light tracking-wider text-white w-80 xs:px-2 sm:px-0'>We are goodones.and so are your clients.We wouuldn’t have it any other way. Meet the team</p>
        <div className='grid grid-cols-2 w-20 ml-28 mt-3 md:mt-0 md:ml-[85%]'>
        <div>
        <ArrowCircleLeftIcon style={{fontSize:'35px'}} className='cursor-pointer hover:text-gray-400' onClick={()=>sliderRef.current.slickPrev()} />
        </div>
        <div className="">
        <ArrowCircleRightSharpIcon style={{fontSize:'35px'}} className='cursor-pointer hover:text-gray-400' onClick={()=>sliderRef.current.slickNext()}/>
        </div>
        </div>
        </div>
        
      <div className=" mt-5 lg:mt-5 md:w-full xs:-ml-3 sm:ml-0 sm:px-6 md:px-0">
        <Slider ref={sliderRef} arrows={false} slidesToShow={4} {...settings}>
        <div>
          <img src={images[0].url} alt='image' className='w-[227px] h-[228px] ml-4 rounded-lg'/>
          <p className="text-white font-semibold text-sm ml-24 mt-1">N Manasa</p>
          <p className="textlbg font-semibold text-xs ml-[70px] -mt-4">SENIOR CONTENT WRITER</p>
          </div>
          <div>
          <img src={images[1].url} alt='image' className='w-[227px] h-[228px] ml-4 rounded-lg'/>
          <p className="text-white font-semibold text-sm ml-24 mt-1">Rashid PK</p>
          <p className="textlbg font-semibold text-xs ml-[90px] -mt-4">WEB DEVELOPER</p>
          </div>
          <div className="">
          <img src={images[2].url} alt='image' className='w-[227px] h-[228px] ml-2 rounded-lg'/>
          <p className="text-white font-semibold text-sm ml-20 mt-1">Suha Fazal</p>
          <p className="textlbg font-semibold text-xs ml-[70px] -mt-4">SOCIAL MEDIA MARKETER</p>
          </div>
          <div className='ml-3 md:ml-0'>
            <img src={images[3].url} alt='image' className='w-[227px] h-[228px] rounded-lg'/>
            <p className="text-white font-semibold text-sm ml-16 mt-1">Mirza Sadique</p>
            <p className="textlbg font-semibold text-xs ml-[90px] -mt-4">INTERN</p>
          </div>
          <div>
          <img src={images[4].url} alt='image' className='w-[227px] h-[228px] ml-3 rounded-lg'/>
          <p className="text-white font-semibold text-sm ml-20 mt-1">Noora Latheef</p>
          <p className="textlbg font-semibold text-xs ml-20 -mt-4">WEB DEVELOPER</p>
          </div>
          <div>
          <img src={images[5].url} alt='image' className='w-[227px] h-[228px] ml-4 rounded-lg'/>
          <p className="text-white font-semibold text-sm ml-20 mt-1">Haniyya Hessa Sharfu</p>
          <p className="textlbg font-semibold text-xs ml-[130px] -mt-4">INTERN</p>
          </div>
        </Slider>
      </div>
        </div>
    );

}