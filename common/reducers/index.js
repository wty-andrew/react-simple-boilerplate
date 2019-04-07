import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import globalReducer from './global/globalReducer'

const createRootReducer = history =>
  combineReducers({
    global: globalReducer,
    router: connectRouter(history),
  })

export default createRootReducer
