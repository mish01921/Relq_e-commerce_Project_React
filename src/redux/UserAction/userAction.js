import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const registerUser = createAsyncThunk(
    'signup',
   
    async ({ name,surname, email, password,confirmPassword }, { rejectWithValue }) => {
    
        try {
            
            await axios.post(
                "http://localhost:5000/signup",
                { name,surname, email, password,confirmPassword },
            )
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)
