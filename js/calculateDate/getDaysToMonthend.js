import { isLeapYear } from "./isLeapYear.js";
import { daysInMonths } from "../variables/daysInMonths.js";

export const getDaysToMonthEnd = (days, month, year) => {
    const FEBRUARY_INDEX = 1; 
    const monthIndex = month - 1;
    let totaldaysInMonth = daysInMonths[monthIndex];

    if(isLeapYear(year) && monthIndex === FEBRUARY_INDEX) {
        totaldaysInMonth = 29;
    }

    const daysToMonthEnd = totaldaysInMonth - days;

    return daysToMonthEnd;
}