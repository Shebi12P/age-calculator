const currentDate = new Date;
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth() + 1;
const currentDay = currentDate.getDate();

let yearDifference = 0;
let monthDifference = 0;
let dayDifference = 0;

const isLeapYear = (year) => {
    if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0) {
        return true;
    }

    return false;
}

const getYearDifference = (year) => {
    return currentYear - year;
}

const getMonthDifference = (month) => {
    const MONTHS_IN_YEAR = 12;
    
    const monthDifference = (currentMonth - month) % MONTHS_IN_YEAR;
    
    return monthDifference;
}

const getDayDifference = (day) => {
    const dayDifference = currentDay - day;

    return dayDifference;
}

// const getDaysSinceYearStart = (year, month, days) => {
//     const daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
//     let daysSinceYearStart = 0;
    
//     if(isLeapYear(year)) {
//         daysInMonths[1] = 29;
//     }

//     for(let i = 0; i < month-1; i++) {
//         daysSinceYearStart += daysInMonths[i];
//     }

//     daysSinceYearStart += days;

//     return daysSinceYearStart;
    
// }

// const getDaysToYearEnd = (year, month, day) => {
//     let daysInYear = 365;
    
//     if(isLeapYear(year)) daysInYear += 1;

//     return daysInYear - getDaysSinceYearStart(year, month, day);
// }

const getDaysToMonthEnd = (month, days) => {
    const daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
    if(isLeapYear(year)) {
        daysInMonths[1] = 29;
    }

    const monthDays = daysInMonths[month - 1];
    const daysToMonthEnd = monthDays - days;

    return daysToMonthEnd;
}

const fillFields = (...dateDifferences) => {
    const FIELD_IDS = ["day", "month", "year"];

    for(let i = 0; i < FIELD_IDS.length; i++) {
        let fieldId= FIELD_IDS[i];
        document.getElementById(`${fieldId}`).innerText = dateDifferences[i];
    }
}

const calculateDate = () => {
    const inputDay = document.getElementById("input-day").value;
    const inputMonth = document.getElementById("input-month").value;
    const inputYear = document.getElementById("input-year").value;
    
    yearDifference = getYearDifference(inputYear);
    monthDifference = getMonthDifference(inputMonth, yearDifference);
    dayDifference = currentDay - inputDay;

    if (inputMonth > currentMonth) {
        yearDifference -= 1;
        monthDifference = 12 + monthDifference;
    }


    if (dayDifference < 0 && monthDifference >= 1) {
        console.log(dayDifference, monthDifference);
        monthDifference -= 1;
        dayDifference = getDaysToMonthEnd(inputMonth, inputDay) + currentDay;
    }

    if (dayDifference < 0 && monthDifference === 0) {
        yearDifference -= 1;
        dayDifference = getDaysToMonthEnd(inputMonth, inputDay) + currentDay;
    }

    console.log(dayDifference)
    // if (dayDifference > 29) {
    //     monthDifference += 1;
    //     dayDifference = 31 - dayDifference;
    // }
    
    //2022 04 25 start
    //2023 04 25 koniec
}

const cardButton = document.querySelector(".card-button");

cardButton.addEventListener("click", () => {
    calculateDate();
    fillFields(dayDifference, monthDifference, yearDifference);
});

