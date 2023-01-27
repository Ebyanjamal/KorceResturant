import React from 'react';

import NewsLetter from './Newsletter';
import Copyrights from './Copyright';
import Socials from './Socials';

import {footerData} from '../data';

// import {motion} from 'framer-motion';

// import {fadeIn,staggerContainer} from '../variants';


const Footer = () => {
  const{contact,hours,social} = footerData;
  return ( 
  <footer className='relative top-96 z-20 bg-dark lg:bg-transparent
  lg:min-h-[620px] lg:bg-footer lg:bg-center lg:bg-no-repeat pt-20' >
    <div className='container mx-auto h-full'>
      <div className='h-full flex flex-col gap-y-12 ' >
        
        <div>
          <NewsLetter/>
        </div>
  
        <div className='flex flex-col lg:flex-row lg:gap-x-[130px] 
        gap-y-12 lg:gap-y-0 lg:mb-12' >

    <div className='flex-1 lg:max-w-[170px]'>
      <div className='capitalize text-[20px] lg:text-[22px] 
      font-normal text-white font-primary oregon mb-[22px]'>{contact.title}</div>
      <div className='capitalize font-normal text-white font-primary oregon mb-[22px]'>{contact.address}</div>
      <div className=' font-normal text-white font-primary oregon mb-[22px] capitalize'>{contact.phone}</div>
    </div>

    <div className='font-normal text-white font-primary oregon mb-[22px]'> 
    <div className='capitalize' >{hours.title}</div>
    <div>
      <div className='flex gap-x-[46px]' >
        {hours.program.map((item,index) => {
          return (
          <div key={index}>
            <div>{item.days}</div>
            <div>{item.hours}</div>
          </div>
          )
        })}
      </div>
    </div>
    </div>
        </div>
      </div>
    </div>
  </footer>
  )
};

export default Footer;
