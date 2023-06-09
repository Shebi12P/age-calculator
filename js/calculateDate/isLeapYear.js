export const isLeapYear = (year) => {
    let isLeapYear = false;
    year = parseInt(year);
    
    //If a year is a date that starts a new century(1800, 1900, 2000 etc.) and is dividable by 400 then the year is a leap one
    if(year % 100 === 0 && year % 400 === 0) {
        isLeapYear = true;
    }

    //If a year is a date that doesn't start a new century(1800, 1900, 2000 etc.) and is dividable by 4 then the year is a leap one
    if(year % 100 !== 0 && year % 4 === 0) {
        isLeapYear = true;
    }

    return isLeapYear;
}