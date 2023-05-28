import { getCurrentDate } from "./getCurrentDate.js";
import { getDayDifference } from "./getDayDifference.js";
import { getDaysToMonthEnd } from "./getDaysToMonthend.js";
import { getMonthDifference } from "./getMonthDifference.js";
import { getYearDifference } from "./getYearDifference.js";
import { formInputs } from "../variables/formInputs.js";


export const calculateDateDifference = () => {
    const { dayInput, monthInput, yearInput } = formInputs;
    const MONTHS_IN_YEAR = 12;
    
    const dayInputValue = parseInt(dayInput.value);
    const monthInputValue = parseInt(monthInput.value);
    const yearInputValue = parseInt(yearInput.value);
    const currentDay = getCurrentDate().getDate();
    
    let yearDifference = getYearDifference(yearInputValue);
    let monthDifference = getMonthDifference(monthInputValue);
    let dayDifference = getDayDifference(dayInputValue);


    if (monthDifference < 0) {
        yearDifference = yearDifference - 1;
        monthDifference = monthDifference + MONTHS_IN_YEAR;
    }

    if (dayDifference < 0 && monthDifference > 0) {
        monthDifference = monthDifference - 1;
        dayDifference = getDaysToMonthEnd(dayInputValue, monthInputValue, yearInputValue) + currentDay;
    }

    if (dayDifference < 0 && monthDifference <= 0) {
        yearDifference = yearDifference - 1;
        dayDifference = getDaysToMonthEnd(monthInputValue, dayInputValue) + currentDay;
    }

    //If it's a date that only exists in a leap year then the day difference is 1 day bigger
    if (dayInput === 29 && monthInputValue === 2) {

        dayDifference = dayDifference + 1;
    }

    return [dayDifference, monthDifference, yearDifference];
}