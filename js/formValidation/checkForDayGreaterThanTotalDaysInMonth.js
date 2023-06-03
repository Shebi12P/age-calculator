import { formInputs } from "../variables/formInputs.js";
import { isLeapYear } from "../calculateDate/isLeapYear.js";
import { daysInMonths } from "../variables/daysInMonths.js";

export const checkForDayGreaterThanTotalDaysinMonth = () => {
    const FEBRUARY_INDEX = 1;
    let dayGreaterThanTotalDays = false;
    
    const { dayInput, monthInput, yearInput } = formInputs;
    const dayNumber = parseInt(dayInput.value);
    const monthNumber = parseInt(monthInput.value);
    const yearNumber = parseInt(yearInput.value);
    const monthIndex = monthNumber - 1;
    
    let totaldaysInMonth = daysInMonths[monthIndex];
    
    if(isLeapYear(yearNumber) && monthIndex === FEBRUARY_INDEX) {
        totaldaysInMonth = 29;
    }

    if(dayNumber > totaldaysInMonth) {
        dayGreaterThanTotalDays = true;
    }

    return dayGreaterThanTotalDays;
}