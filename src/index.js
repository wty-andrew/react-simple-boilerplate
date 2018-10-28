import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { AppContainer } from 'react-hot-loader'

import './assets/styles/main.scss'
import { configureStore, history } from '../common/store'
import App from './App'

const initialState = {}
const store = configureStore(initialState)

render(
  <AppContainer>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  </AppContainer>,
  document.getElementById('root')
)
