import { createDraftSafeSelector, createSelector } from '@reduxjs/toolkit'
import { getAsyncRequestAsArraySelector } from '../async-request'
import {
  connectBoardAction,
  createBoardAction,
  deleteBoardAction,
  getBoardsAction,
} from './actions'

const selectSelf = (state) => state

const unsafeSelector = createSelector(selectSelf, (state) => state.boards)

export const selectBoardsData = createDraftSafeSelector(
  unsafeSelector,
  (state) => state.data
)

export const selectBoardsDataRequest = getAsyncRequestAsArraySelector(
  getBoardsAction.typePrefix
)

export const selectBoardDeleteRequest = getAsyncRequestAsArraySelector(
  deleteBoardAction.typePrefix
)

export const selectBoardCreateRequest = getAsyncRequestAsArraySelector(
  createBoardAction.typePrefix
)

export const selectBoardConnectRequest = getAsyncRequestAsArraySelector(
  connectBoardAction.typePrefix
)

export const selectConnectedBoardData = createDraftSafeSelector(
  unsafeSelector,
  (state) => state.connectedBoard
)
