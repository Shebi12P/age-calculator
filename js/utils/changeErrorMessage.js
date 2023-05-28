export const changeErrorMessage = (errorMessage, inputName, hasError) => {
    const errorMessageField = document.getElementById(`error-${inputName}`);
    
    if (hasError) {
        errorMessageField.setAttribute("aria-hidden", "false");    
    }
    else {
        errorMessageField.setAttribute("aria-hidden", "true");
    }
    
    errorMessageField.innerText = errorMessage;
}