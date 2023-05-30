import { changeErrorMessage } from "../utils/changeErrorMessage.js";
import { changeFormGroupStyle } from "../utils/changeFormGroupStyle.js";
import { getInputName } from "../utils/getinputName.js";

export const checkEmptyInput = (input) => {
    let isEmpty = false;
    const inputValue = input.value;
    const inputName = getInputName(input);
    let errorMessage = "";
    
    if(inputValue === "") {
        isEmpty = true;
        errorMessage = "This field is required";
    }

    changeFormGroupStyle(inputName, isEmpty);
    changeErrorMessage(errorMessage, inputName, isEmpty);

    return isEmpty;
}