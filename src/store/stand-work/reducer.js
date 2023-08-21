import { createSlice } from '@reduxjs/toolkit'

import { areaName } from './constants'

const initialState = {
  log: [],
}

const standWorkSlice = createSlice({
  name: areaName,
  initialState,
  reducers: {
    changeLog: (state, { payload }) => {
      const copyLog = [...state.log]
      copyLog.push(payload)

      return {
        ...state,
        log: copyLog,
      }
    },
    clearLog: (state) => {
      return {
        ...state,
        log: [],
      }
    },
  },
})

export const { changeLog, clearLog } = standWorkSlice.actions

export default standWorkSlice.reducer
