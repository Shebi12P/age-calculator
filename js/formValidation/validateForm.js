import { checkEmptyInput } from "./checkEmptyInput.js";
import { checkForInvalidDay } from "./checkForInvalidDay.js";
import { checkForInvalidMonth } from "./checkForInvalidMonth.js";
import { checkForInvalidYear } from "./checkForInvalidYear.js";
import { checkForGreaterInptuDate } from "./checkForGreaterInptuDate.js";
import { formInputs } from "../variables/formInputs.js";
import { changeErrorMessage } from "../utils/changeErrorMessage.js";
import { changeFormGroupStyle } from "../utils/changeFormGroupStyle.js";
import { getInputName } from "../utils/getinputName.js";
import { checkForDayGreaterThanTotalDaysinMonth } from "./checkForDayGreaterThanTotalDaysInMonth.js";

export const validateForm = () => {
    const { dayInput, monthInput, yearInput } = formInputs;
    const dayInputName = getInputName(dayInput);
    const monthInputName = getInputName(monthInput);
    const yearInputName = getInputName(yearInput);
    
    let hasError = false;
    let errorMessage = "";

    const isInvalidDay = checkForInvalidDay();
    const isInvalidMonth = checkForInvalidMonth();
    const isInvalidYear = checkForInvalidYear();
    const inputDateIsGreater = checkForGreaterInptuDate();
    const inputDayIsGreaterThanTotalDaysInMonth = checkForDayGreaterThanTotalDaysinMonth();

    Object.values(formInputs).forEach((input) => {
        let isEmpty = checkEmptyInput(input);
        let inputName = getInputName(input);
        
        if(isEmpty){
            hasError = true;
            errorMessage = "This field is required";
        }
        else {
            errorMessage = "";
        }

        changeFormGroupStyle(inputName, isEmpty);
        changeErrorMessage(errorMessage, inputName, isEmpty);
    })

    
    if(isInvalidDay) {
        hasError = true;
        errorMessage = "Must be a valid day";

        changeFormGroupStyle(dayInputName, isInvalidDay);
        changeErrorMessage(errorMessage, dayInputName, isInvalidDay);
    } 
    
    if(isInvalidMonth){
        hasError = true;
        errorMessage = "Must be a valid month";

        changeFormGroupStyle(monthInputName, isInvalidMonth);
        changeErrorMessage(errorMessage, monthInputName, isInvalidMonth);
    } 
    
    if(isInvalidYear) {
        hasError = true;
        errorMessage = "Must be in the past";

        changeFormGroupStyle(yearInputName, isInvalidYear);
        changeErrorMessage(errorMessage, yearInputName, isInvalidYear);
    }

    if(inputDateIsGreater) {
        hasError = true;
        errorMessage = "Must be in the past";

        changeFormGroupStyle(dayInputName, inputDateIsGreater);
        changeFormGroupStyle(monthInputName, inputDateIsGreater);
        changeFormGroupStyle(yearInputName, inputDateIsGreater);
        changeErrorMessage(errorMessage, dayInputName, inputDateIsGreater);
    }

    if(inputDayIsGreaterThanTotalDaysInMonth) {
        hasError = true;
        errorMessage = "Must be a valid date";
        changeFormGroupStyle(dayInputName, inputDayIsGreaterThanTotalDaysInMonth);
        changeFormGroupStyle(monthInputName, inputDayIsGreaterThanTotalDaysInMonth);
        changeFormGroupStyle(yearInputName, inputDayIsGreaterThanTotalDaysInMonth);
        changeErrorMessage(errorMessage, dayInputName, inputDayIsGreaterThanTotalDaysInMonth);
    }

    return hasError;
}