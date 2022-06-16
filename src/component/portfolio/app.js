import react from 'react';
import {App} from '../../constants/constants';
import { useNavigate } from "react-router-dom";
function display(index){
    const navigate = useNavigate('');
    return(
        <div className='cursor-pointer grid p-10 grid-cols-2 relative rounded-lg' style={{background:`${index.bgcolor}`,color:`${index.fontcolor}`}} > 
         <div className='w-[230px]'>
        <img src={index.src} className=' rounded h-64 block ' alt='img'/>
        <div className='image_overlay image_overlay_blur'>
        <p className='text-white text-md font-bold font-gilroythin realtive z-100 '>{index.name}</p>
        </div>
        </div>
        <div className='mt-3 ml-12'>
           <p className=' font-bold  mt-10'>{index.name} Landing page</p>
           <p className=' text-xs font-gilroythin'>{index.description}</p>
        </div>
        </div>
    )
}
function DisplayPicturesApp(){
    return(
        <div className='grid grid-cols-2 gap-10 mt-16'>
        {App.map(display)}
       </div>
    )
}
export default DisplayPicturesApp;