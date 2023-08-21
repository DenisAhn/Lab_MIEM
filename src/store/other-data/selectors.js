import { createDraftSafeSelector, createSelector } from '@reduxjs/toolkit'
import { getAsyncRequestAsArraySelector } from '../async-request'
import {
  getAvailableIntervalsAction,
  getGeneralInfoTextAction,
  saveGeneralInfoTextAction,
  saveManualTextAction,
  saveSupportTextAction,
} from './actions'

const selectSelf = (state) => state

const unsafeSelector = createSelector(selectSelf, (state) => state.otherData)

export const selectAvailableIntervals = createDraftSafeSelector(
  unsafeSelector,
  (state) => state.availableIntervals
)

export const selectGeneralInfoText = createDraftSafeSelector(
  unsafeSelector,
  (state) => state.generalInfoText
)

export const selectManualText = createDraftSafeSelector(
  unsafeSelector,
  (state) => state.manualText
)

export const selectSupportText = createDraftSafeSelector(
  unsafeSelector,
  (state) => state.supportText
)

export const selectGetAvailableIntervalsRequest =
  getAsyncRequestAsArraySelector(getAvailableIntervalsAction.typePrefix)

export const selectGetGeneralInfoTextRequest = getAsyncRequestAsArraySelector(
  getGeneralInfoTextAction.typePrefix
)

export const selectSaveGeneralInfoTextRequest = getAsyncRequestAsArraySelector(
  saveGeneralInfoTextAction.typePrefix
)

export const selectSaveManualTextRequest = getAsyncRequestAsArraySelector(
  saveManualTextAction.typePrefix
)

export const selectSaveSupportTextRequest = getAsyncRequestAsArraySelector(
  saveSupportTextAction.typePrefix
)
