import * as yup from "yup";

export const validationSchema = yup.object().shape({
    title: yup.string()
        .typeError('Must be a string')
        .required('Required field'),
    description: yup.string()
        .typeError('Must be a string')
        .required('Required field'),
    releaseDate: yup.number()
        .min(1, 'Value must be greater than 1925')
        .max(2021, 'Value must be less than 2021')
        .typeError('Must be a number')
        .required('Required field'),
});