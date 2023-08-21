import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
// Api
import {
  createBoardRequest,
  deleteBoardRequest,
  getBoardsRequest,
  connectBoardRequest,
} from '../../api/boards'
import { areaName } from './constants'

/**
 * Получение стендов
 */
export const getBoardsAction = createAsyncThunk(
  `${areaName}/get`,
  async (_, { rejectWithValue }) => {
    try {
      const response = await getBoardsRequest()

      return response.data.boards
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
 * Удаление тренда
 */
export const deleteBoardAction = createAsyncThunk(
  `${areaName}/delete`,
  async (payload, { rejectWithValue }) => {
    try {
      const response = await deleteBoardRequest(payload)

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
 * Создание стенда
 */
export const createBoardAction = createAsyncThunk(
  `${areaName}/create`,
  async (payload, { rejectWithValue }) => {
    try {
      const response = await createBoardRequest(payload)

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
 * Подключение к стенду
 */
export const connectBoardAction = createAsyncThunk(
  `${areaName}/connect`,
  async (payload, { rejectWithValue }) => {
    try {
      const response = await connectBoardRequest(payload)

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
