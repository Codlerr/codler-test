import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import shade from '../images/onclick/lineshade.png';
import { images } from '../constants/constants';
import '../App.css';
import {Helmet} from 'react-helmet';

function Teams() {
    images.map((index)=>console.log(index.name));
    function display(index){
        return(
            <div className='w-96 h-96'>
            <img src={index.url} alt="" className='w-[328ox] h-[220px] rounded-lg'/>
            <p className='ml-12 text-white text-sm'>{index.name}</p>
            <p className=' textlbg -mt-4 ml-12 text-xs'>{index.designation}</p>
            </div>
        )
    }
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <div>
            <Helmet>
               <title>Our Team</title>
               <meta name="description" content="do u want to know who we are?" />
          b   </Helmet>                                                        
                <section className='h-96'>
                    <div className=''>
                    <img src={shade} className='blur-lg z-0 absolute  pt-40 lg:pt-16' data-aos="zoom-in"></img>
                        <div className='text-white blur-none py-40 mx-12 lg:mx-36' data-aos="fade-up">
                            <p className='text-3xl w-48 lg:text-2xl font-bold tracking-wide underline decoration-pink-700 decoration-[6px]'>It's all about the people</p>
                            <p className='text-xs  lg:text-sm lg:w-96'>We are goodones and so are your Clients.We wouldn't have it any other way.Meet the team</p>
                        </div>
                        
                    </div>
                </section>

                <section className='overflow-hidden '>
                    <div className='lg:mx-36 mx-10 sm:mx-20 md:mx-12  grid md:grid-cols-3 xl:grid-cols-4  '>
                       {images.map(display)}
                   </div>
                </section>
                                                                        
    

        </div>
        )
}
export default Teams;