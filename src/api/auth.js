import { $apiMiem } from '.'

export const getTokenRequest = async (payload) => {
  return $apiMiem.post('/token', payload)
}

export const getUserRequest = async ({ token }) => {
  return $apiMiem.post('/userinfo', { token })
}
