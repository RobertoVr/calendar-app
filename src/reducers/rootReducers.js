import { combineReducers } from 'redux'
import { calendarReducer } from './calendarReducer';
import { uiReducer } from './uiReducer'

export const rootReducers = combineReducers({
    ui: uiReducer,
    calendar: calendarReducer
});