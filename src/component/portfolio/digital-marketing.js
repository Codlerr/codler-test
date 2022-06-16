import '../../App.css';
import { Digital,DigitalVideos} from '../../constants/constants';
function display(index){
    return(
        <div className='cursor-pointer sm:p-3 grid md:p-10 grid-cols-2 hover:scale-[1.1]  relative rounded-lg' style={{background:`${index.bgcolor}`,color:`${index.fontcolor}`}} > 
        <div className='mt-2 px-1'>
           <p className=' font-bold  mt-10'>{index.name} Landing page</p>
           <p className=' text-xs mx-1 font-gilroythin'>{index.description}</p>
        </div>
        <div className='md:w-[230px] '>
        <img src={index.src} className=' rounded md:h-64 block sm:mt-20 md:mt-0 ' alt='img'/>
        <div className='image_overlay image_overlay_blur'>
        <p className='text-white text-md font-bold font-gilroythin realtive z-100 '>{index.name}</p>
        </div>
        </div>
        </div>
    )
}
function displayVideos(index){
    return(
        <div className='cursor-pointer p-5  relative rounded-lg' style={{background:`${index.bgcolor}`,color:`${index.fontcolor}`}} onClick={()=> navigate('/portfolio/krijay')}> 
        <video className='md:w-[600px] md:h-[300px]' controls autoPlay>
            <source src={index.src} type='video/mp4'></source>
        </video>
        <div className='image_overlay image_overlay_blur'>
        <p className='text-white text-md font-bold font-gilroythin realtive z-100 '>{index.name}</p>
        </div>
        </div>
    
    )
}
function DisplayPictures(){
    return(
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-16'>
         {Digital.map(display)}
        </div>
    )
}
export default DisplayPictures;