export const changeFormGroupStyle = (inputName, hasError) => {
    const formGroup = document.getElementById(`${inputName}-group`);

    if(hasError) {
        formGroup.setAttribute("data-valid-data", "false");
    }
    else {
        formGroup.setAttribute("data-valid-data", "true");
    }
}