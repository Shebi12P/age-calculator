export const getYearDifference = (year) => {
    const currentYear = new Date().getFullYear();
    const yearDifference = currentYear - year;
    
    return yearDifference;
}