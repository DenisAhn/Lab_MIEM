import { $api } from '.'

export const getAvailableIntervalsRequest = async ({ board, date }) => {
  return $api.get('/getAvailableIntervals', {
    params: {
      board,
      date,
    },
  })
}
