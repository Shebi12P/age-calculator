import { daysInMonths } from "../variables/daysInMonths.js";
import { formInputs } from "../variables/formInputs.js";
import { isLeapYear } from "../calculateDate/isLeapYear.js";
import { changeErrorMessage } from "../utils/changeErrorMessage.js";
import { changeFormGroupStyle } from "../utils/changeFormGroupStyle.js";
import { getInputName } from "../utils/getinputName.js";

export const checkForInvalidDay = () => {
    let isInvalidDay = false;
    let errorMessage = "";
    
    const { dayInput, monthInput, yearInput } = formInputs;
    const dayInputName = getInputName(dayInput);
    const dayNumber = parseInt(dayInput.value);
    const monthNumber = parseInt(monthInput.value);
    const yearNumber = parseInt(yearInput.value);

    if (dayNumber < 1 || isNaN(monthNumber)) {
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

    if(isInvalidDay) errorMessage = "Must be a valid day";

    changeFormGroupStyle(dayInputName, isInvalidDay);
    changeErrorMessage(errorMessage, dayInputName, isInvalidDay);

    return isInvalidDay;
} 