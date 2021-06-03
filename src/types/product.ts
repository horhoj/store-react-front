import * as yup from 'yup';

const ProductAttachedCategoriesStructure = yup.object({
  id: yup.number().required(),
  title: yup.string().defined(),
  description: yup.string().defined(),
});

export interface ProductAttachedCategoriesType
  extends yup.Asserts<typeof ProductAttachedCategoriesStructure> {}

export type ProductAttachedCategoriesTypeKeys =
  keyof ProductAttachedCategoriesType;

const ProductWithoutRelationStructure = {
  id: yup.number().required(),
  title: yup.string().required('должно быть заполнено').max(200),
  description: yup.string().nullable(),
  options: yup.string().nullable(),
};

const ProductWithoutRelationSchema = yup.object(
  ProductWithoutRelationStructure,
);

export interface ProductWithoutRelationType
  extends yup.Asserts<typeof ProductWithoutRelationSchema> {}

export interface ProductRequestDataType extends ProductWithoutRelationType {
  categories: number[];
}

const ProductStructure = {
  ...ProductWithoutRelationStructure,
  categories: yup.array(ProductAttachedCategoriesStructure).defined(),
};

export const ProductEntitySchema = yup.object(ProductStructure);

export interface ProductEntityType
  extends yup.Asserts<typeof ProductEntitySchema> {}

export type ProductEntityTypeKeys = keyof ProductEntityType;

const overriddenFields: ProductEntityTypeKeys[] = ['description', 'options'];

let ProductResponseStructure = { ...ProductStructure };

overriddenFields.forEach((item) => {
  ProductResponseStructure = {
    ...ProductResponseStructure,
    [item]: ProductResponseStructure[item].defined(),
  };
});

export const ProductResponseSchema = yup.object(ProductResponseStructure);
