import React from 'react'
import ProductCard from './ProductCard'

const Product = ({product}) => {
  return (
    <div className='py-10'>
      <div className='flex flex-col items-center gap-4'>
        <h1 className='text-2xl bg-black text-white py-2 w-80 text-center'>Shopping everyday</h1>
        <span className='w-20 h-[3px] bg-black'></span>
        <p className='max-w-[700px] text-gray-600 text-center'> Paragraphs help the reader separate topics or sections of a story; they prevent different groupings of information with only nominal connections from running up into each other. Paragraphs help readers make sense of the thousands of pieces of information a </p>
      </div>
      <div className='max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-10'>
        {
          product.map((item) => (
            <ProductCard key={item._id} product={item}/>
          ))
        }
      </div>
    </div>
  )
}

export default Product
