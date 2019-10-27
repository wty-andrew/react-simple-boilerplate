import React from 'react'
import { ConnectedRouter } from 'connected-react-router'
import { createMemoryHistory } from 'history'
import { Provider } from 'react-redux'
import { render, fireEvent } from '@testing-library/react'

import { App } from './App'
import { configureStore, initialState } from '../common/store'

const renderWithReduxAndRouter = (
  ui,
  {
    initialState,
    history = createMemoryHistory(),
    store = configureStore(initialState, history),
  } = {}
) => {
  return {
    ...render(
      <Provider store={store}>
        <ConnectedRouter history={history}>{ui}</ConnectedRouter>
      </Provider>
    ),
    history,
    store,
  }
}

describe('Full app rendering', () => {
  it('should renders correctly', () => {
    const { asFragment } = renderWithReduxAndRouter(<App />, { initialState })

    expect(asFragment()).toMatchSnapshot()
  })
})

describe('Full app navigation', () => {
  it('should start on home page', () => {
    const { store, getByText } = renderWithReduxAndRouter(<App />, {
      initialState,
    })

    const { router } = store.getState()
    expect(router.location.pathname).toBe('/')
    expect(getByText('You are home')).toBeInTheDocument()
  })

  it('should navigate to about page on link click', () => {
    const { store, getByText } = renderWithReduxAndRouter(<App />, {
      initialState,
    })

    fireEvent.click(getByText(/about/i))

    const { router } = store.getState()
    expect(router.location.pathname).toBe('/about')
    expect(getByText('You are on the about page')).toBeInTheDocument()
  })

  it('should navigate to not found page when url is invalid', () => {
    const { history, store, getByText } = renderWithReduxAndRouter(<App />, {
      initialState,
    })
    const invalidURL = '/some/bad/route'

    history.push(invalidURL)

    const { router } = store.getState()
    expect(router.location.pathname).toBe(invalidURL)
    expect(getByText('404 - Not Found')).toBeInTheDocument()
  })
})
