import React,{useState,useEffect} from 'react';
import Nav from '../components/Nav';
import Socials from '../components/Socials';
import LogoBrown from '../assets/img/header/logo-brown.png';
import {motion} from 'framer-motion'
import { staggerContainer, fadeIn} from '../variants';

const headerVariants={

  hidden:{
    padding : '84px 0 84 px 0',
    background:'none' 
  },
  show:{
    padding : '14px 0 14px 0',
    background :'rgba(0,0,0,0.92)',
    transition:{ 
    type: 'spring',
    },

  },
 
};

export const navVariants= {
  hidden: {
    clipPath:'circle(5.8& at 50% 0)',
    opacity:0, 
    transition:{
      type:'spring',
      delay:0.2,
      stiffness:300,
      damping:140
    }
  },
  show:{
    opacity:1,
    clipPath: 'circle(5.8& at 50% 0)',
    transition:{
      type:'spring',
      stiffness:80,
    }
  }
}

const Header = () => {
  const [isWorking,setIsWorking] = useState(false)
  
  const [emails, setEmails]=useState([])

useEffect(() => {
  fetch("http://localhost:4000/emails")
    .then((resp) => resp.json())
    .then((emails) => console.log(emails));
}, []);

  const [nav,setNav] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
window.scrollY > 50 ? setIsWorking (true) : setIsWorking (false);
    }
  )})
  return (
   <motion.header 
   variants={headerVariants}
   initial='hidden'
   animate={isWorking ? 'show' : ''}
  className= 'bg-pink-200 fixed w-full max-w-[1800px] z-50 py-4'
  > 
 <motion.div variants={staggerContainer(0.3,1)}
 initial='hidden'
 animate={'show'}
 className='.container.mx-auto'> 

 <div className='flex justify-between items-center px-4 lg:px-0 
 relative text-white
 '>
  {}
  <motion.div 
  variants={fadeIn('down','tween', 1, 1.4) }
  className={`${nav ? 'gap-y-0' : 'gap-y-2'}
  flex flex-col 
  items-center justify-center w-12 h-12 p-3 order-2 
  lg:order-none cursor:pointer border-2 
  rounded-full `}
  onClick={() => setNav(!nav)}> 
  
  <motion.div initail={{
    rotate: 0
  }} 
  animate={{rotate: nav ? 45 :0}}
  className='w-full h-[2px] bg-white'></motion.div>

  <div className='w-full h-[2px] bg-white'></div>
  
  
  </motion.div>

  <motion.div variants={fadeIn('down', 'tween', 1.2 ,1.4)}>
    <a href='#'/>
    <img className={`${isWorking ? 'w-[90px] h-[90px]' : 'w-[107px] h-[107px]'}`} src ={LogoBrown} alt=''/>
  </motion.div>

  <motion.div 
  variants={fadeIn('down', 'tween', 1.4 ,1.4)}
  className='hidden lg:flex'>
    <Socials/>
  </motion.div>

  <div></div>

  <motion.div 
  variants={navVariants} 
  initial='hidden' 
  animate= { nav ? 'show' : " "} 
  className='absolute bg-accent w-[310px] h-[50vh] right-0 lg:left-0 top-[120px] bottom-0 z-50 rounded-lg shadow-xl'>
    <Nav/>
  </motion.div>
 </div>
 </motion.div>
  </motion.header>
  )
};

export default Header;