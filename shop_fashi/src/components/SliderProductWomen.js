import React from 'react'
import imgProductMan from "../assets/women-large.jpg";
import "../style/style.css";
import Slider from "react-slick";
import ProductCard from './ProductCard';
const SliderProductWomen = ({products}) => {
    const filteredProducts = products.filter((item) => {
      return item.categoryType === "WOMEN";
    });
    const settings = {
      dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };
  return (
    <>
<section className="women-banner spad">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3">
              <div className="w-full p-0  product-large set-bg relative  ">
                <img  src={imgProductMan} alt="" />
                <div className='absolute top-1/3 left-1/4'>
                  <h2 className=''>Women’s</h2>
                  <p className='text-white'>Discover More</p>
                </div>
                
              </div>
            </div>
            <div className="col-lg-8 offset-lg-1 ">
              <div className="filter-control ">
                <ul>
                  <li className="active">Clothings</li>
                  <li>
                    HandBag
                  </li>
                  <li>
                   Shoes
                  </li>
                  <li>Accessories</li>
                </ul>
              </div>
              <div className=" product-slider owl-carousel">
                

                <Slider {...settings}>
                {filteredProducts.map((product) => {
                  return (<ProductCard product={product} key={product.id} />
                  );
                })}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SliderProductWomen