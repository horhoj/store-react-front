import {
  ProductsAction,
  ProductsActionType,
  ProductsState,
  SetRequestConfigDiff,
  SetError,
  SetIsLoading,
  SetProducts,
} from './types';

const initialState: ProductsState = {
  isLoading: false,
  products: null,
  error: null,
  requestConfig: {
    page: 1,
    sort_asc: 1,
    search: '',
    per_page: 10,
    sort_field: 'title',
  },
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
    case ProductsActionType.SET_REQUEST_CONFIG_DIFF:
      return {
        ...state,
        requestConfig: {
          ...state.requestConfig,
          ...(action as SetRequestConfigDiff).payload.requestConfigDiff,
        },
      };
    default:
      return state;
  }
};
