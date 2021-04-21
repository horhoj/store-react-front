import {
  ProductsAction,
  ProductsActionType,
  ProductsState,
  SetError,
  SetIsLoading,
  SetProducts,
} from './types';

const initialState: ProductsState = {
  isLoading: false,
  products: null,
  error: null,
};

export const productsReducer = (
  state: ProductsState = initialState,
  action: ProductsAction,
): ProductsState => {
  switch (action.type) {
    case ProductsActionType.SET_IS_LOADING:
      return {
        ...state,
        isLoading: (action as SetIsLoading).payload.isLoading,
      };
    case ProductsActionType.SET_PRODUCTS:
      return {
        ...state,
        products: (action as SetProducts).payload.products,
      };
    case ProductsActionType.SET_ERROR:
      return {
        ...state,
        error: (action as SetError).payload.error,
      };
    default:
      return state;
  }
};
