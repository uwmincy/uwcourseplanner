import React from 'react';
import './styles.scss';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const Schedule = ({ events }) => (
    <div className="schedule">
        <Calendar
            events={events}
            startAccessor="start"
            endAccessor="end"
            defaultDate={moment().toDate()}
            localizer={localizer}
        />
    </div>
);

export default Schedule;