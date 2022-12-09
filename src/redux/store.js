import { combineReducers, configureStore} from "@reduxjs/toolkit";
import { userSigninReducer,userRegisterReducer } from "./reducers/userReducers";
import cartSlice from "./slices/cartSlice";

// const store = configureStore({
//     reducer:{
//         cart: cartSlice,
//         userSignin: userSingninReducer,
//         userRegister: userRegisterReducer
//     },
// });


const initialState = {
    userSignin: {
        userInfo: localStorage.getItem("userInfo") 
        ? JSON.parse(localStorage.getItem("userInfo")): null
    }
}
const reducers = combineReducers({
 userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
  cart: cartSlice
})

const store = configureStore(
   {reducer: reducers},
    initialState,
  );

export default store;