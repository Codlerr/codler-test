import react from 'react';
import {Branding,BrandingBrochures} from '../../constants/constants';
function display(index){
    return(
        <div className='cursor-pointer pb-3 relative rounded-lg hover:scale-[1.1]' style={{background:`${index.bgcolor}`}} onClick={()=> navigate(`${index.link}`)}> 
        <div>
           <p className='text-black font-bold text-center mt-10'>{index.name} Landing page</p>
           <p className='text-black text-xs font-gilroythin lg:mx-10'>{index.description}</p>
        </div>
        <div className='px-3 pt-3'>
        <img src={index.src} className=' rounded block h-64 w-full' alt='img'/>
        <div className='image_overlay image_overlay_blur'>
        <p className='text-white text-md font-bold font-gilroythin realtive z-100 '>{index.name}</p>
        </div>
        </div>
        </div>
        )
    }
    function displayBrochures(index){
        return(
            <>
            <a href={index.alink}>
        <div className='cursor-pointer p-5  relative rounded-lg' style={{background:`${index.bgcolor}`,color:`${index.fontcolor}`}} > 
        <img src={index.src} className=' rounded block h-64 w-full' alt='img'/>
        <div className='image_overlay image_overlay_blur'>
        <p className='text-white text-md font-bold font-gilroythin realtive z-100 '>{index.name}</p>
        </div>
        </div>
        </a>
            </>
        
        )
    }
function DisplayPicturesBranding(){
    return(
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-16'>
        {Branding.map(display)}
       </div>
    )
}
export default DisplayPicturesBranding;