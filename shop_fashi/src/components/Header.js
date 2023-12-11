import React  from "react";
import {
    SearchOutlined,
  } from "@ant-design/icons";
  import { Link } from "react-router-dom";
  import { BsBag } from "react-icons/bs";
import Logoshop from "../assets/logo.png";
import { useSelector } from "react-redux";
const Header = () => {
  const productsData = useSelector((state) => state.fashi.productsData);
  return (
    <header className="header-section bg-white sticky top-0 z-50">
        <div className="container">
          <div className="inner-header">
            <div className="row">
              <div className="col-lg-2 col-md-2">
                <div className="logo">
                  <img src={Logoshop} alt="logoshop"/>
                </div>
              </div>
              <div className="col-lg-7 col-md-7">
                <div className="advanced-search">
                  <button type="button" className="category-btn">All Categories</button>
                  <div className="input-group">
                    <input type="text" placeholder="What do you need?" />
                    <button type="button">
                        <SearchOutlined/>
                        </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 text-right col-md-3">
                <ul className="nav-right">
                  <li className="cart-icon">
                    <div
                    //   onClick={() => setIsOpen(!isOpen)}
                      className="cursor-pointer flex relative"
                    >
                      <Link to="/cart">
                        <BsBag className="text-2xl" />
                      </Link>
                      
                      <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
                       {productsData.length}
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="nav-item">
          <div className="container">
            <div className="nav-depart">
              <div className="depart-btn">
                <i className="ti-menu" />
                <span>All departments</span>
                <ul className="depart-hover">
                  <li className="active"><a href="#">Women’s Clothing</a></li>
                  <li><a href="#">Men’s Clothing</a></li>
                  <li><a href="#">Underwear</a></li>
                  <li><a href="#">Kid's Clothing</a></li>
                  <li><a href="#">Brand Fashion</a></li>
                  <li><a href="#">Accessories/Shoes</a></li>
                  <li><a href="#">Luxury Brands</a></li>
                  <li><a href="#">Brand Outdoor Apparel</a></li>
                </ul>
              </div>
            </div>
            <nav className="nav-menu mobile-menu">
              <ul>
                <li className="active">
                  <Link to={`/`}>Home</Link>
                </li>
                <li>
                  <Link to={`/shopPage`}>Shop</Link>
                </li>
                <li>
                  <Link to={`/conllection`}>Conllection</Link>
                  <ul className="dropdown">
                    <li><a href="#">Men's</a></li>
                    <li><a href="#">Women's</a></li>
                    <li><a href="#">Kid's</a></li>
                  </ul>
                </li>
                <li>
                <Link to={`/blog`}>Blog</Link>
                </li>
                <li>
                  <Link to={`/contact`}>Contact</Link>
                </li>
                <li><a href="#">Pages</a>
                  <ul className="dropdown">
                    <li>
                      <Link to={`/register`}>Register</Link>
                    </li>
                    <li>
                    <Link to={`/login`}>Login</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
            <div id="mobile-menu-wrap" />
          </div>
        </div>
      </header>
  )
}

export default Header