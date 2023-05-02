import React, { useEffect } from 'react';
import { useState } from 'react';
import Banner from '../components/Banner';
import Product from '../components/Product';
// import ProductCard from '../components/ProductCard';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
  const [product, setProduct] = useState([]); // Fix: Add a comma and an equal sign here
  const data = useLoaderData();
  
  useEffect(() => {
    setProduct(data.data);
  }, [data]);

  return (
    <div>
      <Banner/>
      <Product product={product} />
      {/* <ProductCard/> */}
    </div>
  )
}

export default Home;
