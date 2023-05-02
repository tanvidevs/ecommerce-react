import React from 'react'
// import { useSelector } from 'react-redux'
import Cartitem from '../components/Cartitem'


const Cart = () => {
  // const productData=useSelector((state)=>state.bazar.productData);
  return (
    <div>
      <img
      className='w-full h-60 object-cover'
      src="https://thumbs.dreamstime.com/b/bubbles-u12-9761606.jpg"
      alt='vartImg'
      />
     <div className='max-w-screen-xl max-auto py-20 flex'>
      <Cartitem/>
      <div className='w-1/3 bg-gray-100 py-6 px-4'>
        <div className='flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6'>
          <h2 className='text-2xl font-medium'>cart totals</h2>
          <p className='flex items-center gap-4 text-base'>
            Subtotal
            <span className='font-titleFont font-bold text-lg'>$ 200</span>
          </p>
          <p className='flext items-start gap-4 text-base'>
           Shipping {" "}
            <span>
                 Ecommerce is the buying and selling of goods or services over the internet.
            </span>
          </p>
        </div>
        <p className="font-titleFont font-semibold flex justify-between mt-6 ">
           Total <span className='text-xl font-bold '>$ 200</span>
        </p>
        <button className='text-basse bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300'>Proceed to Checkout</button>
      </div>
     </div>
    </div>
  )
}

export default Cart
