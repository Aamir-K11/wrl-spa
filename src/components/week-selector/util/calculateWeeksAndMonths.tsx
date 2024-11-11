export function calculateWeek() {
    const today = new Date();
    today.setHours(0, 0, 0, 0); 
    
    const startOfYear = new Date(today.getFullYear(), 0, 1); 
    startOfYear.setHours(0, 0, 0, 0);

    const daysSinceStartOfYear = Math.floor((today.getTime() - startOfYear.getTime()) / (1000 * 60 * 60 * 24));
    const week = Math.floor(daysSinceStartOfYear / 7) + 1;

    return week;
};


export function getMonthFromWeek(week: number){
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const startOfYear = new Date(today.getFullYear(), 0, 1);
    const weekStartDate = new Date(startOfYear.setDate(startOfYear.getDate() + (week - 1) * 7)); 
    return weekStartDate.toLocaleString('default', { month: 'long' }); 
};

export function getWeeksInYear() {
    const year = new Date().getFullYear();
    
    const firstDay = new Date(year, 0, 1);
    const lastDay = new Date(year, 11, 31);
    
    const days = Math.floor((lastDay.getTime() - firstDay.getTime()) / (1000 * 60 * 60 * 24)) + 1;
    
    const weeks = Math.ceil((days + firstDay.getDay() + (7 - lastDay.getDay())) / 7);
    
    return weeks;
}