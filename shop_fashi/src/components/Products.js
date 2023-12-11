import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';

const Products = ({products}) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [categoryType , setcategoryType] = useState('ALL');
    const [allProducts, setAllProducts] = useState(products)
    useEffect(()=>{
        if(categoryType === "ALL" ){
          setAllProducts(products)
        }
        if(categoryType === "WOMEN"){
          const fillteredProducts = products.filter(item=> item.categoryType ==="WOMEN")
          setAllProducts(fillteredProducts);
        }
        if(categoryType === "MAN"){
          const fillteredProducts = products.filter(item=> item.categoryType ==="MAN")
          setAllProducts(fillteredProducts);
        }
      },[categoryType])
  return (
    <div className="container">
    <div class="grid grid-rows-3 grid-flow-col gap-4">
      <div class="row-span-3">
      <div class="filter-widget">
        <input className="py-1 border border-orange-50" id="searchInput" type="text" placeholder="Search..." onChange={(event)=>{
            setSearchTerm(event.target.value);
          }}/>
                    <h4 className="fw-title">Categories</h4>
                    <ul className="filter-catagories">
                        <li><a onClick={()=>setcategoryType("ALL")} href="#">ALL</a></li>
                        <li><a onClick={()=>setcategoryType("WOMEN")} href="#">Women</a></li>
                        <li><a onClick={()=>setcategoryType("MAN")} href="#">Man</a></li>
                    </ul>
                </div>
      </div>
      <div class="col-span-2">
      <div className="grid grid-cols-3 gap-[20px] md:mx-0">
        {allProducts
           .filter((product)=>{
            if(searchTerm==""){
              return product;
            }else if(product.title.toLowerCase().includes(searchTerm.toLowerCase())){
              return product;
            }
          })
        .map((product) => {
          return <ProductCard product={product} key={product.id} />;
        })}
      </div>
      
      </div>
    </div>
  </div>
  )
}

export default Products