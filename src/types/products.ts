import * as yup from 'yup';

const ProductsItemStructure = yup.object({
  id: yup.number().required(),
  title: yup.string().required(),
  description: yup.string().nullable().defined(),
  options: yup.string().nullable().defined(),
});

export interface ProductsItem
  extends yup.Asserts<typeof ProductsItemStructure> {}

export type ProductsItemTypeKeys = keyof ProductsItem;

export const ProductsResponseSchema = yup.object({
  data: yup.array(ProductsItemStructure).required(),
  current_page: yup.number().required(),
  last_page: yup.number().required(),
  per_page: yup.number().required(),
  total: yup.number().required(),
});

export interface ProductsResponseType
  extends yup.Asserts<typeof ProductsResponseSchema> {}
