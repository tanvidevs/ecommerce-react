import React from 'react';
import photoDrop from '../assests/photoDrop.png';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BsBag } from 'react-icons/bs';


const Header = () => {
  const productData= useSelector((state)=>state.bazar.productData);
  // console.log(productData)
  return (
    <div className='w-full h-20 bg-white border-b-[1px] border-gray-800 sticky top-0 z-50  '>
      <div className='max-w-screen-xl h-full max-auto flex items-center justify-between'>
       <Link to='/'>
       <div>
        <img className='w-28 ml-10' src={photoDrop} alt="A beautiful landscape"></img>
        </div>
       </Link>
        <div className='flex items-center gap-8'>
         <ul className='flex items-center gap-8'>
           <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px cursor-pointer duration-300] '>Home</li>

           <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px cursor-pointer duration-300] '>Pages</li>

           <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px cursor-pointer duration-300] '>Shop</li>

           <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px cursor-pointer duration-300] '>Element</li>

           <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px cursor-pointer duration-300] '>Blog</li>
          </ul>
          <Link to="/cart">
          <div className='relative' >
          <BsBag />
          <span className='absolute w-6 top-2 left-0 text-sm flex items-center justify-center'>{productData.length}</span>
          </div>
          </Link>
         <Link to="/login">
         <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
          </div>
         </Link>
        </div>
     </div>
    </div>
  );
};
 
export default Header;
