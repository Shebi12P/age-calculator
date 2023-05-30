import { checkEmptyInput } from "./checkEmptyInput.js";
import { checkForInvalidDay } from "./checkForInvalidDay.js";
import { formInputs } from "../variables/formInputs.js";

export const validateForm = () => {
    let hasError = false;

    Object.values(formInputs).forEach((input) => {
        if(checkEmptyInput(input)){
            hasError = true;
        }
    })

    if(checkForInvalidDay()) hasError = true;

    return hasError;
}