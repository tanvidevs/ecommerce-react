import React from 'react'
import villBe from '../assests/villBe.avif';
import cardsBe from '../assests/cardsBe.jpg';
import {ImGithub} from "react-icons/im";
import {FaTwitter,FaInstagram,FaYoutube,FaHome, FaFacebookF} from "react-icons/fa";
import {BsPaypal, BsPersonFill} from "react-icons/bs"
import {MdLocationOn} from "react-icons/md"

const Footer = () => {
  return (
    <div className='bg-black text-[#949494] py-20 font-titleFont'>
      <div className='max-w-screen-xl max-auto ml-8 grid grid-cols-4' >
        <div className='flex flex-col gap-7'> 
        <img className='w-32 ' src={villBe} alt="logo"></img>
        <p className='text-white text-sm tracking-wide '>@ ReactBD.com </p>
        <img className='w-36 ' src={cardsBe} alt="card"></img>

        <div className='flex gap-5 text-lg text-gray-400'>
          <ImGithub  className='hover:text-white duration-300 cursor-pointer '/>
          <FaFacebookF  className='hover:text-white duration-300 cursor-pointer '/>
          <FaTwitter  className='hover:text-white duration-300 cursor-pointer '/>
          <FaInstagram  className='hover:text-white duration-300 cursor-pointer '/>
          <FaYoutube className='hover:text-white duration-300 cursor-pointer '/>
          <FaHome  className='hover:text-white duration-300 cursor-pointer '/>
        </div>
        </div>

           <div>
           <h2 className='text-2xl font-semibold text-white mb-4'>Locate Us</h2>
           <div className='text-base flex flex-col gap-2'>
            <p>MBD,ruwi,Muscat-Oman</p>
            <p>Mobile: 9163826483</p>
            <p>Phone: 7834733873</p>
            <p>E-mail: sajh@gmail.com</p>
           </div>
           </div>

           <div>
               <h2 className='text-2xl font-semibold text-white mb-4'>Profile</h2>
               <div className='flex flex-col gap-2 text-base'>
               <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointerr'>
                <span>
                < BsPersonFill/>
               </span> 
               My Account</p>

               <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointerr'>
                <span>
                < BsPaypal/>
               </span> 
               Checkout</p>

               <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointerr'>
                <span>
                < FaHome/>
               </span> 
               Order tracking</p>

               <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointerr'>
                <span>
                < MdLocationOn/>
               </span> 
               Help Support</p>
               </div>
           </div>
           
           <div className='flex flex-col justify-center'>
            <input className='bg-transparent border px-4 py-2 text-sm' placeholder='e-mail'
             type="text" />
            <button className='text-sm border text-white border-t-0 hover:bg-gray-900 actibe:bg-white
             active:text-black '>Subscribe</button>
           </div>
      </div>
     </div>
  )
}

export default Footer
