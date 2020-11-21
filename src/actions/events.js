import { types } from '../types/types'

export const eventAddNew = (event) => ({ type: types.eventAddNew, payload: event });
export const eventSetActice = (event) => ({ type: types.eventSetACtive, payload: event });
export const eventCleanActiveEvent = () => ({ type: types.eventCleanActiveEvent });
export const eventUpdated = (event) => (
    {
        type: types.eventUpdate,
        payload: event
    }
)

export const eventDeleted = () => ({ type: types.eventDeleted });