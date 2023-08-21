import { createSlice } from '@reduxjs/toolkit'

import { areaName } from './constants'

const initialState = {
  isAuth: false,
  isAdmin: false,
  authData: {},
}

const authSlice = createSlice({
  name: areaName,
  initialState,
  reducers: {
    changeAuth: (state, { payload }) => {
      return {
        ...state,
        isAuth: !state.isAuth,
        authData: payload,
      }
    },
    changeAdmin: (state) => {
      return {
        ...state,
        isAdmin: !state.isAdmin,
      }
    },
  },
})

export const { changeAuth, changeAdmin } = authSlice.actions

export default authSlice.reducer
