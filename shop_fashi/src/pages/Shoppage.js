import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import Products from '../components/Products';


const Shoppage = () => {
  const [products , setProducts] = useState([]);
  const data = useLoaderData();
  useEffect(()=>{
    setProducts(data.data);
  },[data]);
  return (
    <div>
      <Products products={products}/>
    </div>
  )
}

export default Shoppage