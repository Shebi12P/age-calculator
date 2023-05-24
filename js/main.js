import { getCurrentDate } from "./calculateDate/getCurrentDate.js";
import { getDayDifference } from "./calculateDate/getDayDifference.js";
import { getDaysToMonthEnd } from "./calculateDate/getDaysToMonthend.js";
import { getMonthDifference } from "./calculateDate/getMonthDifference.js";
import { getYearDifference } from "./calculateDate/getYearDifference.js";
import { formFields} from "./variables/formFields.js";
// import { calculateDate } from "./calculateDate/index.js";
import { checkEmptyFields } from "./formValidation/checkEmptyFields.js";
import { checkSpaces } from "./formValidation/checkSpaces.js";

const fillDateDifferences = (dateDifferences) => {
    const FIELD_IDS = ["day", "month", "year"];

    for(let i = 0; i < FIELD_IDS.length; i++) {
        let fieldId = FIELD_IDS[i];
        document.getElementById(`${fieldId}`).innerText = dateDifferences[i];
    }
}

let yearDifference = 0;
let monthDifference = 0;
let dayDifference = 0;

const calculateDate = () => {
    const {dayField, monthField, yearField} = formFields;
    
    const inputDay = dayField.value;
    const inputMonth = monthField.value;
    const inputYear = yearField.value;
    const currentDay = getCurrentDate().getDate();
    
    yearDifference = getYearDifference(inputYear);
    monthDifference = getMonthDifference(inputMonth);
    dayDifference = getDayDifference(inputDay);

    console.log(monthDifference);

    if (monthDifference < 0) {
        yearDifference = yearDifference - 1;
        monthDifference = monthDifference + 12;
        console.log("Moth")
    }

    if (dayDifference < 0 && monthDifference > 0) {
        monthDifference = monthDifference - 1;
        dayDifference = getDaysToMonthEnd(inputMonth, inputDay) + currentDay;
    }

    if (dayDifference < 0 && monthDifference <= 0) {
        yearDifference = yearDifference - 1;
        dayDifference = getDaysToMonthEnd(inputMonth, inputDay) + currentDay;
    }
    
    console.log(dayDifference, monthDifference, yearDifference);
}

const cardButton = document.querySelector(".card-button");

cardButton.addEventListener("click", () => {
    checkEmptyFields();
    checkSpaces();
    calculateDate();
    // const dateDifferences = calculateDate();
    // console.log(dateDifferences)
    // fillDateDifferences(dateDifferences);
});