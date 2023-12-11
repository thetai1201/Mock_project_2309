import React from 'react'
import { useNavigate } from "react-router-dom";
import { BsPlus} from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addToCart } from '../redux/fashiSlice';
import { ToastContainer, toast } from 'react-toastify';
const ProductCard = ({product}) => {

  const navigate = useNavigate();
  const dispath = useDispatch();
  const id  = product.title;
  const idString = (id)=>{
    return String(id).toLowerCase().split(" ").join("");
  }
  const rootId = idString (id)
  const handleDetails = () =>{
    navigate(`/product/${rootId}`,{
      state:{
        item: product,
      },
    });
  }
  
  return (
    <>
    <div className="product-item">
      <div className="pi-pic flex justify-center items-center h-[400px] ">
        <div className="w-[300px] relative">
          <img className="max-h-[400px] " src={product.image} alt="" />
        </div>
        <ul>
          <li class="w-icon active">
          <button 
            onClick={()=>
                dispath(
                  addToCart({
                    id: product.id,
                    title: product.title,
                    image : product.image,
                    price: product.price,
                    quantity:1,
                    description : product.description, 
                  })
                ) & toast.success(`${product.title} is added`)
              } 
          >
              <BsPlus />
        </button>
          </li>
          <li class="quick-view" onClick={handleDetails}>
            Quick View
          </li>
          
        </ul>
      </div>
      <div className="pi-text">
        <div className="catagory-name">{product.categoryType}</div>
          <h5>{product.title}</h5>
        <div className="product-price">${product.price}</div>
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
  </>
  )
}

export default ProductCard