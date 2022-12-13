import {  configureStore} from "@reduxjs/toolkit";
import { userSigninReducer,userRegisterReducer } from "./reducers/userReducers";
import cartSlice from "./slices/cartSlice";

const store = configureStore({
    reducer:{
        cart: cartSlice,
        userSignin: userSigninReducer,
        userRegister: userRegisterReducer
    },
});

export default store;