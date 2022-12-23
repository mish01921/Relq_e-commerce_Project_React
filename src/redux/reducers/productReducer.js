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

//Create Product
export const producCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case PRODUCT_CREATE_REQUEST:
            return { loading: true, };
        case PRODUCT_CREATE_SUCCESS:
            return { loading: false, products: action.payload };
        case PRODUCT_CREATE_FAIL:
            return { loading: true, products: action.payload };
        default:
            return state
    }
};

//Get all products
export const productGetAllReducer = (state = {}, action) => {
    switch (action.type) {
        case PRODUCT_GETALL_REQUEST:
            return { loading: true, };
        case PRODUCT_GETALL_SUCCESS:
            return { loading: false, products: action.payload };
        case PRODUCT_GETALL_FAIL:
            return { loading: true, products: action.payload };
        default:
            return state
    }
};

//Delete by ID
export const  productDeleteReducer = (state =  {}, action) =>{
    switch (action.type) {
      case PRODUCT_DELETE_REQUEST:
        return { loading: true };
      case PRODUCT_DELETE_SUCCESS:
        return { loading: false, product: action.payload, success: true };
      case PRODUCT_DELETE_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  }
