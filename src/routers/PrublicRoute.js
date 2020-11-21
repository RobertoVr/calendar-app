import React from 'react'
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom'

export const PrublicRoute = ({
    isLoggedIn,
    component: Component,
    ...rest
}) => {
    return (
        <Route
            {...rest} component={
                (props) => (
                    (!isLoggedIn)
                        ? <Component />
                        : <Redirect to="/" />
                )
            }
        />
    )
}
PrublicRoute.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}