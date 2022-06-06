import react from 'react';
import {Branding} from '../../constants/constants';
function display(index){
    return(
        <div className=' '>
        <img src={index.src} className='w-[1200px] rounded h-full' alt='img'/>
        </div>
    )
}
function DisplayPicturesBranding(){
    return(
        <div className='grid grid-cols-2 gap-10 mt-16'>
        {Branding.map(display)}
       </div>
    )
}
export default DisplayPicturesBranding;