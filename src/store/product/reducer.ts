import {
  ProductAction,
  ProductActionType,
  ProductState,
  SetError,
  SetIsLoading,
  SetProduct,
} from './types';

const initialState: ProductState = {
  product: null,
  isLoading: false,
  error: null,
};

export const productReducer = (
  state: ProductState = initialState,
  action: ProductAction,
): ProductState => {
  switch (action.type) {
    case ProductActionType.SET_ERROR:
      return { ...state, error: (action as SetError).payload.error };
    case ProductActionType.SET_IS_LOADING:
      return {
        ...state,
        isLoading: (action as SetIsLoading).payload.isLoading,
      };
    case ProductActionType.SET_PRODUCT:
      return { ...state, product: (action as SetProduct).payload.product };
    case ProductActionType.CLEAR:
      return {
        ...state,
        error: null,
        product: null,
      };
    default:
      return state;
  }
};
