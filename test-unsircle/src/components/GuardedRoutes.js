import React from 'react'
import { BrowserRouter as Router, Switch,  Route } from 'react-router-dom'

import RegisterPanel from '../views/RegisterPanel'
import LoginPanel from '../views/LoginPanel'
import ForgotPassword from '../views/ForgotPassword'
import Home from '../views/Home'

export default function GuardedRoutes() {
    return (
        <Router>
            <Switch>
                <Route path="/register">
                    <RegisterPanel/>
                </Route>
                <Route path="/login">
                    <LoginPanel/>
                </Route>
                <Route path="/forgotPassword">
                    <ForgotPassword/>
                </Route>
                <Route path ="/">
                    <Home/>
                </Route>
            </Switch>
      </Router> 
    )
}