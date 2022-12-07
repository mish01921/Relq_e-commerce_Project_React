import { configureStore} from "@reduxjs/toolkit";
import { userSingninReducer } from "./reducers/userReducers";
import cartSlice from "./slices/cartSlice";

const store = configureStore({
    reducer:{
        cart: cartSlice,
        userSignin: userSingninReducer,
    },
});

export default store;