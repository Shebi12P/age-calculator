import { getCurrentDate } from "./getCurrentDate.js";

export const getYearDifference = (year) => {
    const currentYear = getCurrentDate().getFullYear();
    const yearDifference = currentYear - year;
    
    return yearDifference;
}