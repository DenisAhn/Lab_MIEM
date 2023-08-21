import { createDraftSafeSelector, createSelector } from '@reduxjs/toolkit'
import { getAsyncRequestAsArraySelector } from '../async-request'
import { staticAction } from './actions'

const selectSelf = (state) => state

const unsafeSelector = createSelector(selectSelf, (state) => state.static)

export const selectGeneral = createDraftSafeSelector(
  unsafeSelector,
  (state) => state.general
)

export const selectBookings = createDraftSafeSelector(
  unsafeSelector,
  (state) => state.bookings
)

export const selectIntervals = createDraftSafeSelector(
  unsafeSelector,
  (state) => state.intervals
)

export const selectGetStaticRequest = getAsyncRequestAsArraySelector(
  staticAction.typePrefix
)
