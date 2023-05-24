import { getCurrentDate } from "./js/calculateDate/getCurrentDate.js";
import { getDayDifference } from "./js/calculateDate/getDayDifference.js";
import { getDaysToMonthEnd } from "./js/calculateDate/getDaysToMonthend.js";
import { getMonthDifference } from "./js/calculateDate/getMonthDifference.js";
import { getYearDifference } from "./js/calculateDate/getYearDifference.js";


let yearDifference = 0;
let monthDifference = 0;
let dayDifference = 0;

const fillFields = (...dateDifferences) => {
    const FIELD_IDS = ["day", "month", "year"];

    for(let i = 0; i < FIELD_IDS.length; i++) {
        let fieldId = FIELD_IDS[i];
        document.getElementById(`${fieldId}`).innerText = dateDifferences[i];
    }
}

const calculateDate = () => {
    const inputDay = document.getElementById("input-day").value;
    const inputMonth = document.getElementById("input-month").value;
    const inputYear = document.getElementById("input-year").value;
    const currentDay = getCurrentDate().getDate();
    
    yearDifference = getYearDifference(inputYear);
    monthDifference = getMonthDifference(inputMonth);
    dayDifference = getDayDifference(inputDay);

    if (monthDifference < 0) {
        yearDifference = yearDifference - 1;
        monthDifference = monthDifference + 12;
    }

    if (dayDifference < 0) {
        monthDifference -= 1;
        dayDifference = getDaysToMonthEnd(inputMonth, inputDay) + currentDay;
    }    
}

const cardButton = document.querySelector(".card-button");

cardButton.addEventListener("click", () => {
    calculateDate();
    fillFields(dayDifference, monthDifference, yearDifference);
});