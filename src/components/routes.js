import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './App'
import Home from './Home'
import Web from './Web'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/home" component={Home} />
    <Route path="/web" component={Web} />
  </Route>
)
