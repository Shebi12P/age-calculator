export const changeFormGroupStyle = (label, field, {labelStyle, fieldStyle}) => {
    label.style.setProperty("color", `${labelStyle}`);
    field.style.setProperty("outline", `${fieldStyle}`);
}