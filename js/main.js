import { calculateDate } from "./calculateDate/index.js";
import { fillDateDifferences } from "./utils/fillDateDifferences.js";
import { checkEmptyFields } from "./formValidation/checkEmptyFields.js";
import { checkSpaces } from "./formValidation/checkSpaces.js";

const cardButton = document.querySelector(".card-button");

cardButton.addEventListener("click", () => {
    checkEmptyFields();
    checkSpaces();
    const dateDifferences = calculateDate();
    fillDateDifferences(dateDifferences);
});