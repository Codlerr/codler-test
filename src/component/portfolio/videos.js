import '../../App.css';
import { Digital,DigitalVideos} from '../../constants/constants';
function displayVideos(index){
    return(
        <div className='cursor-pointer  relative rounded-lg' style={{background:`${index.bgcolor}`,color:`${index.fontcolor}`}} > 
        <video className='md:w-[500px] md:h-[350px]' controls autoPlay>
            <source src={index.src} type='video/mp4'></source>
        </video>
        </div>
    
    )
}
function DisplayVideos(){
    return(
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-16'>
         {DigitalVideos.map(displayVideos)}
        </div>
    )
}
export default DisplayVideos;