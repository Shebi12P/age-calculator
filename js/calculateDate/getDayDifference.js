export const getDayDifference = (day) => {
    const currentDay = new Date().getDate();
    
    const dayDifference = currentDay - day;

    return dayDifference;
}