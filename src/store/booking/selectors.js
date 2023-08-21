import { createDraftSafeSelector, createSelector } from '@reduxjs/toolkit'
import { getAsyncRequestAsArraySelector } from '../async-request'
import {
  createBookingAction,
  deleteBookingAction,
  getBookingsAction,
} from './actions'

const selectSelf = (state) => state

const unsafeSelector = createSelector(selectSelf, (state) => state.booking)

export const selectBookingData = createDraftSafeSelector(
  unsafeSelector,
  (state) => state.data
)

export const selectBookingDataRequest = getAsyncRequestAsArraySelector(
  getBookingsAction.typePrefix
)

export const selectBookingDeleteRequest = getAsyncRequestAsArraySelector(
  deleteBookingAction.typePrefix
)

export const selectBookingCreateRequest = getAsyncRequestAsArraySelector(
  createBookingAction.typePrefix
)
