import * as yup from 'yup';

const CategoriesItemStructure = yup.object({
  id: yup.number().required(),
  title: yup.string().required('должно быть заполнено').max(200),
  description: yup.string().nullable(),
});

export interface CategoriesItem
  extends yup.Asserts<typeof CategoriesItemStructure> {}

export type CategoriesItemTypeKeys = keyof CategoriesItem;

export const CategoriesResponseSchema = yup.object({
  data: yup.array(CategoriesItemStructure).required(),
  current_page: yup.number().required(),
  last_page: yup.number().required(),
  per_page: yup.number().required(),
  total: yup.number().required(),
});

export interface CategoryResponseType
  extends yup.Asserts<typeof CategoriesResponseSchema> {}
