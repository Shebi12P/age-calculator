export const checkEmptyInput = (input) => {
    let isEmpty = false;
    const inputValue = input.value;
    
    if(inputValue === "") {
        isEmpty = true;
    }

    return isEmpty;
}