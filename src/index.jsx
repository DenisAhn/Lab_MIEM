import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react'
import { AuthProvider } from 'react-oauth2-code-pkce'
import { message } from 'antd'
import App from 'components/App'
// Global styles
import 'react-quill/dist/quill.snow.css'
import 'antd/dist/antd.min.css'
import 'reactjs-popup/dist/index.css'
import 'styles/reset.scss'
import 'styles/fonts.scss'
import 'styles/common.scss'
// Constants
import { history, HistoryRouter } from '@/constants'
// Store
import { store } from './store'
// Api
import { apiSlice } from './api/apiSlice'

const container = document.getElementById('root')
const root = createRoot(container)

const postLogin = () => {
  console.log(1)
  message.success('Вход выполнен!')
}

const AppRoot = () => {
  const authConfig = {
    clientId: 'st-sapr-project',
    authorizationEndpoint:
        'https://profile.miem.hse.ru/auth/realms/MIEM/protocol/openid-connect/auth',
    tokenEndpoint:
        'https://profile.miem.hse.ru/auth/realms/MIEM/protocol/openid-connect/token',
    redirectUri: `${process.env.REACT_APP_URL}/synchronousStand`,
    scope: 'openid',
    extraTokenParameters: {
      client_secret: '67031dbf-ed3f-4528-acb5-ac4f646893c0',
    },
    tokenExpiresIn: 600,
    logoutEndpoint:
        'https://profile.miem.hse.ru/auth/realms/MIEM/protocol/openid-connect/logout',
    postLogin,
    logoutRedirect: `${process.env.REACT_APP_URL}/`,
    decodeToken: false,
    onRefreshTokenExpire: (event) =>
        window.confirm(
            'Session expired. Refresh page to continue using the site?'
        ) && event.login(),
    autoLogin: false,
  }

  return (
      <AuthProvider authConfig={authConfig}>
        <App />
      </AuthProvider>
  )
}// Components


root.render(
  <ApiProvider api={apiSlice}>
    <Provider store={store}>
      <HistoryRouter history={history}>
        <AppRoot />
      </HistoryRouter>
    </Provider>
  </ApiProvider>
)
