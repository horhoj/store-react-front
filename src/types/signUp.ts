import * as yup from 'yup';

export const SignUpFormValidationSchema = yup.object({
  name: yup
    .string()
    .matches(/^[ЁА-Яёа-яA-Za-z ]*$/, 'Имя должно содержать только буквы')
    .required('Не заполнено'),
  email: yup.string().required('Не заполнено').email('Не почта'),
  password: yup
    .string()
    .required('Не заполнено')
    .min(8, 'меньше 8')
    .max(30, 'больше 30'),
  password_confirmation: yup
    .string()
    .required('Не заполнено')
    .oneOf(
      [yup.ref('password'), null],
      'Пароль и подтверждение пароля должны совпадать ',
    ),
});

export interface SignUpData
  extends yup.Asserts<typeof SignUpFormValidationSchema> {}
