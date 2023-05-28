import { calculateDateDifference } from "./calculateDate/calculateDateDifference.js";
import { fillDateDifferences } from "./utils/fillDateDifferences.js";
import { validateForm } from "./formValidation/validateForm.js";

const cardButton = document.querySelector(".card-button");

cardButton.addEventListener("click", () => {
    
    if(validateForm() === true) {
        return;
    }
    
    const dateDifferences = calculateDateDifference();
    fillDateDifferences(dateDifferences);
});