import { configureStore} from "@reduxjs/toolkit";
import { userSingninReducer,userRegisterReducer } from "./reducers/userReducers";
import cartSlice from "./slices/cartSlice";

const store = configureStore({
    reducer:{
        cart: cartSlice,
        userSignin: userSingninReducer,
        userRegister: userRegisterReducer
    },
});

export default store;