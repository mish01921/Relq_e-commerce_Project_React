import {  configureStore} from "@reduxjs/toolkit";
import { userSigninReducer,userRegisterReducer } from "./reducers/userReducers";
import {producCreateReducer, productGetAllReducer, productDeleteReducer } from "./reducers/productReducer";
import cartSlice from "./slices/cartSlice";


const store = configureStore({
    reducer:{
        cart: cartSlice,
        userSignin: userSigninReducer,
        userRegister: userRegisterReducer,
        getAllProducts: productGetAllReducer,
        productCreate: producCreateReducer,
        productDelete: productDeleteReducer,
    },
});

export default store;