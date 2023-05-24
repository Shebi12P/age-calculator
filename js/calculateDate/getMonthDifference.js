import { getCurrentDate } from "./getCurrentDate.js";

export const getMonthDifference = (month) => {
    const currentMonth = getCurrentDate().getMonth() + 1;
    
    const monthDifference = currentMonth - month;
    
    return monthDifference;
}