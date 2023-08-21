import { configureStore } from '@reduxjs/toolkit'
// Api
import { apiSlice } from '../api/apiSlice'
// Reducers
import asyncRequest from '../store/async-request/reducer'
import booking from './booking'
import standWork from './stand-work'
import boards from './boards'
import otherData from './other-data'
import auth from './auth'
import staticSlice from './static'

export const store = configureStore({
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      immutableCheck: true,
      serializableCheck: true,
      thunk: true,
    }),
    apiSlice.middleware,
  ],
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    asyncRequest,
    standWork,
    booking,
    boards,
    otherData,
    auth,
    static: staticSlice,
  },
})
