import axios from "axios";
import { ADD_PRODUCT_REQUEST,ADD_PRODUCT_SUCCESS,ADD_PRODUCT_FAIL } from "../constants/productConstant";


export const addProduct = (productData) => async (dispatch) => {
  try {
   dispatch({ type: ADD_PRODUCT_REQUEST })
   
   const { data } = await axios.post("http://localhost:5000/addProduct",productData)

   dispatch({
    type: ADD_PRODUCT_SUCCESS,
    payload: data
   })
  } catch (error) {
    dispatch({
      type: ADD_PRODUCT_FAIL,
      payload: error.response && error.response.data.msg
      ? error.response.data.msg
      : error.msg,
       
    });
  }
};

/*export const signup = (name, surname, email, password, confirmPassword) => async (dispatch) => {
  dispatch({ type: USER_REGISTER_REQUEST, payload: { name, email, password,confirmPassword } });
  try {
    const { data } = await axios.post("http://localhost:5000/signup", { name,surname, email, password,confirmPassword });
    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });

    localStorage.setItem("userInfo", JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.msg,
    });
  }
}*/