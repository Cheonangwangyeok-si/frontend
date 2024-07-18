import React from 'react';
import { useEffect, useState, useCallback } from 'react';
import Calendar from '../components/Calendar';
import DiaryInput from '../components/DiaryInput';
import DiaryInfo from '../components/DiaryInfo';

const CalendarView = () => {

    const [dummy, setDummy] = useState([
        {
            date: "2024-06-30",
            event: "이전"
        },
        {
            date: "2024-07-06",
            event: "집"
        },
    ]);
    const [currentDate, setCurrentDate] = useState(new Date());
    const [eventBool, setEventBool] = useState(false);
    const [modifyEvent, setModifyEvent] = useState(null);

    const getYearMonthDay = useCallback((date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');

        return `${year}-${month}-${day}`;
    }, []);

    const id = getYearMonthDay(currentDate);

    const checkEvent = useCallback((id) => {
        return dummy.find(item => item.date === id);
    }, [dummy]);

    useEffect(() => {
        const event = checkEvent(id);
        setEventBool(event);
        setModifyEvent(event);
    }, [id, checkEvent]);

    return (

        <div>
            <Calendar
                dummy={dummy}
                currentDate={currentDate}
                setCurrentDate={setCurrentDate}
                getYearMonthDay={getYearMonthDay}
            />
            {eventBool ?
                <div>
                    <DiaryInfo
                        id={id}
                        dummy={dummy}
                        setDummy={setDummy}
                        data={checkEvent(id)}
                        setEventBool={setEventBool}
                        setModifyEvent={setModifyEvent}
                    />
                    <div>
                        분석 내용
                    </div>
                </div>
                :
                <DiaryInput
                    id={id}
                    dummy={dummy}
                    setDummy={setDummy}
                    modifyEvent={modifyEvent}
                />
            }
        </div>

    );
};

export default CalendarView;