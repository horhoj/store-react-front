import * as yup from 'yup';

export const ProductsEntitySchema = yup.object({
  id: yup.number().required(),
  title: yup.string().defined(),
  description: yup.string().defined(),
  params: yup.string().defined(),
});

export interface ProductsEntityType
  extends yup.Asserts<typeof ProductsEntitySchema> {}

export const ProductsResponseSchema = yup.object({
  data: yup.array(ProductsEntitySchema).required(),
  current_page: yup.number().required(),
  last_page: yup.number().required(),
  per_page: yup.number().required(),
  total: yup.number().required(),
});

export interface ProductsResponseType
  extends yup.Asserts<typeof ProductsResponseSchema> {}
