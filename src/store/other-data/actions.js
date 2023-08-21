import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
// Api
import { getAvailableIntervalsRequest } from '../../api/other'
import {
  getGeneralInfoTextRequest,
  saveGeneralInfoTextRequest,
  getManualTextRequest,
  getSupportTextRequest,
  saveManualTextRequest,
  saveSupportTextRequest,
} from '../../api/generalInfo'
import { areaName } from './constants'

/**
 * Получение интервалов времени
 */
export const getAvailableIntervalsAction = createAsyncThunk(
  `${areaName}/get`,
  async (payload, { rejectWithValue }) => {
    try {
      const response = await getAvailableIntervalsRequest(payload)

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
 * Получение текста для общей информации
 */
export const getGeneralInfoTextAction = createAsyncThunk(
  `${areaName}/getGeneralText`,
  async (_, { rejectWithValue }) => {
    try {
      const response = await getGeneralInfoTextRequest()

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
 * Сохранение текста для общей информации
 */
export const saveGeneralInfoTextAction = createAsyncThunk(
  `${areaName}/saveGeneralText`,
  async (payload, { rejectWithValue }) => {
    try {
      const response = await saveGeneralInfoTextRequest(payload)

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
 * Получение текста для инструкции
 */
export const getManualTextAction = createAsyncThunk(
  `${areaName}/getManualText`,
  async (_, { rejectWithValue }) => {
    try {
      const response = await getManualTextRequest()

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
 * Сохранение текста для инструкции
 */
export const saveManualTextAction = createAsyncThunk(
  `${areaName}/saveManualText`,
  async (payload, { rejectWithValue }) => {
    try {
      const response = await saveManualTextRequest(payload)

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
 * Получение текста для поддержки
 */
export const getSupportTextAction = createAsyncThunk(
  `${areaName}/getSupportText`,
  async (_, { rejectWithValue }) => {
    try {
      const response = await getSupportTextRequest()

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
 * Сохранение текста для поддержки
 */
export const saveSupportTextAction = createAsyncThunk(
  `${areaName}/saveSupportText`,
  async (payload, { rejectWithValue }) => {
    try {
      const response = await saveSupportTextRequest(payload)

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
