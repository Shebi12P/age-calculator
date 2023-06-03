export const getMonthDifference = (month) => {
    const currentMonth = new Date().getMonth() + 1;
    
    const monthDifference = currentMonth - month;
    
    return monthDifference;
}