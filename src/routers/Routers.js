import React from "react"
import { Routes, Route , Navigate} from "react-router-dom";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import ProductDetalis from "../pages/ProductDetalis";
import Checkout from "../pages/Checkout";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ProtectedRoute from "./ProtectedRoute/protectedRoute";
// import AddProducts from "../adminDashboard/AddProducts";
import AllProducts from "../AdminDashboard/AllProducts";
import Dashboard from "../AdminDashboard/Dashboard";

function Routers() {
 
  return <Routes>
    <Route path="/" element={<Navigate to="/home"/>} />
    <Route path="home" element={<Home/>} />
    <Route path="shop" element={<Shop/>} />
    <Route path="cart" element={<Cart/>} />
    <Route path="shop/:id" element={<ProductDetalis/>} />
  
    
    <Route path="checkout" element={ <ProtectedRoute ><Checkout/></ProtectedRoute> } />
    <Route path="dashboard" element={<ProtectedRoute ><Dashboard/></ProtectedRoute> }/>
    <Route path="dashboard/all-products" element={<ProtectedRoute ><AllProducts/></ProtectedRoute> }/>
    {/* <Route path="dashboard/add-products" element={AddProducts}/> */}
   
   
    <Route path="login" element={<Login/>} />
    <Route path="signup" element={<Signup/>} />
  </Routes>
}

export default Routers;

