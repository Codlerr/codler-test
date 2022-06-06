import react from 'react';
import {App} from '../../constants/constants';
function display(index){
    return(
        <div className=' '>
        <img src={index.src} className='w-[1200px] rounded h-full' alt='img'/>
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