import * as yup from 'yup';

export const ProductEntitySchema = yup.object({
  id: yup.number().required(),
  title: yup.string().required('должно быть заполнено'),
  description: yup.string(),
  params: yup.string(),
});

export interface ProductEntityType
  extends yup.Asserts<typeof ProductEntitySchema> {}

export type ProductEntityTypeKeys = keyof ProductEntityType;

export const ProductsResponseSchema = yup.object({
  data: yup.array(ProductEntitySchema).required(),
  current_page: yup.number().required(),
  last_page: yup.number().required(),
  per_page: yup.number().required(),
  total: yup.number().required(),
});

export interface ProductsResponseType
  extends yup.Asserts<typeof ProductsResponseSchema> {}
