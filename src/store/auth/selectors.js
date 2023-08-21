import { createDraftSafeSelector, createSelector } from '@reduxjs/toolkit'
import { getAsyncRequestAsArraySelector } from '../async-request'
import { authAction } from './actions'

const selectSelf = (state) => state

const unsafeSelector = createSelector(selectSelf, (state) => state.auth)

export const selectIsAuth = createDraftSafeSelector(
  unsafeSelector,
  (state) => state.isAuth
)

export const selectIsAdmin = createDraftSafeSelector(
  unsafeSelector,
  (state) => state.isAdmin
)

export const selectAuthActionRequest = getAsyncRequestAsArraySelector(
  authAction.typePrefix
)
