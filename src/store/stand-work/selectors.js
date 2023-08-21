import { createDraftSafeSelector, createSelector } from '@reduxjs/toolkit'

const selectSelf = (state) => state

const unsafeSelector = createSelector(selectSelf, (state) => state.standWork)

export const selectLog = createDraftSafeSelector(
  unsafeSelector,
  (state) => state.log
)
