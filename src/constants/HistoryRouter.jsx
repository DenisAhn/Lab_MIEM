import { useLayoutEffect, useReducer } from 'react'
import { Router } from 'react-router-dom'

// your local created history
import { history } from './history'

const reducer = (_, action) => action

export const HistoryRouter = ({ children }) => {
  const [state, dispatch] = useReducer(reducer,
      {
    action: history.action,
    location: history.location,
  })

  useLayoutEffect(() => history.listen(dispatch), [])

  return (
    <Router
      navigationType={state.action}
      location={state.location}
      navigator={history}
    >
      {children}
    </Router>
  )
}
