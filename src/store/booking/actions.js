import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
// Api
import {
  getBookingsRequest,
  deleteBookingRequest,
  createBookingRequest,
} from '../../api/booking'
import { areaName } from './constants'

/**
 * Получение бронирований
 */
export const getBookingsAction = createAsyncThunk(
  `${areaName}/get`,
  async (_, { rejectWithValue }) => {
    try {
      const response = await getBookingsRequest()

      return response.data
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const data = error.response?.data

        // Нужно обработать кейс, когда с бэка приходит сообщение об ошибке
        if (data?.statusCode || data?.error || data?.message) {
          return rejectWithValue({ ...data })
        }
      }

      return rejectWithValue({
        error: error instanceof Error ? error.message : 'Unknown error',
      })
    }
  }
)

/**
 * Удаление бронирования
 */
export const deleteBookingAction = createAsyncThunk(
  `${areaName}/delete`,
  async (payload, { rejectWithValue }) => {
    try {
      const response = await deleteBookingRequest(payload)

      return response.data
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const data = error.response?.data

        // Нужно обработать кейс, когда с бэка приходит сообщение об ошибке
        if (data?.statusCode || data?.error || data?.message) {
          return rejectWithValue({ ...data })
        }
      }

      return rejectWithValue({
        error: error instanceof Error ? error.message : 'Unknown error',
      })
    }
  }
)

/**
 * Создание бронирования
 */
export const createBookingAction = createAsyncThunk(
  `${areaName}/create`,
  async (payload, { rejectWithValue }) => {
    try {
      const response = await createBookingRequest(payload)

      return response.data
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const data = error.response?.data

        // Нужно обработать кейс, когда с бэка приходит сообщение об ошибке
        if (data?.statusCode || data?.error || data?.message) {
          return rejectWithValue({ ...data })
        }
      }

      return rejectWithValue({
        error: error instanceof Error ? error.message : 'Unknown error',
      })
    }
  }
)
