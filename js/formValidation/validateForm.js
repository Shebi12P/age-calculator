import { validateInput } from "./validateInput.js";
import { formFields } from "../variables/formFields.js";

export const validateForm = () => {
    let hasError = false;

    Object.values(formFields).forEach((field) => {
        if(validateInput(field) === true) {
            hasError = true;
        }
    })

    return hasError;
}