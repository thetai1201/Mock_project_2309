import React, { useEffect, useState } from 'react'
import DealOf from '../components/DealOf'
import Banner from '../components/Banner'
import Banner2 from '../components/Banner2'

import SliderProductWomen from '../components/SliderProductWomen'
import SliderProductMan from '../components/SliderProductMan'
import { useLoaderData } from 'react-router-dom'

const Home = () => {
  const [products , setProducts] = useState([]);
  const data = useLoaderData();
  useEffect(()=>{
     setProducts(data.data.content);
    
    
  },[data]);
  return (
    <div>
      <Banner/>
      <Banner2/>
      <SliderProductMan products = {products}/>
      <DealOf/>
      <SliderProductWomen products= {products}/>
    </div>
  )
}
export default Home