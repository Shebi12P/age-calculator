import { checkForInvalidCharacters } from "./checkForInvalidCharacters.js";
import { formInputs } from "../variables/formInputs.js";

export const checkForInvalidMonth = () => {
    let isInvalidMonth = false;
    const { monthInput }  = formInputs;
    let monthNumber = monthInput.value;

    if(isNaN(monthNumber)) {
        isInvalidMonth = true;
    }

    if(checkForInvalidCharacters(monthNumber)) {
        isInvalidMonth = true;
    }

    monthNumber = parseInt(monthNumber);

    if(monthNumber < 1 || monthNumber > 12) {
        isInvalidMonth = true;
    }

    return isInvalidMonth;
}