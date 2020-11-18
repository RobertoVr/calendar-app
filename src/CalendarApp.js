import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { AppRouter } from './routers/AppRouter'

export const CalendarApp = () => {
    return (
        <Router>
            <AppRouter />
        </Router>
    )
}
