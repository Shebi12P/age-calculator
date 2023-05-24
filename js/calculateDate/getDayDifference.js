import { getCurrentDate } from "./getCurrentDate.js";

export const getDayDifference = (day) => {
    const currentDay = getCurrentDate().getDate();
    
    const dayDifference = currentDay - day;

    return dayDifference;
}