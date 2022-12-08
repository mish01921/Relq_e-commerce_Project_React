import { createSlice } from '@reduxjs/toolkit'
import { signin } from '../actions/userActions';

const userToken = localStorage.getItem('userToken')
  ? localStorage.getItem('userToken')
  : null


const initialState = {
  loading: false,
  userInfo: {}, // for user object
  userToken: null, // for storing the JWT
  error: null,
  success: false, // for monitoring the registration process.
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [signin.pending]: (state) => {
        state.loading = true
        state.error = null
      },
      [signin.fulfilled]: (state, { payload }) => {
        state.loading = false
        state.userInfo = payload
        state.userToken = payload.userToken
      },
      [signin.rejected]: (state, { payload }) => {
        state.loading = false
        state.error = payload
      },
      // register user reducer...
    },
})

export default userSlice.reducer