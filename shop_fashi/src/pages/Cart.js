import React, { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import CartItem from "../components/CartItem";
import { useSelector } from 'react-redux';
const Cart = () => {
  const productsData = useSelector((state) => state.fashi.productsData);
  const [totalAmt , setTotalAmt] = useState("");

  useEffect(()=>{
    let price = 0;
    productsData.map((item)=>{
      price += item.price * item.quantity;
      return price
    })
    setTotalAmt(price.toFixed(2));
  },[productsData])
  return (
    <div >
    <img className='w-full h60 object-cover'
    src='https://media.istockphoto.com/id/1480834653/vi/anh/banner-d%C3%A0i-%C4%91%E1%BA%B9p-n%E1%BB%81n-m%E1%BB%9D-s%E1%BA%AFc-th%C3%A1i-%C3%B3ng-%C3%A1nh-tr%C3%AAn-m%E1%BA%B7t-n%C6%B0%E1%BB%9Bc-xanh-b%E1%BA%AFn-tung-t%C3%B3e-b%E1%BA%AFn-tung-t%C3%B3e-v%C3%A0-bong.jpg?s=612x612&w=0&k=20&c=hCuj4_44HhBgb0JjNZpy0HsoZuoVuUpKdGwrB6iq5H8='
    alt='cartImg'
    />
    <div className='max-w-screen-xl mx-auto py-20 flex'>
      <CartItem/>
      <div className='w-1/3 bg-[#fafafa] py-6 px-4'>
        <div className='flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6'>
          <h2 className='text-2xl font-medium'>Cart totals</h2>
          <p className='flex items-center gap-4 text-base'>
            Subtotal{" "}
            <span className='font-titleFont font-bold text-lg'> ${totalAmt}</span>
          </p>
          <p className='flex items-start gap-4 text-base'>
            Shipping {" "}
            <span>
              lorem jbnjka jbjafbjda asdnfgsdan jnjgasdnbjkbnd asdgfdasnmniasod knjklnasdf.
            </span>
          </p>
        </div>
        <p className='font-titleFont font-semibold flex justify-between mt-6'>
          Total <span className='text-xl font-bold'>${totalAmt}</span>
        </p>
        <button className='text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300'>
          proceed to checkout
        </button>
      </div>
    </div>
    <ToastContainer
    position="top-left"
    autoClose={2000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="dark"
    />
  </div>
  )
}

export default Cart