import { $api } from '.'

export const getBoardsRequest = async () => {
  return $api.get('/getBoards')
}

export const deleteBoardRequest = async ({ name }) => {
  return $api.post('/deleteBoard', {
    name,
  })
}

export const createBoardRequest = async ({
  name,
  nameBoard,
  family,
  model,
  linkApi,
}) => {
  return $api.post('/addBoard', {
    name,
    nameBoard,
    family,
    model,
    linkApi,
  })
}

export const connectBoardRequest = async ({ accessСode }) => {
  return $api.post('/connectToBoard', {
    accessСode,
  })
}
