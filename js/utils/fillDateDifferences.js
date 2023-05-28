export const fillDateDifferences = (dateDifferences) => {
    const FIELD_IDS = ["day", "month", "year"];

    for(let i = 0; i < FIELD_IDS.length; i++) {
        let fieldId = FIELD_IDS[i];
        let dateDifference = dateDifferences[i]

        document.getElementById(`${fieldId}`).innerText = dateDifference;
    }
}