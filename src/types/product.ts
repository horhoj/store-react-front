import * as yup from 'yup';

const ProductStructure = {
  id: yup.number().required(),
  title: yup.string().required('должно быть заполнено').max(200),
  description: yup.string().nullable(),
  options: yup.string().nullable(),
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
