import { createBrowserHistory } from 'history'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction'

import rootReducer from '../reducers'

export const history = createBrowserHistory()
const middleware = [thunk, routerMiddleware(history)]

const options = {}
const composeEnhancers = composeWithDevTools(options)

export const configureStore = (initialState = {}) => {
  const store = createStore(
    connectRouter(history)(rootReducer),
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
  )

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      store.replaceReducer(connectRouter(history)(rootReducer))
    })
  }
  return store
}
