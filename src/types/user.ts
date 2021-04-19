import * as yup from 'yup';

export const UserResponseSchema = yup.object({
  id: yup.string().required(),
  name: yup.string().required(),
  email: yup.string().required(),
});

export interface UserEntityType
  extends yup.Asserts<typeof UserResponseSchema> {}
