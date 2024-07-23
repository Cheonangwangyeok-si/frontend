import React from 'react';
import '../styles/calendar/Day.scss';

const Day = ({ day, event, id, currentDate, setCurrentDate, getYearMonthDay, setClickDay, clickDay }) => {
    const onClick = () => {
        setCurrentDate(day)
        setClickDay(true);
    }

    return (
        <div id={id} className={`day ${id === getYearMonthDay(currentDate) && clickDay ? 'currentDay' : ''} 
                                ${event ? 'event' : ''}`} onClick={onClick}>
            {day.getDate()}
        </div>
    );
};

export default Day;