export const checkForInvalidCharacters = (input) => {
    let hasInvalidCharacters = false;
    const reqularExpression = /\W/;

    if(reqularExpression.test(input)) {
        hasInvalidCharacters = true;
    }

    return hasInvalidCharacters;
}