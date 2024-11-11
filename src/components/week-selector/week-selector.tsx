import React, { useState } from 'react';
import "./week-selector.css";
import {calculateWeek, getMonthFromWeek, getWeeksInYear} from './util/calculateWeeksAndMonths';

const WeekSelector = () => {
  
    const [currentWeek, setCurrentWeek] = useState(calculateWeek());
    const [currentMonth, setCurrentMonth] = useState(getMonthFromWeek(currentWeek));
    const [totalWeeksInYear] = useState(getWeeksInYear());


    const toggleWeek = (direction: 'next' | 'prev') => {
    setCurrentWeek((prevWeek) => {
        let newWeek = direction === 'next' ? prevWeek + 1 : prevWeek - 1;
        if (newWeek > totalWeeksInYear) newWeek = 1;
        if (newWeek < 1) newWeek = totalWeeksInYear;

        setCurrentMonth(getMonthFromWeek(newWeek));
        
        return newWeek;
    });
    };

    return (
            <div className='row'>
                <div className='week-selector'> 
                    <button className='btn-left'  onClick={() => toggleWeek('prev')}></button>
                    <h3>{`Week ${currentWeek}`}</h3>
                    <button className='btn-right' onClick={() => toggleWeek('next')}></button>
                </div>
                <h4>{currentMonth}</h4>
            </div>
    )
}

export default WeekSelector;
