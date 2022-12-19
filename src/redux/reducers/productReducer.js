import { ADD_PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_RESET, ADD_PRODUCT_FAIL, CLEAR_ERROR } from "../constants/productConstant";


export const addProductsReducer = (state = { product: {} }, action) => {
    switch (action.type) {
        case ADD_PRODUCT_REQUEST:
            return { ...state, loading: true };
        case ADD_PRODUCT_SUCCESS:
            return { loading: false, success: action.payload.success, product: action.payload.product }
        case ADD_PRODUCT_FAIL:
            return { ...state, error: action.payload };
        case ADD_PRODUCT_RESET:
            return { ...state, success: false };
        case CLEAR_ERROR:
            return { ...state, error: null };
        default:
            return state;
    }
}
