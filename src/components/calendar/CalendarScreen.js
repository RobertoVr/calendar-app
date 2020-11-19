import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/es'
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { Navbar } from '../ui/Navbar';
import { messages } from '../../helpers/calendar-messages-es';
import { CalendarEvent } from './CalendarEvent';
import { CalendarModal } from './CalendarModal';
import { useDispatch, useSelector } from 'react-redux';
import { uiOpenModal } from '../../actions/ui';
import { eventCleanActiveEvent, eventSetActice } from '../../actions/events';
import { AddNewFab } from '../ui/AddNewFab';
import { DeleteEventFab } from '../ui/DeleteEventFab';

moment.locale('es');
const localizer = momentLocalizer(moment) // or globalizeLocalizer


export const CalendarScreen = () => {

    const dispatch = useDispatch();
    const { events, activeEvent } = useSelector(state => state.calendar);
    const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month')

    const onDoubleClick = (e) => {
        dispatch(uiOpenModal());
    }
    const onSelectedEvent = (e) => {
        dispatch(eventSetActice(e));
    }
    const onViewChange = (e) => {
        localStorage.setItem('lastView', e);
        setLastView(e);
    }

    const eventStyleGetter = (event, start, end, isSelected) => {
        const style = {
            backgroundColor: '#367CF7',
            borderRadius: '0px',
            opacity: 0.8,
            color: 'white',
            padding: '3px 0px 3px 3px'
        }
        return {
            style
        }
    }

    const onSelectedSlot = (e) => {
        dispatch(eventCleanActiveEvent());
    }

    return (
        <div className="calendar-screen">
            <Navbar />
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                messages={messages}
                eventPropGetter={eventStyleGetter}
                onDoubleClickEvent={onDoubleClick}
                onSelectEvent={onSelectedEvent}
                onSelectSlot={onSelectedSlot}
                selectable={true}
                onView={onViewChange}
                view={lastView}
                components={{ event: CalendarEvent }}
            />
            <AddNewFab />
            {
                activeEvent &&
                <DeleteEventFab />
            }
            <CalendarModal />
        </div>
    )
}
