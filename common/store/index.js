import { createMemoryHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction'

import createRootReducer from '../reducers'

export const history = createMemoryHistory()
const middleware = [thunk, routerMiddleware(history)]

const options = {}
const composeEnhancers = composeWithDevTools(options)

export const initialState = {}

export const configureStore = (
  initialState = initialState,
  history = history
) => {
  const store = createStore(
    createRootReducer(history),
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
  )

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      store.replaceReducer(createRootReducer(history))
    })
  }
  return store
}
