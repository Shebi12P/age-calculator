const isLeapYear = (year) => {
    if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0) {
        return true;
    }

    return false;
}

const getCurrentDate = () => {
    const currentDate = new Date;

    return currentDate;
}

const getYearDifference = (year) => {
    const currentYear = getCurrentDate().getFullYear();
    const yearDifference = currentYear - year;
    
    return currentYear - year;
}

const getMonthDifference = (month) => {
    const MONTHS_IN_YEAR = 12;
    const currentMonth = getCurrentDate().getMonth() + 1;
    
    const monthDifference = (currentMonth - month) % MONTHS_IN_YEAR;
    
    return monthDifference;
}

const getDayDifference = (day) => {
    const currentDay = getCurrentDate().getDate();
    
    const dayDifference = currentDay - day;

    return dayDifference;
}

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

