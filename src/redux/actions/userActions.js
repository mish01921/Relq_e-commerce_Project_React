import  axios from "axios";
import { USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS } from "../constants/userConstants"

export const signin = (email,password) => async(dispatch) => {
    dispatch({type: USER_SIGNIN_REQUEST, payload:{email,password}});

    try {
        
      const {data} = await axios.post("http://localhost:5000/login", {email,password});
     
      dispatch({type: USER_SIGNIN_SUCCESS,payload: data});
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
        
       dispatch({type: USER_SIGNIN_FAIL,
        payload: 
        error.response && error.response.data.msg
        ?error.response.data.msg
        : error.msg,
    })

    }
}