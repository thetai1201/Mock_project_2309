import React from 'react'
import Slider from "react-slick";
import banner from "../assets/banner/hero-1.jpg";
import banner2 from "../assets/banner/hero-2.jpg";
const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
      };
  return (
    <div className='w-full h-[700px]'>
        <Slider {...settings}>
          <div>
            <img className=''  src={banner} alt='banner1'></img>
          </div>
          <div>
            <img className='w-full h-[700px]' src={banner2} alt='banner2'></img>
          </div>
        </Slider>
    </div>
  )
}

export default Banner