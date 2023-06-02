import { formInputs } from "../variables/formInputs.js";
import { isLeapYear } from "../calculateDate/isLeapYear.js";
import { daysInMonths } from "../variables/daysInMonths.js";

export const checkForDayGreaterThanTotalDaysinMonth = () => {
    let dayGreaterThanTotalDays = false;
    
    const { dayInput, monthInput, yearInput } = formInputs;
    const dayNumber = dayInput.value;
    const monthNumber = monthInput.value;
    const yearNumber = yearInput.value;
    
    if(isLeapYear(yearNumber)) {
        const februaryIndex = 1;
        
        daysInMonths[februaryIndex] = 29;
    }

    const monthIndex = monthNumber - 1;
    let totaldaysInMonth = daysInMonths[monthIndex];

    if(dayNumber > totaldaysInMonth) {
        dayGreaterThanTotalDays = true;
    }

    return dayGreaterThanTotalDays;
}