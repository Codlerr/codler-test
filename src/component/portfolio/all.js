import {All } from '../../constants/constants';
import DisplayPictures from './digital-marketing';
import DisplayPicturesWebsite from './website';
import { Branding } from '../../constants/constants';
import DisplayPicturesBranding from './branding';
function display(index){
    return(
        <div className='cursor-pointer relative' >
        <img src={index.src} className='w-96 rounded h-80 block ' alt='img'/>
        <div className='image_overlay image_overlay_blur'>
        <p className='text-white text-md font-bold font-gilroythin realtive z-100 '>{index.name}</p>
        </div>
        </div>
    )
}
function DisplayPicturesAll(){
    return(
        <div className=' gap-10 mt-16'>
         <DisplayPictures/>
         <DisplayPicturesWebsite/>
         <DisplayPicturesBranding/>
        </div>
    )
}
export default DisplayPicturesAll;