import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { LoginScreen } from '../components/auth/LoginScreen'
import { CalendarScreen } from '../components/calendar/CalendarScreen'

export const AppRouter = () => {
    return (
        <div>
            <Switch>
                <Route path="/login" component={LoginScreen} />
                <Route exact path="/" component={CalendarScreen} />
                <Redirect to="/" />
            </Switch>
        </div>
    )
}
