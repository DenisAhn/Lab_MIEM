import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
// Api
import { areaName } from './constants'
import { getStaticRequest } from '../../api/static'

/**
 * Получение статистики
 */
export const staticAction = createAsyncThunk(
  `${areaName}/get`,
  async (payload, { rejectWithValue }) => {
    try {
      const response = await getStaticRequest({
        from: payload,
      })

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
