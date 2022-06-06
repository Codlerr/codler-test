import react from 'react';
import { Digital } from '../../constants/constants';
function display(index){
    return(
        <div className=' '>
        <img src={index.src} className='w-[1200px] rounded h-full' alt='img'/>
        </div>
    )
}
function DisplayPictures(){
    return(
        <div className='grid grid-cols-2 gap-10 mt-16'>
         {Digital.map(display)}
        </div>
    )
}
export default DisplayPictures;