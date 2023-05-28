import { isLeapYear } from "./isLeapYear.js";
import { daysInMonths } from "../variables/daysInMonths.js";

export const getDaysToMonthEnd = (days, month, year) => {
    const FEBRUARY_INDEX = 1;
    const monthIndex = month - 1;

    if(isLeapYear(year)) {
        daysInMonths[FEBRUARY_INDEX] = 29;
    }

    const totaldaysInMonth = daysInMonths[monthIndex];
    const daysToMonthEnd = totaldaysInMonth - days;

    return daysToMonthEnd;
}