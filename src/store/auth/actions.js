import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
// Api
import { getUserRequest } from '../../api/auth'
import { areaName } from './constants'

/**
 * Получение токена
 */
export const authAction = createAsyncThunk(
  `${areaName}/token`,
  async (payload, { rejectWithValue }) => {
    try {
      const responseUser = await getUserRequest({
        token: payload,
      })

      return responseUser.data
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
