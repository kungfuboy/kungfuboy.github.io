import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './App'
import Home from './Home'
import Web from './Web'
import Think from './Think'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/home" component={Home} />
    <Route path="/web" component={Web} />
    <Route path="/think" component={Think} />
  </Route>
)
