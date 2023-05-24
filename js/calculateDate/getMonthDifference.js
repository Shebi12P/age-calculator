import { getCurrentDate } from "./getCurrentDate.js";

export const getMonthDifference = (month) => {
    const MONTHS_IN_YEAR = 12;
    const currentMonth = getCurrentDate().getMonth() + 1;
    
    const monthDifference = (currentMonth - month) % MONTHS_IN_YEAR;
    
    return monthDifference;
}