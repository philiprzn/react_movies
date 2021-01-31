import * as yup from "yup";

export const validationSchema = yup.object().shape({
    title: yup.string()
        .typeError('Должно быть строкой')
        .required('Обязательное поле'),
    description: yup.string()
        .typeError('Должно быть строкой')
        .required('Обязательное поле'),
    releaseDate: yup.number()
        .min(1, 'Value must be greater than 1925')
        .max(2021, 'Value must be less than 2021')
        .typeError('Должно быть числом')
        .required('Обязательное поле'),
});