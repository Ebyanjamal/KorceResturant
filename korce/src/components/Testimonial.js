import React from 'react';
import TestimonialCarousel from '../components/TestimonialCarousel';
import { motion} from 'framer-motion';
import{fadeIn} from '../variants';
import { testimonialData } from '../data';
import '../slider.css'
const Testimonial = () => {
  const  { title,subtitle,modelImg,slider}= testimonialData

  return <section className='bg-testimonial bg-cover bg-no-repeat relative top-[340px] 
  lg:top-[390px] z-10 h-[880px] pt-[60px] md:pt-[120px]'>
    
   <div className='.container mx-auto'> 
   <div className='text-center capitalize flex flex-col' >
    <h2 className='h2 text-white font primary oregon '>{title}</h2>
    <p className=' p text-white/70 capitalize mb-8'>{subtitle}</p>
    <div className='mb-12' >
      <img src={modelImg}  alt=''/>
    </div>
   </div>
   <div className='sliderContainer'>
    <TestimonialCarousel slider={slider}/>
   </div>
   </div>
    </section>;
};

export default Testimonial;
