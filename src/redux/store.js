import cartSlice from "./slices/cartSlice";
import userReducer from "../redux/slices/userSlice"
import { configureStore } from "@reduxjs/toolkit";

 const store = configureStore({
    reducer:{
          cart: cartSlice,
          user: userReducer
       },
   });

export default store;
