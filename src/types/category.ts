import * as yup from 'yup';

const CategoryStructure = {
  id: yup.number().required(),
  title: yup.string().required('должно быть заполнено').max(200),
  description: yup.string().nullable(),
};

export const CategoryEntitySchema = yup.object(CategoryStructure);

export interface CategoryEntityType
  extends yup.Asserts<typeof CategoryEntitySchema> {}

export type CategoryEntityTypeKeys = keyof CategoryEntityType;

const overriddenFields: CategoryEntityTypeKeys[] = ['description'];

let CategoryResponseStructure = { ...CategoryStructure };

overriddenFields.forEach((item) => {
  CategoryResponseStructure = {
    ...CategoryResponseStructure,
    [item]: CategoryResponseStructure[item].defined(),
  };
});

export const CategoryResponseSchema = yup.object(CategoryResponseStructure);
