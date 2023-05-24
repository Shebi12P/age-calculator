import { formFields } from "../variables/formFields.js";
import { getLabelId } from "../utils/getLabelId.js";
import { changeFormGroupStyle } from "../utils/changeFormGroupStyle.js";

export const checkEmptyFields = () => { 
    Object.values(formFields).forEach((field) => {
        let labelId = getLabelId(field);
        let label = document.getElementById(labelId);

        field.value ?
            changeFormGroupStyle (label, field, {
                "labelStyle": "var(--smokey-grey)",
                "fieldStyle": "none"
                }
        ) :
            changeFormGroupStyle (label, field, {
                "labelStyle": "var(--clr-light-red)",
                "fieldStyle": "2px solid var(--clr-light-red)"
            }
        )
    })
}