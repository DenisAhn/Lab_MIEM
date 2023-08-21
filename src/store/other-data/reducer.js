import { createSlice } from '@reduxjs/toolkit'
import {
  getAvailableIntervalsAction,
  getGeneralInfoTextAction,
  getManualTextAction,
  getSupportTextAction,
} from './actions'

import { areaName } from './constants'
import { timeOptions } from '@/constants'

const initialState = {
  availableIntervals: timeOptions,
  generalInfoText: '',
  manualText: '',
  supportText: '',
}

const otherDataSlice = createSlice({
  name: areaName,
  initialState,
  reducers: {},
  extraReducers: ({ addCase }) => {
    addCase(getAvailableIntervalsAction.fulfilled, (draft, { payload }) => {
      const formatIntervals = timeOptions.map((item, index) => {
        if (!payload.freeIntervals.includes(item.value)) {
          return {
            ...item,
            disabled: true,
          }
        }

        return item
      })
      draft.availableIntervals = formatIntervals
    })

    addCase(getGeneralInfoTextAction.fulfilled, (draft, { payload }) => {
      draft.generalInfoText = payload.text
    })

    addCase(getManualTextAction.fulfilled, (draft, { payload }) => {
      draft.manualText = payload.text
    })

    addCase(getSupportTextAction.fulfilled, (draft, { payload }) => {
      draft.supportText = payload.text
    })
  },
})

// export const {  } = otherDataSlice.actions

export default otherDataSlice.reducer
