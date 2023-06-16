import  { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
// import AOS from 'aos';
// import 'aos/dist/aos.css';


const About = () => {
    const [counterOn, setCounterOn]=useState(false)

    // useEffect(() => {
    //     AOS.init();
    //   }, [])
    
    
    return (
        <ScrollTrigger onEnter={()=>{setCounterOn(true)}} onExit={()=>{setCounterOn(false)}} >
            <div className='my-10'>
            <SectionTitle heading={"About"}></SectionTitle>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-5 mt-5'>
                <div className=' p-16 shadow-xl'>
                    <h1 className='text-center text-5xl font-bold'>
                        {
                            counterOn && <CountUp start={0} end={2000} duration={2} delay={0}/>
                        }+
                    </h1>
                    <p className='text-center text-3xl font-semibold'>Courses</p>
                </div>
                <div className=' p-16 shadow-xl'>
                    <h1 className='text-center text-5xl font-bold'>
                    {
                        counterOn && <CountUp start={0} end={1000} duration={2} delay={0}/>
                    }+ 
                    </h1>
                    <p className='text-center text-3xl font-semibold' >Clients</p>
                </div>
                <div className=' p-16 shadow-xl'>
                    <h1 className='text-center text-5xl font-bold'>
                    {
                        counterOn && <CountUp start={0} end={700} duration={2} delay={0}/>
                    }+
                    </h1>
                    <p className='text-center text-3xl font-semibold'>Purchase</p>
                </div>
                <div className=' p-16 shadow-xl' >
                    <h1 className='text-center text-5xl font-bold'>
                    {
                        counterOn && <CountUp start={0} end={3000} duration={2} delay={0}/>
                    }+
                    </h1>
                    <p className='text-center text-3xl font-semibold'>Visits</p>
                </div>
            </div>
        </div>
        </ScrollTrigger>
    );
};

export default About;