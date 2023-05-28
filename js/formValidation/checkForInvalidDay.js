import { daysInMonths } from "../variables/daysInMonths.js";
import { isLeapYear } from "../calculateDate/isLeapYear.js";

export const checkForInvalidDay = (dayInput, monthInput, yearInput) => {
    let isInvalidDay = false;
    
    const dayNumber = parseInt(dayInput.value);
    const monthNumber = parseInt(monthInput.value);
    const yearNumber = parseInt(yearInput.value);

    if (dayNumber < 1) {
        isInvalidDay = true;
    }

    if(isLeapYear(yearNumber)) {
        const februaryIndex = 1;
        
        daysInMonths[februaryIndex] = 29;
    }

    const monthIndex = monthNumber - 1;
    let totaldaysInMonth = daysInMonths[monthIndex];
    

    if(dayNumber > totaldaysInMonth) {
        isInvalidDay = true;
    }

    console.log(isValidDay);
    return isInvalidDay;
} 