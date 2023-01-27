import React,{useState,useEffect} from 'react';

import{newsletterData} from '../data';

const Newsletter = () => {
const[emails,setEmails] = useState('')
  const {title,subtitle, placeholder,btnText} = newsletterData;

  function handleChange(e){
    setEmails(e.target.value)
  }
  function handleSubmit(e){
    e.preventDefault();
    console.log(emails)
    fetch('http://localhost:4000/emails', {
      method:"POST",
      headers: {"Content-Type": "application/json",},
      body: JSON.stringify ({email : emails})
    })
    .then(res => res.json)
    .then(res => setEmails(''))
    
  }
  return <div className='bg-none  lg:bg-cover 
  lg:h-[220px] lg:bg-center lg:px-24 xl:bg-auto'>
    <div className='flex flex-col lg:flex-row justify-between items-center 
    h-full' >
      <div className='text-center lg:text-left mb-4'>
        <h3 className='text-[26px] font-primary oregon text-white capitalize mb-2' >{title}</h3>
        <p  className='font-primary oregon text-white ' >{subtitle}</p>
      </div>
      <form className='flex flex-col lg:flex-row lg:gap-x-[10px] gap-y-4' >
        <input 
        value={emails}
        onChange={handleChange}
        className='input bg-transparent placeholder:font-light 
        placeholder:text-white/20 text-white focus:ring-1 focus:ring-accent border 
        border-white/20 transition-all' type="text" 
         placeholder={placeholder}/>

        <button onClick={handleSubmit} className='btn capitalize w-full lg:max-w-[240px] ' >{btnText}</button>
      </form>
    </div>
    </div>;
};

export default Newsletter;
