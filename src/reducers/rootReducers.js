import { combineReducers } from 'redux'
import { uiReducer } from './uiReducer'

export const rootReducers = combineReducers({
    ui: uiReducer
});