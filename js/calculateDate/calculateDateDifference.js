import { getCurrentDate } from "./getCurrentDate.js";
import { getDayDifference } from "./getDayDifference.js";
import { getDaysToMonthEnd } from "./getDaysToMonthend.js";
import { getMonthDifference } from "./getMonthDifference.js";
import { getYearDifference } from "./getYearDifference.js";
import { formFields} from "../variables/formFields.js";


export const calculateDateDifference = () => {
    const { dayField, monthField, yearField } = formFields;
    
    const inputDay = dayField.value;
    const inputMonth = monthField.value;
    const inputYear = yearField.value;
    const currentDay = getCurrentDate().getDate();
    
    let yearDifference = getYearDifference(inputYear);
    let monthDifference = getMonthDifference(inputMonth);
    let dayDifference = getDayDifference(inputDay);


    if (monthDifference < 0) {
        yearDifference = yearDifference - 1;
        monthDifference = monthDifference + 12;
    }

    if (dayDifference < 0 && monthDifference > 0) {
        monthDifference = monthDifference - 1;
        dayDifference = getDaysToMonthEnd(inputMonth, inputDay) + currentDay;
    }

    if (dayDifference < 0 && monthDifference <= 0) {
        yearDifference = yearDifference - 1;
        dayDifference = getDaysToMonthEnd(inputMonth, inputDay) + currentDay;
    }

    return [dayDifference, monthDifference, yearDifference];
}