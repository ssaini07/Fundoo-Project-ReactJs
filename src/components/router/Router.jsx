import React from 'react'
import SignIn from '../../pages/signin/signin'
import SignUp from '../../pages/signup/signup'
import Dashboard from '../../pages/Dashboard/dashboard'
import {BrowserRouter, Route, Switch } from 'react-router-dom'

function Router() {
    return (
        <div>
            <BrowserRouter >
                <Switch>
                    <Route exact path="/" component={SignIn} />
                    <Route path="/SignUp" component={SignUp} />
                    <Route path="/Dashboard" component={Dashboard} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Router