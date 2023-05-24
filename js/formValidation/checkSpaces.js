import { formFields } from "../variables/formFields.js";
import { changeFormGroupStyle } from "../utils/changeFormGroupStyle.js";
import { getLabelId } from "../utils/getLabelId.js";

export const checkSpaces = () => {
    let hasSpaces = false;

    Object.values(formFields).forEach((field) => {
        let labelId = getLabelId(field);
        let label = document.getElementById(labelId);

        if (field.value.search(" ") !== -1) hasSpaces = true;
        
        hasSpaces ?
            changeFormGroupStyle (label, field, {
                "labelStyle": "var(--clr-light-red)",
                "fieldStyle": "2px solid var(--clr-light-red)"
            }
        ) :
            changeFormGroupStyle (label, field, {
            "labelStyle": "var(--smokey-grey) ",
            "fieldStyle": "none"
            }
        )

        hasSpaces = false;
    })
}