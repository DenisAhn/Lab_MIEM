import { createSlice } from '@reduxjs/toolkit'
import { getBookingsAction } from './actions'

import { areaName } from './constants'

const initialState = {
  data: [],
}

const bookingSlice = createSlice({
  name: areaName,
  initialState,
  reducers: {},
  extraReducers: ({ addCase }) => {
    addCase(getBookingsAction.fulfilled, (draft, { payload }) => {
      draft.data = payload
    })
  },
})

export default bookingSlice.reducer
