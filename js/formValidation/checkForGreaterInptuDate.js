import { formInputs } from "../variables/formInputs.js";
import { getCurrentDate } from "../calculateDate/getCurrentDate.js";

export const checkForGreaterInptuDate = () => {
    let inputDateIsGreater = false;
    const { dayInput, monthInput, yearInput } = formInputs;

    const dayNumber = dayInput.value;
    const monthNumber = monthInput.value;
    const yearNumber = yearInput.value;
    const inputDate = new Date(yearNumber, monthNumber-1, dayNumber).getTime();

    const currentDate = new Date().getTime();

    if(inputDate > currentDate) {
        inputDateIsGreater = true;
    }

    return inputDateIsGreater;
}