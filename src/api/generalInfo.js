import { $apiInfo } from '.'

export const getGeneralInfoTextRequest = async () => {
  return $apiInfo.get('/getGeneralInfo')
}

export const saveGeneralInfoTextRequest = async ({ text }) => {
  return $apiInfo.post('/saveGeneralInfo', { text })
}

export const getManualTextRequest = async () => {
  return $apiInfo.get('/getManual')
}

export const saveManualTextRequest = async ({ text }) => {
  return $apiInfo.post('/saveManual', { text })
}

export const getSupportTextRequest = async () => {
  return $apiInfo.get('/getSupport')
}

export const saveSupportTextRequest = async ({ text }) => {
  return $apiInfo.post('/saveSupport', { text })
}
