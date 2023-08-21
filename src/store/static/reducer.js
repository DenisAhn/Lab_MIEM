import { createSlice } from '@reduxjs/toolkit'
import { staticAction } from './actions'

import { areaName } from './constants'

const initialState = {
  general: null,
  bookings: [],
  intervals: [],
}

const staticSlice = createSlice({
  name: areaName,
  initialState,
  reducers: {},
  extraReducers: ({ addCase }) => {
    addCase(staticAction.fulfilled, (draft, { payload }) => {
      const { general, bookings, intervals } = payload

      draft.general = general
      draft.bookings = bookings
      draft.intervals = intervals
    })
  },
})

export default staticSlice.reducer
