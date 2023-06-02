import { formInputs } from "../variables/formInputs.js";
import { checkForInvalidCharacters } from "./checkForInvalidCharacters.js";

export const checkForInvalidDay = () => {
    let isInvalidDay = false;
    
    const { dayInput, monthInput, yearInput } = formInputs;
    let dayNumber = dayInput.value;

    if (isNaN(dayNumber)) {
        isInvalidDay = true;
    }

    if(checkForInvalidCharacters(dayNumber)) {
        isInvalidDay = true;
    }

    const monthNumber = parseInt(monthInput.value);
    const yearNumber = parseInt(yearInput.value);
    dayNumber = parseInt(dayNumber);

    if(dayNumber < 1) {
        isInvalidDay = true;
    }

    // if(isLeapYear(yearNumber)) {
    //     const februaryIndex = 1;
        
    //     daysInMonths[februaryIndex] = 29;
    // }

    // const monthIndex = monthNumber - 1;
    // let totaldaysInMonth = daysInMonths[monthIndex];

    // if(dayNumber > totaldaysInMonth) {
    //     isInvalidDay = true;
    // }

    return isInvalidDay;
} 