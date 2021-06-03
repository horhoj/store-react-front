import {
  ProductEntityType,
  ProductRequestDataType,
} from '../../../types/product';

export const productRequestDataTransform = (
  product: ProductEntityType,
): ProductRequestDataType => {
  return {
    ...product,
    categories: product.categories.map((item) => item.id),
  };
};
