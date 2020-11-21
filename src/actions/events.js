import Swal from 'sweetalert2';
import { fetchConToken } from '../helpers/fetch';
import { prepareEvents } from '../helpers/prepareEvents';
import { types } from '../types/types'


export const eventStartAddNew = (event) => {
    return async (dispatch, getState) => {
        try {
            const { uid, name } = getState().auth;
            const resp = await fetchConToken('events', event, 'POST');
            const body = await resp.json();

            if (body.ok) {
                event.id = body.evento.id;
                event.user = {
                    _id: uid,
                    name: name
                }
                dispatch(eventAddNew(event));
            }
        } catch (error) {
            console.log(error);
        }

    }
}
export const eventStartLoading = () => {
    return async (dispatch) => {
        try {
            const resp = await fetchConToken('events');
            const body = await resp.json();
            const { eventos } = body;
            const events = prepareEvents(eventos);
            dispatch(eventLoaded(events));
        } catch (error) {
            console.log(error);
        }
    }
}

export const eventStartUpdated = (event) => {
    return async (dispatch) => {
        try {

            const resp = await fetchConToken(`events/${event.id}`, event, 'PUT');
            const body = await resp.json();
            if (body.ok) {
                dispatch(eventUpdated(event));
            } else {
                Swal.fire('error', body.msg, 'error');
            }
        } catch (error) {
            console.log(error);
        }
    }
}

export const eventStartDeleted = () => {
    return async (dispatch, getState) => {
        try {
            const { id } = getState().calendar.activeEvent;
            const resp = await fetchConToken(`events/${id}`, {}, 'DELETE');
            const body = await resp.json();
            if (body.ok) {
                dispatch(eventDeleted());
            } else {
                Swal.fire('error', body.msg, 'error');
            }
        } catch (error) {
            console.log(error);
        }
    }
}

const eventLoaded = (events) => ({ type: types.eventLoaded, payload: events });
const eventAddNew = (event) => ({ type: types.eventAddNew, payload: event });
export const eventSetActice = (event) => ({ type: types.eventSetACtive, payload: event });
export const eventCleanActiveEvent = () => ({ type: types.eventCleanActiveEvent });
const eventUpdated = (event) => (
    {
        type: types.eventUpdate,
        payload: event
    }
);
const eventDeleted = () => ({ type: types.eventDeleted });
export const eventLogout = () => ({ type: types.eventLogout });