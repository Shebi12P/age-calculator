import { checkEmptyInput } from "./checkEmptyInput.js";
import { changeErrorMessage } from "../utils/changeErrorMessage.js";
import { changeFormGroupStyle } from "../utils/changeFormGroupStyle.js"

export const validateInput = (input) => {
    let hasError = false;
    let errorMessage = "";
    const inputName = input.getAttribute("data-input-name");
    
    
    if(checkEmptyInput(input)) {
        errorMessage = "This field is required";
        hasError = true;
        changeErrorMessage(errorMessage, inputName, hasError);
    }

    if(!hasError) {
        errorMessage = "";
    }

    changeErrorMessage(errorMessage, inputName, hasError);
    changeFormGroupStyle(inputName, hasError);

    return hasError;
}