import React from 'react'
import  imgProductMen from "../assets/man-large.jpg";
import Slider from "react-slick";
import ProductCard from './ProductCard';
const SliderProductMan = ({products}) => {
  const filteredProducts = products
  .filter((item) => {
    return item.categoryType === "Man";
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
    <section className="man-banner spad">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8">
              <div className="filter-control">
                <ul>
                  <li className="active">Clothings</li>
                  <li>HandBag</li>
                  <li>Shoes</li>
                  <li>Accessories</li>
                </ul>
              </div>

              <Slider {...settings}>
                {filteredProducts.map((product) => {
                  return <ProductCard product={product} key={product.id} />
                })}
                </Slider>
            
            </div>
            <div className="col-lg-3 offset-lg-1 ">
              <div className="product-large set-bg m-large relative p-0">
                <img src={imgProductMen}/>
                <h2 className='absolute top-1/2 left-1/4'>Men’s</h2>
                <a href="#">Discover More</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SliderProductMan