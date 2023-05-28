import { getCurrentDate } from "./getCurrentDate.js";
import { getDayDifference } from "./getDayDifference.js";
import { getDaysToMonthEnd } from "./getDaysToMonthend.js";
import { getMonthDifference } from "./getMonthDifference.js";
import { getYearDifference } from "./getYearDifference.js";
import { formFields} from "../variables/formFields.js";
// import { isLeapYear } from "./isLeapYear.js";


export const calculateDateDifference = () => {
    const { dayField, monthField, yearField } = formFields;
    const MONTHS_IN_YEAR = 12;
    
    const inputDay = parseInt(dayField.value);
    const inputMonth = parseInt(monthField.value);
    const inputYear = parseInt(yearField.value);
    const currentDay = getCurrentDate().getDate();
    
    let yearDifference = getYearDifference(inputYear);
    let monthDifference = getMonthDifference(inputMonth);
    let dayDifference = getDayDifference(inputDay);


    if (monthDifference < 0) {
        yearDifference = yearDifference - 1;
        monthDifference = monthDifference + MONTHS_IN_YEAR;
    }

    if (dayDifference < 0 && monthDifference > 0) {
        monthDifference = monthDifference - 1;
        dayDifference = getDaysToMonthEnd(inputDay, inputMonth, inputYear) + currentDay;
    }

    if (dayDifference < 0 && monthDifference <= 0) {
        yearDifference = yearDifference - 1;
        dayDifference = getDaysToMonthEnd(inputMonth, inputDay) + currentDay;
    }

    //If it's a date that only exists in a leap year then the day difference is 1 day bigger
    if (inputDay === 29 && inputMonth === 2) {

        dayDifference = dayDifference + 1;
    }

    return [dayDifference, monthDifference, yearDifference];
}