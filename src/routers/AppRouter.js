import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import { startChecking } from '../actions/auth'
import { LoginScreen } from '../components/auth/LoginScreen'
import { CalendarScreen } from '../components/calendar/CalendarScreen'
import { PrivateRoute } from './PrivateRoute'
import { PrublicRoute } from './PrublicRoute'

export const AppRouter = () => {

    const dispatch = useDispatch();
    const { checking, uid } = useSelector(state => state.auth)

    useEffect(() => {
        dispatch(startChecking());
    }, [dispatch]);

    if (checking) {
        return <h5>Espere.....</h5>
    }

    return (
        <Router>
            <Switch>
                <PrublicRoute
                    path="/login"
                    component={LoginScreen}
                    isLoggedIn={!!uid}
                />
                <PrivateRoute
                    exact
                    path="/"
                    component={CalendarScreen}
                    isLoggedIn={!!uid}
                />
                <Redirect to="/" />
            </Switch>
        </ Router>
    )
}
