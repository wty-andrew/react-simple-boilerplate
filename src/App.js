import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { hot } from 'react-hot-loader'

import Home from './containers/Home'
import About from './containers/About'
import NotFoundPage from './containers/NotFoundPage'

import Header from './components/Header'

export const App = () => {
  return (
    <div>
      <Header />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  )
}

export default hot(module)(App)
