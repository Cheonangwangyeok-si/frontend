import '../styles/Calendar.scss';
import Day from './Day';

const Calendar = ({ dummy, currentDate, setCurrentDate, getYearMonthDay }) => {
    const weeks = ['일', '월', '화', '수', '목', '금', '토'];

    const moveMonth = (direction) => {
        const nextMonth = new Date(currentDate);
        if (direction === '<') {
            nextMonth.setMonth(nextMonth.getMonth() - 1);
        } else {
            nextMonth.setMonth(nextMonth.getMonth() + 1);
        }
        setCurrentDate(nextMonth);
    }

    // 달의 시작 요일 (일,월,,,)
    const monthStart = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
    // 달의 마지막 날짜
    const monthEnd = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    // 현재 달 달력의 처음(31일,28일,,)
    const monthFirst = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1 - monthStart).getDate();
    // 현재 달 달력의 끝(1일,2일,,)
    const monthLast = monthEnd.getDate() + (6 - monthEnd.getDay());

    // 이전 달 출력
    const prevMonthDays = [];
    let idx = monthFirst;
    for (let i = 0; i < monthStart; i++) {
        const date = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, idx);
        prevMonthDays.push(date);
        idx += 1;
    }

    // 현재 달 출력
    const currentMonthDays = [];
    for (let i = 1; i <= monthEnd.getDate(); i++) {
        const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), i);
        // 현재 달의 date객체 받아오기
        currentMonthDays.push(date);
    }

    // 다음 달 출력
    const nextMonthDays = [];
    if (monthEnd.getDate() !== monthLast) {
        for (let i = 1; i <= monthLast - monthEnd.getDate(); i++) {
            const date = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, i);
            nextMonthDays.push(date);
        }
    }

    const days = [...prevMonthDays, ...currentMonthDays, ...nextMonthDays];

    const findEvent = (date) => {
        const event = dummy.find(event => event.date === getYearMonthDay(date));
        return event ? event.event : null;
    };

    return (
        <div className='calendar'>
            <header>
                <button onClick={() => { moveMonth('<') }}>이전 달</button>
                <div>
                    <b>{currentDate.getMonth() + 1}월 </b>
                    <span>{currentDate.getFullYear()}년</span>
                </div>
                <button onClick={() => { moveMonth('>') }}>다음 달</button>
            </header>

            <section>
                {weeks.map((week, index) => {
                    return <div key={index}>{week}</div>
                })}
            </section>

            <main>
                {days.map((day) => (
                    < Day
                        id={getYearMonthDay(day)}
                        key={getYearMonthDay(day)}
                        day={day}
                        event={findEvent(day)}
                        setCurrentDate={setCurrentDate}
                        currentDate={currentDate}
                        getYearMonthDay={getYearMonthDay}
                    />
                ))}
            </main>
        </div>
    );
};

export default Calendar;