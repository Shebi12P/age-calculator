import { isLeapYear } from "./isLeapYear.js";

export const getDaysToMonthEnd = (month, days) => {
    const daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
    if(isLeapYear(year)) {
        daysInMonths[1] = 29;
    }

    const monthDays = daysInMonths[month - 1];
    const daysToMonthEnd = monthDays - days;

    return daysToMonthEnd;
}