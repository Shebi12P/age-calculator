export const getLabelId= (formField) => {
    const labelName = formField.id.slice(6);
    const labelId = `label-${labelName}`;

    return labelId;
}