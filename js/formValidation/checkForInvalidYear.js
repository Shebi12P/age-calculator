import { getInputName } from "../utils/getinputName.js";
import { checkForInvalidCharacters } from "./checkForInvalidCharacters.js";
import { formInputs } from "../variables/formInputs.js";

export const checkForInvalidYear = () => {
    let isInvalidYear = false;
    
    const { yearInput }  = formInputs;
    const yearInputName = getInputName(yearInput);
    let yearNumber = yearInput.value;

    if(isNaN(yearNumber)) {
        isInvalidYear = true;
    }
    
    if(checkForInvalidCharacters(yearNumber)) {
        isInvalidYear = true;
    }

    const currentYear = new Date().getFullYear();

    if(yearNumber < 1 || yearNumber > currentYear) {
        isInvalidYear = true;
    }

    return isInvalidYear;
}