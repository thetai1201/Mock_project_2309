import React from "react";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
}from "react-router-dom";
import Cart from "./pages/Cart";
import BlogPage from "./pages/BlogPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Shoppage from "./pages/Shoppage";
import Contact from "./pages/Contact";
import Conllection from "./pages/Conllection";
import { productsData } from "./service/product";
import Product from "./components/Product";
import Admin from "./pages/Admin/Admin";
import "./pages/Admin/Admin.css"
const Layout=()=>{
  return(
    <div>
      <Header/>
      <ScrollRestoration/>
      <Outlet/>
      <Footer/>
    </div>
  );
}
const router = createBrowserRouter([
  {
    path : "/",
    element: <Layout/>,
    children:[
      {
        path: "/",
        element: <Home/>,
        loader: productsData,
      },
      {
        path: "/shopPage",
        element: <Shoppage/>,
        loader: productsData,
      },
      {
        path: "/product/:id",
        element: <Product/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/conllection",
        element:<Conllection/>
      },
      {
        path: "/cart",
        element:<Cart/>
      },
      {
        path: "/blog",
        element: <BlogPage/>
      },
      {
        path: "/login",
        element:<Login/>
      },
      {
        path: "/register",
        element:<Register/>
      }
      
    ],
   
  },
  {
    path: "/admin/*", 
    element : <Admin />
  }
])
function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
