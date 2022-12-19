import {  configureStore} from "@reduxjs/toolkit";
import { userSigninReducer,userRegisterReducer } from "./reducers/userReducers";
import { addProductsReducer } from "./reducers/productReducer";
import cartSlice from "./slices/cartSlice";

const store = configureStore({
    reducer:{
        cart: cartSlice,
        userSignin: userSigninReducer,
        userRegister: userRegisterReducer,
        addProducts: addProductsReducer
    },
});

export default store;