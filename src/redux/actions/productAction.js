// import axios from "axios";
// import { 
//   ADD_PRODUCT_REQUEST,
//   ADD_PRODUCT_SUCCESS,
//   ADD_PRODUCT_FAIL,
//   CLEAR_ERROR,

//   ALL_PRODUCT_REQUEST,
//   ALL_PRODUCT_SUCCESS,
//   ALL_PRODUCT_FAIL,
// } from "../constants/productConstant";


// export const addProduct = (productData) => async (dispatch) => {
//   try {
//    dispatch({ type: ADD_PRODUCT_REQUEST })

//    const { data } = await axios.post("http://localhost:5000/addProduct",productData)

//    dispatch({
//     type: ADD_PRODUCT_SUCCESS,
//     payload: data.productData
//    })
//   } catch (error) {
//     dispatch({
//       type: ADD_PRODUCT_FAIL,
//       payload: error.response && error.response.data.msg
//       ? error.response.data.msg
//       : error.msg,

//     });
//   }
// };

// export const allProductsAction = () => async(dispatch) => {
//   try {
//     dispatch({ type: ALL_PRODUCT_REQUEST})

//     const { data } = await axios.get("http://localhost:5000/allProducts"
//     )
//     dispatch({
//       type: ALL_PRODUCT_SUCCESS,
//       payload: data.getAllProducts
//     })
//   } catch (error) {
//     dispatch({
//       type: ALL_PRODUCT_FAIL,
//       payload: error.response && error.response.data.msg
//       ? error.response.data.msg
//       : error.msg,
//     })
//   }
// }


// //Clear error
// export const clearError = () => async(dispatch) => {
//   dispatch({
//     type: CLEAR_ERROR
//   })
// }
import axios from "axios";
import {
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_CREATE_FAIL,

  PRODUCT_GETALL_REQUEST,
  PRODUCT_GETALL_SUCCESS,
  PRODUCT_GETALL_FAIL,

  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_FAIL,
} from "../constants/productConstant";

export const createProduct = (title, shortDescription, description, category, price, imgUrl, published) => async (dispatch, getState) => {
  try {
    dispatch({ type: PRODUCT_CREATE_REQUEST });
    const { data } = await axios.post("http://localhost:5000/addProduct", { title, shortDescription, description, category, price, imgUrl, published }, {
      headers: {
        "Content-Type": "multipart/form-data",
      }
    })
    dispatch({ type: PRODUCT_CREATE_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: PRODUCT_CREATE_FAIL,
      payload:
        error.response && error.response.data.msg ? error.response.data.msg : error.msg,
    })
  }
}

export const getAllProduct = (title, category, price, imgUrl) => async (dispatch, getState) => {
  try {
    dispatch({ type: PRODUCT_GETALL_REQUEST });
    const { data } = await axios.get("http://localhost:5000/allProducts", { title, category, price, imgUrl }, {
      headers: {
        "Content-Type": "multipart/form-data",
      }

    })
    dispatch({ type: PRODUCT_GETALL_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: PRODUCT_GETALL_FAIL,
      payload:
        error.response && error.response.data.msg ? error.response.data.msg : error.msg,
    })
  }
}

export const deleteProdcut = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: PRODUCT_DELETE_REQUEST });
    await axios.delete("http://localhost:5000/:id", {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    dispatch({ type: PRODUCT_DELETE_SUCCESS });
  } catch (error) {
    dispatch({ type: PRODUCT_DELETE_FAIL, payload: error.message });
  }
};