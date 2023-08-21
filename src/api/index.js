import axios from 'axios'

const $api = axios.create({
  baseURL: process.env.VITE_APP_API_URL,
})

const $apiInfo = axios.create({
  baseURL: process.env.VITE_APP_API_URL_INFO,
})

const $apiMiem = axios.create({
  baseURL: process.env.VITE_APP_API_URL_MIEM,
})

const $apiStatic = axios.create({
  baseURL: process.env.VITE_APP_API_URL_STATIC,
})

export { $api, $apiInfo, $apiMiem, $apiStatic }
