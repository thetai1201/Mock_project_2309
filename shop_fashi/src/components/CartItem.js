import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify'
import { decrementQuantity, deleteItem, increamentQuantity, resetCart } from "../redux/fashiSlice";
import { IoMdClose } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
const CartItem = () =>{
const dispatch = useDispatch();
  const productsData = useSelector((state) => state.fashi.productsData);
  return (
    <div className="w-2/3 pr-10">
      <div className="w-full">
        <h2 className="font-titleFont text-2xl">Shopping cart </h2>
      </div>
      <div>
        {productsData.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between gap-6 mt-6"
          >
            <div className="flex items-center gap-2">
              <IoMdClose
                onClick={() =>
                  dispatch(deleteItem(item.id)) &
                  toast.error(`${item.title} is removed`)
                }
                className="text-xl text-gray-600 hover:text-red-600
                            cursor-pointer duration-300"
              />
              <img
                className="w-30 h-32 object-cover"
                src={item.image}
                alt="productImg"
              />
            </div>

            <h2 className="w-52">{item.title}</h2>
            <p className="w-10">${item.price}</p>
            <div className="w-52 flex items-center justify-between text-gray-500 gap-4 border p-3">
              <p className="text-sm">Quantity</p>
              <div className="flex items-center gap-4 text-sm font-semibold">
                <span
                  onClick={()=>
                    dispatch(
                      decrementQuantity({
                        id: item.id,
                        title: item.title,
                        image: item.image,
                        price: item.price,
                        quantity: 1,
                        description: item.description,
                      })
                    )
                  }
                  className="border h-5 font-normal text-lg flex items-center justify-center
                     px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                >
                  -
                </span>
                <span>{item.quantity}</span>
                <span
                  onClick={()=>
                    dispatch(
                      increamentQuantity({
                        id: item.id,
                        title: item.title,
                        image: item.image,
                        price: item.price,
                        quantity: 1,
                        description: item.description,
                      })
                    )
                  }
                  className="border h-5 font-normal text-lg flex items-center justify-center
                     px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                >
                  +
                </span>
              </div>
            </div>
            <p className="w-14">${item.quantity * item.price}</p>
          </div>
        ))}
      </div>
      <button
        onClick={() =>
          dispatch(resetCart()) & toast.error("Your Cart is Empty!")
        }
        className="bg-red-500 text-white mt-8 ml-7 px-6 hover:bg-red-800 duration-300"
      >
        Reset cart
      </button>
      <Link to="/">
        <button className="mt-8 ml-7 flex items-center gap-1 text-gray-400 hover:text-black duration-300">
            <span>
                <FaArrowLeft/>
            </span>
            Go shopping
        </button>
      </Link>
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
export default CartItem