import { types } from '../types/types';

// {
//     id: new Date().getTime(),
//     title: 'Cumple',
//     start: moment().toDate(),
//     end: moment().add(2, 'hours').toDate(),
//     bgcolor: '#fafafafa',
//     user: {
//         _id: '231',
//         name: 'test'
//     }
// }

const initialState = {
    events: [],
    activeEvent: null
}

export const calendarReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.eventAddNew:
            return {
                ...state,
                events: [...state.events, action.payload]
            };
        case types.eventSetACtive:
            return {
                ...state,
                activeEvent: action.payload
            };
        case types.eventCleanActiveEvent:
            return {
                ...state,
                activeEvent: null
            };
        case types.eventUpdate:
            return {
                ...state,
                events: state.events.map(event =>
                    event.id === action.payload.id
                        ? action.payload
                        : event
                )
            };
        case types.eventDeleted:
            return {
                ...state,
                events: state.events.filter(event =>
                    event.id !== state.activeEvent.id
                ),
                activeEvent: null
            };
        case types.eventLoaded:
            return {
                ...state,
                events: [...action.payload]
            };
        case types.eventLogout:
            return {
                ...state,
                activeEvent: null,
                events: []
            }
        default:
            return state;
    }
}