import "./week-selector.css";

interface Props {
    currentWeek: number;
    currentMonth: string;
    toggleWeek:  (direction: 'next' | 'prev') => void
}

const WeekSelector = ({currentWeek, currentMonth, toggleWeek}: Props) => {

    return (
                <div className='row week-selector'> 
                    <div>
                        <button className='btn-left'  onClick={() => toggleWeek('prev')}></button>
                        <h3>{`Week ${currentWeek}`}</h3>
                        <button className='btn-right' onClick={() => toggleWeek('next')}></button>
                    </div>
                    <h4 className="month">{currentMonth}</h4>
                </div>
    )
}

export default WeekSelector;
