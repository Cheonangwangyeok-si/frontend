import React from 'react';
import '../styles/calendar/Day.scss';

const Day = ({ day, event, id, currentDate, setCurrentDate, getYearMonthDay }) => {
    const onClick = () => {
        setCurrentDate(day)
    }

    return (
        <div id={id} className={`day ${id === getYearMonthDay(currentDate) ? 'currentDay' : ''} 
                                ${event ? 'event' : ''}`} onClick={onClick}>
            {day.getDate()}
        </div>
    );
};

export default Day;