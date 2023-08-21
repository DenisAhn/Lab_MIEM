import { $apiStatic } from '.'

export const getStaticRequest = async ({ from }) => {
  return $apiStatic.get('/getStatistic', {
    params: {
      from,
    },
  })
}
