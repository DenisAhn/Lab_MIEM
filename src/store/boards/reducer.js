import { createSlice } from '@reduxjs/toolkit'
import { connectBoardAction, getBoardsAction } from './actions'

import { areaName } from './constants'

const initialState = {
  data: [],
  connectedBoard: {},
}

const boardsSlice = createSlice({
  name: areaName,
  initialState,
  reducers: {},
  extraReducers: ({ addCase }) => {
    addCase(getBoardsAction.fulfilled, (draft, { payload }) => {
      draft.data = payload
    })

    addCase(connectBoardAction.fulfilled, (draft, { payload }) => {
      draft.connectedBoard = payload
    })
  },
})

export default boardsSlice.reducer
