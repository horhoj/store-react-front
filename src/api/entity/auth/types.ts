import * as yup from 'yup';

export const LoginResponseSchema = yup.object({
  token: yup.string().required(),
});

export interface LoginResponse
  extends yup.Asserts<typeof LoginResponseSchema> {}
