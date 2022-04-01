import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import dp from '../images/faq/dp.png';
import shade from '../images/faq/lineshade.png';
import bub from '../images/faq/bubble1@2x 2.png';
import h1 from '../images/faq/General.png';
import h2 from '../images/faq/Web development..png';
import h3 from '../images/faq/Mobile development.png';
import h4 from '../images/faq/Our Devoted TEAM.png';
import drop1 from '../images/faq/drop1.png';
import drop2 from '../images/faq/drop2.png';
import line from '../images/faq/Line 6.png';






function Faq() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <div>

            <section>
                <img src={shade} className='blur-lg z-0 absolute' data-aos="zoom-in"></img>
                <div className='w-8/12 mx-auto grid grid-cols-1 lg:grid-cols-2'>
                    <div className='pt-40 pb-28 blur-none' data-aos="fade-up">
                        <span className='flex'><img src={line} className='w-6 h-0.5 mt-2.5'></img><p className='text-white font-semibold pl-2'>FAQ</p></span>
                        <p className='text-white text-xl lg:text-4xl tracking-wide font-semibold'>Do you hanve any question or quries, then please ask</p>
                        <div class="pt-4 lg:pt-8">
                            <form className=''>
                                 <input className='rounded-full h-10 w-full bg-zinc-700 outline-none text-white pl-10 pr-36' type='text' placeholder=''></input>
                                 <span className='text-zinc-300 absolute left-2 p-2'><i class="fa-solid fa-magnifying-glass"></i></span>
                                 <a href='#' className='absolute right-0 rounded-full no-underline bg-violet-800 h-10 w-28'><p className='text-white py-1.5 px-4'>Search</p></a>
                            </form>   
                        </div>
                    </div>
                    <div className='hidden lg:block' >
                        <img src={bub} className='absolute  pt-12 ml-60 w-24'></img>
                        <img src={bub} className='absolute  pt-28 ml-44 w-8'></img>
                        <img src={bub} className='absolute  pt-40 ml-56 w-4'></img>
                        <img src={dp} className='h-96 mt-24 ml-80 blur-none'></img>
                        

                    </div>
                </div>
            </section>

            <section className='bg-zinc-800'>
            <img src={drop2} className='absolute hidden lg:block right-0 h-40 mt-80' data-aos="fade-up"></img>
                <div className='w-9/12 lg:w-8/12 mx-auto py-10'>
                    <img src={h1} className='w-20 lg:w-28' data-aos="fade-up"></img>
                    <div className='pt-6' data-aos="fade-up">
                    <p className='text-white font-semibold lg:text-lg'>Which city does CODLERR call home? What is the size of the workforce?</p>
                    <p className='text-zinc-400 lg:w-4/5 text-xs lg:text-base'>Since 2021, we've been a top software development IT company based in Bangalore, India. We have a fantastic staff of around 200 people who are extraordinary.</p>
                    <hr class="my-4 text-zinc-200"/>
                    </div>

                    <div className='' data-aos="fade-up">
                    <p className='text-white font-semibold lg:text-lg'>Is there a paid assistance contract available at your company?</p>
                    <p className='text-zinc-400 lg:w-4/5 text-xs lg:text-base'>We do, in fact. After the project is done, you may request an extension of our project support. However, the cost varies from project to project. You can inquire about this once the project's size and scope have been determined.</p>
                    <hr class="my-4 text-zinc-200"/>
                    </div>

                    <div className='' data-aos="fade-up">
                    <p className='text-white font-semibold lg:text-lg'>Do you reuse your code?</p>
                    <p className='text-zinc-400 lg:w-4/5 text-xs lg:text-base'>We never reuse your software algorithms, licensing keys, or trade secrets. We employ a lot of open source libraries as well as our own libraries to reduce development time. This eliminates the need to pay for something that can be produced more quickly and with higher quality.</p>
                    <hr class="my-4 text-zinc-200"/>
                    </div>

                    <div className='' data-aos="fade-up">
                    <p className='text-white font-semibold lg:text-lg'>What is your approach to project development?</p>
                    <p className='text-zinc-400 lg:w-4/5 text-xs lg:text-base'>Each web or mobile app development project is different and requires a different methodology. Our development process includes gathering requirements, analysis, solution consulting, wireframing/prototyping, UI design, development, and testing. In detail, the order and selection of phases may vary depending on the scale and quality of the software development project.</p>
                    <hr class="my-4 text-zinc-200"/>
                    </div>

                    <div className='' data-aos="fade-up">
                    <p className='text-white font-semibold lg:text-lg'>What is the Quality Control Methodology in place at your company?</p>
                    <p className='text-zinc-400 lg:w-4/5 text-xs lg:text-base'>Our strict procedures ensure the highest quality. We test software using a black-box method. We have a specialised QA and QC section that guarantees that each project is thoroughly inspected. They deliver one last "OK" before the following settlement and deployment, covering all types of testing.</p>
                    
                    </div>
                </div>
            </section>

            <section className='bg-black'>
            <img src={drop1} className='absolute hidden lg:block left-0 h-40 mt-96' data-aos="fade-up"></img>
                    <div className='w-9/12 lg:w-8/12 mx-auto py-14'>
                       <div className='hidden lg:block'>
                            <img src={bub} className='absolute animate-bounce -mt-24 left-8 w-24'></img>
                            <img src={bub} className='absolute animate-bounce -mt-24 left-40 w-8'></img>
                            <img src={bub} className='absolute animate-bounce -mt-24 left-32 w-4'></img>
                       </div>
                    <img src={h2} className='w-40 lg:w-60'  data-aos="fade-up"></img>
                        <div className='pt-6' data-aos="fade-up">
                        <p className='text-white font-semibold lg:text-lg'>How long does it take you to design a website on average?</p>
                        <p className='text-zinc-400 lg:w-4/5 text-xs lg:text-base'>The total time it takes to build a website is determined by a number of factors. A static website often takes less time to design than an e-commerce or flash-based website. Complex websites, such as eCommerce websites, take a little longer due to their level of difficulty.</p>
                        <hr class="my-4 text-zinc-200"/>
                        </div>

                        <div className='' data-aos="fade-up">
                        <p className='text-white font-semibold lg:text-lg'>What’s your USP as a web development company?</p>
                        <p className='text-zinc-400 lg:w-4/5 text-xs lg:text-base'>Our USP is the ability to provide excellent service at an affordable price. We have a pool of professionals in PHP, Microsoft (.net), Java, and other technologies. We never allow our clients to compromise on quality, whether it's a basic static website or a large e-commerce project.</p>
                        <hr class="my-4 text-zinc-200"/>
                        </div>
                        
                        <div className='' data-aos="fade-up">
                        <p className='text-white font-semibold lg:text-lg'>Do you have a website that is mobile friendly?</p>
                        <p className='text-zinc-400 lg:w-4/5 text-xs lg:text-base'>Hire web developers from Codlerr who have experience with the newest HTML5 technologies. It's called responsive web design. We create visually appealing and aesthetically compelling site designs that work on both desktop and mobile platforms. However, you may need to include this in your objectives before beginning a website or app development project.</p>
                        <hr class="my-4 text-zinc-200"/>
                        </div>

                        <div className='' data-aos="fade-up">
                        <p className='text-white font-semibold lg:text-lg'>What variety of design possibilities do you have?<br></br> Do you have any templates available?</p>
                        <p className='text-zinc-400 lg:w-4/5 text-xs lg:text-base'>Yes, we always provide choices. We also specify our clients, to be precise about their requirements and website aspects. We offer a few choices based on that. As a result, this saves time and money as well as speeds up the web development process.</p>
                        <hr class="my-4 text-zinc-200"/>
                        </div>

                        <div className='' data-aos="fade-up">
                        <p className='text-white font-semibold lg:text-lg'>Do you have any websites that are similar to one I built earlier?</p>
                        <p className='text-zinc-400 lg:w-4/5 text-xs lg:text-base'>Thousands of businesses have used our services to build their websites. We have experience with blogs, portals, eCommerce sites, and company level sites. To determine if we have designed and developed websites comparable to yours, we must surely examine your unique requirements.</p>
                        <hr class="my-4 text-zinc-200"/>
                        </div>

                        <div className='' data-aos="fade-up">
                        <p className='text-white font-semibold lg:text-lg'>What is your website design or development architecture?<br></br> Do you have a variety of frameworks?</p>
                        <p className='text-zinc-400 lg:w-4/5 text-xs lg:text-base'>Moreover, we employ a Mobile View Controller (MVC), to sort user interface that separates information representation from user interaction. We have a variety of frameworks that we utilize depending on the nature of the project and the requirements.</p>
                        <hr class="my-4 text-zinc-200"/>
                        </div>

                        <div className='' data-aos="fade-up">
                        <p className='text-white font-semibold lg:text-lg'>What are the benefits of e-COMMERCE apps?</p>
                        <p className='text-zinc-400 lg:w-4/5 text-xs lg:text-base'>In detail, rising income generation, market expansion, provider interest, and customer ease of access are all advantages for the owner. Customers will shop at any time of day or night, pay online, and have their orders delivered.</p>
                        <hr class="my-4 text-zinc-200"/>
                        </div>

                        <div className='' data-aos="fade-up">
                        <p className='text-white font-semibold lg:text-lg'>How do you put the project to the test?</p>
                        <p className='text-zinc-400 lg:w-4/5 text-xs lg:text-base'>To test projects, we have a separate department (QA & QC). Testing is done on various devices and platforms. We parse the code manually and use special tools before the project is ready to be delivered. Our expert programmers scrutinise the codes thoroughly before executing them in their final form.</p>
                        
                        </div>

                        <div className='hidden lg:block'>
                            <img src={bub} className='absolute animate-bounce mt-8 right-8 w-24'></img>
                            <img src={bub} className='absolute animate-bounce mt-8 right-40 w-8'></img>
                            <img src={bub} className='absolute animate-bounce mt-8 right-32 w-4'></img>
                       </div>
                    </div>
            </section>

            <section className='bg-zinc-800'>
                <div className='w-9/12 lg:w-8/12 mx-auto py-14'>
                <img src={h3} className='w-40 lg:w-60'  data-aos="fade-up"></img>
                    <div className='pt-6' data-aos="fade-up">
                        <p className='text-white font-semibold lg:text-lg'>What's the difference between a native and a web-based application?</p>
                        <p className='text-zinc-400 lg:w-4/5 text-xs lg:text-base'>A native app runs on only one platform (e.g. iOS, Android, Windows Phone). Web-based apps are virtual web pages that operate within the mobile browser. They provide the same user experience across all handsets, but can't access some device functionalities.</p>
                        <hr class="my-4 text-zinc-200"/>
                    </div>

                    <div className='' data-aos="fade-up">
                        <p className='text-white font-semibold lg:text-lg'>Do you create cross-platform mobile apps?</p>
                        <p className='text-zinc-400 lg:w-4/5 text-xs lg:text-base'>Yes, we produce mobile apps for all of the main mobile platforms. We can help you design apps for either one or two platforms, or an app that operates across all mobile devices.</p>
                        <hr class="my-4 text-zinc-200"/>
                    </div>

                    <div className='' data-aos="fade-up">
                        <p className='text-white font-semibold lg:text-lg'>Is it possible to edit the application's content after it has been built?</p>
                        <p className='text-zinc-400 lg:w-4/5 text-xs lg:text-base'>You are free to do so. However, a charge will be added.</p>
                        <hr class="my-4 text-zinc-200"/>
                    </div>

                    <div className='' data-aos="fade-up">
                        <p className='text-white font-semibold lg:text-lg'>How can I ensure my app is listed under the "New and Notable" category?</p>
                        <p className='text-zinc-400 lg:w-4/5 text-xs lg:text-base'>Well, it all depends on how overwhelming your app concept is, as well as the app as a whole. At the same time having a strong concept will successively boost your chances of promotion.</p>
                        
                    </div>
                </div>
            </section>

            <section className='bg-black'>
                    <div className='w-9/12 lg:w-8/12 mx-auto pt-14 pb-20'>
                    <img src={h4} className='w-40 lg:w-56'  data-aos="fade-up"></img>
                        <div className='pt-6'  data-aos="fade-up">
                            <p className='text-white font-semibold lg:text-lg'>Why should I employ CODLERR's specialized team? </p>
                            <p className='text-zinc-400 lg:w-4/5 text-xs lg:text-base'>We're a wonderful mix of bright young minds and seasoned industry experts. With the help of the lessons we've learned over the years, accordingly we've continued to improve our internal processes. That's what keeps us on our toes as we strive to be the best at what we do.</p>
                            <hr class="my-4 text-zinc-200"/>
                        </div>

                        <div className=''  data-aos="fade-up">
                            <p className='text-white font-semibold lg:text-lg'>Is your team fully relying on the customer to deliver all<br></br> information during execution?</p>
                            <p className='text-zinc-400 lg:w-4/5 text-xs lg:text-base'>No. When expectations are set early on in an engagement, they are easier to fulfill over time. Communication at the right time is the best way to avoid surprises. Investing in our team's long-term development and treating them like our own will improve your performance.</p>
                            <hr class="my-4 text-zinc-200"/>
                        </div>

                        <div className=''  data-aos="fade-up">
                            <p className='text-white font-semibold lg:text-lg'>Will you provide a quote over the phone?</p>
                            <p className='text-zinc-400 lg:w-4/5 text-xs lg:text-base'>In terms of quantity, price is not abstract. But, as you might imagine, it's not only about the price and quote. Pricing is affected by a lot of aspects, the most important of which is the solution we must create and team's setup etc. </p>
                            <hr class="my-4 text-zinc-200"/>
                        </div>

                        <div className='' data-aos="fade-up">
                            <p className='text-white font-semibold lg:text-lg'>Do your developers stay updated on the newest technological advances? </p>
                            <p className='text-zinc-400 lg:w-4/5 text-xs lg:text-base'>In today's high-tech environment, staying up-to-date is a must. We conduct frequent internal and external training programs, as well as enrol in online courses. To ensure that even minor information such as communication, technological trends, and version updates is kept up to date</p>
                            
                        </div>
                    </div>
            </section>
           

       </div>
        )
}
export default Faq;