import * as yup from 'yup';

const ProductStructure = {
  id: yup.number().required(),
  title: yup.string().required('должно быть заполнено'),
  description: yup.string().nullable(),
  options: yup.string().nullable(),
};

export const ProductEntitySchema = yup.object(ProductStructure);

export interface ProductEntityType
  extends yup.Asserts<typeof ProductEntitySchema> {}

export type ProductEntityTypeKeys = keyof ProductEntityType;

const overriddenFields: ProductEntityTypeKeys[] = ['description', 'options'];

let ProductResponseStructure = { ...ProductStructure };

overriddenFields.map((item) => {
  ProductResponseStructure = {
    ...ProductResponseStructure,
    [item]: ProductResponseStructure[item].defined(),
  };
});

export const ProductsResponseSchema = yup.object({
  data: yup.array(yup.object(ProductResponseStructure)).required(),
  current_page: yup.number().required(),
  last_page: yup.number().required(),
  per_page: yup.number().required(),
  total: yup.number().required(),
});

export interface ProductsResponseType
  extends yup.Asserts<typeof ProductsResponseSchema> {}
