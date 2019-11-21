import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Login from './components/Login'
import Signup from './components/Signup'
import Chat from './components/Chat'

const Routes = () => (
  <Switch>
    <Route exact path='/chat' component={Chat} />
    <Route exact path='/login' component={Login} />
    <Route exact path='/' component={Signup} />
  </Switch>
)

export default Routes
