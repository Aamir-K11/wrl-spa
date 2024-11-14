import { useCallback, useState, useRef, useEffect } from 'react';
import { calculateWeek, getMonthFromWeek, getWeeksInYear } from '../../util/calculateWeeksAndMonths';

interface WeekSelectorState {
  currentWeek: number;
  currentMonth: string;
}

const DEBOUNCE_DELAY = 300;

const useWeekSelector = () => {
    const [state, setState] = useState<WeekSelectorState>(() => ({
        currentWeek: calculateWeek(),
        currentMonth: getMonthFromWeek(calculateWeek())
    }));
    
    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const totalWeeksInYear = getWeeksInYear();

    
    useEffect(() => {
        return () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
        };
    }, []);

    const toggleWeek = useCallback((direction: 'next' | 'prev') => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }

        timerRef.current = setTimeout(() => {
            setState(prevState => {
                let newWeek = direction === 'next' 
                    ? prevState.currentWeek + 1 
                    : prevState.currentWeek - 1;
                
               
                if (newWeek > totalWeeksInYear) {
                    newWeek = 1;
                } else if (newWeek < 1) {
                    newWeek = totalWeeksInYear;
                }
                
                return {
                    currentWeek: newWeek,
                    currentMonth: getMonthFromWeek(newWeek)
                };
            });
        }, DEBOUNCE_DELAY);
    }, [totalWeeksInYear]);

    return { ...state, toggleWeek };
};

export default useWeekSelector;