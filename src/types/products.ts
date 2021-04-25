import * as yup from 'yup';

export const ProductEntitySchema = yup.object({
  id: yup.number().required(),
  title: yup.string().defined(),
  description: yup.string().defined(),
  params: yup.string().defined(),
});

export interface ProductEntityType
  extends yup.Asserts<typeof ProductEntitySchema> {}

export const ProductsResponseSchema = yup.object({
  data: yup.array(ProductEntitySchema).required(),
  current_page: yup.number().required(),
  last_page: yup.number().required(),
  per_page: yup.number().required(),
  total: yup.number().required(),
});

export interface ProductsResponseType
  extends yup.Asserts<typeof ProductsResponseSchema> {}
