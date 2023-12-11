import React from 'react'
import banner1 from "../assets/ImageBanner/banner-1.jpg";
import banner2 from "../assets/ImageBanner/banner-2.jpg";
import banner3 from "../assets/ImageBanner/banner-3.jpg";
const Banner2 = () => {
  return (
    <div>
      <div className="banner-section spad">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4">
              <div className="single-banner">
                <img src={banner1} alt="" />
                <div className="inner-text">
                  <h4>Men’s</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-banner">
                <img src={banner2} alt="" />
                <div className="inner-text">
                  <h4>Women’s</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-banner">
                <img src={banner3} alt="" />
                <div className="inner-text">
                  <h4>Kid’s</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner2