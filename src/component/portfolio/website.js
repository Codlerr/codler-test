import react from 'react';
import { Website } from '../../constants/constants';
import '../../App.css';
import { useNavigate } from "react-router-dom";
function display(index){
    return(
        <div className='cursor-pointer hover:scale-[1.1] grid h-96 grid-rows-2 relative rounded-lg'  style={{background:`${index.bgcolor}`,color:`${index.color}`}} > 
        <div className=' '>
           <p className=' font-bold text-center mt-10'>{index.name} Landing page</p>
           <p className=' text-xs font-gilroythin mx-3 md:mx-10'>{index.description}</p>
        </div>
        <div className='px-3 '>
        <img src={index.src} className=' rounded block mt-3 h-36 w-full ' alt='img'/>
        <div className='image_overlay image_overlay_blur'>
        <p className='text-white text-md font-bold font-gilroythin realtive z-100 '>{index.name}</p>
        </div>
        </div>
        </div>
    )
}
function DisplayPicturesWebsite(){
    const navigate = useNavigate('');
    return(
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mt-16'>
        {Website.map(display)}
        </div>
    )
}
export default DisplayPicturesWebsite;