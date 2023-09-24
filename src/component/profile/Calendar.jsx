import React, {useState} from 'react';
import style from './calendar.module.css';
import DateWrapper from "./DateWrapper";

const Calendar = ({data=[]}) => {
    const [hoveredDate, setHoveredDate] = useState(null);

    const monthNames = [
        "Jan", "Feb", "Mar", "Apr",
        "May", "Jun", "Jul", "Aug",
        "Sep", "Oct", "Nov", "Dec"
    ];

    const currentYear = new Date().getFullYear();
    // Преобразование createdAt в массив дат в формате YYYY-MM-DD
    const activesDates = data.map(item => {
        const createdAt = new Date(item.createdAt);
        const year = createdAt.getFullYear();
        const month = String(createdAt.getMonth() + 1).padStart(2, '0');
        const day = String(createdAt.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    });

    const getDaysInMonth = (year, month) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const generateCalendar = (year) => {
        const days = [];
        let firstDayOfWeek = new Date(year, 0, 1).getDay(); // День недели, с которого начинается год

        for (let month = 0; month < 12; month++) {
            const totalDays = getDaysInMonth(year, month);

            if (month === 0) {
                // Добавляем пустые ячейки в начале года
                for (let i = 0; i < firstDayOfWeek; i++) {
                    days.push(<div key={`empty-start-${i}`} className={style.emptyDay}/>);
                }
            }
            // заполняем дни
            for (let i = 1; i <= totalDays; i++) {
                const dateString = `${year}-${String(month + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
                const trimmedDateString = dateString.trim();
                const isActive = activesDates.includes(trimmedDateString);
                days.push(
                    <div key={i}
                         className={isActive ? style.activeDay : style.day}
                         onMouseEnter={(e) => setHoveredDate(<DateWrapper date={trimmedDateString} value={activesDates} event={e}/>)}
                         onMouseLeave={() => setHoveredDate(null)}
                    />
                )
            }

            if (month === 11) {
                // Добавляем пустые ячейки в конце года
                for (let i = 0; i < 6 - (new Date(year, 11, totalDays).getDay()); i++) {
                    days.push(<div key={`empty-end-${i}`} className={style.emptyDay}/>);
                }
            }
        }

        const weeks = [];
        let currentWeek = [];

        for (let i = 0; i < days.length; i += 7) {
            currentWeek = days.slice(i, i + 7);
            weeks.push(<div className={style.week} key={i}>{currentWeek}</div>);
        }

        return weeks;
    };

    return (
        <div className={style.wrapper}>
            <div className={style.monthLabel}>
                {monthNames.map(item=><div key={item} className={style.monthName}>{item}</div>)}
            </div>
            <div className={style.calendar}>
                <div className={style.daysOfWeek}>
                    <span>Sunday</span>
                    <span>Wednesday</span>
                    <span>Saturday</span>
                </div>
                <div className={style.month}>
                    {generateCalendar(currentYear)}
                </div>
            </div>
            {hoveredDate && hoveredDate}
        </div>
    )
}

export default Calendar;
