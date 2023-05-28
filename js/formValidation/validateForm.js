import { formInputs } from "../variables/formInputs.js";
import { checkEmptyInput } from "./checkEmptyInput.js";
import { changeErrorMessage } from "../utils/changeErrorMessage.js";
import { changeFormGroupStyle } from "../utils/changeFormGroupStyle.js";

export const validateForm = () => {
    let hasError = false;
    let errorMessage = "";

    Object.values(formInputs).forEach((input) => {
        let inputName = input.getAttribute("data-input-name");
        let inputHasError = false;
        
        if(checkEmptyInput(input) === true){
            errorMessage = "This field is required";
            hasError = true;
            inputHasError = true;
            changeFormGroupStyle(inputName, inputHasError);
            changeErrorMessage(errorMessage, inputName, inputHasError);
        }
        else {
            errorMessage = "";
            inputHasError = false;
            changeFormGroupStyle(inputName, inputHasError);
            changeErrorMessage(errorMessage, inputName, inputHasError);
        }
    })



    return hasError;
}