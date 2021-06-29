import { ProductAction, ProductActionType, ProductState } from './types';

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
      return { ...state, error: action.payload.error };
    case ProductActionType.SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };
    case ProductActionType.SET_PRODUCT:
      return { ...state, product: action.payload.product };
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
