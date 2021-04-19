import * as yup from 'yup';

export const LoginFormValidationSchema = yup.object().shape({
  email: yup.string().required('Не заполнено').email('Не почта'),
  password: yup
    .string()
    .required('Не заполнено')
    .min(6, 'меньше 6')
    .max(30, 'больше 30'),
});
